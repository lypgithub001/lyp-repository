<template>
  <div class="table" :style="{ border: showTableBorder ? '1px solid #EBEEF5' : 'transparent', borderBottom: 'transparent' }">
    <el-table
      :row-key="getrowkey"
      ref="multipleTable"
      :header-cell-style="headerCellStyle"
      :header-cell-class-name="!isDisableSelect ? 'disabledHeadCheck' : ''"
      :data="tableData"
      style="width: 100%"
      :border="showBorder"
      :stripe="showStripe"
      :span-method="objectSpanMethod"
      :show-header="showHeader"
      @select="select"
      @select-all="selectAll"
      @selection-change="handleSelectionChange"
      :tree-props="treeProps"
      :default-expand-all="defaultExpandAll"
      @row-click="rowClick"
      :show-summary="showSummary"
      :summary-method="summaryMethod"
      :max-height="height"
      :height="tableHeight"
      :highlight-current-row="highLight"
      :row-class-name="rowClassName"
      :empty-text="emptyText"
    >
      <template v-if="showSelect">
        <el-table-column type="selection" align="right" width="35" :selectable="selectEnable" :reserve-selection="saveBeforeData"></el-table-column>
      </template>
      <template v-if="fixedLocation">
        <el-table-column
          type="selection"
          :fixed="fixedLocation"
          align="center"
          width="45"
          :selectable="selectEnable"
          :reserve-selection="saveBeforeData"
        ></el-table-column>
      </template>
      <template v-if="showSelectDisabled">
        <el-table-column type="selection" align="center" width="55" :selectable="selectPartEnable" :reserve-selection="saveBeforeData"></el-table-column>
      </template>
      <template v-if="showIndex">
        <el-table-column label="序号" align="center" width="55" :fixed="fixedIndex">
          <template #default="scope">
            <span>{{ (page.current - 1) * page.size + scope.$index + 1 }}</span>
          </template>
        </el-table-column>
      </template>
      <slot name="columnBefore"></slot>
      <template v-if="propsLabelList.length">
        <el-table-column
          :show-overflow-tooltip="!item.hiddenTooltip"
          :width="item.width ? item.width : ''"
          :min-width="item.minWidth ? item.minWidth : ''"
          empty-text="-"
          :key="index"
          v-for="(item, index) in propsLabelList"
          :prop="item.prop"
          :label="item.label"
          :align="item.center ? item.center : 'left'"
          :formatter="item.formatter"
          :fixed="item.fixed"
        >
          <template #default="scope" v-if="item.showTag || item.isClick || item.isReturnClick || item.vHtml || item.isImportant || item.color || item.isNum">
            <div
              class="color-purple"
              :style="{ color: item.color ? item.color(scope.row) : '#1664ff;' }"
              @click="tableCloumnClick(scope.row, item.prop)"
              v-if="item.isClick"
            >
              {{ scope.row[item.prop] }}
            </div>
            <div v-if="item.isImportant" class="is-important" @click="tableCloumnClick(scope.row, item.prop)">
              {{ scope.row[item.prop] }}
            </div>
            <div
              class="color-purple"
              v-if="item.isReturnClick"
              :style="{ color: item.color ? item.color(scope.row) : '#1664ff;' }"
              @click="item.contentClick ? item.contentClick(scope.row) : contentClick(scope.row)"
            >
              {{ item.formatter ? item.formatter(scope.row) : scope.row[item.prop] }}
            </div>
            <div
              :style="{ color: scope.row[item.prop] > 0 ? '#1664ff' : '#1d2129', cursor: scope.row[item.prop] > 0 ? 'pointer' : '' }"
              @click="tableCloumnClick(scope.row, item.prop)"
              v-if="item.isNum"
            >
              {{ scope.row[item.prop] }}
            </div>
            <!-- <div v-if="item.color" :style="{ color: item.color ? item.color(scope.row) : '#1d2129' }">
              {{ item.formatter ? item.formatter(scope.row) : scope.row[item.prop] }}
            </div> -->
            <div v-if="item.vHtml" v-html="scope.row[item.prop] || '-'" class="html-content"></div>
            <tag-style :type="item.module + scope.row[item.prop]" :content="getLabel(scope.row[item.prop], item.dicData)" v-if="item.showTag"></tag-style>
          </template>
        </el-table-column>
      </template>
      <slot name="column"></slot>
      <slot name="operate"></slot>
    </el-table>
  </div>
</template>

