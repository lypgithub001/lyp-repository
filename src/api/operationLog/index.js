import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//操作日志表详情
export const operationLogQueryDetails = (id) => {
  return request({
    url: `${gateway.bidding}/api/operationLog/queryDetails/${id}`,
    method: 'get',
  })
}

//操作日志表分页查询
export const operationLogQueryPage = (data) => {
   return request({
     url: `${gateway.bidding}/api/operationLog/queryPage`,
     method: 'post',
     data
   })
 }
