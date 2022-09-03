<template>
  <div class="search_condition_box_scope_limit">
    <div class="title_box">
      <h3 class="header_title" v-if="headerTitle">{{ headerTitle }}</h3>
      <slot name="header_title"></slot>
      <div class="header_title_right"><slot name="header_title_right"></slot></div>
    </div>
    <div style="margin-top: 20px">
      <slot name="header_bottom"></slot>
    </div>
    <div class="tabs" v-if="tabList.length">
      <el-tabs v-model="activeName" @tabClick="handleClick">
        <el-tab-pane
          v-for="(item, index) in tabList"
          :label="`${item.name}${item.prop ? '（' + (statistical[item.prop] || 0) + '）' : ''}`"
          :name="item.id"
          :key="index"
        ></el-tab-pane>
      </el-tabs>
      <div class="hr" :style="{ marginTop: tabList.length > 0 ? '' : '20px' }"></div>
      <div class="tabs_right"><slot name="tabs_right"></slot></div>
    </div>
    <div class="conditions_box" v-if="hasSearch">
      <slot name="out"></slot>
      <span class="more" v-if="isShowMore">
        <el-popover placement="bottom" :show-arrow="false" trigger="click" ref="elPopoverRef" width="auto">
          <template #reference>
            <p class="fake-select-title">
              更多筛选({{ conditionsNum || 0 }})
              <svg-icon name="arrow_down" />
            </p>
          </template>
          <template #default>
            <div class="fake_select_content_scope_limit">
              <slot name="more"></slot>
              <div class="options">
                <el-button class="reset_button" size="mini" @click="funClick('reset')">重置</el-button>
                <el-button type="primary" size="mini" @click="funClick('ok')">确定</el-button>
              </div>
            </div>
          </template>
        </el-popover>
      </span>
      <div class="input" v-if="!!slots.input">
        <slot name="input"></slot>
      </div>
      <slot name="selected"></slot>
    </div>
  </div>
</template>

<script setup>
import { ref, useSlots } from 'vue'

const props = defineProps({
  //标题
  headerTitle: {
    type: String,
    default: ''
  },
  // 有效条件个数
  conditionsNum: {
    type: Number,
    default: 0
  },
  // 当前选中tab
  activeName: {
    //当前状态id
    type: String,
    default: '0'
  },
  // tab的list
  tabList: {
    type: Array,
    default: () => []
  },
  // 数量统计
  statistical: {
    type: Object,
    default: {}
  },
  // 是否使用更多筛选
  isShowMore: {
    type: Boolean,
    default: true
  },
  //   是否展示搜索条件
  hasSearch: {
    type: Boolean,
    default: true
  }
})

const slots = useSlots(),
  elPopoverRef = ref()
// 搜索、close callback
function funClick(type) {
  switch (type) {
    case 'reset':
    case 'ok':
      elPopoverRef.value.hide()
      emits('handleSearch', type === 'reset' ? 0 : 1)
      break
    default:
      break
  }
}

function handleClick(tab, event) {
  //tab按钮/当前状态下页面
  emits('tabClick', tab, event)
}

const emits = defineEmits(['handleSearch', 'tabClick'])
</script>

