import axios from 'axios'
import router from '@/permission.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import store from '@/store'

const baseURL = import.meta.env.VITE_VUE_APP_ENV
console.log(baseURL)
// 创建axios实例
const service = axios.create({
  baseURL: baseURL, // api 的 base_url
  timeout: 15000 // 请求超时时间
})

// request拦截器 request interceptor
service.interceptors.request.use(
  (config) => {
    // if (!JSON.parse(sessionStorage.getItem('vuex'))?.teamInfo) {
    //   return
    // }
    let token = localStorage.getItem('token') || ''
    let teamInfoId = JSON.parse(sessionStorage.getItem('vuex'))?.teamInfo?.id || ''
    let rootOrgId = JSON.parse(sessionStorage.getItem('vuex'))?.teamInfo?.rootOrgId || ''
    config.headers['Access_Token'] = token ? token : ''
    config.headers.post['Content-Type'] = 'application/json'
    config.headers['Platform'] = 'WEB' // 请求头确认当前平台
    config.headers['userId'] = localStorage.getItem('userId') || ''
    config.headers['companyId'] = rootOrgId || ''
    //  config.headers['Timestamp'] = new Date().getTime() // 请求头确认当前平台
    config.headers['teamId'] = teamInfoId || ''
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.status && res.status !== 200) {
      return Promise.reject(res)
    } else {
      return Promise.resolve(res)
    }
  },
  (error) => {
    switch (error.response?.status) {
      case 500:
        if (error.response.data.code === 401) {
          if (localStorage.getItem('token')) {
            ElMessage.error('登录超时请重新登录!')
          }
          store.commit('SET_USERINFO', {})
          store.commit('set_systemDictInfo', {})
          store.commit('set_dictTreeInfo', {})
          store.commit('SAVE_TREE', {})
          store.commit('SET_TEAMINFO', {})
          store.commit('SET_TEAMUSERINFO', {})
          store.commit('SAVE_HABITSLIST', [])
          window.localStorage.clear()
          window.sessionStorage.clear()
          location.href = import.meta.env.VITE_VUE_APP_URL + 'login'
        } else if (error.response.data.code === 600) {
          return Promise.reject(error.response.data)
        } else if (error.response.data.code === 603) {
          if (localStorage.getItem('token')) {
            ElMessage.error('当前账号密码已变更，请重新登录!')
          }
          store.commit('SET_USERINFO', {})
          store.commit('set_systemDictInfo', {})
          store.commit('set_dictTreeInfo', {})
          store.commit('SAVE_TREE', {})
          store.commit('SET_TEAMINFO', {})
          store.commit('SET_TEAMUSERINFO', {})
          store.commit('SAVE_HABITSLIST', [])
          window.localStorage.clear()
          window.sessionStorage.clear()
          location.href = import.meta.env.VITE_VUE_APP_URL + 'login'
        } else if (error.response.data.code === 605) {
          store.commit('SET_TEAMINFO', {})
          store.commit('SET_TEAMUSERINFO', {})
          store.dispatch('getAllTeam')
        } else if (error.response.data.code === 10102) {
          return Promise.reject(error.response.data)
        } else if (error.response.data.code === 10101 || error.response.data.code === 10104) {
          ElMessageBox.confirm('<p>是否前往企业认证。</p>', '提示', {
            dangerouslyUseHTMLString: true,
            confirmButtonText: '前往认证'
          })
            .then(() => {
              if (JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo?.buttonSet.some((x) => x == 'CG')) {
                router.push({ path: '/company/companyCertification' })
              } else if (JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo?.buttonSet.some((x) => x == 'XS')) {
                router.push({ path: '/market/company/companyCertification' })
              } else {
                router.push({ path: '/company/companyCertification' })
              }
            })
            .catch(() => {})
          return Promise.reject(error.response.data)
        } else {
          if (error.response.data.message == '未知异常' || error.response.data.message == '参数错误') {
            ElMessage.error(error.response.data.message)
          } else {
            ElMessage.warning(error.response.data.message)
          }
          return Promise.reject(error.response.data)
        }
        break
      case 400:
        if (error.response.data.message == '未知异常' || error.response.data.message == '参数错误') {
          ElMessage.error(error.response.data.message)
        } else {
          ElMessage.warning(error.response.data.message)
        }
        return Promise.reject(error.response.data)
      case 404:
        if (error.response.data.message == '未知异常' || error.response.data.message == '参数错误') {
          ElMessage.error(error.response.data.message)
        } else {
          ElMessage.warning(error.response.data.message)
        }
        return Promise.reject(error.response.data)
      case 405:
        if (error.response.data.message == '未知异常' || error.response.data.message == '参数错误') {
          ElMessage.error(error.response.data.message)
        } else {
          ElMessage.warning(error.response.data.message)
        }
        return Promise.reject(error.response.data)
      default:
        ElMessage.closeAll()
        ElMessage.error('网络连接失败，请检查网络！')
        break
    }
    return Promise.reject(error)
  }
)
export default service
