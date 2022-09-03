import Home from '../layout/index.vue'
import company from './modules/company/index.js'
import market from './modules/market/index.js'
import moduleManagementInfo from './modules/moduleManagement'
import purchase from './modules/purchase/index.js'
const routes = [
  {
    path: '/',
    redirect: '/company/joinCompany'
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/market/dashboard',
        name: 'market-dashboard',
        meta: {
          title: '销售大脑'
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/home/Dashboard.vue')
      },
      {
        path: '/purchase/dashboard',
        name: 'purchase-dashboard',
        meta: {
          title: '采购大脑'
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/home/Dashboard.vue')
       },
      {
        path: '/404',
        name: '404',
        meta: {
          title: '找不到页面'
        },
        component: () => import(/* webpackChunkName: "404" */ '@/views/404/404.vue')
      },
      {
        path: '/systemManagement/paySuccessFault',
        name: 'systemManagement-paySuccessFault',
        meta: {
          title: '支付结果'
        },
        component: () => import(/* webpackChunkName: "paySuccessFault" */ '@/views/systemManagement/paySuccessFault/index.vue')
      },
      //模块管理
      ...moduleManagementInfo,
      //采购
      ...purchase,
      //销售
      ...market,
      //公司
      ...company
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue')
  },
  {
    path: '/wechatLoginRes',
    name: 'wechatLoginRes',
    meta: {
      title: '微信登录'
    },
    component: () => import(/* webpackChunkName: "loginSuccess" */ '@/views/login/loginSuccess.vue')
  },
  {
    path: '/wechatBindRes',
    name: 'wechatBindRes',
    meta: {
      title: '微信绑定'
    },
    component: () => import(/* webpackChunkName: "bindSuccess" */ '@/views/login/wechatBindRes.vue')
  },
  {
    path: '/personalFinish',
    name: 'personalFinish',
    meta: {
      title: '认证完成'
    },
    component: () => import(/* webpackChunkName: "bindSuccess" */ '@/views/login/personalFinish.vue')
  },
  {
    path: '/new404',
    name: 'new404',
    meta: {
      title: '找不到页面'
    },
    component: () => import(/* webpackChunkName: "404" */ '@/views/404/new404.vue')
  },
  {
    //404页面放到最底部
    path: '/:pathMatch(.*)*',
    meta: {
      title: '404'
    },
    component: () => import('@/views/404/404.vue')
  }
]
export default routes
