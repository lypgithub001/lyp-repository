<template>
  <div class="magnifier" :style="{ height: height }">
    <img :src="src" class="img" alt="暂无图片" title="图片" />
  </div>
</template>

<script setup>
const props = defineProps({
  height: {
    default: '300px'
  },
  src: { default: '' }
})
</script>
<style scoped lang="scss">
.magnifier {
  background: #ffffff;
  border-radius: 4px;
  width: 300px;

  .img {
    width: 100%;
    height: 100%;
    &:not([src]) {
      opacity: 0;
    }
  }
}
</style>
