<template>
  <div v-show="!showBind" id="login_container"></div>
</template>
<script setup>
import { ref, reactive, toRefs, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import { getPictureCode, smsCode, sendSMSCode } from '@/api/login/index.js'
import '@/assets/js/noCaptcha.js'

const router = useRouter()
const route = useRoute()
const showBind = ref(false)

onMounted(() => {
  state.showWXLogin()
})
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
  //展示微信登录弹窗
  showWXLogin() {
    var obj = new WxLogin({
      self_redirect: true,
      id: 'login_container',
      appid: 'wx9269b83a8b9d4519',
      scope: 'snsapi_login',
      redirect_uri: state.url,
      state: Math.ceil(Math.random() * 1000),
      style: 'black',
      href: 'data:text/css;base64,LmltcG93ZXJCb3ggLnFyY29kZSB7CiAgICB3aWR0aDogMjIwcHg7CiAgICBtYXJnaW4tdG9wOiAxNXB4OwogICAgYm9yZGVyOiAxcHggc29saWQgI2UyZTJlMjsKICAgIGJvcmRlci1yYWRpdXM6IDRweDsKfQouaW1wb3dlckJveCAudGl0bGUgewogICAgdGV4dC1hbGlnbjogY2VudGVyOwogICAgZGlzcGxheTogbm9uZTsKICAgIGZvbnQtc2l6ZTogMjBweDsKfQ=='
    })
  }
})
</script>
<style lang="scss" scoped>
@import '@/assets/css/plugin.scss';
#login_container {
  text-align: center;
  height: 300px;
  margin-top: -10px;
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
