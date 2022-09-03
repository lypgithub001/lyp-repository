import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//分类查询
export const contractTypeList = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/contractType/queryList`,
    method: 'post',
    data
  })
}
//新增分类
export const contractTypeAdd = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/contractType/add`,
    method: 'post',
    data
  })
}
//编辑分类
export const contractTypeUpdate = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/contractType/update`,
    method: 'post',
    data
  })
}
//删除分类
export const contractTypeDelete = (id) => {
  return request({
    url: `${gateway.contract}/api/contract/contractType/delete/${id}`,
    method: 'get'
  })
}
//合同模版分页查询
export const contractTemplateQueryPage = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/contractTemplate/queryPage`,
    method: 'post',
    data
  })
}
//保存提交合同模版
export const contractTemplateAdd = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/contractTemplate/add`,
    method: 'post',
    data
  })
}
//保存提交合同模版
export const contractTemplateUpdata = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/contractTemplate/update`,
    method: 'post',
    data
  })
}
//合同模版详情
export const contractTemplateQueryDetails = (id) => {
  return request({
    url: `${gateway.contract}/api/contract/contractTemplate/queryDetails/${id}`,
    method: 'get'
  })
}
//合同模版详情
export const contractTemplateQueryDelete = (id) => {
  return request({
    url: `${gateway.contract}/api/contract/contractTemplate/delete/${id}`,
    method: 'get'
  })
}

//合同信息详情
export const contractInfoQueryDetails = (id) => {
  return request({
    url: `${gateway.contract}/api/contract/info/queryDetails/${id}`,
    method: 'get'
  })
}
//合同字段分页查询
export const contractFieldQueryList = (type) => {
  return request({
    url: `${gateway.contract}/api/contract/contractField/queryList/${type}`,
    method: 'get'
  })
}
//合同字段新增
export const contractFieldAdd = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/contractField/add`,
    method: 'post',
    data
  })
}
//合同字段修改
export const contractFieldUpdate = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/contractField/update`,
    method: 'post',
    data
  })
}
//合同字段详情
export const contractFieldQueryDetails = (id) => {
  return request({
    url: `${gateway.contract}/api/contract/contractField/queryDetails/${id}`,
    method: 'get'
  })
}
//上传文件
export const contractTemplateUploadFile = (data) => {
  return request({
    url: `${gateway.contract}/api/contract/contractTemplate/uploadFile`,
    method: 'post',
    data
  })
}
//打开文件
export const contractTemplateOpenFile = (fileId, userRight) => {
  return request({
    url: `${gateway.contract}/api/contract/contractTemplate/openFile/${fileId}?userRight=${userRight}`,
    method: 'get'
  })
}
export const contractTemplateOpenNewFile = (fileId, userRight) => {
  return request({
    url: `${gateway.contract}/api/contract/contractTemplate/openNewFile/${fileId}?userRight=0`,
    method: 'get'
  })
}
export const contractTemplateOpenOssFile = (ossUrl, fileName) => {
  return request({
    url: `${gateway.contract}/api/contract/contractTemplate/openOssFile?ossUrl=${ossUrl}&fileName=${fileName}`,
    method: 'get'
  })
}
export const contractTemplateCloseFile = (fileId) => {
  return request({
    url: `${gateway.contract}/api/contract/contractTemplate/closeFile/${fileId}`,
    method: 'get'
  })
}
export const contractTemplatePollingFileStatus = (fileId) => {
  return request({
    url: `${gateway.contract}/api/contract/contractTemplate/pollingFileStatus/${fileId}`,
    method: 'get'
  })
}
