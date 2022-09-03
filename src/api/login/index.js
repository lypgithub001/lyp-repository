import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//密码登录
export const loginUser = (data) => {
  return request({
    url: `${gateway.sso}/api/login/password`,
    method: 'POST',
    data
  })
}
//退出登录
export const logout = () => {
  return request({
    url: `${gateway.sso}/api/login/logout`,
    method: 'POST'
  })
}
//获取公钥接口
export const getPublicKey = () => {
  return request({
    url: `${gateway.sso}/api/security/getPublicKey`,
    method: 'POST'
  })
}
//获取图片验证码
export const getPictureCode = (data) => {
  return request({
    url: `${gateway.sso}/api/captcha/getPictureCode`,
    method: 'POST',
    data
  })
}
//短信验证码登录
export const smsCode = (data) => {
  return request({
    url: `${gateway.sso}/api/login/smsCode`,
    method: 'POST',
    data
  })
}
//发送短信验证码
export const sendSMSCode = (data) => {
  return request({
    url: `${gateway.sso}/api/captcha/sendSMSCode`,
    method: 'POST',
    data
  })
}
//注册
export const register = (data) => {
  return request({
    url: `${gateway.sso}/api/login/register`,
    method: 'POST',
    data
  })
}
//短信找回密码验证短信验证码
export const securityVerifySMS = (data) => {
  return request({
    url: `${gateway.sso}/api/security/verifySMS`,
    method: 'POST',
    data
  })
}
//短信找回密码重置密码
export const securityResetPassword = (data) => {
  return request({
    url: `${gateway.sso}/api/security/resetPassword/SMS`,
    method: 'POST',
    data
  })
}
//更换手机号验证原手机号短信
export const verifySMSchangeUserPhone = (data) => {
  return request({
    url: `${gateway.sso}/api/security/verifySMS/changeUserPhone`,
    method: 'POST',
    data
  })
}
//更换手机号
export const userchangerUserPhone = (data) => {
  return request({
    url: `${gateway.sso}/api/user/changerUserPhone`,
    method: 'POST',
    data
  })
}
//更新用户信息
export const updateUserInfo = (data) => {
  return request({
    url: `${gateway.sso}/api/user/update/userInfo`,
    method: 'POST',
    data
  })
}
//通过密码修改密码
export const changeUserPasswordByPassword = (data) => {
  return request({
    url: `${gateway.sso}/api/security/changeUserPasswordByPassword`,
    method: 'POST',
    data
  })
}
// 初始化用户密码
export const setupUserPassword = (data) => {
  return request({
    url: `${gateway.sso}/api/security/setupUserPassword`,
    method: 'POST',
    data
  })
}
// 查询入驻列表
export const orgPublicQueryList = () => {
  return request({
    url: `${gateway.org}/api/public/queryList`,
    method: 'get'
  })
}
// 查询入驻数量
export const orgPublicQueryCount = () => {
  return request({
    url: `${gateway.org}/api/public/queryCount`,
    method: 'get'
  })
}
// 发布企业数量
export const homeGetCompanyNum = (data) => {
  return request({
    url: `${gateway.apply}/api/apply/home/getCompanyNum`,
    method: 'post',
    data
  })
}
// 采购信息集合
export const homeGetApplyList = (data) => {
  return request({
    url: `${gateway.apply}/api/apply/home/getApplyList`,
    method: 'post',
    data
  })
}
// 班帮助中心验证短信验证码
export const captchavalidateSMSCode = (data) => {
  return request({
    url: `${gateway.sso}/api/captcha/validateSMSCode`,
    method: 'post',
    data
  })
}
// 帮助中心发送简化短信验证码
export const captchasendSimpleSMSCode = (data) => {
  return request({
    url: `${gateway.sso}/api/captcha/sendSMSCode`,
    method: 'post',
    data
  })
}
