import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

// 成员申请加入团队 
export const teamManagerApply = (data) => {
  return request({
    url: `${gateway.org}/api/teamApply/add`,
    method: 'post',
    data
  })
}

// 分页查询公司信息，用于申请加入公司 
export const getCompanyListData = (data) => {
  return request.post(`${gateway.org}/api/org/company/queryPage`, data)
}

// 分页查询申请加入公司记录列表 
export const getApplyListData = (data) => {
  return request.post(`${gateway.org}/api/teamApply/queryPage/user`, data)
}

// 个人查询邀请加入公司列表 
export const getInviteListData = (data) => {
  return request.post(`${gateway.org}/api/teamInvite/queryPage/user`, data)
}

// 拒绝申请/邀请加入公司 
// export const rejectJoinCompany = (data) => {
//   return request.post(`${gateway.org}/api/teamManager/user/reject`, data)
// }

// 查询用户当前团队信息 
export const userCurrentTeamQueryInfo = () => {
  return request.get(`${gateway.org}/api/userCurrentTeam/queryInfo`)
}

// 用户切换团队 
export const userCurrentTeamChange = (teamId) => {
  return request.get(`${gateway.org}/api/userCurrentTeam/change/${teamId}`)
}

// 查询用户当前团队ID 
export const userCurrentTeamQueryId = () => {
  return request.get(`${gateway.org}/api/userCurrentTeam/queryId`)
}

// 查询用户多团队信息 
export const teamUserInfoMultiTeamInfo = () => {
  return request.post(`${gateway.org}/api/teamUserInfo/multiTeamInfo`)
}

// 加入公司审核列表 
export const applyCompanyCheckList = (data) => {
  return request.post(`${gateway.org}/api/teamApply/queryPage/team`, data)
}

// 同意申请加入公司 

export const agreeApplyJoinCompany = (id, data) => {
  return request.post(`${gateway.org}/api/teamApply/agree/${id}`, data)
}
// 拒绝 申请 加入公司 
export const rejectJoinCompany = (data) => {
  return request({
    url: `${gateway.org}/api/teamApply/reject`,
    method: 'post',
    data
  })
}
// 拒绝 邀请 加入公司
export const teamInviteReject = (id) => {
  return request.get(`${gateway.org}/api/teamInvite/reject/${id}`)
}

// 同意邀请加入公司 
export const inviteAgree = (inviteId) => {
  return request.get(`${gateway.org}/api/teamInvite/agree/${inviteId}`)
}

// 团队查询邀请列表
export const teamInviteList = (data) => {
  return request.post(`${gateway.org}/api/teamInvite/queryPage/team`, data)
}
