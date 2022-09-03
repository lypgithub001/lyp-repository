<template>
  <div class="dropdown-container">
    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <i class="el-icon-more"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <slot name="button"></slot>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
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
<style lang="scss" scoped>
:deep(.el-dropdown-menu) {
  .el-dropdown-menu__item {
    padding: 0;
    .el-button {
      display: block;
      width: 100%;
      text-align: left;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
