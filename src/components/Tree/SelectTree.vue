<!-- 树状选择器 -->
<template>
  <el-popover
    ref="popoverRef"
    :placement="props.placement"
    :trigger="props.trigger"
    :width="dataInfo.popoverWidth"
    :disabled="props.disabled"
    @show="onShowPopover"
    @hide="onHidePopover"
  >
    <template #reference>
      <el-input
        slot="reference"
        ref="input"
        v-model.trim="dataInfo.labelModel"
        :style="`width: ${props.width}px`"
        :disabled="props.disabled"
        :class="{ rotate: dataInfo.showStatus }"
        :placeholder="props.placeholder"
        size="small"
        :clearable="props.clearable"
        suffix-icon="el-icon-arrow-down"
      />
    </template>
    <el-tree
      ref="treeRef"
      :style="`min-width: ${dataInfo.treeWidth}`"
      :data="treeData"
      :props="props.props"
      :expand-on-click-node="false"
      :filter-node-method="filterNode"
      :default-expand-all="false"
      class="select-tree"
      highlight-current
      @node-click="onClickNode"
    />
  </el-popover>
</template>
<script setup>
import { ref, onMounted, computed, reactive, defineComponent, getCurrentInstance, watch, watchEffect, nextTick } from 'vue'
const props = defineProps({
  levelFlag: {
    //等级标签
    type: Number,
    default: -1
  },
  disabled: {
    type: Boolean,
    default: false
  },
  trigger: {
    //展开方式
    type: String,
    default: 'click'
  },
  // 接收绑定参数
  value: {
    type: Number,
    default: () => {}
  },
  // 输入框宽度
  width: {
    type: String,
    default: '100%'
  },
  // 选项数据
  options: {
    type: Array,
    default: []
  },
  // 输入框占位符
  placeholder: {
    type: String,
    required: false,
    default: '请选择'
  },
  //是否显示删除按钮
  clearable: {
    type: Boolean,
    default: false
  },
  //下拉框显示位置
  placement: {
    type: String,
    default: 'bottom'
  },
  //菜单类型
  menuType: {
    type: Number,
    default: 0
  },
  // 树节点配置选项
  props: {
    type: Object,
    required: false,
    default: () => ({
      parent: 'parentId',
      value: 'rowGuid',
      label: 'areaName',
      children: 'child'
    })
  }
})
//定义数据
const dataInfo = reactive({
  showStatus: false, // 树状菜单显示状态
  popoverWidth: '500px',
  treeWidth: 'auto', // 树形菜单宽度
  labelModel: null, // 输入框显示值
  valueModel: null // 实际请求传值
})
//定义dom ref
const treeRef = ref()
let levelFlag = ref()
const input = ref()
onMounted(() => {
  // 检测输入框原有值并显示对应 label
  if (props.value && treeData.value) {
    dataInfo.labelModel = queryTree(treeData.value, props.value)
  }
  //参数相应
  levelFlag.value = props.levelFlag
  // 获取输入框宽度同步至树状菜单宽度
  nextTick(() => {
    dataInfo.popoverWidth = `${(props.width || input.value.$refs.input.clientWidth) - 24}px`
    dataInfo.treeWidth = `${(props.width || input.value.$refs.input.clientWidth) - 44}px`
  })
})

// 偏平数组转化为树状层级结构
const switchTree = () => {
    return cleanChildren(buildTree(props.options, '0'))
  },
  // 将一维的扁平数组转换为多层级对象
  buildTree = (data, id = '0') => {
    const fa = (parentId) => {
      const temp = []
      for (let i = 0; i < data.length; i++) {
        const n = data[i]
        if (n[props.props.parent] === parentId) {
          n.children = fa(n.rowGuid)
          temp.push(n)
        }
      }
      return temp
    }
    return fa(id)
  },
  //定义子组件传值方法
  clickemit = defineEmits(['parentsConfirm', 'selected']),
  // 单击树节点
  onClickNode = (node) => {
    if (props.levelFlag >= 0) {
      //在超管-功能模块管理-所属分类/模块处判断层级是否正确的
      if (props.levelFlag - node.menuType > 1 || props.levelFlag - node.menuType === 0) {
        clickemit('parentsConfirm', false)
        return
      }
    }
    dataInfo.labelModel = node[props.props.label]
    dataInfo.valueModel = node[props.props.value]
    onCloseTree()
  }
const popoverRef = ref(),
  // 隐藏树状菜单
  onCloseTree = () => {
    popoverRef.value.visibility = false
  },
  // 显示时触发
  onShowPopover = () => {
    dataInfo.showStatus = true
    treeRef.value.filter(false)
  },
  // 隐藏时触发
  onHidePopover = () => {
    dataInfo.showStatus = false
    clickemit('selected', dataInfo.valueModel)
  },
  // 树节点过滤方法
  filterNode = (query, data) => {
    if (!query) return true
    return data[props.props.label].indexOf(query) !== -1
  }
// 搜索树状数据中的 ID
const queryTree = (tree, id) => {
  let stark = []
  stark = stark.concat(tree)
  while (stark.length) {
    const temp = stark.shift()
    if (props.props.children && temp[props.props.children]) {
      stark = stark.concat(temp[props.props.children])
    }
    if (temp[props.props.value] === id) {
      return temp[props.props.label]
    }
  }
  return ''
}

// 清除空 children项
const cleanChildren = (data) => {
  const fa = (list) => {
    list.map((e) => {
      if (e.children.length) {
        fa(e.children)
      } else {
        delete e.children
      }
      return e
    })
    return list
  }
  return fa(data)
}
// 是否为树状结构数据
const dataType = computed(() => {
  const jsonStr = JSON.stringify(props.options)
  return jsonStr.indexOf(props.props.children) !== -1
})
// 若非树状结构，则转化为树状结构数据
let treeData = ref([])
treeData = computed(() => {
  if (dataType.value) {
    return props.options
  } else {
    return switchTree()
  }
})

watch(
  () => levelFlag.value,
  (value) => {
    //  监听菜单类型修改，清楚所选模块
    if (value == 2) {
      dataInfo.labelModel = null
      dataInfo.valueModel = null
    }
  }
)
</script>

<style scoped>
.el-input.el-input--suffix {
  cursor: pointer;
  overflow: hidden;
}

.el-input.el-input--suffix.rotate .el-input__suffix {
  transform: rotate(180deg);
}

.select-tree {
  max-height: 350px;
  overflow-y: scroll;
}

/* 菜单滚动条 */
.select-tree::-webkit-scrollbar {
  z-index: 11;
  width: 6px;
}

.select-tree::-webkit-scrollbar-track,
.select-tree::-webkit-scrollbar-corner {
  background: #fff;
}

.select-tree::-webkit-scrollbar-thumb {
  border-radius: 5px;
  width: 6px;
  background: #b4bccc;
}

.select-tree::-webkit-scrollbar-track-piece {
  background: #fff;
  width: 6px;
}
</style>
