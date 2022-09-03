import basisSetting from './basisSetting'
export default [
  ...basisSetting,
  {
    path: '/company/organizationalStructure',
    name: 'company-organizationalStructure',
    meta: {
      title: '组织架构',
      type: '列表'
    },
    component: () => import('@/views/company/companyInfo/organizationalStructure/index.vue')
  },
  {
    path: '/company/companyCertification',
    name: 'company-companyCertification',
    meta: {
      title: '公司认证管理'
    },
    component: () => import('@/views/company/companyInfo/companyCertification/index.vue')
  },
  {
    path: '/company/CertificationCheck',
    name: 'company-CertificationCheck',
    meta: {
      title: '公司认证管理',
      type: '详情'
    },
    component: () => import('@/views/company/companyInfo/companyCertification/CertificationCheck.vue')
  },
  {
    path: '/company/contractTemplate',
    name: 'company-contractTemplate',
    meta: {
      title: '合同模板管理'
    },
    component: () => import('@/views/company/companyInfo/contractTemplate/index.vue')
  },
  {
    path: '/company/editContractTemplate',
    name: 'company-editContractTemplate',
    meta: {
      title: '合同模板',
      keepAlive: true,
      type: '表单'
    },
    component: () => import('@/views/company/companyInfo/contractTemplate/components/EditContractTemplate.vue')
  },
  {
    path: '/company/contractVariable',
    name: 'company-contractVariable',
    meta: {
      title: '合同变量管理'
    },
    component: () => import('@/views/company/companyInfo/contractVariable/index.vue')
  },
  {
    path: '/company/createCompany',
    name: 'company-createCompany',
    meta: {
      title: '创建公司'
    },
    component: () => import('@/views/company/companyInfo/createCompany/index.vue')
  },
  {
    path: '/company/inviteRecord',
    name: 'company-inviteRecord',
    meta: {
      title: '成员邀请记录'
    },
    component: () => import('@/views/company/companyInfo/inviteRecord/index.vue')
  },
  {
    path: '/company/joinCompany',
    name: 'company-joinCompany',
    meta: {
      title: '申请加入公司'
    },
    component: () => import('@/views/company/companyInfo/joinCompany/index.vue')
  },
  {
    path: '/company/joinCompanyCheck',
    name: 'company-joinCompanyCheck',
    meta: {
      title: '加入公司审核'
    },
    component: () => import('@/views/company/companyInfo/joinCompanyCheck/index.vue')
  },
  {
    path: '/company/joinCompanyInvite',
    name: 'company-joinCompanyInvite',
    meta: {
      title: '加入公司邀请'
    },
    component: () => import('@/views/company/companyInfo/joinCompanyInvite/index.vue')
  },
  {
    path: '/company/approvalConfig',
    name: 'company-approvalConfig',
    meta: {
      title: '审批配置'
    },
    component: () => import('@/views/company/companyInfo/approvalConfig/index.vue')
  },
  {
    path: '/company/approvalConfig/formWork',
    name: 'company-approvalConfig-formWork',
    meta: {
      title: '流程设置'
    },
    component: () => import('@/views/company/companyInfo/approvalConfig/formWork/index.vue')
  },
  {
    path: '/company/functionalConfiguration',
    name: 'company-functionalConfiguration',
    meta: {
      title: '功能配置'
    },
    component: () => import('@/views/company/companyInfo/functionalConfiguration/index.vue')
  }
]
