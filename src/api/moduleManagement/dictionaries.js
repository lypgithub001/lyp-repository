import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//获取下拉系统字典列表
export const systemDict = () => {
  return request({
    url: `${gateway.dict}/api/dict/system`,
    method: 'get'
  })
}
//获取级联字典树列表
export const dictTree = () => {
  return request({
    url: `${gateway.dict}/api/dict/queryTree`,
    method: 'post'
  })
}
//字典树批量删除
export const dictTreeRemoveByIds = (data) => {
  return request({
    url: `${gateway.dict}/sa/dict/removeByIds`,
    method: 'post',
    data
  })
}
//字典树新增修改
export const saveOrUpdateBatch = (data) => {
  return request({
    url: `${gateway.dict}/sa/dict/saveOrUpdateBatch`,
    method: 'post',
    data
  })
}
//字典获取详情
export const getDetails = (id) => {
  return request({
    url: `${gateway.dict}/api/dict/queryById/${id}`,
    method: 'get'
  })
}
//字典获取右侧列表
export const getDictRightList = (data) => {
  return request({
    url: `${gateway.dict}/api/dict/query`,
    method: 'post',
    data
  })
}
