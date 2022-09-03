import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//获取单据类型列表
export const approveBusinessList = (groupCode) => {
  return request({
    url: `${gateway.approve}/api/ap/approveBusiness/list?groupCode=${groupCode}`,
    method: 'get'
  })
}

//新增或修改审批模版
export const approveBusinessSaveOrUpdate = (data) => {
  return request({
    url: `${gateway.approve}/api/ap/approveBusiness/saveOrUpdate`,
    method: 'post',
    data
  })
}

//生成审批流程预览
export const generateActivity = (data) => {
  return request({
    url: `${gateway.approve}/api/ap/approveBusiness/generateActivity`,
    method: 'post',
    data
  })
}

//获取模版流程
export const approveBusinessDetail = (businessGroup, businessType) => {
  return request({
    url: `${gateway.approve}/api/ap/approveBusiness/detail/${businessGroup}/${businessType}`,
    method: 'get'
  })
}

//创建审批申请
export const approveApplyCreate = (data) => {
  return request({
    url: `${gateway.approve}/api/ap/approveApply/create`,
    method: 'post',
    data
  })
}

// 审批详情
export const getApproveDetail = (data) => {
  return request({
    url: `${gateway.approve}/api/ap/approveApply/detail`,
    method: 'post',
    data
  })
}
// 审批提交
export const checkApproval = (data) => {
  return request({
    url: `${gateway.approve}/api/ap/approveApply/check`,
    method: 'post',
    data
  })
}
// 审批批量提交
export const batchCheckApproval = (data) => {
  return request({
    url: `${gateway.approve}/api/ap/approveApply/batchCheck`,
    method: 'post',
    data
  })
}
// 审批列表分页查询
export const approveApplyQueryList = (data) => {
  return request({
    url: `${gateway.approve}/api/ap/approveApply/queryList`,
    method: 'post',
    data
  })
}

//审批分组列表分页查询
export const approveApplyQueryGroupList = (data) => {
  return request({
    url: `${gateway.approve}/api/ap/approveApply/queryGroupList`,
    method: 'post',
    data
  })
}

//获取待办列表
export const approveApplyUpcoming = (data) => {
  return request({
    url: `${gateway.approve}/api/ap/approveApply/upcoming`,
    method: 'post',
    data
  })
}
//审批评论新增
export const approveCommentAdd = (data) => {
  return request({
    url: `${gateway.approve}/api/ap/approveComment/add`,
    method: 'post',
    data
  })
}
//删除评论
export const approveCommentDel = (id) => {
  return request({
    url: `${gateway.approve}/api/ap/approveComment/delete/${id}`,
    method: 'get'
  })
}
