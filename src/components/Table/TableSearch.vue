<template>
  <div>
    <div class="sreach_container">
      <slot name="search"></slot>
      <p class="operation1"></p>
      <p class="operation">
        <el-button type="primary" size="mini" @click="funClick(1)">查询</el-button>
        <el-button class="reset_button" size="mini" @click="funClick(0)">重置</el-button>
        <el-button class="reset_button reset_button_last" size="mini" @click="funClick(2)" v-show="isdefault">
          <i class="iconfont icon-liebiao"></i><span v-if="defaultNum == 0">列表</span><span v-else>卡片</span></el-button
        >
      </p>
    </div>
  </div>
</template>

<script setup>
function funClick(val) {
  switch (val) {
    case 0:
    case 1:
      emits('handleSearch', val)
      break
    case 2:
      emits('replacement', val)
    default:
      break
  }
}
const props = defineProps({
  isdefault: {
    //   是否为默认按钮
    type: Boolean,
    default: false
  },
  defaultNum: {
    //   切换时显示的名称
    type: Number,
    default: 0
  }
})
const emits = defineEmits(['handleSearch', 'replacement'])
</script>

<style lang="scss" scoped>
:deep() {
  .sreach_container {
    width: calc(100%);
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 10px;

    & > div {
      width: 250px;
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
        display: none;
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
      width: 340px !important;
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
  }
  .operation1 {
    width: 130px;
    height: 32px;
    margin-bottom: 20px;
  }
  .operation {
    position: absolute;
    right: 0;
    bottom: 20px;

    .el-button {
      width: 60px;
      height: 32px;
      border-radius: 2px;
      &:nth-of-type(0) {
        margin-left: 10px;
      }

      &:hover,
      &:focus {
        color: #fff;
        border-color: #0e51d8;
        background-color: #0e51d8;
      }
    }

    .reset_button {
      //   border: 1px solid #1664ff;
      color: #1d2129;

      &:hover,
      &:focus {
        color: #0e51d8;
        border-color: #0e51d8;
        background-color: #fff;
      }
    }
    .reset_button_last {
      width: 80px;
      span {
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>
