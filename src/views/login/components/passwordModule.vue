<template>
  <el-form :model="param" :rules="rules" ref="ruleForm">
    <el-form-item prop="username">
      <el-input v-model.trim="param.username" placeholder="账号/手机号" type="text"> </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input :type="flag ? 'text' : 'password'" v-model.trim="param.password" autocomplete="off" placeholder="请输入登录密码">
        <template #suffix>
          <i :class="flag ? 'icon-xianshimima' : 'icon-biyan'" class="iconfont" autocomplete="off" @click="flag = !flag" />
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="vercode" v-if="smsLoginPictureCode.isNeed">
      <el-input v-model="param.vercode" autocomplete="off" :minlength="9" placeholder="请输入图片验证码" maxlength="4" style="width: 210px"> </el-input>
      <img :src="smsLoginPictureCode.base64" mode class="captcha" @click="getCaptcha(2)" />
    </el-form-item>
  </el-form>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { loginUser, getPublicKey, getPictureCode } from '@/api/login/index.js'
import { setRsaEncrpty, decrypt } from '@/utils/common.js'
import { teamUserInfoMultiTeamInfo } from '@/api/company/teamManager.js'
import { getCookie, setCookie, clearCookie } from '@/utils/cookie.js'
const emits = defineEmits(['showImgCode'])
const router = useRouter()
const route = useRoute()
const store = useStore()
const param = reactive({
    username: '',
    password: '',
    vercode: ''
  }),
  //验证码登录
  smsLoginPictureCode = ref({
    isNeed: false, //是否需要验证码
    base64: '' //图片验证码base64编码
  }),
  flag = ref(false)

const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    const reg = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*_\.]{6,18}$/
    if (reg.test(value)) {
      callback()
    } else {
      callback(new Error('请输入密码'))
    }
  }
}
onMounted(() => {
  if (getCookie('userLoginPwdInfo')) {
    let info = JSON.parse(
      decrypt(
        getCookie('userLoginPwdInfo'),
        'MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBANKFOFan261DdZEdSsYnBmbSWfHUiA/k9RoYwvHui5CDbM+rTYF/KeAXPh0eSu/wm8UB8cv2dj2cCLw9Br/MlzIWekVFwMAL/mxEFFoaseMkxjx+LhyQnj2/uziMWKKntcLHvaf1Bjy+ysgaxvXjvZ8T2ahtUemORWNRvmq1zxyBAgMBAAECgYBQWqc5dFLGXKRoYmzjG4w2/P117/CLWJIxhtgKLko5O+Dxl2o7DoW2UkjUJnbmBMoANZDMkGNrer5e01BbL0VaGLc8t5h4BPjWZGnARuqo8B1++rYKSWGOzpfTNMukFgNsyRF+XhEuv6tn7OKVcOckTjboEowHkOuyNjqhEJkQjQJBAOydDpqiPrUgh6z7mTEMgPSXeGSgJOboIQp7mojeoFu5PyG6Mw6koz/yJX3smeeXqOZD/YD8byn4qplu/auEE7MCQQDjxNzeNwTumG6XXH6hoYl/r2JapuWq4S89bypyTPXythEA9X5CF2qN5g5SM7Uy4hvoGtPlGPbQyUGMJH3sewT7AkBFIMGiheJCMsXQ0RT5koiebR58b5k4aPs2P9RvRnOdOKrsJKVEEu+rAAjaGGUCl3l+BMEsjRPBNGhLOXUdRhInAkEAjTv/MROwzTpcKSNDqnn+Rty8AjZHZ6RmpJOQIHw0biITfSK8/cKDYiXrb3F8xGaMo2ovRnoqYeDJ8lqWctL9jQJADotOIgs5PtSBhOKTsqfqinkAYcGaaP01RnojkWfLpQVp5poBsswojJSJS/H4QIlyo6lmZq/V+Pynile8K4WYaA=='
      )
    )
    param.username = info.username
    param.password = info.password
  }
})
const rules = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'change'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'change' },
    { required: true, validator: validatePass, trigger: 'change' }
  ]
}
const ruleForm = ref(null),
  //获取图片验证码
  getCaptcha = async () => {
    const params = {
      userPhoneOrUsername: param.username
    }
    let res = await getPictureCode(params)
    if (res.code === 200) {
      smsLoginPictureCode.value.isNeed = true
      emits('showImgCode', true)
      smsLoginPictureCode.value.base64 = 'data:image/png;base64,' + res.data
    }
  },
  //加载动画
  loading = ref(false)
