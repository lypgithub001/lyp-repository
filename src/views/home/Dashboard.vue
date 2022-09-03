<template>
  <div style="height: 100%">
    <!-- 采购大脑 -->
    <BusinessOpport mainType="PURCHASE" v-if="route.path === '/purchase/dashboard'" />
    <!-- 销售大脑 -->
    <MarketBusinessOpport mainType="PURCHASE" v-if="route.path === '/market/dashboard'" />
    <!-- <upgradeVue ref="upgradeVueRef" /> -->
  </div>
</template>

<script>
import { onMounted, reactive, ref, toRefs, computed } from 'vue'
import { useRoute } from 'vue-router'
import { isSafariFun } from '@/utils/common.js'
import MarketBusinessOpport from '@/views/home/marketBusinessOpport.vue'
import BusinessOpport from '@/views/home/businessOpport.vue'

export default {
  name: 'dashboard',
  components: {
    MarketBusinessOpport,
    BusinessOpport
  },
  setup() {
    onMounted(() => {
      // if (route.path === '/market/dashboard') {
      //   upgradeVueRef.value.init()
      // }
    })
    const route = useRoute()
    //  const upgradeVueRef = ref()
    const state = reactive({
      route,
      businessType: JSON.parse(sessionStorage.getItem('vuex')).teamInfo?.businessType
    })

    return {
      //  upgradeVueRef
      ...toRefs(state),
      isSafariFun
    }
  }
}
</script>

<style scoped lang="scss">
.second {
  width: 100%;
}
:deep(.el-button) {
  border: none;
  background: none;
  color: #718096;
  font-size: .12rem;
  font-weight: 400;
  line-height: vh(20);
  padding: 0;
}
:deep(.card) {
  margin: 0 .2rem vh(20) 0;
  height: 100%;
  padding: vh(20);
  .syWeight {
    padding-top: 0;
    padding-left: 0;
    padding-bottom: vh(20);
  }
  & > .title::before {
    display: none;
    top: vh(4);
    border-radius: vh(4);
  }
}
</style>
<style>
.bo-span-btn {
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
  border-radius: 2px;
  font-size: 14px;
  display: inline-block;
  cursor: pointer;
  color: #4e5969;
  background: #f2f3f5;
  font-family: 'siyuan, siyuan-Regular';
  font-weight: 400;
  text-align: center;
}
.bo-span-btn + .bo-span-btn {
  margin-left: 8px;
}
.bo-span-btn-active {
  background: #1664ff;
  color: #ffffff;
}
.pic {
  width: 100%;
  height: calc(100vh - 1000px);
  background: url('@/assets/svg/bottomPlaceholder.svg') no-repeat center center #fff;
  background-size: contain;
}
</style>
