import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//组织架构排序，适用于全部组织，人员排序 ，目前仅支持同级排序
export const orgSort = (data) => {
  return request({
    url: `${gateway.org}/api/org/sort`,
    method: 'post',
    data
  })
}
//适用于人员排序 ，目前仅支持同级排序
export const personnelSort = (data) => {
  return request({
    url: `${gateway.org}/api/teamUserInfo/sort`,
    method: 'post',
    data
  })
}
//获取组织架构树
export const queryTree = () => {
  return request({
    url: `${gateway.org}/api/org/queryTree`,
    method: 'get'
  })
}
//新增组织/部门
export const addOrg = (data) => {
  return request({
    url: `${gateway.org}/api/org/addOrg`,
    method: 'post',
    data
  })
}
//修改组织信息
export const orgUpdate = (data) => {
  return request({
    url: `${gateway.org}/api/org/update`,
    method: 'post',
    data
  })
}
//修改集团信息
export const updateGroup = (data) => {
  return request({
    url: `${gateway.sso}/api/org/info/updateGroup`,
    method: 'post',
    data
  })
}
//删除组织
export const deleteTree = (id) => {
  return request({
    url: `${gateway.org}/api/org/delete/${id}`,
    method: 'POST'
  })
}
// 分页查询组织用户列表
export const userQueryPage = (data) => {
  return request({
    url: `${gateway.org}/api/teamUserInfo/queryPage/org`,
    method: 'post',
    data
  })
}
// 查询组织用户列表
export const userQueryList = (data) => {
  return request({
    url: `${gateway.sso}/api/org/user/queryList`,
    method: 'post',
    data
  })
}
// 新增组织员工
export const userAdd = (data) => {
  return request({
    url: `${gateway.org}/api/teamInvite/add`,
    method: 'post',
    data
  })
}
// 修改组织员工
export const userUpdate = (data) => {
  return request({
    url: `${gateway.org}/api/teamUserInfo/update`,
    method: 'post',
    data
  })
}
//  公司员工详情
export const teamUserInfoQueryDetails = (id) => {
  return request({
    url: `${gateway.org}/api/teamUserInfo/queryDetails/${id}`,
    method: 'get'
  })
}
// 标记员工离职
export const markLeave = (data) => {
  return request({
    url: `${gateway.org}/api/teamUserInfo/leave`,
    method: 'post',
    data
  })
}
// 员工退出团队
export const markQuit = () => {
  return request({
    url: `${gateway.org}/api/teamUserInfo/quit`,
    method: 'post'
  })
}
// 取消标记员工离职
export const unmarkLeave = (data) => {
  return request({
    url: `${gateway.sso}/api/org/user/unmarkLeave`,
    method: 'post',
    data
  })
}
// 根据ID查询组织信息详情(含负责人信息)
export const queryDetails = (orgId) => {
  return request({
    url: `${gateway.org}/api/org/queryDetails/${orgId}`,
    method: 'get'
  })
}
// 查询组织架构树（含成员列表）
export const orgQueryTreeWithUserInfo = (data = {}) => {
  return request({
    url: `${gateway.org}/api/org/queryTreeWithUserInfo`,
    method: 'post',
    data
  })
}
// 查询用户主属部门及附属于部门名称信息列表
export const queryUserOrgNameInfoList = (userId) => {
  return request({
    url: `${gateway.org}/api/teamUserInfo/queryUserOrgNameInfoList/${userId}`,
    method: 'get'
  })
}
// 修改团队信息 {id,teamLogo}
export const teamUpdateLogo = (data) => {
  return request({
    url: `${gateway.org}/api/team/update`,
    method: 'POST',
    data
  })
}
// 查询当前用户在指定团队的员工信息
export const teamUserInfoQueryInfo = (teamId) => {
  return request({
    url: `${gateway.org}/api/teamUserInfo/queryInfo/${teamId}`,
    method: 'get'
  })
}

// 组织架构全局搜索
export const searchOrg = (data) => {
  return request({
    url: `${gateway.org}/api/org/search`,
    method: 'post',
    data
  })
}

//  修改团队解决方案相关信息
export const updateSolutionInfo = (data) => {
  return request({
    url: `${gateway.org}/api/team/updateSolutionInfo`,
    method: 'post',
    data
  })
}
//   企业主管理员转移设置
export const updateMasterAdminUserId = (masterAdminUserId) => {
  return request({
    url: `${gateway.org}/api/team/updateMasterAdminUserId/${masterAdminUserId}`,
    method: 'post'
  })
}
// 申请标准版
export const applyStandard = (masterAdminUserId) => {
  return request({
    url: `${gateway.business}/api/purchaseManage/applyStandard`,
    method: 'post'
  })
}
