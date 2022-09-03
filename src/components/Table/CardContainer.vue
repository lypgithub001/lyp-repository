<template>
  <div :class="['card', typeArea ? 'type_area' : '', noPadding ? 'noPadding' : '']" id="CardContainer">
    <div class="title syWeight" v-if="isTitle">
      <slot name="title"></slot>
    </div>
    <slot name="content"></slot>
  </div>
</template>

<script setup>
import { nextTick } from 'vue'

const props = defineProps({
  // 是否使用版心，默认false
  typeArea: {
    type: Boolean,
    default: false
  },
  // 隐藏标题
  isTitle: {
    type: Boolean,
    default: true
  },
  // 隐藏标题
  noPadding: {
    type: Boolean,
    default: false
  }
})
const hasCard = () => {
  // card无内容隐藏card  解决空白行   需父组件调用
  nextTick(() => {
    let card = document.querySelectorAll('#CardContainer')
    if (card && card.length) {
      for (let i = 0; i < card.length; i++) {
        if (card[i].offsetHeight == 48) {
          card[i].style.display = 'none'
        }
      }
    }
  })
}
defineExpose({
  hasCard
})
</script>

<style lang="scss" scoped>
.card {
  background: rgba(255, 255, 255, 1);
  border-radius: 2px;
  margin: 0 0 0 0;
  box-sizing: border-box;
  padding: 24px 40px;
}
:deep() {
  .el-button--default,
  .el-button--primary,
  .el-button--danger {
    min-width: 104px;
    height: 32px;
    font-size: 14px;
    font-weight: 400;
  }
}

.type_area {
  //   width: 1150px;
  margin: 0 auto 10px;
}
.title {
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: #1d2129;
  position: relative;
  padding: 10px 0 25px 14px;
}
.title::before {
  content: '';
  display: block;
  width: 4px;
  height: 16px;
  background: $--color-primary;
  position: absolute;
  left: 0;
  top: 13px;
}
.noPadding {
  padding: 0 40px;
}
</style>
