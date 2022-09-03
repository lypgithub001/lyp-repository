<template>
  <!-- 按钮组 -->
  <div class="btn-group">
    <div class="btn-st" @click="switchClick(item)" :class="{ 'btn-active': active == item.id }" v-for="(item, index) in btnGroup" :key="index">
      {{ item.label }}
    </div>
  </div>
</template>

<script>
import { toRefs, reactive, onMounted, watch } from 'vue'
export default {
  name: 'demo',
  props: {
    btnGroup: {
      type: Array,
      default: () => []
    },
    // 高亮-选中位置索引
    selectPosIndex: {
      type: Number,
      default: 0
    }
  },
  components: {},
  setup(props, { emit }) {
    onMounted(() => {
      state.init()
    })
    watch(
      () => props.btnGroup,
      () => {
        state.init()
      }
    )
    const state = reactive({
      active: 0,
      init() {
        if (props.btnGroup.length) {
          state.active = props.btnGroup[props.selectPosIndex].id
        }
      },
      switchClick(val) {
        console.log('val', val)
        if (state.active == val.id) return
        state.active = val.id
        emit('switchClick', val)
      }
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
 

<style scoped lang="scss">
.btn-group {
  margin: 0 auto;
  width: 100%;
  height: 36px;
  background: #F2F3F5;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 36px;
  padding: 0 5px;
  .btn-st {
    width: 50%;
    height: 26px;
    border-radius: 2px;
    font-size: 14px;
    font-family: 'siyuan, siyuan-Regular';
    font-weight: 400;
    text-align: center;
    color: #020303;
    line-height: 26px;
    cursor: pointer;
    color: #4e5969;
  }

  .btn-st:hover {
    opacity: 0.9;
  }

  .btn-active {
    background: #ffffff;
    color: #165dff;
  }
}
</style>
