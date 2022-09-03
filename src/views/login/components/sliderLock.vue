<template>
  <div class="siderLockBox">
    <div class="sliderBox">
      <div class="sliderTitle flex-between">
        <div>安全验证</div>
        <i class="icon-a-cuowuguanbi iconfont" @click="closeModel"></i>
      </div>
      <div class="cell" style="position: relative; height: 40px">
        <div class="noCaptcha" id="nc" style="margin-left: auto; margin-right: auto"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive, defineEmits } from 'vue'
import '@/assets/js/noCaptcha.js'
const emits = defineEmits(['sliderSucess', 'close'])

onMounted(() => {
  refreshNC()
})
const state = reactive({
  nc_token: '',
  isNc: false,
  nc: null
})
const closeModel = () => {
  emits('close')
}
const refreshNC = () => {
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
      emits('sliderSucess', data)
    },
    error: (e) => {
      console.log(e)
      nextTick(() => {
        state.nc.reset()
      })
      state.isNc = false
      //   ElMessage.warning('请重新滑动滑块完成验证')
      state.nc.reset()
    }
  })
  NoCaptcha.setEnabled(true)
  nc.reset() //请务必确保这里调用一次reset()方法
  NoCaptcha.upLang(NcType, {
    LOADING: '加载中...', //加载
    SLIDER_LABEL: '请按住滑块,拖动到最右边', //等待滑动
    CHECK_Y: '验证通过', //通过
    ERROR_TITLE: '非常抱歉，这出错了...<a id="reset" href="javascript:state.nc.reset()">刷新</a>再来一次', //拦截
    CHECK_N: '验证未通过', //准备唤醒二次验证
    OVERLAY_INFORM: '经检测你当前操作环境存在风险，请输入验证码', //二次验证
    TIPS_TITLE: '验证码错误，请重新输入' //验证码输错时的提示
  })
  state.nc = nc
}
</script>
<style lang="scss" scoped>
.siderLockBox {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 8px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 99;
  .sliderBox {
    background: #ffffff;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.15);
    border-radius: 4px;
    width: 330px;
    height: 134px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .sliderTitle {
      margin: 0 30px;
      padding: 20px 0;
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
      }
    }
  }
  :deep(._nc .stage1) {
    height: 40px;
  }
  :deep(._nc .stage1 .slider) {
    background-color: #f7f8fa;
    height: 40px;
    box-shadow: none;
    border: 1px solid #c9cdd4;
  }
  :deep(._nc .stage1 .label) {
    height: 40px;
    line-height: 40px;
    font-weight: 400;
    font-size: 14px;
    color: #1d2129;
  }
  :deep(._nc .stage1 .button) {
    height: 40px;
    width: 40px;
    border-right: 1px solid #c9cdd4;
  }
  :deep(._nc .icon-slide-arrow) {
    font-size: 18px;
    line-height: 40px;
    margin: 0 auto;
  }
  :deep(._nc .stage1 .track div, ._nc .stage1 .label) {
    height: 40px;
    line-height: 40px;
  }
  :deep(._nc .stage1 .icon.yes) {
    margin: 0 auto;
    line-height: 40px;
    font-size: 22px;
  }
}
</style>
