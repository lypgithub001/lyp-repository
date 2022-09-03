<!-- el-input-range -->
<template>
  <div class="el-input-range">
    <div class="comBox">
      <div class="leftRange">
        <!-- <el-input v-model="minValue" :placeholder="minPlaceholder" size="mini" /> -->
        <el-input-number v-model="minValue" :min="0" :max="maxValue" :placeholder="minPlaceholder"></el-input-number>
      </div>
      <div class="separator">{{ separator }}</div>
      <div class="rightRange">
        <!-- <el-input v-model="maxValue" :placeholder="maxPlaceholder" size="mini" /> -->
        <el-input-number v-model="maxValue" :min="minValue" :placeholder="maxPlaceholder"></el-input-number>
      </div>
    </div>
  </div>
</template>

<script>
import { toRefs, reactive, watchEffect, watch } from 'vue'
export default {
  name: 'el-input-range',
  components: {},
  props: {
    //   分隔符
    separator: {
      type: String,
      default: '~'
    },
    //  小值的 placeholder
    minPlaceholder: {
      type: String,
      default: ''
    },
    //  大值的 placeholder
    maxPlaceholder: {
      type: String,
      default: ''
    },
    //  父组件 v-modal 绑定的值
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  setup(props, { emit }) {
    let state = reactive({
      minValue: props.modelValue[0],
      maxValue: props.modelValue[1]
    })

    watch([() => state.minValue, () => state.maxValue], ([newMin, newMax], [oldMin, oldMax]) => {
      emit('update:modelValue', [newMin || state.minValue, newMax || state.maxValue])
      emit('valueChange')
    })

    watchEffect(() => {
      if (!props.modelValue || props.modelValue.length == 0) {
        state.minValue = undefined
        state.maxValue = undefined
      }
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>

<style scoped lang="scss">
.el-input-range {
  display: inline-block;
  //   background-color: pink;
  flex: 1;

  .comBox {
    display: flex;
    align-items: center;
    // border-radius: 4px;
    // box-shadow: 0px 3px 8px -1px rgb(50 50 71 / 5%), 0px 0px 1px 0px rgb(12 26 75 / 24%);
    //  border: 1px solid #dcdfe6;
    :deep(.el-input__inner) {
      border: none;
      color: #1d2129;
      font-family: 'siyuan, siyuan-Regular';
      font-size: 13px;
      padding-left: 0px;
      padding-right: 0px;
    }
    .leftRange,
    .rightRange {
      width: 45%;
    }
    .separator {
      width: 10%;
      // text-align: center;
    }
  }

  //   .el-input-number__decrease,
  //   .el-input-number__increase {
  //     display: none;
  //   }
  :deep(.el-input-number__decrease),
  :deep(.el-input-number__increase) {
    display: none;
  }
}
</style>
