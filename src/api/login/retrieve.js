import request from '@/utils/request'
import gateway from '@/utils/gateway' // 网关

//短信找回密码验证短信验证码
export const securityVerifySMS = (data) => {
  return request({
    url: `${gateway.sso}/api/security/verifySMS`,
    method: 'post',
    data
  })
}

//短信找回密码重置密码
export const resetPasswordSms = (data) => {
  return request({
    url: `${gateway.sso}/api/security/resetPassword/SMS`,
    method: 'post',
    data
  })
}

// 发送短信验证码
export const sendSMSCode = (data) => {
  return request({
    url: `${gateway.sso}/api/captcha/sendSMSCode`,
    method: 'post',
    data
  })
}
