<template>
  <div>
    <el-form :model="formData" ref="mobileRuleForm" :rules="rules" class="ns-login-mobile">
      <el-form-item prop="userPhone" v-if="isRegister === 2 || nextPreInfo === 0">
        <el-input v-model.trim="formData.userPhone" maxlength="11" placeholder="请输入手机号码" type="text">
          <template #prepend>
            <el-select v-model="formData.phonePrefix" style="width: 75px" disabled>
              <el-option label="+86" value="86"></el-option>
            </el-select>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="vercode" v-if="(isRegister === 2 || nextPreInfo === 0) && smsLoginPictureCode.isNeed" class="flex">
        <div class="flex">
          <el-input v-model="formData.vercode" autocomplete="off" placeholder="请输入图片验证码" maxlength="4" style="width: 210px"></el-input>
          <img :src="smsLoginPictureCode.base64" mode class="captcha" @click="getCaptcha()" />
        </div>
      </el-form-item>
      <el-form-item prop="dynacode" v-if="isRegister === 2 || nextPreInfo === 0">
        <el-input v-model="formData.dynacode" maxlength="4" style="width: 210px" placeholder="请输入短信验证码"> </el-input>
        <div class="dynacodeClass" :class="codeDisabled ? 'ns-text-color' : 'ns-text-color-gray'" @click="sendMobileCode()">
          {{ dynacodeData.codeText }}
        </div>
      </el-form-item>

      <el-form-item prop="plainPassword" v-if="isRegister === 2 || nextPreInfo === 1">
        <el-input type="password" v-model="formData.plainPassword" placeholder="设置登录密码" autocomplete="off" auto-complete="new-password"></el-input>
      </el-form-item>
      <!-- <el-form-item prop="checkPass" v-if="isRegister === 2 || nextPreInfo === 1">
        <el-input type="password" v-model="formData.checkPass" placeholder="再次输入密码" autocomplete="off" auto-complete="new-password"></el-input>
      </el-form-item> -->
    </el-form>
    <div class="login-btn">
      <el-button type="primary" class="dl-btn" v-show="isRegister === 1" @click="findPassword">{{ nextPreInfo === 0 ? '下一步' : '确定' }} </el-button>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, toRefs, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getPublicKey, getPictureCode, sendSMSCode, register, securityVerifySMS, securityResetPassword } from '@/api/login/index.js'
import { setRsaEncrpty } from '@/utils/common.js'
import { teamUserInfoMultiTeamInfo } from '@/api/company/teamManager.js'
import { regulars } from '@/utils/common.js'
import '@/assets/js/noCaptcha.js'

