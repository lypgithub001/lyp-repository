import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//获取用户信息
export const userQueryInfo = () => {
  return request({
    url: `${gateway.sso}/api/user/getUserInfo`,
    method: 'get'
  })
}
//更换手机号
export const changerUserPhone = (data) => {
  return request({
    url: `${gateway.sso}/api/user/changerUserPhone`,
    method: 'post',
    data
  })
}
//更新用户信息
export const updateUserInfo = (data) => {
  return request({
    url: `${gateway.sso}/api/user/update/userInfo`,
    method: 'post',
    data
  })
}
// 获取融云token
export const apiUserQueryInfo = (data) => {
  return request({
    url: `${gateway.sso}/api/user/queryInfo`,
    method: 'POST',
    data
  })
}

//获取指定用户信息
export const getQueryInfo = (id) => {
  return request({
    url: `${gateway.sso}/api/org/user/queryInfo/${id}`,
    method: 'get'
  })
}
//登录获取供应商信息
export const queryDetailsByUserId = (userId) => {
  return request({
    url: `${gateway.sso}/api/supplierInfo/queryDetailsByUserId/${userId}`,
    method: 'get'
  })
}
//新增用户偏好表
export const userHabitsAdd = (data) => {
  return request({
    url: `${gateway.sso}/api/userHabits/add`,
    method: 'post',
    data
  })
}
//修改用户偏好表
export const userHabitsUpdate = (data) => {
  return request({
    url: `${gateway.sso}/api/userHabits/update`,
    method: 'post',
    data
  })
}
//用户偏好表列表查询
export const userHabitsQuery = (data) => {
  return request({
    url: `${gateway.sso}/api/userHabits/query`,
    method: 'post',
    data
  })
}
//批量删除用户偏好
export const userHabitsDeleteBatch = (data) => {
  return request({
    url: `${gateway.sso}/api/userHabits/deleteBatch`,
    method: 'post',
    data
  })
}
//用户新增反馈信息
export const feedbackAdd = (data) => {
  return request({
    url: `${gateway.manage}/api/manage/feedback/add`,
    method: 'post',
    data
  })
}
