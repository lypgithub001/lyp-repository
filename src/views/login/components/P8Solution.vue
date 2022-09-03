<template>
  <div>
    <div class="p-solution">
      <div class="sass-product">
        <div class="edition-center" style="position: relative">
          <img src="@/assets/img/login/circle-gray.png" class="circle" alt="" />
          <div class="new-login-info-title"><span>P8定制解决方案</span><span class="inline"></span><span>大企业专用</span></div>
          <div class="new-login-info-title_tips mt10">可定制化、专业版采购管理平台</div>
          <div class="flex p-solution-content mt40">
            <div class="hover-shadow-p" style="z-index: 1000"></div>
            <div class="p-solution-content-right">
              <div class="hover-shadow-p"></div>
              <div class="hover-shadow-p"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
export default {
  name: '',
  components: {},
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss">
.p-solution {
  background-color: #fff;
  padding: 60px 0;
  .inline {
    margin: 0 20px;
  }
  .circle {
    width: 320px;
    position: absolute;
    left: -160px;
    bottom: 0;
  }
  .hover-shadow-p:hover {
    box-shadow: 0 6px 16px rgba(0, 50, 149, 0.1);
  }
  .p-solution-content {
    justify-content: space-between;
    > div {
      width: 604px;
    }
    > div:nth-child(1) {
      background: url('@/assets/img/login/p-solution-1.png');
      background-position: center center;
      background-size: cover;
      height: 440px;
    }
    .p-solution-content-right {
      div:nth-child(1) {
        background: url('@/assets/img/login/p-solution-2.png');
        background-position: center center;
        background-size: cover;
        height: 210px;
      }
      div:nth-child(2) {
        background: url('@/assets/img/login/p-solution-3.png');
        background-position: center center;
        background-size: cover;
        height: 210px;
        margin-top: 20px;
      }
    }
  }
}
</style>
