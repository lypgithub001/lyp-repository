<template>
  <div class="define-descriptions">
    <el-descriptions class="margin-top" title="" :column="column" :size="size" border>
      <el-descriptions-item :label="item.label" v-for="(item, index) in lists" :key="index" align="center" :span="item.span || 1">
        <span :style="item.style || {}" class="descriptions-content">{{ item.name || '-' }}</span>
      </el-descriptions-item>
      <slot name="content"></slot>
    </el-descriptions>
    <slot name="right"></slot>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref, watch } from 'vue'
export default {
  name: '',
  components: {},
  props: {
    list: {
      type: Array,
      default: () => []
    },
    //列表的尺寸
    size: {
      type: String,
      default: 'large'
    },
    //一行 Descriptions Item 的数量
    column: {
      type: Number,
      default: 3
    }
  },
  setup(props) {
    const state = reactive({
      lists: []
    })
    watch(
      () => props.list,
      (val) => {
        if (!val) return
        state.lists = val.filter((x) => !x.isHidden)
      },
      {
        deep: true
      }
    )

    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss">
.define-descriptions {
  font-family: 'siyuan, siyuan-Medium';
  .el-descriptions__label {
    //  min-width: 150px;
    width: 110px;
    white-space: nowrap;
    background: #f2f3f5;
    color: #4e5969;
    font-size: 14px;
    border: 1px solid #e5e6eb !important;
    font-weight: 400;
  }
  .el-descriptions__content {
    width: 402px;
    border: 1px solid #e5e6eb;
    .el-form-item {
      margin-bottom: 0 !important;
    }
  }
  .descriptions-content {
    word-break: break-all;
    font-size: 14px;
  }
}
</style>
