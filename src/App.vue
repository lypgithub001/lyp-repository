<template>
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
// store.commit('SAVE_TREE', {})
</script>

<style lang="scss">
@import './assets/css/main.scss';
@import './assets/css/color-dark.scss';
@import './assets/css/common.scss';
</style>
