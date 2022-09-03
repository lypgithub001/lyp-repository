import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//获取功能模块列表
export const GetModuleTree = () => {
  return request({
    url: `${gateway.module}/api/module/queryTree`,
    method: 'get'
  })
}
//获取所有功能模块列表
export const allModuleQueryList = (data) => {
  return request({
    url: `${gateway.module}/api/module/queryModuleList`,
    method: 'post',
    data
  })
}
//新建功能模块
export const CreateModuleFunction = (data) => {
  return request({
    url: `${gateway.module}/sa/module/add`,
    method: 'post',
    data
  })
}
//修改功能模块列表
export const UpdateModuleFunction = (data) => {
  return request({
    url: `${gateway.module}/sa/module/update`,
    method: 'post',
    data
  })
}
//获取功能模块列表
export const DeleteModuleFunction = (id) => {
  return request({
    url: `${gateway.module}/sa/module/delete/${id}`,
    method: 'post'
  })
}
