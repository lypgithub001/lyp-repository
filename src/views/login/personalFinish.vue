<template lang="">
  <div style="width: 100%; height: 100%">
    <div class="successBox">
      <!-- <svg-icon :name="'loginWeChat'" v-if="titleMessage" width="23px" height="19px" /> -->
      <div class="loginSuccess">{{ titleMessage }}</div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
const titleMessage = ref('认证操作已完成！')
const route = useRoute()
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
