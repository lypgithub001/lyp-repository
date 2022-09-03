import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//新增草稿
export const draftInfoAdd = (data) => {
  return request({
    url: `${gateway.draft}/api/draft/draftInfo/add`,
    method: 'post',
    data
  })
}

//删除草稿
export const draftInfoDelete = (id) => {
  return request({
    url: `${gateway.draft}/api/draft/draftInfo/delete/${id}`,
    method: 'get'
  })
}

//草稿详情
export const draftInfoQueryDetails = (id) => {
  return request({
    url: `${gateway.draft}/api/draft/draftInfo/queryDetails/${id}`,
    method: 'get'
  })
}

//修改草稿
export const draftInfoUpdate = (data) => {
  return request({
    url: `${gateway.draft}/api/draft/draftInfo/update`,
    method: 'post',
    data
  })
}

//草稿分页查询
export const draftInfoQueryPage = (data) => {
  return request({
    url: `${gateway.draft}/api/draft/draftInfo/queryPage`,
    method: 'post',
    data
  })
}

//查询最后一条草稿
export const draftInfoQueryLast = (data) => {
  return request({
    url: `${gateway.draft}/api/draft/draftInfo/queryLast`,
    method: 'post',
    data
  })
}
