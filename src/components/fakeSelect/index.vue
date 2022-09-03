<template>
  <span class="fake-select-scoped">
    <el-popover popper-class="select_popover_scoped" placement="bottom-start" :show-arrow="false" width="auto" trigger="click" ref="elPopoverRef">
      <template #reference>
        <p class="fake-select-title">
          {{ titleComputed }}
          <svg-icon name="arrow_down" />
        </p>
      </template>
      <template #default>
        <div class="fake-select-content">
          <div
            class="fake-select-item"
            @click="clodePopver(item)"
            v-for="(item, index) in optionList"
            :key="index"
            :style="{ color: activeTab == item.id ? '#1664ff' : '#606266' }"
          >
            {{ item.name || '-' }}
          </div>
        </div>
      </template>
    </el-popover>
  </span>
</template>

<script setup>
import { ref, toRefs, computed } from 'vue'

const props = defineProps({
  // 当前选中tab
  activeTab: {
    type: [Number, String, null],
    default: null
  },
  // 下拉数据list
  optionList: {
    type: Array,
    default: () => []
  },
  // 无匹配时展示的title
  title: {
    type: String,
    default: () => []
  }
})

const { optionList, activeTab, title } = toRefs(props)

const elPopoverRef = ref()
// 点击 下拉option callback
function clodePopver(item) {
  emits('update:activeTab', item.id)
  emits('cbFn', item)
  elPopoverRef.value.visibility = false
}

// tab 标题计算
const titleComputed = computed(() => {
  const pos = optionList.value.find((x) => x.id === activeTab.value)
  if (!pos) return title.value
  return pos.name
})

const emits = defineEmits(['update:activeTab', 'cbFn'])
</script>
<style lang="scss">
@import '@/assets/css/mixin.scss';
.fake-select-scoped {
  display: inline-block;
  height: 32px;
  line-height: 32px;
  color: #1664ff;
  font-size: 14px;
  cursor: pointer;
  .fake-select-title {
    display: flex;
    align-items: center;
    .svg-icon {
      width: 6px;
      height: 5px;
      margin-left: 7px;
    }
  }
}

.select_popover_scoped {
  min-width: 80px !important;
  max-height: 280px;
  padding: 10px !important;
}

.fake-select-content {
  max-height: 280px;
  overflow-y: auto;
  @include scrollBar;

  .fake-select-item {
    font-size: 14px;
    padding-right: 10px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #606266;
    height: 34px;
    line-height: 34px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .fake-select-item:hover {
    background: #f5f7fa;
  }
}
</style>
