<template>
  <div class="about-customer">
    <ul>
      <li @click="onopen" class="hover-shadow">
        <img src="@/assets/img/login/customer-1.png" class="about-customer-image1" alt="" />
        <img src="@/assets/img/login/customer-1-white.png" class="about-customer-image2" alt="" />
        <p>在线客服</p>
      </li>
      <!-- <li>
        <img src="@/assets/img/login/customer-2.png" alt="" />
        <p>联系电话</p>
      </li> -->
      <li @click="orderClick" class="hover-shadow">
        <img src="@/assets/img/login/customer-3.png" class="about-customer-image1" alt="" />
        <img src="@/assets/img/login/customer-3-white.png" class="about-customer-image2" alt="" />
        <p>立即预约</p>
      </li>
      <!-- <li>
   
      </li> -->
    </ul>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
export default {
  name: '',
  components: {},
  setup(props, { emit }) {
    const appointmentRef = ref()
    const state = reactive({
      toTop() {
        emit('toTop')
      },
      onopen: () => {
        window.open('https://p.qiao.baidu.com/cps/chat?siteId=18067452&userId=37369465&siteToken=b898605ed28bab0f695b9a4950edf28e')
      },
      orderClick() {
        emit('orderClick')
      }
    })
    return {
      ...toRefs(state),
      appointmentRef
    }
  }
}
</script>
<style lang="scss">
.about-customer {
  position: fixed;
  right: 40px;
  bottom: 175px;
  z-index: 1000;
  li {
    list-style: none;
    width: 64px;
    height: 64px;
    background: #ffffff;
    box-shadow: 0px 4px 12px rgba(0, 29, 97, 0.1);
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    font-size: 12px;
    color: #1d2129;
    cursor: pointer;
    img {
      width: 24px;
      height: 24px;
      margin-bottom: 6px;
    }
    .about-customer-image2 {
      display: none;
    }
  }
  li:hover {
    background: #165dff;
    p {
      color: white;
    }
    .about-customer-image2 {
      display: inline-block;
    }
    .about-customer-image1 {
      display: none;
    }
  }
  li + li {
    margin-top: 12px;
  }
}
</style>
