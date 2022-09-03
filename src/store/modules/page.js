const page = {
  state: {
    activeName: '0', //评标因素tab缓存
    active: 'BUSINESS', //祥评因素tab缓存
    businessType: '', //审批管理审批类型
    businessTypeList: [], // 审批类型
    approvalStatusList: [], //审批状态
    approvalSecondStatusList: [], //二级审批状态
    conditionList: []  //审批配置条件权限
  },
  mutations: {
    activeNameSet(state, activeName) {
      state.activeName = activeName
    },
    activeSet(state, active) {
      state.active = active
    },
    businessTypeSet(state, businessType) {
      state.businessType = businessType
    },
    businessTypeListSet(state, businessTypeList) {
      state.businessTypeList = businessTypeList
    },
    approvalStatusListSet(state, approvalStatusList) {
      state.approvalStatusList = approvalStatusList
    },
    approvalSecondStatusListSet(state, approvalSecondStatusList) {
      state.approvalSecondStatusList = approvalSecondStatusList
    },
    clearPageSet(state) {
      state.activeName = '0'
      state.active = 'BUSINESS'
      state.businessType = ''
      state.businessTypeList = []
      state.approvalStatusList = []
    },
    SET_CONDITION_LIST(state, conditionList) {
      state.conditionList = conditionList
    }
  },
  actions: {}
}
export default page
