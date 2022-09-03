import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

// 招标公司门户
//中标候选人公示
export const biddingReviewPublicity = (data) => {
  return request({
    url: `${gateway.bidding}/api/portal/bid/biddingReviewPublicity`,
    method: 'post',
    data
  })
}

//招标公告/变更公告
export const bidNotice = (data) => {
  return request({
    url: `${gateway.bidding}/api/portal/bid/notice`,
    method: 'post',
    data
  })
}

//中标结果公示
export const bidResultNotice = (data) => {
  return request({
    url: `${gateway.bidding}/api/portal/bid/resultNotice`,
    method: 'post',
    data
  })
}

// 供应商展示
export const supplierShow = (data) => {
  return request({
    url: `${gateway.sso}/api/portal/sso/supplierShow`,
    method: 'post',
    data
  })
}

// 招标公告详情
export const bidNoticeDetail = (id) => {
  return request({
    url: `${gateway.bidding}/api/portal/bid/notice/detail/${id}`,
    method: 'get'
  })
}

// 中标候选人公示文件地址
export const bideviewPublicity = (id) => {
  return request({
    url: `${gateway.bidding}/api/portal/bid/biddingReviewPublicity/${id}`,
    method: 'get'
  })
}

// 中标结果公示文件
export const bidResultNoticeDetails = (id) => {
  return request({
    url: `${gateway.bidding}/api/portal/bid/resultNotice/${id}`,
    method: 'get'
  })
}

// 非标采购信息
export const publicInfoQueryPage = (data) => {
  return request({
    url: `${gateway.nonbidding}/api/nb/public/info/queryPage`,
    method: 'post',
    data
  })
}
//采购信息-详情
export const publicInfoQueryDetails = (id) => {
  return request({
    url: `${gateway.nonbidding}/api/nb/public/info/queryDetails/${id}`,
    method: 'get'
  })
}
//单一来源公示分页查询(公共接口)
export const publicityQueryPage = (data) => {
  return request({
    url: `${gateway.nonbidding}/api/nb/public/publicity/queryPage`,
    method: 'post',
    data
  })
}
