<template>
   <div class="sass-platfrom">
      <div class="new-login-info-title color-white fs40"
           style="font-size: 40px">与1500+卓越企业携手实现采购行业数字化变革</div>
      <div class="text-center mt30">
         <img src="@/assets/img/login/free.png"
              alt=""
              style="width: 236px" />
      </div>
      <div class="version-solution-button-container mt40">
         <div class="primary-button version-solution-button"
              style="font-weight: 600;font-size: 22px;padding:8px 56px"
              @click="orderClick">立即预约</div>
      </div>
      <div class="new-login-info-title_tips mt10 color-white"
           style="font-size: 24px; margin-top: 40px">全国统一客户电话：400-645-6677</div>
   </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
export default {
   name: '',
   components: {},
   setup (props, { emit }) {
      const state = reactive({
         orderClick () {
            emit('orderClick')
         }
      })
      return {
         ...toRefs(state)
      }
   }
}
</script>
<style lang="scss">
.sass-platfrom {
   background: url('@/assets/img/login/sass-platfrom.png');
   background-position: center center;
   background-size: cover;
   padding: 60px 0;
}
</style>
