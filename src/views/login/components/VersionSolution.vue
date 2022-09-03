<template>
  <div class="version-solution">
    <div class="edition-center">
      <div class="new-login-info-title color-white">多版本部署解决方案</div>
      <div class="new-login-info-title_tips mt10 color-white">数字化采购解决方案 提升采购管理效率</div>
      <div class="mt40 version-container">
        <img src="@/assets/img/login/version-solution-1.png" alt="" />
        <img src="@/assets/img/login/version-solution-2.png" alt="" />
        <img src="@/assets/img/login/version-solution-3.png" alt="" />
      </div>
      <div class="version-solution-button-container mt40">
        <div class="default-button version-solution-button" @click="orderClick">预约演示</div>
        <div class="primary-button version-solution-button" @click="onopen">立即咨询</div>
      </div>
    </div>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
export default {
  name: '',
  components: {},
  setup(props, { emit }) {
    const state = reactive({
      orderClick() {
        emit('orderClick')
      },
      onopen: () => {
        window.open('https://p.qiao.baidu.com/cps/chat?siteId=18067452&userId=37369465&siteToken=b898605ed28bab0f695b9a4950edf28e')
      }
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss">
.version-solution {
  background: url('@/assets/img/login/version-solution-bgc.png');
  background-position: center center;
  background-size: cover;
  padding: 60px 0;

  .version-container {
    display: flex;
    justify-content: space-between;
    img {
      width: 396px;
      position: relative;
      transition: 0.3s all;
      bottom: 0;
    }
    img:hover {
      bottom: 20px;
    }
  }
}
</style>
