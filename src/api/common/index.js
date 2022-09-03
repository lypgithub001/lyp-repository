import request from '../../utils/request'
import gateway from '@/utils/gateway' // 网关

// 上传文件
export const upLoad = (data) => {
  return request({
    url: `${gateway.oss}/api/upload/batch`,
    method: 'post',
    timeout: 3600000,
    data
  })
}
// 单文件下载
export const upLoadDownload = (data) => {
  return request({
    url: `${gateway.oss}/api/upload/download`,
    method: 'post',
    data,
    timeout: 36000000,
    responseType: 'blob'
  })
}
// zip下载
export const zipDownload = (data) => {
  return request({
    url: `${gateway.oss}/api/upload/zipDownload`,
    method: 'post',
    data,
    responseType: 'blob'
  })
}
// 获取左边树列表
export const queryUserModuleTree = () => {
  return request({
    url: `${gateway.module}/api/module/queryUserModuleTree`,
    method: 'post'
  })
}
//获取签名列表
export const querySignList = (url, data) => {
  return request({
    url: `${gateway.bidding}${url}`,
    method: 'post',
    data
  })
}
//模板下载
export const templateDown = (data) => {
  return request({
    url: `${gateway.nonbidding}/api/nb/plan/templateDown`,
    method: 'post',
    data
  })
}

//根据用户发送验证码
export const sendVerify = (data) => {
  return request({
    url: `${gateway.bidding}/api/bid/biddingSoftCertAuth/sendVerify`,
    method: 'post',
    data
  })
}

//查询快递信息
export const queryExpressInfo = (data) => {
  return request({
    url: `${gateway.order}/api/express/queryExpressInfo`,
    method: 'post',
    data
  })
}

// 通过供应商id 查询供应商信息
export const querySupplierPurchaseInfo = (data) => {
  return request({
    url: `${gateway.manage}/api/customerManage/querySupplierInfo`,
    method: 'post',
    data
  })
} // 0:供应商  1:采购

// 通过供应商id 查询供应商信息
export const getSupplierInfo = (data) => {
  return request({
    url: `${gateway.manage}/api/customerManage/getSupplierInfo`,
    method: 'post',
    data
  })
} // 0:供应商  1:采购

//服务器时间
export const securityTime = () => {
  return request({
    url: `${gateway.sso}/api/security/time`,
    method: 'get'
  })
}

// 获取分片上传key
export const upLoadChunkKey = (data) => {
  return request({
    url: `${gateway.oss}/api/upload/chunkKey`,
    method: 'post',
    data
  })
}

// 分片上传
export const upLoadChunk = (data) => {
  return request({
    url: `${gateway.oss}/api/upload/chunk`,
    method: 'post',
    data
  })
}