<script>
import { ref, defineExpose } from 'vue'
import { getLabel } from '@/utils/common.js'
export default {
  props: {
    //合并行或列对计算方法方法
    objectSpanMethod: Function,
    rowClassName: Function,
    //数据为空的提示
    emptyText: {
      type: String,
      default: '暂无数据'
    },
    //表格外边
    showTableBorder: {
      type: Boolean,
      default: false
    },
    //是否显示序号
    showIndex: {
      type: Boolean,
      default: false
    },
    //分页查询是否保存之前数据
    saveBeforeData: {
      type: Boolean,
      default: false
    },
    //禁用多选框
    selectEnable: Function,
    //是否显示斑马纹
    showStripe: {
      type: Boolean,
      default: false
    },
    //是否显示边框
    showBorder: {
      type: Boolean,
      default: false
    },
    //是否显示选择框
    showSelect: {
      type: Boolean,
      default: true
    },
    //显示选择部分禁用
    showSelectDisabled: {
      type: Boolean,
      default: false
    },
    //禁用选择部分数据方法
    selectPartEnable: {
      type: Function,
      default: () => {}
    },
    //表格头部数据
    propsLabelList: {
      type: Array,
      default: () => []
    },
    //表格数据
    tableData: {
      type: Array,
      default: []
    },
    //行数据的 Key，用来优化 Table 的渲染
    rowidKey: {
      type: String,
      default: 'id'
    },
    //是否单选行
    singleSelect: {
      type: Boolean,
      default: false
    },
    //序号
    page: {
      type: Object,
      default: {
        current: 1,
        size: 10
      }
    },
    //是否禁用多选框
    isDisableSelect: {
      type: Boolean,
      default: true
    },
    //树表格配置项
    treeProps: {
      type: Object,
      default: { children: 'children', hasChildren: 'hasChildren' }
    },
    // 是否默认展开所有行,树形表格时有效
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    height: {
      type: String,
      default: 'none'
    },
    tableHeight: {
      default: null
    },
    highLight: {
      default: true
    },
    headerCellStyle: {
      type: Object,
      default: () => {
        return { background: '#F2F3F5 !important', fontSize: '14px', color: '#1D2129', padding: 0 }
      }
    },
    //选择项固定位置
    fixedLocation: {
      type: String,
      default: ''
    },
    //是否显示合计
    showSummary: {
      type: Boolean,
      default: false
    },
    //table合计自定义方法
    summaryMethod: {
      type: Function,
      default: () => {}
    },
    fixedIndex: {
      type: String,
      default: ''
    },
    showHeader: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { emit }) {
    const multipleTable = ref()
    //选择框事件
    const handleSelectionChange = (val) => {
      emit('selectedList', val)
    }
    const clearSelection = () => {
      multipleTable.value.clearSelection()
    }
    function select(selection, row) {
      //   console.log(props.singleSelect)
      if (selection.length > 1 && props.singleSelect) {
        let del_row = selection.shift()
        multipleTable.value.toggleRowSelection(del_row, false)
      }
      emit('morePageSelect', row)
    }
    function selectAll(selection) {
      if (selection.length > 1 && props.singleSelect) {
        selection.length = 1
      }
      emit('selectedList', selection)
    }
    //  function selectEnable() {
    //    return props.isDisableSelect
    //  }
    function tableCloumnClick(row, prop) {
      emit('tableCloumnClick', row, prop)
    }
    function rowClick(row, column, event) {
      emit('rowClick', row, column, event)
    }
    function doLayout() {
      multipleTable.value.doLayout()
    }
    const contentClick = (row) => {
      //   console.log(row)
    }
    function getrowkey(row) {
      return row[props.rowidKey]
    }
    defineExpose({ multipleTable })
    return {
      handleSelectionChange,
      multipleTable,
      clearSelection,
      select,
      selectAll,
      // selectEnable,
      tableCloumnClick,
      rowClick,
      getLabel,
      doLayout,
      contentClick,
      getrowkey
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.table {
  .is-important {
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
  }
  .html-content {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  :deep(.el-button--text) {
    font-size: 14px;
    font-weight: 400;
  }
  background: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid transparent;
  margin-bottom: 0;
  :deep(.el-table--enable-row-transition .el-table__body td) {
    padding: 15px 10px 15px 10px;
    // display: flex;
    // align-items: center;
  }
  :deep(.el-table tbody tr:hover > td) {
    background-color: rgba(115, 113, 255, 0.03);
  }
  :deep(.el-table th > .cell) {
    font-size: 14px;
    padding: 13px 0px 13px 20px;
    //  line-height: 44px;
  }

  :deep(.el-table .cell.el-tooltip) {
    font-size: 14px;
    font-weight: 400;
    color: #1d2129;
    // padding: 0 0 0 10px;
    // @include ellipsis(2);
  }
  :deep(.el-table-column--selection .cell) {
    padding-left: 0px;
    padding-right: 0px;
  }
  :deep(.el-table__header-wrapper) :deep(.el-table td > div),
  :deep(.el-table td .el-table__expand-icon) {
    // line-height: 43px;
    // min-height: 43px;
    font-size: 14px;
    font-family: siyuan, siyuan-Regular;
    font-weight: 400;
    color: #425466;
    padding: 0 10px;
    .el-input-number__increase,
    .el-input-number__decrease {
      margin-top: 1px;
    }
  }
  // :deep(.el-table tbody .el-checkbox:last-of-type) {
  //   margin: 0 0 0 -10px;
  // }
  // :deep(.el-table thead .el-checkbox:last-of-type) {
  //   margin: 0 0 0 -20px;
  // }
  :deep(.el-table) {
    .disabledHeadCheck > .cell .el-checkbox {
      display: none !important;
    }
    //  .el-table__indent {
    //    display: none;
    //  }
  }
  :deep(.el-table__body) {
    // 使表格兼容safari，不错位
    width: 100%;
    table-layout: fixed !important;
    tr.current-row > td {
      background-color: #f6faff !important;
    }

    //  禁用当前行 css样式
    .disabled-row {
      background-color: #fff;
      td > .cell {
        color: #c9cdd4;
      }
      & > td {
        background-color: #ffffff;
      }
    }
    .disabled-row.current-row > td {
      background-color: #ffffff !important;
    }
  }
}
</style>
