import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//分类映射表分页查询
export const mappingClassifyQueryPage = (data) => {
  return request({
    url: `${gateway.mall}/api/mappingClassify/queryPage`,
    method: 'post',
    data
  })
}

//分类映射表详情
export const mappingClassifyDetails = (id) => {
  return request({
    url: `${gateway.mall}/api/mappingClassify/queryDetails/${id}`,
    method: 'get'
  })
}

//新增分类映射表
export const mappingClassifyAdd = (data) => {
  return request({
    url: `${gateway.mall}/api/mappingClassify/add`,
    method: 'post',
    data
  })
}

//修改分类映射表
export const mappingClassifyUpdate = (data) => {
  return request({
    url: `${gateway.mall}/api/mappingClassify/update`,
    method: 'post',
    data
  })
}

//删除分类映射表
export const mappingClassifyDel = (id) => {
  return request({
    url: `${gateway.mall}/api/mappingClassify/delete/${id}`,
    method: 'get'
  })
}

//商品分类树查询
export const mappingClassifyQueryTree = () => {
  return request({
    url: `${gateway.mall}/api/mappingClassify/queryTree`,
    method: 'post'
  })
}

//导出分类映射
export const mappingClassifyExport = (data) => {
  return request({
    url: `${gateway.mall}/api/mappingClassify/export`,
    method: 'post',
    data,
    responseType: 'blob'
  })
}

//导入
export const importExcel = (data) => {
  return request({
    url: `${gateway.mall}/api/mappingClassify/import`,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundarygmBtkgzXg5H3dn3L'
    },
    data: filterFormData(data)
  })
}

//尼斯分类树查询
export const niceClassificationQueryTree = () => {
  return request({
    url: `${gateway.mall}/api/niceClassification/queryTree`,
    method: 'post'
  })
}

//尼斯分类层级查询
export const niceClassificationGetList = (pid) => {
  return request({
    url: `${gateway.mall}/api/niceClassification/getList/${pid}`,
    method: 'get'
  })
}

//尼斯分类层级查询
export const niceClassificationSearchByName = (query) => {
  return request({
    url: `${gateway.mall}/api/niceClassification/searchByName/${query}`,
    method: 'get'
  })
}
//过滤formdata
function filterFormData(data) {
  const formData = new FormData()
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key])
  })
  return formData
}
