<template>
  <el-form :model="formData" ref="mobileRuleForm" :rules="rules" class="ns-login-mobile">
    <el-form-item prop="mobile">
      <el-input v-model.trim="formData.mobile" maxlength="11" placeholder="请输入手机号码" type="text" ref="phoneRef">
        <template #prepend>
          <el-select v-model="formData.phonePrefix" style="width: 75px" disabled>
            <el-option label="+86" value="86"></el-option>
          </el-select>
        </template>
      </el-input>
    </el-form-item>
    <el-form-item prop="vercode" class="flex" v-if="smsLoginPictureCode.isNeed">
      <div class="flex">
        <el-input v-model="formData.vercode" autocomplete="off" placeholder="请输入图片验证码" maxlength="4" style="width: 210px"></el-input>
        <img :src="smsLoginPictureCode.base64" mode class="captcha" @click="getCaptcha()" />
      </div>
    </el-form-item>
    <el-form-item prop="dynacode" class="dynacodeBox">
      <el-input v-model="formData.dynacode" maxlength="4" class="codeSend" placeholder="请输入短信验证码">
        <template #append>
          <div class="dynacodeClass" :class="codeDisabled ? 'ns-text-color' : 'ns-text-color-gray'" @click="sendMobileCode('mobileRuleForm')">
            {{ dynacodeData.codeText }}
          </div>
        </template>
      </el-input>
      <!-- <div class="dynacodeClass" :class="codeDisabled ? 'ns-text-color' : 'ns-text-color-gray'" @click="sendMobileCode('mobileRuleForm')">
        {{ dynacodeData.codeText }}
      </div> -->
    </el-form-item>
  </el-form>
</template>
<script setup>
import { ref, reactive, toRefs, onMounted, nextTick } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getPictureCode, smsCode, sendSMSCode } from '@/api/login/index.js'
import { teamUserInfoMultiTeamInfo } from '@/api/company/teamManager.js'
import '@/assets/js/noCaptcha.js'
const emits = defineEmits(['showImgCode', 'showSlideModel'])
const router = useRouter()
const route = useRoute()
const store = useStore()
//验证码登录
const smsLoginPictureCode = reactive({
  isNeed: false, //是否需要验证码
  base64: '' //图片验证码base64编码
})

