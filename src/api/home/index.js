import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//消息记录分页查询
export const msgQueryPage = (data) => {
  return request({
    url: `${gateway.manage}/api/manage/msg/queryPage`,
    method: 'post',
    data
  })
}
//一键阅读
export const oneKeyView = (data) => {
  return request({
    url: `${gateway.manage}/api/manage/msg/oneKeyView`,
    method: 'post',
    data
  })
}
//选中已读
export const selectedView = (data) => {
  return request({
    url: `${gateway.manage}/api/manage/msg/selectedView`,
    method: 'post',
    data
  })
}
//删除消息
export const delMessage = (data) => {
  return request({
    url: `${gateway.manage}/api/manage/msg/del`,
    method: 'post',
    data
  })
}
//采购预览
export const purchaseGetOverview = (data) => {
  return request({
    url: `${gateway.stats}/api/stats/purchase/getOverview`,
    method: 'post',
    data
  })
}

//供应商情况
export const purchaseGetSupplier = (data) => {
  return request({
    url: `${gateway.stats}/api/stats/purchase/getSupplier`,
    method: 'post',
    data
  })
}

//销售预览
export const statsGetOverview = (data) => {
  return request({
    url: `${gateway.stats}/api/stats/sale/getOverview`,
    method: 'post',
    data
  })
}

//商机漏斗
export const statsGetBusiness = (data) => {
  return request({
    url: `${gateway.stats}/api/stats/sale/getBusiness`,
    method: 'post',
    data
  })
}
//分类待办任务统计
export const needTaskStats = (mainType) => {
  return request({
    url: `${gateway.manage}/api/manage/needTask/stats/${mainType}`,
    method: 'get'
  })
}
//预警信息分页查询
export const earlyWarnQueryPage = (data) => {
  return request({
    url: `${gateway.manage}/api/manage/earlyWarn/queryPage`,
    method: 'post',
    data
  })
}

//销售金额
export const saleGetSellAmount = (data) => {
  return request({
    url: `${gateway.stats}/api/stats/sale/getSellAmount`,
    method: 'post',
    data
  })
}
//回款金额
export const saleGetBackAmount = (data) => {
  return request({
    url: `${gateway.stats}/api/stats/sale/getBackAmount`,
    method: 'post',
    data
  })
}
//订单数
export const orderCount = () => {
  return request({
    url: `${gateway.order}/api/order/statistics/orderCount`,
    method: 'get'
  })
}
//上下架数量
export const getSkuStatistics = () => {
  return request({
    url: `${gateway.mall}/api/statistics/getSkuStatistics`,
    method: 'get'
  })
}
//获取库存数量统计结果
export const getStockStatistics = () => {
  return request({
    url: `${gateway.mall}/api/statistics/getStockStatistics`,
    method: 'get'
  })
}
//访问数
export const spuCount = () => {
  return request({
    url: `${gateway.mall}/api/statistics/spuCount`,
    method: 'get'
  })
}

//采购分布
export const purchaseGetDistributed = (data) => {
  return request({
    url: `${gateway.stats}/api/stats/purchase/getDistributed`,
    method: 'post',
    data
  })
}

//采购排名
export const purchaseGetItemRanking = (data) => {
  return request({
    url: `${gateway.stats}/api/stats/purchase/getItemRanking`,
    method: 'post',
    data
  })
}
//商品搜索
export const userSearch = (data) => {
  return request({
    url: `${gateway.mall}/api/noToken/userSearch`,
    method: 'post',
    data
  })
}
//加入对比
export const compareAdd = (spuId) => {
  return request({
    url: `${gateway.mall}/api/compare/getSkuAndAdd/${spuId}`,
    method: 'get'
  })
}
//供应商查询
export const userSearchSupplier = (data) => {
  return request({
    url: `${gateway.mall}/api/noToken/userSearchSupplier`,
    method: 'post',
    data
  })
}
//商品对比表分页查询
export const goodCompareList = () => {
  return request({
    url: `${gateway.mall}/api/compare/getList`,
    method: 'get'
  })
}
//消息阅读
export const msgView = (msgId) => {
  return request({
    url: `${gateway.manage}/api/manage/msg/view/${msgId}`,
    method: 'post'
  })
}
//商机数量
export const queryBusinessNum = (data) => {
  return request({
    url: `${gateway.stats}/api/stats/sale/queryBusinessNum`,
    method: 'post',
    data
  })
}
//获取未读消息数量
export const msgUnreadNum = (data) => {
  return request({
    url: `${gateway.manage}/api/manage/msg/unread/num`,
    method: 'post',
    data
  })
}

//新增平台商城供应商弹窗提示
export const platformMallSupplierPopupAdd = (data) => {
  return request({
    url: `${gateway.business}/api/platformMallSupplierPopup/add`,
    method: 'post',
    data
  })
}
//商城分类
export const queryTypes = () => {
  return request({
    url: `${gateway.mall}/api/noToken/queryTree`,
    method: 'get'
  })
}
//商城商品展示
export const queryThings = (data) => {
  return request({
    url: `${gateway.mall}/api/noToken/userSearch`,
    method: 'post',
    data
  })
}
//平台商城供应商弹窗提示根据公司id查询是否勾选
export const platformMallSupplierPopupqueryDetails = (data) => {
  return request({
    url: `${gateway.business}/api/platformMallSupplierPopup/queryDetailsByCompanyId`,
    method: 'get',
    data
  })
}
//检测当前公司是否已经在平台商城签约
export const platformMallSupplierManagecheckAgreement = (data) => {
  return request({
    url: `${gateway.business}/api/platformMallSupplierManage/checkAgreement`,
    method: 'get',
    data
  })
}
//新增平台商城供应商管理
export const platformMallSupplierManageAdd = (data) => {
  return request({
    url: `${gateway.business}/api/platformMallSupplierManage/add`,
    method: 'post',
    data
  })
}
//企业认证信息详情
export const orgCertificationInfoqueryDetails = (companyId) => {
  return request({
    url: `${gateway.certification}/api/certification/orgCertificationInfo/queryDetails/${companyId}`,
    method: 'get'
  })
}
//收款账户开户详情
export const paymentqueryDetails = (companyId) => {
  return request({
    url: `${gateway.payment}/api/payment/register/queryAccount/${companyId}`,
    method: 'get'
  })
}

/**
 * 采购订单
 * @returns
 */
export const getOrderStats = () => {
  return request({
    url: `${gateway.stats}/api/stats/purchase/getOrderStats`,
    method: 'post'
  })
}

/**
 * 查询采购端采购大脑平台服务商搜索行业
 * @returns
 */
export const queryDashboardIndustry = () => {
  return request({
    url: `${gateway.org}/api/companyIndustry/queryDashboardIndustry`,
    method: 'post'
  })
}

export const queryDashboardTree = () => {
  return request({
    url: `${gateway.mall}/api/noToken/queryDashboardTree`,
    method: 'get'
  })
}

/**
 * 销售/回款金额
 * @returns
 */
export const getSellAndBackAmount = (data) => {
  return request({
    url: `${gateway.stats}/api/stats/sale/getSellAndBackAmount`,
    method: 'post',
    data
  })
}

/**
 * 商机/订单数量
 * @param {*} data
 * @returns
 */
export const getBusinessAndOrderNum = (data) => {
  return request({
    url: `${gateway.stats}/api/stats/sale/getBusinessAndOrderNum`,
    method: 'post',
    data
  })
}

//业务规则详情
export const businessRuleQueryDetails = (data) => {
  return request({
    url: `${gateway.business}/api/businessRule/queryDetails`,
    method: 'post',
    data
  })
}
