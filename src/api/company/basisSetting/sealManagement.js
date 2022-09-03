import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//印章信息分页查询
export const sealInfoQueryPage = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/sealInfo/queryPage`,
    method: 'post',
    data
  })
}

//获取印章类型列表
export const sealInfoQueryTypes = () => {
  return request({
    url: `${gateway.contract}/api/contract/sealInfo/queryTypes`,
    method: 'get'
  })
}

//删除印章信息
export const sealInfoDelete = (id) => {
  return request({
    url: `${gateway.contract}/api/contract/sealInfo/delete/${id}`,
    method: 'get'
  })
}
//新增印章信息
export const sealInfoAdd = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/sealInfo/add`,
    method: 'post',
    data
  })
}

//印章信息详情
export const sealInfoQueryDetails = (id) => {
  return request({
    url: `${gateway.contract}/api/contract/sealInfo/queryDetails/${id}`,
    method: 'get'
  })
}

//印章授权记录分页查询
export const sealAuthRecordQueryPage = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/sealAuthRecord/queryPage`,
    method: 'post',
    data
  })
}

//新增印章授权
export const sealAuthRecordAdd = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/sealAuthRecord/add`,
    method: 'post',
    data
  })
}
//修改印章授权
export const sealAuthRecordUpdate = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/sealAuthRecord/update`,
    method: 'post',
    data
  })
}

//删除印章授权记录
export const sealAuthRecordDelete = (id) => {
  return request({
    url: `${gateway.contract}/api/contract/sealAuthRecord/delete/${id}`,
    method: 'get'
  })
}

//企业印章授权给平台详情
export const eCompanyAuthQueryDetails = (companyId) => {
  return request({
    url: `${gateway.contract}/api/contract/eCompanyAuth/queryDetails/${companyId}`,
    method: 'get'
  })
}

//发起企业印章授权给平台
export const eCompanyAuthApply = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/eCompanyAuth/apply`,
    method: 'post',
    data
  })
}
