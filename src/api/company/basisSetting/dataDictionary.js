import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

// 分页
export const queryPage = (data) => {
  return request({
    url: `${gateway.manage}/api/dataDictionaryDetails/queryPage`,
    method: 'post',
    data
  })
}

//新增
export const userAdd = (data) => {
  return request({
    url: `${gateway.manage}/api/dataDictionaryDetails/add`,
    method: 'post',
    data
  })
}

//修改
export const userUpdate = (data) => {
  return request({
    url: `${gateway.manage}/api/dataDictionaryDetails/update`,
    method: 'post',
    data
  })
}

//获取详情
export const teamUserInfoQueryDetails = (id) => {
  return request({
    url: `${gateway.manage}/api/dataDictionaryDetails/queryDetails/${id}`,
    method: 'get'
  })
}

// 标记员工停用
export const deLete = (id) => {
  return request({
    url: `${gateway.manage}/api/dataDictionaryDetails/edit/${id}`,
    method: 'get'
  })
}
