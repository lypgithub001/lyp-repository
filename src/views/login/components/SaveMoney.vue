<template>
  <div class="save-money">
    <div class="edition-center">
      <div class="new-login-info-title">降低企业采购成本，提升采购效率</div>
      <div class="new-login-info-title_tips mt10">获取更多商家报价，提高采购物资和服务的性价比</div>
      <div class="save-money-content mt40">
        <div class="save-money-content-left">
          <div class="save-money-content-item bg1">
            <div>
              <p class="fs32 fb">快速提高采购效率</p>
              <p class="mt10 color-4E5969">让采购部门采购过程更高效</p>
            </div>
            <div class="fs100 color-blue ml30" style="width: 139px">
              <CountNumber
                :end="60"
                ref="countNumberRef1"
                :autoPlay="true"
                :duration="3000"
                @mouseenter="ennterCount(1)"
                :spanStyle="{ color: '#165DFF', fontSize: '100px', fontFamily: 'king-kong' }"
              >
                <template #content>
                  <span style="font-size: 60px; position: absolute; top: 40px; font-family: siyuan, siyuan-Regular">%</span>
                </template>
              </CountNumber>
            </div>
          </div>
          <div class="flex mt20">
            <div class="save-money-content-item bg2" style="width: 370px">
              <div>
                <p class="fs32 fb">提高决策效率</p>
                <p class="mt10 color-4E5969">决策时刻尽在掌握</p>
              </div>
              <div class="fs60 color-blue ml30" style="width: 91px">
                <CountNumber
                  :end="50"
                  ref="countNumberRef2"
                  :autoPlay="true"
                  :duration="3000"
                  @mouseenter="ennterCount(2)"
                  :spanStyle="{ color: '#165DFF', fontSize: '60px', fontFamily: 'king-kong' }"
                >
                  <template #content>
                    <span style="font-size: 30px; position: absolute; top: 30px; font-family: siyuan, siyuan-Regular">%</span>
                  </template>
                </CountNumber>
              </div>
            </div>
            <div class="save-money-content-item ml20 bg3" style="width: 370px">
              <div>
                <p class="fs32 fb">降低采购成本</p>
                <p class="mt10 color-4E5969">需求部门更低成本采购</p>
              </div>
              <div class="fs60 color-blue ml30" style="width: 91px">
                <CountNumber
                  :end="15"
                  ref="countNumberRef3"
                  :autoPlay="true"
                  :duration="3000"
                  @mouseenter="ennterCount(3)"
                  :spanStyle="{ color: '#165DFF', fontSize: '60px', fontFamily: 'king-kong' }"
                >
                  <template #content>
                    <span style="font-size: 30px; position: absolute; top: 30px; font-family: siyuan, siyuan-Regular">%</span>
                  </template>
                </CountNumber>
              </div>
            </div>
          </div>
        </div>
        <div class="save-money-content-right hover-shadow color-white">
          <div class="right-content">
            <CountNumber
              :end="52"
              ref="countNumberRef4"
              :autoPlay="true"
              :duration="3000"
              @mouseenter="ennterCount(4)"
              :spanStyle="{ color: 'white', fontSize: '120px', fontFamily: 'king-kong' }"
            >
              <template #content>
                <span style="font-size: 60px; font-family: siyuan, siyuan-Regular; position: relative; top: 12px">亿元</span>
              </template>
            </CountNumber>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
import CountNumber from '@/components/countNumber/index.vue'
export default {
  name: '',
  components: { CountNumber },
  setup() {
    const countNumberRef1 = ref()
    const countNumberRef2 = ref()
    const countNumberRef3 = ref()
    const countNumberRef4 = ref()
    const state = reactive({
      showNumber: true,
      ennterCount(index) {
        if (index == 1) {
          countNumberRef1.value.startCount()
        }
        if (index == 2) {
          countNumberRef2.value.startCount()
        }
        if (index == 3) {
          countNumberRef3.value.startCount()
        }
        if (index == 4) {
          countNumberRef4.value.startCount()
        }
      }
    })
    return {
      ...toRefs(state),
      countNumberRef1,
      countNumberRef2,
      countNumberRef3,
      countNumberRef4
    }
  }
}
</script>
<style lang="scss">
.save-money {
  padding: 60px;
  .save-money-content {
    display: flex;
    justify-content: space-between;
    .save-money-content-right {
      background: url('@/assets/img/login/save-money-4.png');
      background-position: center center;
      background-size: cover;
      width: 448px;
      height: 440px;
      position: relative;
      .right-content {
        text-align: center;
        position: absolute;
        left: 50%;
        width: 400px;
        transform: translateX(-50%);
        top: 60px;
      }
    }
    .save-money-content-left {
      width: 760px;
    }
    .save-money-content-item {
      display: flex;
      background: #fff;
      align-items: center;
      justify-content: center;
      height: 210px;
    }
    .save-money-content-item:hover {
      box-shadow: 0 6px 16px rgba(0, 50, 149, 0.06);
    }
    .bg1 {
      background: url('@/assets/img/login/save-money-1.png');
      background-position: center center;
      background-size: cover;
    }
    .bg2 {
      background: url('@/assets/img/login/save-money-2.png');
      background-position: center center;
      background-size: cover;
    }
    .bg3 {
      background: url('@/assets/img/login/save-money-3.png');
      background-position: center center;
      background-size: cover;
    }
    .bg4 {
      background: url('@/assets/img/login/save-money-4.png');
      background-position: center center;
      background-size: cover;
    }
  }
}
</style>
