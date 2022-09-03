<template>
  <div class="companyInfo">
    <div class="title">
      <div>
        <span class="colorRed">{{ allNumber }}</span
        ><span class="suppilerinfo">家企业/组织使用智采云</span>
      </div>
      <span class="checkMore" @click="checkMore">查看更多&nbsp;<i class="el-icon-arrow-right" /></span>
    </div>
    <swipper v-if="orgList.length > 0" :key="orgList.length">
      <div class="swiper-slide" v-for="(item, index) in orgList" :key="index">
        <div class="swiper-content">
          <div class="company">
            <div class="logo">
              <img :src="item.logo ? item.logo : 'http://cnpc-app.oss-cn-hangzhou.aliyuncs.com/common/default-logo.jpg'" @error="onImgError" />
              <!-- <el-image :src="item.logo ? item.logo : 'http://cnpc-app.oss-cn-hangzhou.aliyuncs.com/common/default-logo.jpg'" class="img-logo">
                <template #error>
                  <div class="image-slot">
                    <img :src="'http://cnpc-app.oss-cn-hangzhou.aliyuncs.com/common/default-logo.jpg'" alt="" />
                  </div>
                </template>
              </el-image> -->
            </div>
            <div class="order-info">
              <div>{{ item.name }}</div>
              <div>{{ item.businessType === 0 ? '采购' : item.businessType === 1 ? '销售' : '采购+销售' }}</div>
            </div>
          </div>
          <div class="time">
            {{ item.createTime?.split(' ')[0] + '入驻' }}
          </div>
          <img src="@/assets/img/login/logo-tips-1.png" alt="" class="position-img" />
        </div>
      </div>
    </swipper>
  </div>
</template>
<script setup>
import { homeGetCompanyNum, homeGetApplyList } from '@/api/login/index.js'
import Swipper from '@/components/swipper/index.vue'
import { ref, defineComponent, reactive, onMounted, toRefs, nextTick, getCurrentInstance } from 'vue'
import imglogo from '@/assets/img/default-logo.png'
const props = defineProps({
  orgList: {
    type: Array,
    default: []
  },
  allNumber: {
    type: Number,
    default: 0
  }
})
const internalInstance = getCurrentInstance() //当前组件实例
const $bus = internalInstance.appContext.config.globalProperties.$bus
const list = ref([])
onMounted(() => {
  state.init()
})
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
  init: () => {}
})
const emits = defineEmits(['checkMore'])
</script>
<style lang="scss" scoped>
.swiper-slide {
  border-bottom: 1px solid #f2f3f5;
  width: 544px !important;
  margin: 0 auto;
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
  .position-img {
    position: absolute;
    left: -5px;
    top: 13px;
    height: 22px;
    width: 23px;
  }
  .swiper-content {
    position: relative;
    display: flex;
    padding: 14px 0;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .company {
      display: flex;
    }
    .logo {
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-sizing: border-box;
      width: 58px;
      height: 58px;
      margin-right: 15px;
      img {
        width: 56px;
        height: 56px;
      }
    }
    .order-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 3px 0;

      div:nth-child(1) {
        font-size: 16px;
        width: 300px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      div:nth-child(2) {
        font-size: 16px;
        color: #4e5969;
        font-size: 14px;
        // width: 180px;
        // text-overflow: ellipsis;
        // white-space: nowrap;
        // overflow: hidden;
      }
    }
    .time {
      height: 50px;
      color: #86909c;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      padding: 0 14px;
      text-align: center;
    }
  }
}
.swiper-slide-active {
  // width: 645px !important;
  // height: 143px;
  // padding: 15px 20px;
  // box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.12);
}
.companyInfo {
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