//判断调整传值
const goPageInfo = (name, path, text) => {
  store.commit('clearPageSet')
  store.commit('clearTags', { name: name, title: text, path: path })
  router.push(path)
}
//登录
const submitForm = async (checked) => {
  if (smsLoginPictureCode.value.isNeed && !param.vercode) {
    ElMessage.error('图片验证码不能为空')
    return
  }
  ruleForm.value.validate(async (valid) => {
    if (valid) {
      let pubKey = '' //公钥
      let keyId = '' //密码参数
      //定义登录相关字段
      let encryData = {
        pictureCode: param.vercode || '',
        pwd: param.password,
        timestamp: new Date().getTime(),
        account: param.username
      }
      try {
        loading.value = true
        //获取密钥
        let keyRes = await getPublicKey()
        if (keyRes.code === 200) {
          pubKey = keyRes.data.publicKey
          keyId = keyRes.data.keyId
        } else {
          loading.value = false
          ElMessage.error(keyRes.message)
        }

        // 登录
        let res = await loginUser({
          keyId: keyId,
          data: setRsaEncrpty(JSON.stringify(encryData), pubKey)
        })

        if (res.code == 200) {
          // 如果是记住密码,将账号密码存到本地
          if (checked) {
            clearCookie('userLoginPwdInfo')
            setCookie(
              {
                userLoginPwdInfo: setRsaEncrpty(
                  JSON.stringify({ password: param.password, username: param.username }),
                  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDShThWp9utQ3WRHUrGJwZm0lnx1IgP5PUaGMLx7ouQg2zPq02BfyngFz4dHkrv8JvFAfHL9nY9nAi8PQa/zJcyFnpFRcDAC/5sRBRaGrHjJMY8fi4ckJ49v7s4jFiip7XCx72n9QY8vsrIGsb1472fE9mobVHpjkVjUb5qtc8cgQIDAQAB'
                )
              },
              30
            )
          } else {
            clearCookie('userLoginPwdInfo')
          }
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('userId', res.data.userId)
          //获取用户所有团队列表
          try {
            let resInfo = await teamUserInfoMultiTeamInfo()
            if (resInfo.code === 200) {
              if (resInfo.data?.length > 0) {
                //获取用户当前团队信息
                store
                  .dispatch('getTeamInfo')
                  .then(() => {
                    //获取树列表
                    store
                      .dispatch('getTreeList')
                      .then((resBtn) => {
                        ElMessage.success('登录成功')
                        if (JSON.parse(JSON.stringify(resBtn.buttonSet)).some((ele) => ele === 'XS' || ele === 'CG')) {
                          store
                            .dispatch('getUserHabitsList', `business,${JSON.parse(sessionStorage.getItem('vuex')).teamInfo.id}`)
                            .then((res) => {
                              if (res[0]?.content?.companyType == 'market' && JSON.parse(JSON.stringify(resBtn.buttonSet)).some((ele) => ele === 'XS')) {
                                goPageInfo('market-dashboard', '/market/dashboard', '销售大脑')
                              } else if (
                                res[0]?.content?.companyType == 'purchase' &&
                                JSON.parse(JSON.stringify(resBtn.buttonSet)).some((ele) => ele === 'CG')
                              ) {
                                goPageInfo('purchase-dashboard', '/purchase/dashboard', '采购大脑')
                              } else {
                                if (JSON.parse(JSON.stringify(resBtn.buttonSet)).some((ele) => ele === 'CG')) {
                                  goPageInfo('purchase-dashboard', '/purchase/dashboard', '采购大脑')
                                } else {
                                  goPageInfo('market-dashboard', '/market/dashboard', '销售大脑')
                                }
                              }
                            })
                            .catch(() => {
                              if (JSON.parse(JSON.stringify(resBtn.buttonSet)).some((ele) => ele === 'CG')) {
                                goPageInfo('purchase-dashboard', '/purchase/dashboard', '采购大脑')
                              } else {
                                goPageInfo('market-dashboard', '/market/dashboard', '销售大脑')
                              }
                            })
                        } else {
                          goPageInfo('company-companyCertification', '/company/companyCertification', '公司认证管理')
                        }
                        loading.value = false
                      })
                      .catch((error) => {
                        ElMessage.success('登录成功')
                        loading.value = false
                        goPageInfo('company-joinCompany', '/company/joinCompany', '申请加入公司')
                      })
                  })
                  .catch(() => {
                    loading.value = false
                    goPageInfo('company-companyCertification', '/company/companyCertification', '公司认证管理')
                  })
              } else {
                loading.value = false
                goPageInfo('company-joinCompany', '/company/joinCompany', '申请加入公司')
              }
            } else {
              goPageInfo('company-joinCompany', '/company/joinCompany', '申请加入公司')
            }
            loading.value = false
          } catch (error) {
            ElMessage.success('登录成功')
            loading.value = false
            goPageInfo('company-joinCompany', '/company/joinCompany', '申请加入公司')
          }
          if (route.query.mall) {
            const res = await store.dispatch('queryUserInfo')
            const resTeam = await store.dispatch('getTeamInfo')

            if (!resTeam) {
              ElMessage.warning('当前暂无团队信息，请新建团队后前往商城')
              return
            }

            const params = {
              userId: localStorage.getItem('userId'),
              teamInfo: resTeam,
              username: res.name,
              token: localStorage.getItem('token')
            }

            let backParams = ''
            if (router.currentRoute.value.fullPath.includes('&')) {
              const pos = router.currentRoute.value.fullPath.indexOf('&')
              backParams = backParams.concat(router.currentRoute.value.fullPath.slice(pos + 1))
            }

            store.dispatch('toMall', { path: route.query.mall, backParams, ycc: params })
          }
        } else {
          ElMessage.warning(res.message)
        }
        loading.value = false
      } catch (error) {
        loading.value = false
        if (error.code === 10003) {
          //10003 需要图片验证码
          getCaptcha()
        } else if (error.code === 10004) {
          //10004 图片验证码错误
          getCaptcha()
        } else if (error.code === 10094) {
          //10094 密码错误
          getCaptcha()
        }
      }
    } else {
      return false
    }
  })
}

defineExpose({
  submitForm
})
</script>
<style lang="scss" scoped>
.iconfont {
  margin-top: 3px;
  font-size: 14px;
  cursor: pointer;
  display: inline-block;
}
.captcha {
  vertical-align: top;
  height: 40px;
  cursor: pointer;
  width: 106px;
  margin-left: 10px;
}
</style>
