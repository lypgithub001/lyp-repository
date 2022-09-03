<template>
  <div class="busnissInfoBox">
    <div class="title">
      <div>
        <span class="colorRed">{{ enterprise }}</span
        ><span class="suppilerinfo">条采购信息已发布</span>
      </div>
      <span class="checkMore" @click="checkMore">查看更多&nbsp;<i class="el-icon-arrow-right" /></span>
    </div>
    <swipper v-if="list.length > 0" :key="list.length">
      <div class="swiper-slide" v-for="(item, index) in list" :key="index">
        <div class="swiper-content">
          <div class="logo">
            <img :src="item.companyLogo ? item.companyLogo : 'http://cnpc-app.oss-cn-hangzhou.aliyuncs.com/common/default-logo.jpg'" @error="onImgError" />
          </div>
          <div class="order-info">
            <div>{{ item.title }}</div>
            <div>{{ item.companyName }}</div>
          </div>
          <div class="pirce">
            预估价格：<span>{{ item.totalMoney }}</span>
          </div>
          <div class="time">
            <span v-show="item.show">报价截止</span><span v-show="item.show">{{ item.days }}天{{ item.hours }}小时</span>
            <span v-show="item.isshow">报价已截止</span>
          </div>
          <img src="@/assets/img/login/logo-tips-2.png" alt="" class="position-img" />
        </div>
      </div>
    </swipper>
  </div>
</template>
<script setup>
import { homeGetCompanyNum, homeGetApplyList } from '@/api/login/index.js'
import Swipper from '@/components/swipper/index.vue'
import { ref, defineComponent, reactive, onMounted, toRefs, nextTick } from 'vue'
const list = ref([])
onMounted(() => {
  state.init()
})
const emits = defineEmits(['checkMore'])
const enterprise = ref()
const isshow = ref(false)
const show = ref(true)
const valtime = ref()
const showDate = ref([])
showDate.value = []
const checkMore = () => {
  emits('checkMore')
}
const onImgError = (e) => {
  console.log(e)
  let img = e.srcElement
  img.src = imglogo
  img.error = null
}
const state = reactive({
  init: () => {
    state.getList()
    state.getaddressVO()
  },
  getList: async () => {
    //   公司数
    try {
      let res = await homeGetCompanyNum()
      if (res.code === 200) {
        enterprise.value = res.data
      }
    } catch (error) {}
  },
  getaddressVO: async () => {
    //   获取信息
    try {
      let res = await homeGetApplyList()
      if (res.code == 200) {
        console.log(res, 'res')
        list.value = res.data
        valtime.value = res.timestamp
        if (list.value.length > 0) {
          list.value.forEach((val) => {
            val.totalMoney = val.totalMoney.toString()
            //倒计时
            let timestamp = res.timestamp
            let newDate = (timestamp += 1000)
            var the = new Date(val.endTime)
            var date = the - newDate //当前服务器时间戳

            if (date <= 0) {
              val.isshow = true
              val.show = false
            } else if (date > 0) {
              var days = Math.floor(date / 1000 / 60 / 60 / 24) // 从这里开始
              var daysmod = date - days * 24 * 60 * 60 * 1000
              var hours = Math.floor(daysmod / 1000 / 60 / 60)
              if (hours > 0) {
                val.days = days
                val.hours = hours
                val.isshow = false
                val.show = true
              } else {
                val.isshow = true
                val.show = false
              }
            }
          })
        }
      }
    } catch (error) {}
  }
})
</script>
<style lang="scss" scoped>
.swiper-slide {
  width: 544px !important;
  margin: 0 auto;
  border-bottom: 1px solid #f2f3f5;
}
:deep(.swiper-pointer-events) {
  padding: 0px;
  height: 335px;
}
.swiper-slide {
  background: #f9fafc;
  width: 100%;
  height: 81px;
  box-sizing: border-box;
  color: #1d2129;
  display: flex;
  align-items: center;
  .name {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #1d2129;
    margin-bottom: 10px;
  }
  .swiper-content {
    display: flex;
    padding: 14px 0;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    border-bottom: 1px solid #f2f3f5;
    .position-img {
      position: absolute;
      left: -5px;
      top: 17px;
      height: 22px;
      width: 23px;
    }
    .logo {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      width: 58px;
      height: 58px;
      img {
        width: 56px;
        height: 56px;
      }
    }
    .order-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 56px;
      padding: 5px 0;

      div:nth-child(1) {
        font-size: 16px;
        width: 180px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      div:nth-child(2) {
        font-size: 16px;
        color: #4e5969;
        font-size: 14px;
        width: 180px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    .pirce {
      height: 56px;
      display: flex;
      align-items: flex-end;
      font-size: 14px;
      justify-content: flex-end;
      span {
        color: #ff4d4f;
      }
    }
    .time {
      height: 50px;
      background: #f5faff;
      color: #165dff;
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      padding: 0 14px;
      text-align: center;
    }
    .numBox {
      display: flex;

      justify-content: space-between;
    }
    // > div {
    //   width: 50%;
    // }
    .content-left {
      > div {
        font-size: 14px;
        color: #4e5969;
        margin-bottom: 10px;
      }
    }
    .content-right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      div {
        color: #165dff;
        font-size: 14px;
        border: 1px solid#165dff;
        height: 22px;
        padding: 3px 8px;
      }
    }
  }
  .preAllPrice {
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
    color: #c9cdd4;
    display: inline-block;
    margin-right: 10px;
  }
  .moneyBox {
    margin-bottom: 30px;
    display: inline-block;
    .moneyType {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #ff4d4f;
    }
    .moneyNum {
      font-weight: 600;
      font-size: 20px;
      line-height: 28px;
      font-style: normal;
      text-align: center;
      color: #ff4d4f;
      .shadow-text {
        color: transparent;
        text-shadow: #ff4d4f 0 0 10px;
      }
    }
  }
  .info {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #1d2129;
    margin-bottom: 15px;
    .companyName {
      width: 110px;
    }
    i {
      color: #c9cdd4;
      font-size: 12px;
      margin-right: 5px;
    }
    .redTime {
      color: #ff4d4f;
    }
  }
}
.swiper-slide-active {
  // width: 645px !important;
  // height: 143px;
  // padding: 15px 20px;
  // box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
}
.busnissInfoBox {
  background: #f9fafc !important;
  height: 410px;
  width: 604px;
  background: #fff;
  border-radius: 4px;
  // padding: 25px;
  box-sizing: border-box;
  .title {
    background: linear-gradient(90deg, rgba(221, 232, 255, 0.4) 0%, rgba(232, 240, 255, 0.4) 46.35%, rgba(240, 238, 255, 0.4) 100%);
    font-weight: 600;
    box-sizing: border-box;
    padding: 0 25px;
    height: 60px;
    font-size: 16px;
    font-weight: 600;
    font-size: 20px;
    color: #1d2129;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .colorRed {
      color: #ff4d4f;
      font-size: 34px;
      font-weight: 700;
      margin-right: 8px;
    }
    img {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
    .suppilerinfo {
      color: #1d2129;
    }
    .checkMore {
      float: right;
      font-weight: 400;
      font-size: 14px;
      color: #86909c;
      cursor: pointer;
      i {
        color: #4e5969;
      }
    }
  }
}
</style>
