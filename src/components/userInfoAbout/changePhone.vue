<template>
  <div>
    <el-dialog-module
      :isShow="isShow"
      :title="title"
      @onClose="onClose"
      :closeOnClickModal="false"
      :dialogButton="dialogButton"
      @onSubmit="save"
      :loading="loading"
      width="600px"
    >
      <template #content>
        <el-form size="small" label-position="top" :rules="rules" ref="formRef" :model="formData">
          <el-form-item prop="mobile" v-if="!switchStatus">
            <el-input v-model.trim="formData.mobile" maxlength="11" placeholder="请输入原手机号码" type="text">
              <template #prepend>
                <el-select v-model="formData.phonePrefix" style="width: 75px" disabled>
                  <el-option label="+86" value="86"></el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
          <div class="cell" v-show="!switchStatus" style="position: relative; height: 35px; margin: 0 auto 20px; width: 330px">
            <div class="noCaptcha" id="nc" style="margin-left: auto; margin-right: auto"></div>
          </div>
          <el-form-item prop="userPhone" v-show="switchStatus">
            <el-input v-model.trim="formData.userPhone" maxlength="11" placeholder="请输入新手机号码" type="text">
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
          <el-form-item prop="dynacode">
            <el-input v-model="formData.dynacode" maxlength="4" style="width: 210px" placeholder="请输入短信验证码"> </el-input>
            <div class="dynacodeClass" :class="codeDisabled ? 'ns-text-color' : 'ns-text-color-gray'" @click="sendMobileCode()">
              {{ dynacodeData.codeText }}
            </div>
          </el-form-item>
        </el-form>
      </template>
    </el-dialog-module>
  </div>
</template>
<script setup>
import { toRefs, reactive, onMounted, ref, nextTick } from 'vue'
import { getPictureCode, sendSMSCode, verifySMSchangeUserPhone, userchangerUserPhone } from '@/api/login/index.js'
import '@/assets/js/noCaptcha.js'
import { ElMessage } from 'element-plus'
const emits = defineEmits(['closeModel'])
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
//是否已验证原手机号短信
const switchStatus = ref(false)
const title = ref('修改手机号')
const dialogButton = ref(['取消', '下一步'])
const isShow = ref(false)

