<!-- joinCompanyInvite -->
<template>
  <div class="joinCompanyInvite" v-loading="loading">
    <HeaderTabs :headerTitle="'加入公司邀请'"></HeaderTabs>
    <companyCard v-if="cardList.length > 0" :cardList="cardList" :statusList="statusList" />
    <el-empty v-if="!cardList.length > 0"></el-empty>
  </div>
</template>

<script>
import { toRefs, reactive, onMounted, computed } from 'vue'
import companyCard from '../components/companyCard.vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { getInviteListData, teamInviteReject, inviteAgree } from '@/api/company/teamManager.js'
import { useStore } from 'vuex'

export default {
  name: 'joinCompanyInvite',
  components: {
    companyCard
  },
  setup() {
    let store = useStore()
    let state = reactive({
      page: { current: 1, size: 10 },
      pageTotal: 0,
      cardList: [],
      statusList: [
        {
          label: '待确认',
          value: 0,
          class: 'pending'
        },
        {
          value: 1,
          class: 'agreed',
          label: '已同意'
        },
        {
          value: 2,
          class: 'refused',
          label: '已拒绝'
        },
        {
          value: 3,
          class: 'expired',
          label: '已过期'
        }
      ],
      loading: false
    })

    const open = (tipText, flag, record) => {
      console.log(record)
      ElMessageBox.confirm(tipText, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          if (flag == 1) {
            console.log(1211)
            //  拒绝
            teamInviteReject(record.id).then((res) => {
              if (res.code === 200) {
                ElMessage({
                  type: 'success',
                  message: '拒绝成功'
                })
                fetchData()
              } else {
                ElMessage.warning(res.message)
              }
            })
          } else {
            //  同意
            inviteAgree(record.id).then((res) => {
              if (res.code === 200) {
                ElMessage({
                  type: 'success',
                  message: '同意成功'
                })
                fetchData()
                store.commit('SAVE_TREE', {})
                // 同意邀请加入
                store.dispatch('getTeamInfo').then(() => {
                  //获取树列表
                  store.dispatch('getTreeList').then((resInfo) => {
                    ElMessage.success('加入成功')
                    if (JSON.parse(JSON.stringify(resInfo.buttonSet)).some((ele) => ele === 'XS' || ele === 'CG')) {
                      store
                        .dispatch('getUserHabitsList', `business,${JSON.parse(sessionStorage.getItem('vuex')).teamInfo.id}`)
                        .then((res) => {
                          let path = ''
                          if (res[0]?.content?.companyType == 'market' && JSON.parse(JSON.stringify(resInfo.buttonSet)).some((ele) => ele === 'XS')) {
                            path = 'market/dashboard'
                          } else if (res[0]?.content?.companyType == 'purchase' && JSON.parse(JSON.stringify(resInfo.buttonSet)).some((ele) => ele === 'CG')) {
                            path = 'purchase/dashboard'
                          } else {
                            if (JSON.parse(JSON.stringify(resInfo.buttonSet)).some((ele) => ele === 'CG')) {
                              path = 'purchase/dashboard'
                            } else {
                              path = 'market/dashboard'
                            }
                          }
                          window.location.href = import.meta.env.VITE_VUE_APP_URL + path
                        })
                        .catch(() => {
                          let path = ''
                          if (JSON.parse(JSON.stringify(resInfo.buttonSet)).some((ele) => ele === 'CG')) {
                            path = 'purchase/dashboard'
                          } else {
                            path = 'market/dashboard'
                          }
                          window.location.href = import.meta.env.VITE_VUE_APP_URL + path
                        })
                    } else {
                      window.location.href = import.meta.env.VITE_VUE_APP_URL + 'company/companyCertification'
                    }
                  })
                })
              } else {
                ElMessage.warning(res.message)
              }
            })
          }
        })
        .catch(() => {})
    }

    //  判断是否过期
    const isExpired = (val) => {
      // 当前时间
      let currentTime = new Date().valueOf()
      // 过期时间
      let expiredTime = new Date(val.expirationTime.replace(/-/g, '/')).valueOf()
      // console.log(expiredTime - currentTime)
      if (expiredTime - currentTime >= 0) {
        // 没过期
        return false
      } else {
        // 过期了
        return true
      }
    }

    // 获取 list 数据
    const fetchData = async () => {
      state.loading = true
      await getInviteListData({})
        .then((res) => {
          //   console.log(res)

          if (res.code == 200) {
            let temp = []
            //  res.data = [
            //    {
            //      companyInfoVO: {
            //        name: '公司名称'
            //      },
            //      applyDepartment: '研发部 1',
            //      joinResult: '0', // 待确定
            //      updateTime: '2022-02-22  10:09',
            //      operatorName: '王晓晓'
            //    },
            //    {
            //      companyInfoVO: {
            //        name: '公司名称'
            //      },
            //      applyDepartment: '研发部 2',
            //      joinResult: '1', // 已同意
            //      updateTime: '2022-02-22  10:09',
            //      operatorName: '王晓晓'
            //    },
            //    {
            //      companyInfoVO: {
            //        name: '公司名称'
            //      },
            //      applyDepartment: '研发部 2',
            //      joinResult: '2', // 已拒绝
            //      updateTime: '2022-02-22  10:09',
            //      operatorName: '王晓晓'
            //    },
            //    {
            //      companyInfoVO: {
            //        name: '公司名称'
            //      },
            //      applyDepartment: '研发部 2',
            //      joinResult: '3', // 已过期
            //      updateTime: '2022-02-22  10:09',
            //      operatorName: '王晓晓'
            //    }
            //  ]
            res.data.records.forEach((item, i) => {
              if (item.joinResult == 0) {
                if (isExpired(item)) {
                  //  过期了
                  item.joinResult = 3
                }
              }
              if (item.joinResult == 0) {
                item.btnList = [
                  {
                    label: '拒绝',
                    class: '',
                    click: () => open('是否确定拒绝加入?', 1, item)
                  },
                  {
                    label: '同意',
                    type: 'primary',
                    class: '',
                    click: () => open('是否确定加入该公司/团队?', 0, item)
                  }
                ]
              }

              temp.push({
                status: item.joinResult,
                title: item.teamInfo?.teamName,
                description: `邀请您加入<span style="color:#1664FF">【${item.orgNames || '-'}】</span>`,
                statement: `<span style="color: #B5B5BD;">邀请时间： <span style="color:#1664FF"> ${item.createTime}</span></span>`,
                inviteTime: item.createTime,
                btnList: item.btnList || []
              })
            })
            state.cardList = temp
          } else {
            ElMessage.warning(res.message)
          }
          state.loading = false
        })
        .catch(() => {
          state.loading = false
        })

      // state.cardList =
      // nextTick(() => {
      //   tableRef.value.clearSelection() //清空选中
      // })
      // const res = await userQueryPage({
      //   jobStatus: chooseManStatus.value,
      //   recursion: recursion.value,
      //   orgId: classifyId.value || '',
      //   orgScope: false,
      //   ...page.value
      // })
      // if (res.code === 200) {
      //   console.log(res)
      //   tableData.value = res.data.records
      //   pageTotal.value = res.data.total
      // } else {
      //   ElMessage.error(res.message)
      // }
    }

    onMounted(() => {
      fetchData()
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.joinCompanyInvite {
  :deep(.el-loading-mask) {
    min-height: calc(100vh - 120px);
  }
  .el-empty {
    margin-top: 90px;
  }
}
</style>
