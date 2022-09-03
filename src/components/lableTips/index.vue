<template>
  <div class="lable-tips">
    <!-- <span>{{ labelName }}</span> -->
    <el-popover placement="top-start" title="" :width="310" trigger="hover">
      <template #reference>
        <i class="el-icon-warning"></i>

        <!-- <i class="iconfont icon-bangzhu"></i> -->
      </template>
      <p v-for="(item, index) in tipsArray" :key="index">{{ item }}</p>
    </el-popover>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
export default {
  name: '',
  props: {
    labelName: {
      type: String,
      default: '数据归属部门'
    },
    tipsArray: {
      type: Array,
      default: () => ['该信息用于数据权限和统计。', '例如张三主属部门是行政部，附属部门是采购部，该字段用于判定当前数据归属哪个部门。']
    }
  },
  components: {},
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state)
    }
  }
}
</script>
