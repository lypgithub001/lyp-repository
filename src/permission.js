// 菜单权限管理
import '@/router/index.js'
import routes from '@/router/index.js'
import store from '@/store'
import { computed } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
//获取用户当前团队信息
const getTree = async () => {
  await store
    .dispatch('getTeamInfo')
    .then(async (res) => {
      getLeftTree()
    })
    .catch(async () => {
      getLeftTree()
    })
}
//获取树列表
const getLeftTree = async () => {
  await store
    .dispatch('getTreeList')
    .then((res) => {})
    .catch(() => {})
  location.reload()
}
let router
let treeList = computed(() => JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo?.moduleTree || [])
let buttonSet = computed(() => JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo?.buttonSet || [])

//递归处理数据回显
const recursionFunc = (list1, list2) => {
  if (list1.length > 0 && list2.length > 0) {
    let str = ''
    for (var i = 0; i < list1.length; i++) {
      for (let j = 0; j < list2.length; j++) {
        if (list1[i].path === list2[j].path) {
          str += list1[i].path + ','
        }
      }
      if (list1[i].child && list1[i].child.length > 0) {
        str += recursionFunc(list1[i].child, list2)
      }
    }
    return str
  }
  return ''
}
function getRouter() {
  if (buttonSet.value.some((ele) => ele === 'XS' || ele === 'CG')) {
    if (JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo?.buttonSet.some((ele) => ele === 'CG')) {
      routes[0].redirect = '/purchase/dashboard'
    } else {
      routes[0].redirect = '/market/dashboard'
    }
  } else {
    routes[0].redirect = '/company/joinCompany'
  }
  let idStr = recursionFunc(JSON.parse(JSON.stringify(treeList.value)), JSON.parse(JSON.stringify(routes[1].children)))
  if (idStr.length > 0) {
    routes[1].children.forEach((ele) => {
      //   需要开放不加权限的路由
      if (
        idStr.indexOf(ele.path) === -1 &&
        ele.path !== '/404' &&
        ele.path !== '/company/joinCompany' &&
        ele.path !== '/purchase/dashboard' &&
        //   ele.path !== '/purchase/addAgreement' &&
        ele.path !== '/market/dashboard' &&
        ele.path !== '/home/announcementa0peration' &&
        ele.path !== '/market/home/announcementa0peration' 
      ) {
        ele.meta.permission = true
      } else {
        ele.meta.permission = false
      }
    })
  }
  router = createRouter({
    history: createWebHistory('/'),
    routes
  })
  //判断发版刷新
  router.onError((error) => {
    console.log(router?.history?.pending?.fullPath)
    const pattern = 'Failed to fetch dynamically imported module:'
    const pattern2 = 'error loading dynamically imported module'
    const pattern3 = "'text/html' is not a valid JavaScript MIME type."
    const isChunkLoadFailed = error.message.includes(pattern) || error.message.includes(pattern2) || error.message.includes(pattern3)
    //   console.log(isChunkLoadFailed, '/Loading chunk (d)+ failed/g', '路由懒加载找不到对应的moudle')
    if (isChunkLoadFailed) {
      if (import.meta.env.VITE_VUE_APP_NODE_ENV !== 'development') {
        window.location.reload()
      }
    } else {
      console.log(error)
    }
  })
  //路由白名单
  const whiteList = ['/login', '/new404', '/wechatBindRes', '/wechatLoginRes', '/personalFinish']
  router.beforeEach((to, from, next) => {
    if (to.query.token && !to.query.code) {
      localStorage.setItem('token', to.query.token) //招标项目id
      if (to.query.userId) {
        localStorage.setItem('userId', to.query.userId) //0预审，1后审类型
      }
    }

    setTimeout(() => {
      document.title = `${to.meta.title} | 智采云SaaS平台`
    }, 10)
    let role = localStorage.getItem('token') || ''

    if (whiteList.indexOf(to.path) != -1 && !role) {
      next()
      return
    }
    //对未返回菜单添加权限
      if (role && to.path === '/login') {
        next('/company/joinCompany')
        if (to.query.mall) {
          toMall(to)
        }
      } else if (!role && to.path !== '/login') {
        store.commit('SET_USERINFO', {})
        store.commit('set_systemDictInfo', {})
        store.commit('set_dictTreeInfo', {})
        store.commit('SAVE_TREE', {})
        store.commit('SET_TEAMINFO', {})
        store.commit('SET_TEAMUSERINFO', {})
        store.commit('SAVE_HABITSLIST', [])
        window.sessionStorage.clear()
        next('/login')
        //   } else if (to.meta.permission) {
        //     next('/404')
      } else {
        next()
      }
  })
}
if (!treeList.value || treeList.value.length === 0) {
  if (localStorage.getItem('token')) {
    getTree()
  } else {
    getRouter()
  }
} else {
  getRouter()
}

async function toMall(to) {
  const res = await store.dispatch('queryUserInfo')
  const resTeam = await store.dispatch('getTeamInfo')

  const params = {
    userId: localStorage.getItem('userId'),
    teamInfo: resTeam,
    token: localStorage.getItem('token'),
    username: res.name
  }
  let backParams = ''
  if (to.fullPath.includes('&')) {
    const pos = to.fullPath.indexOf('&')
    backParams = backParams.concat(to.fullPath.slice(pos + 1))
  }

  store.dispatch('toMall', { path: to.query.mall, backParams, ycc: params })
  //   const targetWindow = window.open(import.meta.env.VITE_VUE_APP_MALL_ENV + `${to.query.mall}?${backParams}`)
  //   setTimeout(() => {
  //     targetWindow.postMessage(JSON.stringify(params), import.meta.env.VITE_VUE_APP_MALL_ENV)
  //   }, 1200)
}

export default router
