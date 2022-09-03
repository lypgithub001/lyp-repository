export default [
  {
    path: '/marketIndex',
    name: 'marketIndex',
    meta: {
      title: '供应商'
    },
    component: () => import(/* webpackChunkName: "marketIndex" */ '@/views/market/index.vue')
  },
  {
    path: '/commodity/management',
    name: 'commodity-management',
    meta: {
      title: '供应商'
    },
    component: () => import(/* webpackChunkName: "marketIndex" */ '@/views/market/commodityManagement/index.vue')
  }
]