const onClose = () => {
  emits('closeModel', false)
  isShow.value = false
}
const formRef = ref()
const verifyStr = ref('')
//提交表单
const save = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        let url
        let params
        if (!switchStatus.value) {
          url = verifySMSchangeUserPhone
        } else {
          url = userchangerUserPhone
        }
        if (switchStatus.value) {
          params = {
            phonePrefix: state.formData.phonePrefix,
            smsCode: state.formData.dynacode,
            userPhone: state.formData.userPhone,
            verifyStr: verifyStr.value
          }
        } else {
          params = {
            phonePrefix: state.formData.phonePrefix,
            smsCode: state.formData.dynacode,
            userPhone: state.formData.mobile
          }
        }

        let res = await url(params)
        if (res.code === 200) {
          if (!switchStatus.value) {
            if (res.data) {
              verifyStr.value = res.data
              state.codeDisabled = false
              state.formData.dynacode = ''
              state.dynacodeData.codeText = '获取验证码'
              clearTimeout(state.dynacodeData.timer)
              switchStatus.value = true
            }
          } else {
            ElMessage.success('账号修改成功')
            emits('closeModel', true)
          }
        } else {
          ElMessage.warning(res.message)
        }
      } catch (error) {}
    } else {
      console.log('error submit!!')
      return false
    }
  })
}

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
      state.nc.reset()
      state.dynacodeData.codeText = '获取验证码'
      state.dynacodeData.seconds = 60
    }
  },
  //获取短信验证码
  sendMobileCode() {
    if (state.codeDisabled) return
    if (!state.isNc && !switchStatus.value) {
      ElMessage.warning('请滑动滑块完成验证')
      return
    }
    if (smsLoginPictureCode.isNeed && !state.formData.vercode) {
      ElMessage.warning('图片验证码不能为空')
      return
    }
    let phoneInfo = ''
    if (switchStatus.value) {
      phoneInfo = 'userPhone'
    } else {
      phoneInfo = 'mobile'
    }
    formRef.value.validateField(phoneInfo, (phoneError) => {
      if (!phoneError) {
        state.codeDisabled = true
        sendSMSCode({
          ncParamDTO: {
            scene: 'nc_register_h5',
            token: state.nc_token,
            sessionId: state.csessionid,
            sig: state.sig
          },
          userPhone: switchStatus.value ? state.formData.userPhone : state.formData.mobile,
          phonePrefix: '+86',
          pictureCode: state.formData.vercode,
          smsType: 3
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
              ElMessage.warning(res.message)
              clearTimeout(state.dynacodeData.timer)
            }
          })
      } else {
        return
      }
    })
  },
  refreshNC() {
    state.nc_token = ['FFFF0N00000000009822', new Date().getTime(), Math.random()].join(':')
    state.scene = 'nc_register_h5'
    let NcType = ''
    NcType = '#nc'
    var nc = NoCaptcha.init({
      renderTo: NcType,
      appkey: 'FFFF0N00000000009822',
      scene: state.scene,
      token: state.nc_token,
      // elementID: ["usernameID"],
      is_Opt: 0,
      language: 'cn',
      timeout: 1000,
      retryTimes: 1,
      errorTimes: 1,
      inline: false,
      apimap: {
        // 'analyze': '//a.com/nocaptcha/analyze.jsonp',
        // 'uab_Url': '//aeu.alicdn.com/js/uac/909.js',
      },
      bannerHidden: false,
      initHidden: false,
      callback: (data) => {
        console.log(data)
        state.isNc = true
        state.ncMessage = ''
        state.sig = data.sig
        state.csessionid = data.csessionid
      },
      error: (e) => {
        console.log(e)
        state.isNc = false
        ElMessage.warning('请滑动滑块完成验证')
      }
    })
    NoCaptcha.setEnabled(true)
    nc.reset() //请务必确保这里调用一次reset()方法
    NoCaptcha.upLang(NcType, {
      LOADING: '加载中...', //加载
      SLIDER_LABEL: '请按住滑块,拖动到最右边', //等待滑动
      CHECK_Y: '验证通过', //通过
      ERROR_TITLE: '非常抱歉，这出错了...', //拦截
      CHECK_N: '验证未通过', //准备唤醒二次验证
      OVERLAY_INFORM: '经检测你当前操作环境存在风险，请输入验证码', //二次验证
      TIPS_TITLE: '验证码错误，请重新输入' //验证码输错时的提示
    })
    state.nc = nc
  }
})
const { formData, dynacodeData, codeDisabled, sendMobileCode } = toRefs(state)
const init = () => {
  isShow.value = true
  nextTick(() => {
    state.refreshNC()
  })
}
const login = ref(null),
  //获取图片验证码
  getCaptcha = async () => {
    const params = {
      userPhoneOrUsername: switchStatus.value ? state.formData.userPhone : state.formData.mobile
    }
    let res = await getPictureCode(params)
    if (res.code === 200) {
      smsLoginPictureCode.isNeed = true
      smsLoginPictureCode.base64 = 'data:image/png;base64,' + res.data
      console.log('params', params)
    }
  },
  //加载动画
  loading = ref(false)
defineExpose({
  init
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
:deep(.el-form-item--small .el-form-item__content) {
  line-height: 40px;
  margin-bottom: 20px;
}
:deep(.el-input--small .el-input__inner) {
  height: 40px;
  line-height: 40px;
}
:deep(.el-input.is-disabled .el-input__icon) {
  line-height: 40px;
}
:deep(.el-form-item__content .el-input-group) {
  vertical-align: top;
  width: 330px;
}
:deep(.el-form-item--small.el-form-item) {
  width: 330px;
  margin: 0 auto;
}
:deep(#nc ._nc .stage1 .slider) {
  left: 0;
  margin: 0;
}
:deep(._nc .stage) {
  padding: 0 !important;
}
form {
  padding-left: 45px;
}
</style>
