import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

// 查询企业基本信息-普通
export const companyQueryInfoNormal = (companyName) => {
  return request({
    url: `${gateway.org}/api/tianyancha/queryInfo/normal/${companyName}`,
    method: 'post'
  })
}

// 查询企业基本信息-特殊（政府）
export const companyQueryInfoSpecial = (companyName) => {
  return request({
    url: `${gateway.org}/api/tianyancha/queryInfo/special/${companyName}`,
    method: 'post'
  })
}

//  根据名称查询企业是否已存在
export const companyIsExist = (companyName) => {
  return request({
    url: `${gateway.org}/api/company/isExist/${companyName}`,
    method: 'post'
  })
}

//  新增企业信息
export const companyAdd = (data) => {
  return request({
    url: `${gateway.org}/api/company/add`,
    method: 'post',
    data
  })
}

//  修改企业信息
export const companyUpdate = (data) => {
  return request({
    url: `${gateway.org}/api/company/update`,
    method: 'post',
    data
  })
}
//  根据名称查询企业信息详情
export const companyQueryInfoByName = (companyName) => {
  return request({
    url: `${gateway.org}/api/company/queryInfoByName/${companyName}`,
    method: 'get'
  })
}

//  根据id查询企业信息详情
export const companyQueryDetails = (id) => {
  return request({
    url: `${gateway.org}/api/company/queryDetails/${id}`,
    method: 'get'
  })
}
//   更新企业基本信息-普通
export const updateNormal = (id) => {
  return request({
    url: `${gateway.org}/api/tianyancha/update/normal/${id}`,
    method: 'post'
  })
}

//  根更新企业基本信息-特殊
export const updateSpecial = (id) => {
  return request({
    url: `${gateway.org}/api/tianyancha/update/special/${id}`,
    method: 'post'
  })
}
//  根更新企业基本信息-特殊
export const tianyanchaSearch = (data) => {
  return request({
    url: `${gateway.org}/api/tianyancha/search`,
    method: 'post',
    data
  })
}
