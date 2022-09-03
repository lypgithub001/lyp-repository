import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关


//分页查询
export const queryPage = (data) => {
    return request({
        url: `${gateway.manage}/api/helpCenter/queryPage`,
        method: 'post',
        data
    })
}
//新增
export const addInfo = (data) => {
    return request({
        url: `${gateway.manage}/api/helpCenter/add`,
        method: 'post',
        data
    })
}
//编辑
export const editInfo = (data) => {
    return request({
        url: `${gateway.manage}/api/helpCenter/update`,
        method: 'post',
        data
    })
}
//详情
export const queryDetails = (id) => {
    return request({
        url: `${gateway.manage}/api/helpCenter/queryDetails/${id}`,
        method: 'get'
    })
}
//删除
export const deleteInfo = (id) => {
    return request({
        url: `${gateway.manage}/api/helpCenter/delete/${id}`,
        method: 'get'
    })
}
//分类树查询
export const queryTree = () => {
    return request({
        url: `${gateway.manage}/api/helpCenterCategory/queryTree`,
        method: 'get'
    })
}
//新增
export const addTree = (data) => {
    return request({
        url: `${gateway.manage}/api/helpCenterCategory/add`,
        method: 'post',
        data
    })
}
//编辑
export const editTree = (data) => {
    return request({
        url: `${gateway.manage}/api/helpCenterCategory/update`,
        method: 'post',
        data
    })
}
//详情
export const queryTreeDetail = (id) => {
    return request({
        url: `${gateway.manage}/api/helpCenterCategory/queryDetails/${id}`,
        method: 'get'
    })
}
//删除
export const deleteTree = (id) => {
    return request({
        url: `${gateway.manage}/api/helpCenterCategory/delete/${id}`,
        method: 'get'
    })
}