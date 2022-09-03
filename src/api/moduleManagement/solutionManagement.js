import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//获取解决方案列表
export const moduleSolutionList = () => {
  return request({
    url: `${gateway.sso}/sa/moduleSolution/queryList`,
    method: 'get'
  })
}
//获取解决方案详情
export const moduleQueryDetails = (id) => {
  return request({
    url: `${gateway.sso}/sa/moduleSolution/queryDetails/${id}`,
    method: 'get'
  })
}
//解决方案新增修改
export const moduleSolutionAddOrUpdate = (data) => {
  return request({
    url: `${gateway.sso}/sa/moduleSolution/addOrUpdate`,
    method: 'post',
    data
  })
}
//删除解决方案
export const moduleSolutionDel = (id) => {
  return request({
    url: `${gateway.sso}/sa/moduleSolution/delete/${id}`,
    method: 'post'
  })
}
//采购销售自定义解决方案
export const solutionCustom = (data) => {
  return request({
    url: `${gateway.module}/api/solution/custom`,
    method: 'post',
    data
  })
}
