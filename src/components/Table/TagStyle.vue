<template>
   <span class="tagClass"
         :style="{ color: color, background: hasBg ? bgColor : 'transparent', ...style }"
         v-if="content"><img src="@/assets/svg/certification.svg"
           v-show="contentsvg" /><img src="@/assets/svg/payingMembers.svg"
           v-show="payingMembers" />{{ content }}</span>
</template>
<!-- borderColor: borderColor -->
<script setup>
import { computed, ref, watch } from 'vue'
const props = defineProps({
   //要显示颜色类型
   type: {
      default: ''
   },
   //显示的内容
   content: {
      default: ''
   },
   //是否显示图标
   contentsvg: {
      type: Boolean,
      default: false
   },
   //是否有背景色
   hasBg: {
      type: Boolean,
      default: true
   },
   isCenter: {
      type: Boolean,
      default: true
   },
   style: {
      type: Object,
      default: {}
   },
   payingMembers: {
      // 付费会员图标
      type: Boolean,
      default: false
   }
})
const color = ref('')
const bgColor = ref('')
const borderColor = ref('')

let blue = ['草稿', '新增', '已撤回', '审批取消', '已认证', '待提交', '添加已注册', '自由供应商', '部分发货']
let orange = [
   '待结算',
   '待支付',
   '待确认',
   '审批中',
   '审核中',
   '待审核',
   '待供货方签约',
   '待采购方签约',
   '添加未注册',
   '等待',
   '待报价',
   '二轮待报价',
   '三轮待报价',
   '平台供应商',
   '待发货',
   '未开通'
]
let red = ['审批拒绝', '已下架', '拒绝', '已取消', '不通过', '已失效', '不通过', '已拒绝', '审批失败', '未确认', '已作废', '审核拒绝']
let green = [
   '发起审批',
   '彼此已注册',
   '彼此添加',
   '已上架',
   '同意',
   '生效中',
   '通过',
   '生成订单',
   '报价结束',
   '已领用',
   '部分成单',
   '已签约',
   '已确认',
   '已通过',
   '已同意',
   '报价非供应商',
   '添加已注册',
   '已发货',
   '已收货',
   '已开通'
]
let grey = [
   '已结算',
   '已支付',
   '待上架',
   '报价结束',
   '二轮报价结束',
   '三轮报价结束',
   '-',
   '未认证',
   '已撤销',
   '取消领用',
   '咨询结束',
   '认证过期',
   '免费会员',
   '默认会员',
   '作废',
   '黑名单',
   '删除'
]
let purple = []

watch(
   () => props.content,
   (val) => {
      getColor()
   }
)
getColor()
function getColor () {
   blue.forEach((ele) => {
      if (ele == props.content) {
         //蓝色
         color.value = '#1664FF'
         bgColor.value = '#E8F3FF'
         borderColor.value = '#d9ecff'
         return
      }
   })
   orange.forEach((ele) => {
      if (ele == props.content) {
         //橙色
         color.value = '#FF9900'
         bgColor.value = '#FFF7E8'
         borderColor.value = '#faecd8'
         return
      }
   })
   red.forEach((ele) => {
      if (ele == props.content) {
         //红色
         color.value = '#FF4D4F'
         bgColor.value = '#FFECE8'
         borderColor.value = '#fde2e2'
         return
      }
   })
   green.forEach((ele) => {
      if (ele == props.content) {
         //绿色
         // color.value = '#2ECA86'
         // bgColor.value = '#F5FFFA'
         color.value = '#52C41A'
         bgColor.value = '#E8FFEA'
         borderColor.value = '#e1f3d8'
         return
      }
      if (props.content?.indexOf('已报价') != -1) {
         //绿色
         // color.value = '#2ECA86'
         // bgColor.value = '#F5FFFA'
         color.value = '#67c23a'
         bgColor.value = '#f0f9eb'
         borderColor.value = '#e1f3d8'
         return
      }
   })
   grey.forEach((ele) => {
      if (ele == props.content) {
         //灰色
         color.value = '#A0AEC0'
         // bgColor.value = '#EDF2F7'
         bgColor.value = 'rgb(237 242 247 / 48%)'
         borderColor.value = '#e9e9eb'
         return
      }
   })
   purple.forEach((ele) => {
      if (ele == props.content) {
         //灰色
         color.value = '#722ED1'
         bgColor.value = '#F5E8FF'
         borderColor.value = '#F5E8FF'
         return
      }
   })
}
</script>

<style scoped lang="scss">
.tagClass {
   background-color: #fff8f0;
   //   border-color: #e3e3ff;
   display: inline-block;
   height: 27px;
   padding: 0 10px;
   line-height: 27px;
   font-size: 12px;
   color: #fe955c;
   min-width: 60px;
   //   border-width: 1px;
   //   border-style: solid;
   border-radius: 4px;
   box-sizing: border-box;
   white-space: nowrap;
   text-align: center;
   font-family: 'siyuan, siyuan-Regular';
   img {
      vertical-align: middle;
      width: 12px;
      height: 12px;
      padding-right: 2px;
      margin-top: -2px;
   }
}
</style>