const rules = {
  mobile: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    { pattern: /^1[23456789]\d{9}$/, message: '请输入正确的手机号码', trigger: 'change' }
  ],
  vercode: [
    {
      required: true,
      message: '请输入图片验证码',
      trigger: 'blur'
    }
  ],
  dynacode: [
    {
      required: true,
      message: '请输入短信验证码',
      trigger: 'blur'
    }
  ]
}
const mobileRuleForm = ref()
const phoneRef = ref()
const state = reactive({
  formData: {
    phonePrefix: '86',
    mobile: '',
    dynacode: '',
    vercode: ''
  },
  dynacodeData: {
    seconds: 60,
    timer: null,
    codeText: '获取验证码',
    isSend: false
  },
  codeDisabled: false,
  url: '',
  nc_token: '',
  sig: '',
  isNc: false,
  nc: null,
  //发送验证码禁用
  enableCodeBtn() {
    if (state.dynacodeData.seconds > 0) {
      state.dynacodeData.codeText = state.dynacodeData.seconds + 's'
      state.dynacodeData.timer = setTimeout(state.enableCodeBtn, 1000) // 1秒后再次调用自己
      state.dynacodeData.seconds--
    } else {
      state.codeDisabled = false
      state.isNc = false
      state.dynacodeData.codeText = '获取验证码'
      state.dynacodeData.seconds = 60
    }
  },
  //获取短信验证码
  sendMobileCode() {
    if (state.codeDisabled) return
    if (smsLoginPictureCode.isNeed && !state.formData.vercode) {
      ElMessage.warning('图片验证码不能为空')
      return
    }
    mobileRuleForm.value.validateField('mobile', (phoneError) => {
      if (!phoneError) {
        if (!state.isNc) {
          // ElMessage.warning('请滑动滑块完成验证')
          // return
          emits('showSlideModel')
          return
        }
        state.codeDisabled = true
        sendSMSCode({
          ncParamDTO: {
            scene: 'nc_register_h5',
            token: state.nc_token,
            sessionId: state.csessionid,
            sig: state.sig
          },
          userPhone: state.formData.mobile,
          phonePrefix: '+86',
          pictureCode: state.formData.vercode,
          smsType: 0
        })
          .then((res) => {
            if (res.code == 200) {
              state.dynacodeData.timer = setTimeout(state.enableCodeBtn, 1000)
              smsLoginPictureCode.isNeed = false
              emits('showImgCode', false)
              ElMessage.success('验证码已发送')
            } else {
              state.codeDisabled = false
              ElMessage.warning(res.message)
              clearTimeout(state.dynacodeData.timer)
            }
          })
          .catch((err) => {
            if (err.code === 10003) {
              //10003 需要图片验证码
              state.codeDisabled = false
              getCaptcha()
            } else if (err.code === 10004) {
              //10004 图片验证码错误
              state.codeDisabled = false
              getCaptcha()
              ElMessage.warning(err.message)
            } else if (err.code === 400) {
              //手机号码格式不正确
              state.codeDisabled = false
              clearTimeout(state.dynacodeData.timer)
            } else {
              state.codeDisabled = false
              clearTimeout(state.dynacodeData.timer)
            }
          })
      } else {
        return
      }
    })
  }
})
const { formData, dynacodeData, codeDisabled, sendMobileCode } = toRefs(state)
const login = ref(null),
  //获取图片验证码
  getCaptcha = async () => {
    const params = {
      userPhoneOrUsername: state.formData.mobile
    }
    let res = await getPictureCode(params)
    if (res.code === 200) {
      smsLoginPictureCode.isNeed = true
      emits('showImgCode', true)
      smsLoginPictureCode.base64 = 'data:image/png;base64,' + res.data
      console.log('params', params)
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
const setFocus = () => {
  phoneRef.value.focus()
}
//解锁滑动锁返回信息
const initLockInfo = (items, token) => {
  console.log(items)
  state.ncMessage = ''
  state.isNc = true
  state.sig = items.sig
  state.nc_token = token
  state.csessionid = items.csessionid
  state.sendMobileCode()
}
//验证码登陆
const mobileLogin = (type) => {
  mobileRuleForm.value.validate((valid) => {
    if (valid) {
      if (!state.isNc) {
        ElMessage.warning('请滑动滑块完成验证')
        return
      }
      // if (this.reg) {
      let wxKey = ''
      if (type == 2) {
        wxKey = route.query.k
      }
      loading.value = true
      smsCode({
        phonePrefix: '86',
        userPhone: state.formData.mobile,
        smsCode: state.formData.dynacode,
        wechatCacheKey: wxKey
      })
        .then(async (res) => {
          // 登录成功
          if (res.code == 200) {
            //  store.dispatch('setLoginOut')
            window.localStorage.clear()
            // if (type == 2) {
            //   window.sessionStorage.wxLogin = '1'
            // } else {
            //   window.sessionStorage.wxLogin = '0'
            // }

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
                teamInfo: JSON.parse(sessionStorage.getItem('vuex')).teamInfo,
                username: JSON.parse(sessionStorage.getItem('vuex')).userInfo.name || '暂无用户名',
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
        })
        .catch(() => {
          loading.value = false
        })
    } else {
      return false
    }
  })
}
defineExpose({
  mobileLogin,
  setFocus,
  initLockInfo
})
</script>
<style lang="scss" scoped>
@import '@/assets/css/plugin.scss';
.captcha {
  vertical-align: top;
  height: 40px;
  cursor: pointer;
  width: 108px;
  margin-left: 10px;
}
:deep(.el-input-group__prepend) {
  background: #fff;
  font-weight: 600;
  font-size: 14px;
  /* identical to box height */
  color: #1d2129;
}
:deep(.el-input__icon) {
  font-size: 8px;
  color: #b5b5bd;
}
.dynacodeClass {
  display: inline-block;
  cursor: pointer;
  width: 106px;
  height: 38px;
  line-height: 38px;
  //   border: 1px solid #e2e8f0;
  //   border-left: none;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  //   margin-left: 12px;
  background: #f4f5f6;
  color: #1664ff;
  text-align: center;
}
.ns-text-color {
  color: #c0c4cc;
}
.ns-text-color-gray {
  background: #fff;
  color: #1664ff;
}
</style>