<style lang="scss">
.search_condition_box_scope_limit {
  margin-top: -10px;
  padding-top: 30px;
  .title_box {
    display: flex;
    justify-content: space-between;
    position: relative;
    .header_title {
      font-weight: 600;
      font-size: 22px;
      line-height: 28px;
      color: #1d2129;
    }
  }
  .tabs {
    position: relative;
    .hr {
      height: 10px;
      background-color: #f2f3f5;
      margin: 0 -20px;
    }
    .el-tabs__nav-wrap::after {
      background-color: transparent;
    }
    .el-tabs__header {
      margin: 0;
    }
    .el-tabs__active-bar {
      height: 1px;
      background-color: #1664ff;
    }
    .el-tabs__item {
      color: #4e5969;
      font-size: 16px;
      // font-family: 'PingFangSC, PingFangSC-Semibold';
    }
    .el-tabs__item.is-active {
      color: #1664ff;
      font-size: 16px;
      font-weight: 600;
    }
    .el-tabs__item {
      height: 60px;
      line-height: 60px;
    }
    .tabs_right {
      position: absolute;
      right: 0;
      top: 0;
      transform: translate(0, 50%);
    }
  }
  .conditions_box {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
    & > span {
      margin-bottom: 20px;
      margin-right: 35px;
    }

    & > div {
      min-width: 200px;
      margin-right: 20px;
      margin-bottom: 20px;
      box-sizing: border-box;
      border: 1px solid #e5e6eb;
      height: 32px;
      border-radius: 2px;
      line-height: 30px;
      display: flex;
      align-items: center;
      padding-left: 8px;
      z-index: 999;
      & > p {
        font-size: 14px;
        color: #1d2129;
        white-space: nowrap;
        font-family: 'siyuan, siyuan-Regular';

        &::after {
          content: '：';
        }
      }

      // 处理时间选择框的宽度
      .el-date-editor {
        width: 100%;
      }

      .el-range__icon,
      .el-icon-time {
        width: 0px;
        display: none;
      }
      .el-date-editor .el-range-input {
        width: 45%;
      }
    }
    // 小号
    .search_single_size_small {
      width: 160px !important;
    }

    // 标准号
    .search_single_size_standard {
      width: 250px !important;
    }

    // 大号
    .search_single_size_big {
      width: 380px !important;
    }

    // 特大号
    .search_single_size_bigMost {
      width: 430px !important;
    }

    // 超大号
    .search_single_size_bigMostDouble {
      width: 520px !important;
    }

    .el-input__inner {
      border: none;
      border-radius: 0;
      padding: 0;
      color: #1d2129;
      font-family: 'siyuan, siyuan-Regular';
      background-color: transparent;
      line-height: 33px;

      &:hover {
        background-color: transparent;
      }
      &:focus {
        background-color: transparent;
      }
    }
    input {
      background-color: transparent;

      &::-webkit-input-placeholder {
        font-family: 'siyuan, siyuan-Regular';
        color: #c9cdd4;
        font-size: 14px;
        font-weight: normal;
      }
    }

    .more {
      display: block;
      .fake-select-title {
        display: flex;
        align-items: center;
        height: 22px;
        line-height: 22px;
        color: #1664ff;
        font-size: 14px;
        cursor: pointer;
        // white-space: nowrap;

        .svg-icon {
          width: 6px;
          height: 5px;
          margin-left: 7px;
        }
      }
    }
    .input {
      width: 340px;
      margin-right: 30px;
      position: relative;
      border: none;
      padding-left: 0;
      .el-input__inner {
        border: none;
        border-radius: 2px;
        padding: 0 0 0 10px;
        color: #4e5969;
        background-color: #f7f8fa;
        line-height: 33px;
        padding-left: 30px;
      }
      input {
        background-color: #f7f8fa;

        &::-webkit-input-placeholder {
          color: #c9cdd4;
          font-size: 14px;
          font-weight: normal;
        }
      }
      .el-input__prefix {
        left: 8px;
      }
      .svg-icon {
        width: 16px;
        height: 16px;
      }
    }
  }
}

.fake_select_content_scope_limit {
  position: relative;
  box-sizing: border-box;
  padding: 10px 20px 0 0;
  & > div {
    display: flex;
    justify-content: right;
    align-items: center;
    margin-bottom: 30px;
    box-sizing: border-box;
    & > div {
      width: 340px !important;
    }
    & > p {
      white-space: nowrap;
      margin-right: 20px;
    }

    .el-range__icon,
    .el-icon-time {
      width: 0px;
      display: none;
    }
    .el-date-editor .el-range-input {
      width: 45%;
    }
  }

  .el-input-range {
    width: 400px;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
  }
  .options {
    border-top: 1px solid #e5e6eb;
    margin: 0px -40px 0 -20px;
    padding: 20px 40px 0 0;
    display: flex;
    justify-content: right;
    .el-button {
      width: 104px;
      height: 32px;
    }
  }

  .close {
    position: absolute;
    top: -18px;
    right: -5px;
    font-size: 18px;
  }
}
</style>
