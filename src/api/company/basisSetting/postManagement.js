import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//新增岗位分组
export const jobAddGroup = (data) => {
  return request({
    url: `${gateway.job}/api/job/addGroup`,
    method: 'post',
    data
  })
}
//新增岗位
export const jobAddJob = (data) => {
  return request({
    url: `${gateway.job}/api/job/addJob`,
    method: 'post',
    data
  })
}
//岗位关联用户
export const jobLinkUser = (data) => {
  return request({
    url: `${gateway.job}/api/job/linkUser`,
    method: 'post',
    data
  })
}
//查询团队所有岗位列表
export const jobQueryJobList = () => {
  return request({
    url: `${gateway.job}/api/job/queryJobList`,
    method: 'post'
  })
}
// 删除岗位
export const jobRemove = (jobId) => {
  return request({
    url: `${gateway.job}/api/job/remove/${jobId}`,
    method: 'get'
  })
}
//删除岗位组
export const jobRemoveGroup = (groupId) => {
  return request({
    url: `${gateway.job}/api/job/removeGroup/${groupId}`,
    method: 'get'
  })
}
//解除岗位关联用户
export const jobRemoveLinkUser = (jobId, userId) => {
  return request({
    url: `${gateway.job}/api/job/removeLinkUser/${jobId}/${userId}`,
    method: 'get'
  })
}
//更新岗位分组
export const jobUpdateGroup = (data) => {
  return request({
    url: `${gateway.job}/api/job/updateGroup`,
    method: 'post',
    data
  })
}
//更新岗位
export const jobUpdateJob = (data) => {
  return request({
    url: `${gateway.job}/api/job/updateJob`,
    method: 'post',
    data
  })
}
// 分页查询岗位用户
export const jobQueryJobUser = (data) => {
  return request({
    url: `${gateway.job}/api/job/queryJobUser`,
    method: 'post',
    data
  })
}
