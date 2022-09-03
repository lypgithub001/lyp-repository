<template>
   <div class="cooperative-customers">
      <div class="edition-center">
         <div class="new-login-info-title">合作客户</div>
         <div class="new-login-info-title_tips mt10 mb50">1500+用户的共同选择，携手智采云实现采购数字化升级</div>
         <div class="cooperative-customers-list">
            <img src="@/assets/img/login/cooperative-customers-1.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-2.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-3.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-4.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-5.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-6.png"
                 alt="" />
         </div>
         <div class="cooperative-customers-list">
            <img src="@/assets/img/login/cooperative-customers-7.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-8.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-9.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-10.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-11.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-12.png"
                 alt="" />
         </div>
         <div class="cooperative-customers-list">
            <img src="@/assets/img/login/cooperative-customers-13.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-14.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-15.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-16.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-17.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-18.png"
                 alt="" />
         </div>
         <div class="cooperative-customers-list">
            <img src="@/assets/img/login/cooperative-customers-19.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-20.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-21.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-22.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-23.png"
                 alt="" />
            <img src="@/assets/img/login/cooperative-customers-24.png"
                 alt="" />
         </div>
      </div>
   </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
export default {
   name: '',
   components: {},
   setup () {
      const state = reactive({})
      return {
         ...toRefs(state)
      }
   }
}
</script>
<style lang="scss">
.cooperative-customers {
   padding: 60px 0;
   background: #fff;
   background: url('@/assets/img/login/customer-bgc.png');
   background-position: center center;
   background-size: cover;
   .cooperative-customers-list {
      display: flex;
      justify-content: space-between;
      img {
         width: 188px;
         height: 90px;
      }
      img:hover {
         box-shadow: 0 6px 16px rgba(0, 50, 149, 0.06);
      }
   }
   .cooperative-customers-list + .cooperative-customers-list {
      margin-top: 20px;
   }
}
</style>
