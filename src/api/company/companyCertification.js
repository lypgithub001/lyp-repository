import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//   查询成员数量相关信息
export const queryTeamUserCountInfo = (companyId) => {
  return request({
    url: `${gateway.org}/api/teamUserInfo/queryTeamUserCountInfo/${companyId}`,
    method: 'post'
  })
}
//   个人实名认证
export const userCertify = (data) => {
  return request({
    url: `${gateway.sso}/api/user/certify`,
    method: 'post',
    data
  })
}
//   查询团队公司列表
export const queryCompanyList = () => {
  return request({
    url: `${gateway.org}/api/org/queryCompanyList`,
    method: 'get'
  })
}
//   申请个人实名认证
export const certificationInfoAdd = (data) => {
  return request({
    url: `${gateway.certification}/api/certification/certificationInfo/add`,
    method: 'POST',
    data
  })
}
//   查询个人认证信息
export const certificationInfoQueryDetails = (id) => {
  return request({
    url: `${gateway.certification}/api/certification/certificationInfo/queryDetails/${id}`,
    method: 'get'
  })
}
//   企业认证信息详情
export const orgCertificationInfoQueryDetails = (id) => {
  return request({
    url: `${gateway.certification}/api/certification/orgCertificationInfo/queryDetails/${id}`,
    method: 'get'
  })
}
//   申请企业认证
export const orgCertificationInfoAdd = (data) => {
  return request({
    url: `${gateway.certification}/api/certification/orgCertificationInfo/add`,
    method: 'POST',
    data
  })
}
//   打款金额校验
export const orgCertificationInfoVerifyRandomAmount = (data) => {
  return request({
    url: `${gateway.certification}/api/certification/orgCertificationInfo/verifyRandomAmount`,
    method: 'POST',
    data
  })
}
