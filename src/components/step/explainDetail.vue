<template>
  <!-- 详情-说明内容过长时出现展开收缩 -->
  <el-form-item :label="label" :class="{ zhankai: !desFlag }" style="word-break: break-all" class="explainDetail">
    <span v-if="getStringLen(content)">
      <span class="zksq-btn" v-if="!desFlag" @click="desFlag = true">展开<i class="el-icon-arrow-down"></i></span>
      <span class="zksq-btn" v-else @click="desFlag = false">收起<i class="el-icon-arrow-up"></i></span>
    </span>
    {{ content }}
  </el-form-item>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
export default {
  name: 'zhankai',
  props: {
    label: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  setup() {
    const state = reactive({
      desFlag: false,
      getStringLen(str) {
        if (typeof str === 'string') {
          return str.length > 150
        }
      }
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
 

<style scoped lang="scss">
.zhankai {
}
.explainDetail {
  :deep(.el-form-item__content) {
    color: #606266 !important;
    font-size: 14px;
  }
}
</style>
