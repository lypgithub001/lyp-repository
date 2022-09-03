<template>
  <div class="successFailt">
    <div class="container">
      <!-- 成功图 -->
      <img src="@/assets/img/pay/paySuccess.png" alt="" width="201" height="161" />
      <!-- 失败图 -->
      <!-- <img src="@/assets/img/pay/payFaild.png" alt="" width="201" height="161" /> -->
      <div class="resultText">支付成功</div>
      <!-- 成功 -->
      <div class="moneyInfo">￥{{ isTemplate ? payMoney : 1200 }}</div>
      <!-- 失败 -->
      <!-- <div class="moneyInfo">支付遇到问题，请重新支付。</div> -->
      <h6>如有问题请拨打云创集团客服电话：400-645-6677 服务时间：周一到周五 9:00-15：00</h6>
      <!-- 成功 -->
      <div class="orderButton" @click="checkOrder">查看订单信息</div>
      <!-- 失败 -->
      <!-- <div class="faildButton">返回订单支付</div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const emits = defineEmits(['dataBack'])
const props = defineProps({
  //是组件还是路由
  isTemplate: {
    type: Boolean,
    default: true
  },
  //支付金额
  payMoney: {
    type: Number,
    default: 0
  }
})
function checkOrder() {
  if (props.isTemplate) {
    emits('dataBack')
  }
}

//供应商订单支付相关
// const
</script>

<style scoped lang="scss">
.successFailt {
  text-align: center;
  img {
    margin: 32px auto 52px;
  }
  .moneyInfo {
    font-size: 14px;
    font-family: 'siyuan, siyuan-Medium';
    font-weight: 500;
    color: #f54a55;
    margin: 16px auto;
  }
  h6 {
    font-size: 14px;
    font-family: 'siyuan, siyuan-Medium';
    font-weight: 400;
    color: #4a5568;
    margin-bottom: 24px;
  }
  .orderButton {
    width: 184px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background: #ffffff;
    margin: 0 auto 24px;
    border: 1px solid #1664ff;
    border-radius: 8px;
    box-shadow: 0px 4px 20px -2px rgba(50, 50, 71, 0.08), 0px 0px 1px 0px rgba(12, 26, 75, 0.1);
    font-size: 14px;
    font-family: 'siyuan, siyuan-Medium';
    font-weight: 500;
    color: #1664ff;
  }
  .faildButton {
    width: 184px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    background: #1664ff;
    border: 1px solid #1664ff;
    border-radius: 8px;
    box-shadow: 0px 4px 20px -2px rgba(50, 50, 71, 0.08), 0px 0px 1px 0px rgba(12, 26, 75, 0.1);
    font-size: 14px;
    font-family: 'siyuan, siyuan-Medium';
    font-weight: 500;
    color: #ffffff;
    margin: 0 auto 24px;
  }
}
.resultText {
  font-size: 16px;
  font-family: 'siyuan, siyuan-Medium';
  font-weight: 600;
  color: #1a202c;
}
</style>
