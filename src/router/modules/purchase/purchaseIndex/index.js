export default [
   {
     path: '/purchaseIndex',
     name: 'purchaseIndex',
     meta: {
       title: '采购'
     },
     component: () => import(/* webpackChunkName: "purchaseIndex" */ '@/views/purchase/index.vue')
   }
]