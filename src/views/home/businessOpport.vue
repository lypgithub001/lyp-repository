<template>
  <div v-if="resize">
    <div class="purchaseHomeBox">
      采购端
    </div>
    <div class="beian">
      <span>Copyright&nbsp;©&nbsp;2021-2022&nbsp;智采云（北京）科技有限公司&nbsp;｜&nbsp;浪潮集团有限公司&nbsp;&nbsp;&nbsp;&nbsp;京ICP备2021036704号-2</span>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onBeforeUnmount, onMounted, ref, computed, watch, provide } from 'vue'
import { useStore } from 'vuex'

import { debounce } from '@/utils/common.js'
</script>

<style scoped lang="scss">
</style>
