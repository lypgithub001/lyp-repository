<template>
  <div class="service-customer">
    <div class="edition-center">
      <div class="new-login-info-title">已成功服务1500+客户</div>
      <div class="new-login-info-title_tips mt10 mb50">浪潮旗下产品、永久免费、数据安全有保障</div>
      <div class="service-customer-container mt40 flex" @mouseenter="enterSwiper" @mouseleave="leaveSwiper">
        <div class="service-customer-left">
          <swipper @getActiveIndex="clickSlide" :clickMode="'serviceCustomer'" :autoplay="2000" ref="swiperRef">
            <div
              class="swiper-slide"
              v-for="(item, index) in companyList"
              :key="index"
              :data-index="item.index"
              :style="{ background: index == 0 ? '#fff' : '' }"
            >
              <div class="service-customer-item">
                <div>
                  <div class="service-customer-item-1">
                    <img :src="item.imgName" alt="" />
                    <span>{{ item.name }}</span>
                  </div>
                  <div class="service-customer-item-2">
                    <div>节约金额<span>******</span>万</div>
                  </div>
                </div>
              </div>
            </div>
          </swipper>
        </div>
        <div class="service-customer-right">
          <div class="service-customer-item" v-for="(item, index) in infoList" :key="index">
            <div>
              <div class="service-customer-item-3">
                <div>
                  <span>* * * * * *</span><span>{{ item.name }}</span>
                </div>
              </div>
              <div class="service-customer-item-4">
                报价供应商数量<span>{{ item.count }}</span
                >家
              </div>
              <div class="service-customer-item-2">
                <div>节约金额<span>******</span>万</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref, computed } from 'vue'
import swipper from '@/components/swipper/index.vue'
import fakeInfo from './info.js'
import img1 from '@/assets/img/login/service-customer-1.png'
import img2 from '@/assets/img/login/service-customer-2.png'
import img3 from '@/assets/img/login/service-customer-3.png'
import img4 from '@/assets/img/login/service-customer-4.png'
import img5 from '@/assets/img/login/service-customer-5.png'
import img6 from '@/assets/img/login/service-customer-6.png'
import img7 from '@/assets/img/login/service-customer-7.png'
import img8 from '@/assets/img/login/service-customer-8.png'
import img9 from '@/assets/img/login/service-customer-9.png'
import img10 from '@/assets/img/login/service-customer-10.png'
import img11 from '@/assets/img/login/service-customer-11.png'
import img12 from '@/assets/img/login/service-customer-12.png'
export default {
  name: '',
  components: {
    swipper
  },
  setup() {
    const swiperRef = ref()
    const state = reactive({
      activeIndex: 0,
      swiperKey: 0,
      infoList: computed(() => {
        return fakeInfo[state.activeIndex]
      }),
      companyList: [
        {
          name: '宝马中国',
          imgName: img3
        },
        {
          name: '新东方',
          imgName: img2
        },
        {
          name: '中公教育',
          imgName: img1
        },
        {
          name: '约翰芬雷工程技术有限公司',
          imgName: img4
        },
        {
          name: '华电集团',
          imgName: img5
        },
        {
          name: '山东晟晖激光科技有限公司',
          imgName: img6
        },
        {
          name: '朴初工业科技（山东）有限公司',
          imgName: img7
        },
        {
          name: '山东旺贤商贸有限公司',
          imgName: img8
        },
        {
          name: '北京汉德三维企业管理（集团）有限公司',
          imgName: img9
        },
        {
          name: '杭州绿云软件股份有限公司',
          imgName: img10
        },
        {
          name: '潍坊市公共交通集团有限公司',
          imgName: img11
        },
        {
          name: '申合信科技集团有限公司',
          imgName: img12
        },
      ],
      sliderEnter(index) {
        console.log(index)
      },
      enterSwiper() {
        swiperRef.value.enterSwiper()
      },
      leaveSwiper() {
        swiperRef.value.leaveSwiper()
      },
      clickSlide(index) {
        state.activeIndex = index
        console.log(index)
      }
    })
    return {
      ...toRefs(state),
      swiperRef,
      fakeInfo
    }
  }


}
</script>
<style lang="scss">
.service-customer {
  padding: 60px 0;
  background: #fff;
  color: #1d2129;
  .service-customer-container {
    > div {
      width: 50%;
    }
    border: 1px solid #e5e6eb;
    border-radius: 4px;
    .service-customer-item {
      display: flex;
      padding: 0px 22px;
      align-items: center;
      // background: #f7f8fa;
      > div {
        border-bottom: 1px solid #f2f3f5;
        width: 100%;
        padding: 10px 18px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      img {
        width: 42px;
        height: 42px;
        border-radius: 4px;
      }
      .service-customer-item-1 {
        display: flex;
        align-items: center;
        span {
          margin-left: 20px;
          color: #1d2129;
          font-weight: 600;
          font-size: 18px;
          display: inline-block;
          width: 300px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .service-customer-item-2 {
        font-weight: 400;
        font-size: 14px;
        color: #4e5969;
        span {
          color: #ff4d4f;
          font-weight: 600;
          font-size: 16px;
          position: relative;
          letter-spacing: 3px;
          margin: 0 8px 0 14px;
          top: 4.5px;
        }
      }
    }
    .service-customer-right {
      .service-customer-item {
        background: #fff;
        > div {
          height: 63px;
          padding: 10px 0px;
          box-sizing: border-box;
          > div {
            width: calc(100% / 3);
            text-align: center;
          }
        }
        .service-customer-item-3 {
          div {
            font-weight: 600;
            font-size: 16px;
            display: flex;
            align-items: center;
            span:nth-child(1) {
              position: relative;
              margin: 0 8px 0 14px;
              top: 4.5px;
            }
          }
        }
        .service-customer-item-4 {
          font-size: 16px;
          color: #4e5969;
          display: flex;
          align-items: center;
          // justify-content: center;
          span {
            font-weight: 600;
            font-size: 28px;
            color: #165dff;
            margin: 0 8px;
          }
        }
        .service-customer-item-2 {
          font-size: 16px;
          text-align: right;
          color: #4e5969;
        }
      }
    }
  }
  .swiper-slide {
    width: 100%;
    width: 100%;
    height: 63px;
    box-sizing: border-box;
    color: #1d2129;
    background: #f7f8fa;
    cursor: pointer;
  }
  .swiper-slide:nth-child(1) {
    background: #fff;
  }
  // .swiper-slide:hover {
  //   .service-customer-item {
  //     background: #fff;
  //   }
  // }
  .swiper-pointer-events {
    padding: 0px;
    height: 504px;
  }
  .swiper-pointer-events {
    padding: 0;
  }
}
</style>