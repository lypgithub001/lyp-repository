<template>
  <div class="new-login-info">
    <div class="sass-product">
      <div class="edition-center" style="position: relative">
        <img src="@/assets/img/login/circle.png" class="circle" alt="" />
        <div class="new-login-info-title"><span>专业采购平台</span> <span class="inline"></span><span>功能完备的数字化采购产品</span></div>
        <div class="new-login-info-title_tips mt10">5种采购模式，100+功能应用，实现采购管理流程和场景全覆盖</div>
        <div class="flex sass-product-content mt40">
          <div class="purchase-brain">
            <p class="fb fs48">采购大脑</p>
            <p class="mt12 fs19 fb">一体化采购业务驾驶舱</p>
            <p class="mt30 fs16" style="line-height: 28px">各部门信息实时共享，成熟的数据系统架构；拥有丰富的可视化图表视图，提升数据分析效率。</p>
          </div>
          <div class="sass-product-module">
            <div>
              <p class="fb fs20">采购咨询</p>
              <p class="mt16 fs16 p1">采购难题，不懂就咨询</p>
              <p class="mt16 fs14 p2">采购之前咨询，快速了解市场行情、获得更多供应商资源。</p>
              <img src="@/assets/img/login/sass-1-1.png" alt="" class="img1" />
              <img src="@/assets/img/login/sass-1-2.png" alt="" class="img2" />
            </div>
            <div>
              <p class="fb fs20">竞价采购</p>
              <p class="mt16 fs16 p1">同一商品选择价格最低的供应商</p>
              <p class="mt16 fs14 p2">指定时间范围让各供应商进行竞争报价，报价低者中标。</p>
              <img src="@/assets/img/login/sass-4-1.png" alt="" class="img1" />
              <img src="@/assets/img/login/sass-4-2.png" alt="" class="img2" />
            </div>
          </div>
          <div class="sass-product-module">
            <div>
              <p class="fb fs20">供应商管理</p>
              <p class="mt16 fs16 p1">实现供应商全生命周期管理</p>
              <p class="mt16 fs14 p2">通过询竞价等方式，拓展供应商，构建企业专属的供应商资源库。</p>
              <img src="@/assets/img/login/sass-2-1.png" alt="" class="img1" />
              <img src="@/assets/img/login/sass-2-2.png" alt="" class="img2" />
            </div>
            <div>
              <p class="fb fs20">商城采购</p>
              <p class="mt16 fs16 p1">体现规模优势，聚量议价</p>
              <p class="mt16 fs14 p2">汇聚了得力、震坤行及渠道方和批发商发布的各类商品和服务。</p>
              <img src="@/assets/img/login/sass-5-1.png" alt="" class="img1" />
              <img src="@/assets/img/login/sass-5-2.png" alt="" class="img2" />
            </div>
          </div>
          <div class="sass-product-module">
            <div>
              <p class="fb fs20">询价采购</p>
              <p class="mt16 fs16 p1">选择性价比最高的供应商</p>
              <p class="mt16 fs14 p2">将采购信息发送给供应商收集报价，全网寻源、择优成交。</p>
              <img src="@/assets/img/login/sass-3-1.png" alt="" class="img1" />
              <img src="@/assets/img/login/sass-3-2.png" alt="" class="img2" />
            </div>
            <div>
              <p class="fb fs20">协议采购</p>
              <p class="mt16 fs16 p1">通用重复采购直接下单</p>
              <p class="mt16 fs14 p2">减少通用采购项目的重复寻源， 采购商品以签订协议的形式加以确定。</p>
              <img src="@/assets/img/login/sass-6-1.png" alt="" class="img1" />
              <img src="@/assets/img/login/sass-6-2.png" alt="" class="img2" />
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
.new-login-info {
  .sass-product {
    background-color: #f6f7fa;
    padding: 60px 0;
    position: relative;
    .circle {
      width: 320px;
      position: absolute;
      right: -160px;
    }
    .sass-product-content {
      justify-content: space-between;
      .purchase-brain {
        width: 448px;
        height: 440px;
        box-sizing: border-box;
        padding: 50px 97px 50px 60px;
        background: url('@/assets/img/login/purchase-brain.png');
        background-position: center center;
        background-size: cover;
        border-radius: 4px;
        p {
          color: #fff;
        }
      }
      .purchase-brain:hover {
        background: #165dff;
        box-shadow: 0 6px 16px rgba(0, 50, 149, 0.4);
      }
      .sass-product-module {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        > div {
          width: 240px;
          height: 210px;
          background: #ffffff;
          box-sizing: border-box;
          position: relative;
          padding: 30px 35px;
          border-radius: 4px;
          p:nth-child(2) {
            color: #4e5969;
          }
          img {
            width: 160px;
            height: 160px;
            position: absolute;
            bottom: 0;
            right: 0;
          }
          .img2 {
            display: none;
          }
          .p2 {
            display: none;
          }
        }
        > div:hover {
          background: #165dff;
          box-shadow: 0 6px 16px rgba(0, 50, 149, 0.4);
          p {
            color: #fff;
          }
          .img1 {
            display: none;
          }
          .img2 {
            display: block;
          }
          .p1 {
            display: none;
          }
          .p2 {
            display: block;
          }
        }
      }
    }
  }
}
</style>