const props = defineProps({
  isRegister: {
    type: Number,
    default: 1
  }
})
const emits = defineEmits(['changeSuccess', 'showSlideModel'])
//判断是否下一步
const nextPreInfo = ref(0)
const router = useRouter()
const store = useStore()
//解锁滑动锁返回信息
const initLockInfo = (items, token) => {
  state.ncMessage = ''
  state.isNc = true
  state.sig = items.sig
  state.nc_token = token
  state.csessionid = items.csessionid
  state.sendMobileCode()
}
//验证码登录
const smsLoginPictureCode = ref({
  isNeed: false, //是否需要验证码
  base64: '' //图片验证码base64编码
})
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    const reg = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*_\.]{6,18}$/
    if (reg.test(value)) {
      if (mobileRuleForm.value.model.userAccount == value) {
        callback(new Error('用户名不能和密码相同'))
      } else {
        callback()
      }
    } else {
      callback(new Error('密码必须包含数字、字母，长度6-18位'))
    }
    if (state.formData.checkPass !== '') {
      mobileRuleForm.value.validateField('checkPass')
    }
    callback()
  }
}
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== state.formData.plainPassword) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}
const rules = {
  userPhone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'change'
    },
    { pattern: regulars.phoneReg, message: '请输入正确的手机号码', trigger: ['change', 'blur'] }
  ],
  plainPassword: [
    { min: 6, max: 18, message: '密码长度在 6 到 18 位字符', trigger: 'change' },
    { required: true, validator: validatePass, trigger: 'change' }
  ],
  checkPass: [{ required: true, validator: validatePass2, trigger: 'change' }],
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
const state = reactive({
  formData: {
    phonePrefix: '86',
    userPhone: '',
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
    if (smsLoginPictureCode.value.isNeed && !state.formData.vercode) {
      ElMessage.warning('图片验证码不能为空')
      return
    }
    mobileRuleForm.value.validateField('userPhone', (phoneError) => {
      if (!phoneError) {
        if (!state.isNc) {
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
          userPhone: state.formData.userPhone,
          phonePrefix: '+86',
          pictureCode: state.formData.vercode,
          smsType: props.isRegister === 2 ? 0 : 1
        })
          .then((res) => {
            if (res.code == 200) {
              state.dynacodeData.timer = setTimeout(state.enableCodeBtn, 1000)
              smsLoginPictureCode.value.isNeed = false
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
      userPhoneOrUsername: state.formData.userPhone
    }
    let res = await getPictureCode(params)
    if (res.code === 200) {
      smsLoginPictureCode.value.isNeed = true
      smsLoginPictureCode.value.base64 = 'data:image/png;base64,' + res.data
    }
  },
  //加载动画
  loading = ref(false)
//找回密码

const publicData = ref({}) //验证手机号返回对象
const findPassword = () => {
  mobileRuleForm.value.validate(async (valid) => {
    if (valid) {
      console.log(nextPreInfo.value)
      if (nextPreInfo.value === 0) {
        if (!state.isNc) {
          ElMessage.warning('请滑动滑块完成验证')
          return
        }
        securityVerifySMS({
          phonePrefix: '86',
          userPhone: state.formData.userPhone,
          smsCode: state.formData.dynacode
        }).then((res) => {
          // 登录成功
          if (res.code == 200) {
            nextPreInfo.value = 1
            publicData.value = res.data
          } else {
            //10106短信验证码错误
            ElMessage.warning(res.message)
          }
        })
      } else {
        let encryData = {
          plainPassword: state.formData.plainPassword,
          timestamp: new Date().getTime(),
          userPhoneOrUsername: state.formData.userPhone
        }
        securityResetPassword({
          keyId: publicData.value.keyId,
          data: setRsaEncrpty(JSON.stringify(encryData), publicData.value.publicKey)
        }).then((res) => {
          if (res.code == 200) {
            ElMessage.success('密码重置成功！')
            emits('changeSuccess')
          } else {
            ElMessage.warning(res.message)
          }
        })
      }
    } else {
      return false
    }
  })
}
//判断调整传值
const goPageInfo = (name, path, text) => {
  store.commit('clearPageSet')
  store.commit('clearTags', { name: name, title: text, path: path })
  router.push(path)
}
//注册
const mobileRegister = (type) => {
  mobileRuleForm.value.validate(async (valid) => {
    if (valid) {
      if (!state.isNc) {
        ElMessage.warning('请滑动滑块完成验证')
        return
      }
      let pubKey = '' //公钥
      let keyId = '' //密码参数
      let encryData = {
        timestamp: new Date().getTime(),
        plainPassword: state.formData.plainPassword
      }
      await getPublicKey().then((res) => {
        console.log(res)
        if (res.code === 200) {
          pubKey = res.data.publicKey
          keyId = res.data.keyId
        }
      })
      state.formData.userAccount = state.formData.userPhone
      register({
        keyId: keyId,
        phonePrefix: '+86',
        smsCode: state.formData.dynacode,
        username: state.formData.userAccount,
        userPhone: state.formData.userPhone,
        data: setRsaEncrpty(JSON.stringify(encryData), pubKey)
      }).then(async (res) => {
        // 登录成功
        if (res.code == 200) {
          ElMessage.success('注册成功')
          window.localStorage.clear()
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
                        //如果有采购或销售权限
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
            loading.value = false
            goPageInfo('company-joinCompany', '/company/joinCompany', '申请加入公司')
          }
        } else {
          //10106短信验证码错误
          ElMessage.warning(res.message)
        }
      })
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
defineExpose({
  mobileRegister,
  initLockInfo
})
</script>
<style lang="scss" scoped>
@import '@/assets/css/plugin.scss';
.login-btn {
  margin-top: 8px;
}
.login-btn button {
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  font-size: 16px;
  font-family: 'siyuan, siyuan-Medium';
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  line-height: 21px;
}
.captcha {
  vertical-align: top;
  height: 40px;
  cursor: pointer;
  width: 108px;
  margin-left: 10px;
}

.dynacodeClass {
  display: inline-block;
  cursor: pointer;
  width: 106px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  margin-left: 12px;
  background: #f4f5f6;
  color: #1664ff;
  text-align: center;
  border-radius: 4px;
}
.ns-text-color {
  color: #c0c4cc;
}
.ns-text-color-gray {
  background: #fff;
  color: #1664ff;
}
</style>
