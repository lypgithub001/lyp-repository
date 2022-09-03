<template>
  <div class="swiper-container filmswiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-paination"></div>
  </div>
</template>
<script setup>
import { reactive, ref, onMounted, nextTick } from 'vue'
import Swiper from 'swiper'
import 'swiper/css/bundle'
import SwiperCore, { Pagination, Autoplay } from 'swiper/core'
SwiperCore.use([Pagination, Autoplay])
const props = defineProps({
  classInfo: {
    type: String,
    default: 'filmswiper'
  },
  clickMode: {
    type: String,
    default: ''
  },
  autoplay: {
    type: Number,
    default: 4000
  }
})
const mySwiper = ref()
onMounted(() => {
  init()
})
const enterSwiper = () => {
  if (props.clickMode == 'serviceCustomer') {
    mySwiper.value.autoplay.stop();
  }
}
const leaveSwiper = () => {
  if (props.clickMode == 'serviceCustomer') {
    mySwiper.value.autoplay.start();
  }
}
const init = () => {
  mySwiper.value = new Swiper('.filmswiper', {
    autoplay: {
      delay: props.autoplay
    },
    direction: 'vertical',
    speed: 600,
    loop: true,
    observer: true,
    observeParents: true,
    onlyExternal: true,
    effect: 'coverflow',
    slidesPerView: 'auto',
    autoplayDisableOnInteraction: false,
    centeredSlides: false, // 为true轮播居中开始，为false居左开始
    coverflowEffect: {
      rotate: 0, //slide做3d旋转时Y轴的旋转角度。默认50。
      stretch: -5, //每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
      depth: 20, //slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
      modifier: 5,
      slideShadows: true //开启slide阴影。默认 true。
    },
    on: {
      click: (e) => {
        // mySwiper.value.slideTo(e.realIndex)
        if (props.clickMode == 'serviceCustomer') {
          clickemit('getActiveIndex', e.clickedSlide.attributes['data-swiper-slide-index'].value)
          let clickIndex = e.clickedSlide.attributes['data-swiper-slide-index'].value
          let nodeList = document.getElementsByClassName('swiper-slide')
          for (let index = 0; index < nodeList.length; index++) {
            const element = nodeList[index];
            if (element.getAttribute('data-swiper-slide-index') == clickIndex) {
              element.style.backgroundColor = '#ffffff'
            } else {
              element.style.backgroundColor = '#f7f8fa'
            }
          }
        }
      },
      slideChange: function () {
        if (props.clickMode == 'serviceCustomer') {
          let nodeList = document.getElementsByClassName('swiper-slide')
          for (let index = 0; index < nodeList.length; index++) {
            const element = nodeList[index];
            let indexCurrent = 0
            if (this.activeIndex == 24) {
              indexCurrent = 0
            } else if (this.activeIndex > 24) {
              indexCurrent = this.activeIndex - 24
            } else if (this.activeIndex < 12) {
              indexCurrent = this.activeIndex
            } else {
              indexCurrent = this.activeIndex - 12
            }
            clickemit('getActiveIndex', indexCurrent)
            if (element.getAttribute('data-swiper-slide-index') == indexCurrent) {
              element.style.backgroundColor = '#ffffff'
            } else {
              element.style.backgroundColor = '#f7f8fa'
            }
          }
        }
      },
    }
  })
}
const clickemit = defineEmits(['getActiveIndex'])
defineExpose({
  enterSwiper, leaveSwiper
})
</script>
<style lang="scss" scoped>
.swiper-pointer-events {
  overflow: hidden;
  width: 100%;
  height: 298px;
  padding: 20px 0 0;
}
</style>
