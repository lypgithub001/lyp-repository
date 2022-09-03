import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//新增采购管理制度
export const purchaseSystemAdd = (data) => {
  return request({
    url: `${gateway.manage}/api/purchaseSystem/add`,
    method: 'post',
    data
  })
}
//采购管理制度详情
export const purchaseSystemDetails = (userRight) => {
  return request({
    url: `${gateway.manage}/api/purchaseSystem/queryDetails?userRight=${userRight}`,
    method: 'get'
  })
}
//修改采购管理制度
export const purchaseSystemUpdate = (data) => {
  return request({
    url: `${gateway.manage}/api/purchaseSystem/update`,
    method: 'post',
    data
  })
}
// 恢复默认采购管理制度
export const purchaseSystemRecovery = () => {
  return request({
    url: `${gateway.manage}/api/purchaseSystem/recovery`,
    method: 'get'
  })
}

/**
 * 附件模板列表页
 * @returns
 */
export const fileList = () => {
  return request({
    url: `${gateway.manage}/api/purchaseSystem/attachments/queryPage`,
    method: 'get'
  })
}
