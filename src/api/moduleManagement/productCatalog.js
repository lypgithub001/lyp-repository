//产品目录
import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//产品目录左侧树
export const queryTree = () => {
  return request({
    url: `${gateway.bidding}/api/biddingProductCatalogue/queryTree`,
    method: 'get'
  })
}
//产品目录右侧列表
export const queryPage = (data) => {
  return request({
    url: `${gateway.bidding}/api/biddingProductCatalogue/queryPage`,
    method: 'POST',
    data
  })
}
//删除专业信息
export const deleteInfo = (id) => {
  return request({
    url: `${gateway.bidding}/api/biddingProductCatalogue/delete/${id}`,
    method: 'get'
  })
}
//产品目录详情
export const queryDetails = (id) => {
  return request({
    url: `${gateway.bidding}/api/biddingProductCatalogue/queryDetails/${id}`,
    method: 'get'
  })
}
//产品目录新增/修改
export const addOrUpdate = (data) => {
  return request({
    url: `${gateway.bidding}/api/biddingProductCatalogue/addOrUpdate`,
    method: 'POST',
    data
  })
}
