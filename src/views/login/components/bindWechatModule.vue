<template>
  <div v-show="showBind" class="bindWechatModuleBox" @mousewheel.prevent>
    <div class="ns-login-mobile">
      <div class="sliderTitle flex-between">
        <div>微信绑定手机号</div>
        <i class="icon-a-cuowuguanbi iconfont" @click="closeModel"></i>
      </div>
      <el-form :model="formData" ref="mobileRuleForm" :rules="rules" class="bindForm">
        <el-form-item prop="mobile">
          <el-input v-model.trim="formData.mobile" maxlength="11" placeholder="请输入手机号码" type="text">
            <template #prepend>
              <el-select v-model="formData.phonePrefix" style="width: 75px" disabled>
                <el-option label="+86" value="86"></el-option>
              </el-select>
            </template>
          </el-input>
        </el-form-item>
        <!-- <div class="cell" style="position: relative; height: 35px; margin: 20px 0 24px">
          <div class="noCaptcha" id="wxNc" style="margin-left: auto; margin-right: auto"></div>
        </div> -->

        <el-form-item prop="vercode" v-if="smsLoginPictureCode.isNeed">
          <el-input v-model="formData.vercode" autocomplete="off" placeholder="请输入图片验证码" maxlength="4" style="width: 210px"> </el-input>
          <img :src="smsLoginPictureCode.base64" mode class="captcha" @click="getCaptcha()" />
        </el-form-item>
        <el-form-item prop="dynacode">
          <el-input v-model="formData.dynacode" maxlength="4" placeholder="请输入短信验证码">
            <template #append>
              <div class="dynacodeClass" :class="codeDisabled ? 'ns-text-color' : 'ns-text-color-gray'" @click="sendMobileCode()">
                {{ dynacodeData.codeText }}
              </div>
            </template>
          </el-input>
        </el-form-item>
        <el-button type="primary" class="primaryBtn" @click="mobileBind('bind')">确认绑定 </el-button>
      </el-form>
    </div>
    <!-- 滑动解锁 -->
    <sliderLock ref="sliderLockRef" v-if="showSlider" @close="showSlider = false" @sliderSucess="sliderSucess"></sliderLock>
  </div>
</template>
<script setup>
import { ref, reactive, toRefs, onMounted, nextTick } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getPictureCode, smsCode, sendSMSCode } from '@/api/login/index.js'
import '@/assets/js/noCaptcha.js'
import { teamUserInfoMultiTeamInfo } from '@/api/company/teamManager.js'
import sliderLock from '@/views/login/components/sliderLock.vue'

const emits = defineEmits(['close'])
const router = useRouter()
const route = useRoute()
const store = useStore()
const showBind = ref(true)
const showSlider = ref(false)
const sliderSucess = (val, token) => {
  state.nc_token = token
  console.log(val)
  nextTick(() => {
    showSlider.value = false
  })
  console.log(showSlider.value)
  state.ncMessage = ''
  state.sig = val.sig
  state.csessionid = val.csessionid
  state.isNc = true
  state.sendMobileCode()
}
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
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
}
const closeModel = () => {
  sessionStorage.setItem('closeBindWechat', 1)
  emits('close')
}
onMounted(() => {
  if (route.query.s && route.query.s == 1 && route.query.k) {
    showBind.value = true
  }
  //   state.refreshNC()
})
const mobileRuleForm = ref()
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
  url: encodeURIComponent(import.meta.env.VITE_VUE_APP_ENV + '/api-sso/api/login/wechat/web'),
  nc_token: '',
  QR: 'QR', //二维码登录
  sig: '',
  nc: null,
  isNc: false,
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
    //  state.nc_token = ['FFFF0N00000000009822', new Date().getTime(), Math.random()].join(':')
    if (state.codeDisabled) return
    if (smsLoginPictureCode.isNeed && !state.formData.vercode) {
      ElMessage.warning('图片验证码不能为空')
      return
    }
    mobileRuleForm.value.validateField('mobile', (phoneError) => {
      if (!phoneError) {
        if (!state.isNc) {
          // ElMessage.warning('请滑动滑块完成验证')
          showSlider.value = true
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
      smsLoginPictureCode.base64 = 'data:image/png;base64,' + res.data
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
//手机绑定微信
const mobileBind = () => {
  mobileRuleForm.value.validate((valid) => {
    if (valid) {
      if (!state.isNc) {
        ElMessage.warning('请滑动滑块完成验证')
        return
      }
      // if (this.reg) {
      let wxKey = ''
      wxKey = route.query.k
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
</script>
<style lang="scss" scoped>
@import '@/assets/css/plugin.scss';
:deep(.el-input-group__prepend) {
  background: #fff;
  font-weight: 600;
  font-size: 14px;
  /* identical to box height */
  color: #1d2129;
}
.bindWechatModuleBox {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  .primaryBtn {
    width: 100%;
    height: 40px;
    margin: 10px auto 45px;
  }
  .ns-login-mobile {
    background: #fff;
    width: 420px;
    min-height: 298px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 8px;
    .sliderTitle {
      margin: 0 24px 0 45px;
      padding: 45px 0 20px;
      div {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        /* identical to box height, or 150% */
        text-align: center;
        color: #000000;
      }
      i {
        color: #4e5969;
        font-size: 26px;
        line-height: 24px;
        cursor: pointer;
        display: inline-block;
        margin-top: -21px;
      }
    }
    .bindForm {
      padding: 0 45px;
    }
  }
}
.captcha {
  vertical-align: top;
  height: 40px;
  cursor: pointer;
  width: 108px;
  margin-left: 10px;
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
