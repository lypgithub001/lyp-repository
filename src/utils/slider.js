//菜单
export const slideList = [
  {
    menuName: '商品管理',
    name: 'commodity-management',
    path: '/commodity/management',
    hidden: true
  },
  {
    menuName: '首页',
    icon: '',
    name: 'market-dashboard',
    path: '/market/dashboard',
    hidden: true
  },
  {
    menuName: '公司',
    icon: '',
    name: 'company',
    path: '/company',
    hidden: true,
    child: [
      {
        menuName: '公司管理',
        name: 'company-organizationalStructure',
        path: '/company/organizationalStructure',
        hidden: true,
        child: [
          {
            menuName: '组织架构',
            name: 'company-organizationalStructure',
            path: '/company/organizationalStructure',
            hidden: true
          },
          {
            menuName: '公司认证管理',
            name: 'company-companyCertification',
            path: '/company/companyCertification',
            hidden: true
          },
          {
            menuName: '合同模板管理',
            name: 'company-contractTemplate',
            path: '/company/contractTemplate',
            hidden: true
          },
          {
            menuName: '合同变量管理',
            name: 'company-contractVariable',
            path: '/company/contractVariable',
            hidden: true
          },
          {
            menuName: '审批配置',
            name: 'company-approvalConfig',
            path: '/company/approvalConfig',
            hidden: true
          },
          {
            menuName: '创建公司',
            name: 'company-createCompany',
            path: '/company/createCompany',
            hidden: true
          },
          {
            menuName: '功能配置',
            name: 'company-functionalConfiguration',
            path: '/company/functionalConfiguration',
            hidden: true
          },
          {
            menuName: '成员邀请记录',
            name: 'company-inviteRecord',
            path: '/company/inviteRecord',
            hidden: true
          },
          {
            menuName: '申请加入公司',
            name: 'company-joinCompany',
            path: '/company/joinCompany',
            hidden: true
          },
          {
            menuName: '加入公司审核',
            name: 'company-joinCompanyCheck',
            path: '/company/joinCompanyCheck',
            hidden: true
          },
          {
            menuName: '加入公司邀请',
            name: 'company-joinCompanyInvite',
            path: '/company/joinCompanyInvite',
            hidden: true
          },
          {
            menuName: '帮助中心',
            name: 'company-helpCenter',
            path: '/company/helpCenter',
            hidden: true
          }
        ]
      },
      {
        menuName: '基础设置',
        name: 'company-basisSetting-postManagement',
        path: '/company/basisSetting/postManagement',
        hidden: true,
        child: [
          {
            menuName: '岗位管理',
            name: 'company-basisSetting-postManagement',
            path: '/company/basisSetting/postManagement',
            hidden: true
          },
          {
            menuName: '角色管理',
            name: 'company-basisSetting-roleManagement',
            path: '/company/basisSetting/roleManagement',
            hidden: true
          }
        ]
      }
    ]
  }
]
