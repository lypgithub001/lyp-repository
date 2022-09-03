<template>
   <div class="tooltips">
      <div class="box1"></div>
      <div class="tooltip">
         <div class="titles">
            <p class="titleCont"
               v-if="showStatue == 0">
               您刚刚提交的订单<span>【{{ names }}】</span>，需要走一下内部审批，内部审批通过后，下一步等待供应商确认订单。
            </p>
            <p class="titleCont"
               v-if="showStatue == 1">
               您刚刚提交的订单<span>【{{ names }}】</span>，下一步等待供应商确认订单。
            </p>
            <p class="titleCont"
               v-if="showStatue == 2">
               您刚刚发布的商城采购订单<span>【{{ names }}】</span>，等待供应商发货，供应商发货后，请前往验收管理下的收货管理收货，收完货后，按照约定得账期在对账订单去生成相应的对账单结算即可。
            </p>
            <p class="titleCont"
               v-if="showStatue == 3">
               您刚刚发布的商城采购订单<span>【{{ names }}】</span>，请点击“支付详情”进入详情页面，点击“新建应付”按钮创建应付信息并点击“提交”后，前往应付管理的应付订单审批后，到应付信息中支付。
            </p>
            <p class="titleCont"
               v-if="showStatue == 4">
               您刚刚提交的商城采购申请<span>【{{ names }}】</span>，需要走一下内部审批，内部审批通过后，然后供应商确认订单，下一步前往应付管理的应付信息支付订单。
            </p>
            <p class="titleCont"
               v-if="showStatue == 5">
               您刚刚提交的商城采购申请<span>【{{ names }}】</span>，已生成订单，可以前往采购订单列表查看，下一步前往应付管理的应付信息支付订单。
            </p>
            <p class="titleCont"
               v-if="showStatue == 6">
               您有一笔订单<span>【{{ names }}】</span>待发货，请前往交付管理，发货商品。
            </p>
            <p class="titleCont"
               v-if="showStatue == 7">
               您有一笔订单<span>【{{ names }}】</span>待发货，请联系管理员前往交付管理，发货商品。
            </p>
            <p class="titleCont"
               v-if="showStatue == 8">
               您刚刚确认的订单<span>【{{ names }}】</span>，需要走一下内部审批，下一步需要前往交付管理，发货商品。
            </p>
            <p class="titleCont"
               v-if="showStatue == 9">
               您刚刚提交的采购订单<span>【{{ names }}】</span>，需要走一下内部审批，内部审批通过后，下一步等待供应商确认订单。
            </p>
            <p class="titleCont"
               v-if="showStatue == 10">
               您刚刚提交的采购订单<span>【{{ names }}】</span>，需要走一下内部审批，内部审批通过后，下一步前往应付管理的应付信息支付订单。
            </p>
            <p class="titleCont"
               v-if="showStatue == 11">
               您刚刚提交的自有商城采购订单<span>【{{ names }}】</span>，下一步等待供应商确认订单
            </p>
            <p class="titleCont"
               v-if="showStatue == 12">
               您刚刚提交的采购订单<span>【{{ names }}】</span>，需要走一下内部审批，内部审批通过后，下一步前往应付管理的应付信息支付订单。
            </p>
            <p class="titleCont"
               v-if="showStatue == 13">
               您刚刚提交的采购订单<span>【{{ names }}】</span>，请前往应付管理的应付信息支付订单。
            </p>
            <p class="titleCont"
               v-if="showStatue == 14">
               您刚刚提交的采购订单<span>【{{ names }}】</span>，请联系管理员，前往应付管理的应付信息支付订单.
            </p>
            <p class="titleCont"
               v-if="showStatue == 15">
               您刚刚提交的商城采购订单<span>【{{ names }}】</span>，前往应付管理的应付信息支付订单。
            </p>
            <p class="titleCont"
               v-if="showStatue == 16">
               您刚刚提交的商城采购订单<span>【{{ names }}】</span>，前联系管理员往应付管理的应付信息支付订单。
            </p>
            <!-- <p class="titleCont" v-if="showStatue == 17">
          您刚刚提交的三方商城采购订单<span>【{{ names }}】</span>，前往应付管理的应付信息支付订单。
        </p>
        <p class="titleCont" v-if="showStatue == 18">
          您刚刚提交的三方商城采购订单<span>【{{ names }}】</span>，前联系管理员往应付管理的应付信息支付订单。
        </p> -->
            <i class="iconfont icon-a-cuowuguanbi close"
               @click="skip"></i>
         </div>
         <div class="btns"
              style="margin-left: 320px"
              v-if="
          showStatue == 0 ||
          showStatue == 1 ||
          showStatue == 2 ||
          showStatue == 4 ||
          showStatue == 5 ||
          showStatue == 3 ||
          showStatue == 7 ||
          showStatue == 9 ||
          showStatue == 10 ||
          showStatue == 8 ||
          showStatue == 11 ||
          showStatue == 12 ||
          showStatue == 14 ||
          showStatue == 16
        "
              @click="skip">
            我知道了
         </div>
         <div class="btns fxd"
              v-if="showStatue == 13 || showStatue == 15"
              @click="skip">跳过</div>
         <div class="btns"
              style="margin-left: 290px"
              v-if="showStatue == 13 || showStatue == 15"
              @click="goPay">前往应付管理</div>
         <div class="btns"
              v-if="showStatue == 6"
              style="margin-left: 290px"
              @click="goPay1">前往交付管理</div>
      </div>
   </div>
</template>

<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
export default {
   props: {
      names: {
         type: String
      },
      showStatue: {
         type: String
      }
   },
   setup (props, { emit }) {
      const store = useStore()
      let state = {
         router: useRouter(),
         a: false
      }
      const skip = () => {
         store.commit('set_prompt', false)
         emit('skip', state.a)
      }
      const goPay = () => {
         state.router.push({
            path: '/purchase/dealManagement'
         })
      }
      const goPay1 = () => {
         state.router.push({
            path: '/market/deliveryManagement'
         })
      }
      return {
         skip,
         goPay,
         goPay1
      }
   }
}
</script>

<style scoped lang="scss">
.tooltips {
   position: absolute;
   top: 360px;
   left: 200px;
   z-index: 100002;
   .box1 {
      position: absolute;
      top: -10px;
      left: 30px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid rgba(34, 37, 38, 0.8);
   }
   .tooltip {
      background: rgba(34, 37, 38, 0.8);
      border-radius: 20px;
      padding: 10px 14px 12px 15px;
      display: inline-block;
      .titles {
         color: #fff;
         display: flex;
         .titleCont {
            font-size: 14px;
            line-height: 25px;
            display: inline-block;
            width: 380px;
            span {
               color: #ff9900;
            }
         }
         .close {
            margin-top: -5px;
         }
         .close:hover {
            cursor: pointer;
         }
      }
      .fxd {
         position: absolute;
         right: 140px;
      }
      .btns {
         background: #165dff;
         padding: 4px 10px;
         border-radius: 8px;
         color: #fff;
         font-size: 14px;
         display: inline-block;
         margin-top: 10px;
      }
      .btns:hover {
         cursor: pointer;
      }
   }
}
</style>
