export default [
  {
    path: '/company/basisSetting/postManagement',
    name: 'company-basisSetting-postManagement',
    meta: {
      title: '岗位管理',
      type: '列表'
    },
    component: () => import('@/views/company/basisSetting/postManagement/index.vue')
  },
  {
    path: '/company/basisSetting/sealManagement',
    name: 'company-basisSetting-sealManagement',
    meta: {
      title: '印章管理',
      type: '列表'
    },
    component: () => import('@/views/company/basisSetting/sealManagement/index.vue')
  },
  {
    path: '/company/basisSetting/addSeal',
    name: 'company-basisSetting-addSeal',
    meta: {
      title: '印章',
      type: '表单'
    },
    component: () => import('@/views/company/basisSetting/sealManagement/components/addSeal.vue')
  },
  {
    path: '/company/basisSetting/authorizationManagement',
    name: 'company-basisSetting-authorizationManagement',
    meta: {
      title: '授权管理',
      type: '列表'
    },
    component: () => import('@/views/company/basisSetting/sealManagement/authorizationManagement/index.vue')
  },
  {
    path: '/company/basisSetting/roleManagement',
    name: 'company-basisSetting-roleManagement',
    meta: {
      title: '角色管理',
      type: '列表'
    },
    component: () => import('@/views/company/basisSetting/roleManagement/index.vue')
  },
  {
    path: '/company/basisSetting/dataDictionary',
    name: 'company-basisSetting-dataDictionary',
    meta: {
      title: '数据字典',
      type: '列表'
    },
    component: () => import('@/views/company/basisSetting/dataDictionary/index.vue')
  }
]
