import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//查询角色列表
export const queryPage = (data) => {
  return request({
    url: `${gateway.role}/api/role/queryPage`,
    method: 'post',
    data
  })
}
//新增角色
export const add = (data) => {
  return request({
    url: `${gateway.role}/api/role/add`,
    method: 'post',
    data
  })
}
//删除角色
export const deleteRole = (id) => {
  return request({
    url: `${gateway.role}/api/role/delete/${id}`,
    method: 'GET'
  })
}
//查询角色详情
export const queryDetails = (id) => {
  return request({
    url: `${gateway.role}/api/role/queryDetails/${id}`,
    method: 'GET'
  })
}
//修改角色
export const update = (data) => {
  return request({
    url: `${gateway.role}/api/role/update`,
    method: 'post',
    data
  })
}
//查询角色功能模块树
export const queryRoleModuleTree = (data) => {
  return request({
    url: `${gateway.module}/api/module/queryRoleModuleTree`,
    method: 'post',
    data
  })
}
//角色关联用户
export const linkUser = (data) => {
  return request({
    url: `${gateway.role}/api/role/linkUser`,
    method: 'post',
    data
  })
}
//解除角色关联
export const unlinkUser = (roleId, userId) => {
  return request({
    url: `${gateway.role}/api/role/unlinkUser/${roleId}/${userId}`,
    method: 'get'
  })
}
//用户角色列表查询
export const queryUserRoleList = (id) => {
  return request({
    url: `${gateway.role}/api/role/queryUserRoleList/${id}`,
    method: 'get'
  })
}
// 分页查询角色用户
export const roleQueryRoleUserList = (data) => {
  return request({
    url: `${gateway.role}/api/role/queryRoleUser`,
    method: 'post',
    data
  })
}
