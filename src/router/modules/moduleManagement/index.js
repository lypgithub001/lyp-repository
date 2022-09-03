export default [
  {
    path: '/fuctionModule',
    name: 'fuctionModule',
    meta: {
      title: '功能模块'
    },
    component: () => import(/* webpackChunkName: "fuctionModule" */ '@/views/moduleManagement/fuctionModule/index.vue')
  },
  {
    path: '/fuctionModuleDetails',
    name: 'fuctionModuleDetails',
    meta: {
      title: '功能模块'
    },
    component: () => import(/* webpackChunkName: "fuctionModule" */ '@/views/moduleManagement/fuctionModule/fuctionModuleDetails.vue')
  },
  {
    path: '/solutionManagement',
    name: 'solutionManagement',
    meta: {
      title: '解决方案列表'
    },
    component: () => import(/* webpackChunkName: "solutionManagement" */ '@/views/moduleManagement/solutionManagement/index.vue')
  },
  {
    path: '/dataDict',
    name: 'dataDict',
    meta: {
      title: '数据字典'
    },
    component: () => import(/* webpackChunkName: "dataDict" */ '@/views/moduleManagement/dataDict/index.vue')
  },
  {
    path: '/systemDict',
    name: 'systemDict',
    meta: {
      title: '系统字典'
    },
    component: () => import(/* webpackChunkName: "dataDict" */ '@/views/moduleManagement/systemDict/index.vue')
  },
  {
    path: '/moduleManagement/productCatalog',
    name: 'moduleManagement-productCatalog',
    meta: {
      title: '产品目录'
    },
    component: () => import(/* webpackChunkName: "dataDict" */ '@/views/moduleManagement/productCatalog/index.vue')
  }


]
