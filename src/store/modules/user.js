import { queryUserModuleTree } from '@/api/common'
import { orgCertificationInfoQueryDetails } from '@/api/company/companyCertification.js'
import { teamUserInfoMultiTeamInfo, userCurrentTeamChange, userCurrentTeamQueryInfo } from '@/api/company/teamManager.js'
import { userQueryInfo } from '@/api/user'
import { userHabitsQuery } from '@/api/user/index.js'
import { slideList } from '@/utils/slider.js'
const user = {
  state: {
    userInfo: JSON.parse(sessionStorage.getItem('vuex'))?.userInfo || {},
    teamInfo: JSON.parse(sessionStorage.getItem('vuex'))?.teamInfo || {},
    treeInfo: JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo || {}, //用户侧边树列表
    btnList: JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo?.buttonSet || [], //用户按钮权限列表
    userHabitsList: JSON.parse(sessionStorage.getItem('vuex'))?.userHabitsList || [], //用户习惯列表
    teamUserInfo: JSON.parse(sessionStorage.getItem('vuex'))?.teamUserInfo || {}, //团队用户信息
    RongIMClient: null //融云初始化
  },
  getters: {
    //获取用户信息
    userInfoObj: (state) => (data) => {
      return state.userInfo
    },
    //获取当前团队信息
    teamInfoObj: (state) => (data) => {
      return state.teamInfo
    },
    //融云
    RongIMClient(state) {
      return state.RongIMClient
    },
    RongFlag(state) {
      return state.RongFlag
    },
    //获取按钮权限信息
    btnPermissionList: (state) => (data) => {
      return state.btnList
    }
  },
  mutations: {
    //修改用户信息
    SET_USERINFO: (state, data) => {
      state.userInfo = data
    },
    //更新团队信息
    SET_TEAMINFO: (state, data) => {
      localStorage.setItem('teamInfo', JSON.stringify(data))
      state.teamInfo = data
    },
    //更新用户团队信息
    SET_TEAMUSERINFO: (state, data) => {
      state.teamUserInfo = data
    },
    //设置融云
    SET_RONGIMCLIENT: (state, data) => {
      state.RongIMClient = data
    },
    //设置融云是否创建
    SET_RONGFLAG: (state, data) => {
      state.RongFlag = data
    },
    //存储左边栏树
    SAVE_TREE: (state, data) => {
      state.treeInfo = data
    },
    //存储用户偏好列表
    SAVE_HABITSLIST: (state, data) => {
      state.userHabitsList = data
    }
  },
  actions: {
    //获取用户信息
    queryUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        userQueryInfo()
          .then((res) => {
            // console.log(res)
            if (res.code === 200) {
              commit('SET_USERINFO', res.data)
              resolve(res.data)
            } else {
              reject()
            }
          })
          .catch((err) => {
            console.log(err)
            reject()
          })
      })
    },
    //获取用户习惯列表
    getUserHabitsList({ commit }, type) {
      return new Promise((resolve, reject) => {
        console.log(type)
        userHabitsQuery(type)
          .then((res) => {
            if (res.code === 200) {
              commit('SAVE_HABITSLIST', res.data)
              resolve(res.data)
            } else {
              reject()
            }
          })
          .catch((err) => {
            console.log(err)
            reject()
          })
      })
    },
    //获取当前团队信息
    getTeamInfo({ commit }) {
      return new Promise((resolve, reject) => {
        userCurrentTeamQueryInfo()
          .then((res) => {
            if (res.code === 200) {
              commit('SET_TEAMINFO', res.data?.teamInfo)
              commit('SET_TEAMUSERINFO', res.data?.teamUserInfo)
              resolve(res.data?.teamInfo)
            } else {
              reject(res)
            }
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    //获取左边栏树
    getTreeList({ commit }) {
      return new Promise((resolve, reject) => {
        queryUserModuleTree()
          .then((res) => {
            if (res.code === 200) {
              let treeList = {
                buttonSet: res.data?.buttonSet,
                moduleTree: res.data?.moduleTree
              }
              //递归处理采购公司数据为销售公司数据
              const dealMarketCompanyList = (data) => {
                let list = []
                for (let j = 0; j < data.length; j++) {
                  if (data[j].path !== '/company/functionalConfiguration') {
                    if (data[j].path !== '/market/identity') {
                      data[j].path = '/market' + data[j].path
                      data[j].name = 'market-' + data[j].name
                    }
                    if (data[j].child && data[j].child.length > 0) {
                      data[j].child = dealMarketCompanyList(data[j].child)
                    }
                    list.push(data[j])
                  }
                }
                return list
              }
              //递归处理采购公司数据
              const dealPurchaseCompanyList = (data) => {
                let list = []
                for (let j = 0; j < data.length; j++) {
                  if (data[j].path !== '/market/identity') {
                    if (data[j].child && data[j].child.length > 0) {
                      data[j].child = dealPurchaseCompanyList(data[j].child)
                    }
                    list.push(data[j])
                  }
                }
                return list
              }
              if (res.data.buttonSet.some((ele) => ele === 'XS' || ele === 'CG')) {
                console.log(res.data)
                //剔除公司的列表
                let otherList = JSON.parse(JSON.stringify(res.data.moduleTree)).filter((ele) => ele.path !== '/company')
                //采购公司的列表
                let companyList = dealPurchaseCompanyList(JSON.parse(JSON.stringify(res.data.moduleTree)).filter((ele) => ele.path === '/company')[0].child)
                //销售公司的列表
                let marketCompanyList = dealMarketCompanyList(JSON.parse(JSON.stringify(res.data.moduleTree)).filter((ele) => ele.path === '/company')[0].child)
                //将公司列表放到采购和销售中
                if (otherList.length > 1) {
                  otherList.forEach((ele) => {
                    if (ele.path === '/purchase') {
                      if (ele.child && ele.child.length > 0) {
                        ele.child = ele.child.concat(companyList)
                      } else {
                        ele.child = companyList
                      }
                    } else {
                      if (ele.child && ele.child.length > 0) {
                        ele.child = ele.child.concat(marketCompanyList)
                      } else {
                        ele.child = marketCompanyList
                      }
                    }
                  })
                } else {
                  if (otherList[0].path === '/purchase') {
                    if (otherList[0].child && otherList[0].child.length > 0) {
                      otherList[0].child = otherList[0].child.concat(companyList)
                    } else {
                      otherList[0].child = companyList
                    }
                  } else {
                    if (otherList[0].child && otherList[0].child.length > 0) {
                      otherList[0].child = otherList[0].child.concat(marketCompanyList)
                    } else {
                      otherList[0].child = marketCompanyList
                    }
                  }
                }
                console.log(otherList)
                treeList.moduleTree = JSON.parse(JSON.stringify(otherList))
              } else {
                treeList.moduleTree = JSON.parse(JSON.stringify(res.data.moduleTree))
              }
              treeList.moduleTree = slideList
              console.log(treeList)
              commit('SAVE_TREE', treeList)
              resolve(treeList)
            } else {
              reject()
            }
          })
          .catch(() => {
            reject()
          })
      })
    },
    //获取所有团队
    async getAllTeam({ commit }) {
      try {
        let res = await teamUserInfoMultiTeamInfo()
        let path = 'company/organizationalStructure'
        if (res.code === 200) {
          if (res.data.length > 0) {
            // changeTeam(res.data[0]?.id, '', res.data[0]?.rootOrgId)
            let id = res.data[0]?.id
            let rootOrgId = res.data[0]?.rootOrgId
            if (rootOrgId) {
              try {
                let resInfo = await orgCertificationInfoQueryDetails(rootOrgId)
                if (resInfo.code === 200) {
                  if (resInfo.data.status === 'SUCCESS') {
                    path = 'company/companyCertification'
                  } else {
                    path = 'company/companyCertification'
                  }
                  try {
                    let res = await userCurrentTeamChange(id)
                    if (res.code === 200) {
                      window.location.href = import.meta.env.VITE_VUE_APP_URL
                    } else {
                      ElMessage.warning(res.message)
                    }
                  } catch (error) {}
                } else {
                  ElMessage.warning(resInfo.message)
                }
              } catch (error) {}
            } else {
              try {
                let res = await userCurrentTeamChange(id)
                if (res.code === 200) {
                  window.location.href = import.meta.env.VITE_VUE_APP_URL
                } else {
                  ElMessage.warning(res.message)
                }
              } catch (error) {}
            }
          } else {
            window.location.href = import.meta.env.VITE_VUE_APP_URL
          }
        } else {
          ElMessage.warning(res.message)
        }
      } catch (error) {}
    },
    toMall({ state, commit }, data) {
      if (!localStorage.getItem('token')) {
        return
      }
      if (data?.ycc?.token) {
        data.ycc.token = data.ycc.token + Math.round(Math.random() * 100 + 100)
      }
      const url = `${import.meta.env.VITE_VUE_APP_MALL_ENV}${data.path ? data.path : ''}?${data.backParams ? data.backParams + '&' : ''}ycc=${
        data.ycc ? encodeURIComponent(JSON.stringify(data.ycc)) : ''
      }`
      console.log('🚀 ~ file: user.js ~ line 279 ~ toMall ~ url', url)
      window.open(url)
    }
  }
}
export default user
