<template>
   <div class="main-bottom-box"
        :style="{ position: isSticky ? 'sticky' : 'static', borderTop: isBt ? '1px solid #e5e6eb ' : '' }">
      <!-- <div class="main-bottom" v-if="(slots?.bottomLeft && leftFlag) || (slots?.bottomRight && rightFlag)"> -->
      <div class="main-bottom">
         <div class="leftBtn">
            <slot name="bottomLeft"></slot>
         </div>
         <div class="rightPage">
            <slot name="bottomRight"></slot>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useSlots, onMounted, ref } from 'vue'
const props = defineProps({
   isSticky: {
      type: Boolean,
      default: true
   },
   isBt: {
      type: Boolean,
      default: false
   },
})

const slots = useSlots()

const leftFlag = ref(false),
   rightFlag = ref(false)
onMounted(() => {
   //   if (slots?.bottomLeft) {
   //     const pos = slots?.bottomLeft().find((x) => x?.type?.name)
   //     if (pos) {
   //       leftFlag.value = true
   //     }
   //   }
   //   if (slots?.bottomRight) {
   //     const pos = slots?.bottomRight().find((x) => x?.type.name)
   //     if (pos) {
   //       rightFlag.value = true
   //     }
   //   }
})
</script>

<style lang="scss" scoped>
.main-bottom-box {
   position: -webkit-sticky;
   position: sticky;
   bottom: 0;
   left: 0;
   // border-bottom: 16px solid #f7fafc;
   z-index: 10001;
   box-shadow: none;
   margin-top: 0;
}
.main-bottom {
   display: flex;
   align-items: center;
   justify-content: space-between;
   z-index: 100;
   // margin: 0 16px;
   box-sizing: border-box;
   background: rgba(255, 255, 255);
   border-radius: 0;
   backdrop-filter: blur(10px);
   padding: 20px;
   box-shadow: 0px -3px 12px rgba(0, 0, 0, 0.1);
   // box-shadow: 4px 4px 20px -8px rgb(50 50 71 / 8%);
   /* box-shadow: 0px 3px 10px -1px rgba(50, 50, 71, 0.2), 0px 0px 1px 0px rgba(12, 26, 75, 0.24); */

   .rightPage {
      position: relative;
   }
   :deep(.el-button--default) {
      color: #1d2129;
      background: #ffffff;
      min-width: 104px;
      height: 32px;
      font-size: 12px;
      font-weight: 400;
      border-radius: 4px;
      // box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
   }
   :deep() {
      .el-button--primary,
      .el-button--danger {
         min-width: 104px;
         height: 32px;
         font-size: 12px;
         font-weight: 400;
         // box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
      }
   }
   //   :deep(.add-button) {
   //     color: #16ce9c;
   //   }
   //   :deep(.del-button) {
   //     color: #f56c6c;
   //   }
   //   :deep(.blue-button) {
   //     color: #1664ff;
   //   }

   :deep(.el-pagination.is-background .btn-prev, .el-pagination.is-background .btn-next, .el-pagination.is-background .el-pager li) {
      background-color: #fff;
   }
   :deep(.el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li) {
      background-color: #fff;
   }
   :deep(.el-pager li) {
      width: 28px;
      height: 28px;
      background: #ffffff;
      border: 1px solid #edf2f7;
      border-radius: 6px;
   }
}

:deep(.is-disabled) {
   background: #94bfff !important;
   border: 1px solid #94bfff !important;
   color: #fff !important;
}
:deep(.el-button--primary:hover, .el-button--primary:focus) {
   background: #0e51d8;
   border: 1px solid #0e51d8;
   color: #fff;
}
:deep(.is-disabled:hover, .is-disabled:focus) {
   background: #94bfff;
   border: 1px solid #94bfff;
   color: #fff;
}
</style>

<style lang="scss">
.leftBtn > span > .el-button:first-child {
   margin-left: 10px;
}
</style>
