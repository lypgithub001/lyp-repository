<template lang="">
  <div style="width: 100%; height: 100%">
    <div class="successBox">
      <svg-icon :name="'loginWeChat'" v-if="titleMessage" width="23px" height="19px" />
      <div class="loginSuccess">{{ titleMessage }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
const titleMessage = ref('确认成功，正在跳转...')
const route = useRoute()
const state = reactive({
  // 通过code获取微信信息
  getWXcode(query) {
    // 获取code
    var url = location.search
    var theRequest = new Object()
    if (url.indexOf('?') != -1) {
      var str = url.substr(1)
      let strs = str.split('&')
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split('=')[0]] = strs[i].split('=')[1]
      }
    }
    if (theRequest.success == 1) {
      top.document.location.href = `${location.protocol}//${location.host}/`
    } else if (theRequest.success == 0 && theRequest.message) {
      titleMessage.value = decodeURI(theRequest.message)
    }
    // return theRequest;
    // 打印code
  }
})
// 因为是在当前页面添加code的，界面没有刷新，只是添加参数，所以就必须监测路由参数的变化
watch(
  () => route.path,
  () => {
    if (route.query.s) {
      state.getWXcode()
    }
  }
)
state.getWXcode()
</script>
<style lang="scss" scoped>
.successBox {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .svgStyle {
    margin: 0 auto 4px;
    display: block;
    width: 32px;
    height: 32px;
  }
  .loginSuccess {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: center;
    color: #202224;
  }
}
</style>
