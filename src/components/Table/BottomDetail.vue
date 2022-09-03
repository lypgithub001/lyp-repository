<template>
  <div class="bottom-detail">
    <div class="button-container">
      <div>
        <slot name="bottomLeft"></slot>
      </div>
      <div class="button-container-right">
        <div class="right-item" v-for="(item, index) in feeList" :key="index">
          <div class="label" :style="{ width: labelWidth == 100 ? 'auto' : `${labelWidth}px` }">{{ item.label }}：</div>
          <div
            class="button-container-content"
            :style="{
              width: contentWidth == 100 ? 'auto' : `${contentWidth}px`,
              color: item.color ? item.color : '#27272E',
              fontSize: item.fontSize ? item.fontSize : '14px'
            }"
          >
            {{
              index + 1 == feeList.length
                ? item.content
                : parseFloat(item.content) < 0
                ? `-￥${keepTwoDecimalFull(Math.abs(item.content))}`
                : `+￥${keepTwoDecimalFull(parseFloat(item.content))}`
            }}
          </div>
        </div>
        <slot name="bottomRight"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref, watch, nextTick } from 'vue'
import { keepTwoDecimalFull } from '@/utils/common.js'
export default {
  name: '',
  components: {},
  props: {
    //右侧费用集合
    feeList: {
      type: Array,
      default: () => [],
      require: false
    },
    //label宽度
    labelWidth: {
      type: Number,
      default: 100,
      require: false
    },
    //content宽度
    contentWidth: {
      type: Number,
      default: 100,
      require: false
    }
  },
  setup(props) {
    // watch(
    //   () => props.feeList,
    //   (val) => {
    //     console.log(val)
    //     nextTick(() => {
    //       let dom = document.querySelectorAll('.button-container-content')
    //       let widthArray = []
    //       for (let index = 0; index < dom.length; index++) {
    //         const element = dom[index];
    //         widthArray.push(element.offsetWidth)
    //       }
    //       let maxWidth = Math.max(...widthArray)
    //       state.contentWidth = maxWidth + 'px'
    //       console.log(maxWidth, 'dom')
    //     })

    //   },
    //   {
    //     immediate: true,
    //     deep: true
    //   }
    // )
    const state = reactive({
      // contentWidth: ''
    })
    return {
      ...toRefs(state),
      keepTwoDecimalFull
    }
  }
}
</script>
<style lang="scss">
.bottom-detail {
  margin-top: 20px;
  .button-container {
    display: flex;
    justify-content: space-between;
    .button-container-right {
      .right-item {
        display: flex;
        justify-content: flex-end;
        padding: 6px 0;
        align-items: center;
        .label {
          text-align: right;
          color: #7a828a;
          font-size: 14px;
          width: 100px;
        }
        .button-container-content {
          font-size: 14px;
          // width: 50px;
          text-align: right;
          font-weight: 600;
          min-width: 80px;
        }
      }
    }
    .el-button--default {
      color: #6276a0;
      background: #ffffff;
      border-radius: 4px;
      min-width: 104px;
      height: 32px;
      font-size: 12px;
      font-weight: 400;
      box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
    }
    :deep() {
      .el-button--danger,
      .el-button--primary {
        min-width: 104px;
        height: 32px;
        font-size: 12px;
        font-weight: 400;
      }
    }

    .add-button {
      color: #16ce9c;
    }
    .del-button {
      color: #f56c6c;
    }
    .blue-button {
      color: #1664ff;
      border: 1px solid #1664ff;
    }
    /* .el-pagination.is-background .btn-prev,
    .el-pagination.is-background .btn-next,
    .el-pagination.is-background .el-pager li {
      background-color: #fff;
    }
    .el-pagination.is-background .btn-next,
    .el-pagination.is-background .btn-prev,
    .el-pagination.is-background .el-pager li {
      background-color: #fff;
    } */
    .el-pager li {
      width: 28px;
      height: 28px;
      background: #ffffff;
      border: 1px solid #edf2f7;
      border-radius: 6px;
    }
    .el-button.is-disabled,
    .el-button.is-disabled:hover,
    .el-button.is-disabled:focus {
      color: #c0c4cc;
    }
  }
}
</style>
