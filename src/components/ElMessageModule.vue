<template>
  <div class="message-visible">
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      :before-close="closeFunc"
      @opened="handleDialogOpen"
      :width="width"
      :append-to-body="appendToBody"
      :close-on-click-modal="closeOnClickModal"
      :close-on-press-escape="closeOnPressEscape"
      :show-close="showClose"
    >
      <div style="padding: 0 24px">
        <slot name="content" />
      </div>
      <template #footer v-if="isFooter">
        <span class="dialog-footer">
          <el-button size="small" type="primary" :loading="loading" @click="submitFunc" v-if="dialogButton[0]">{{ dialogButton[0] }}</el-button>
          <el-button size="small" :loading="loading" @click="closeFuncBtn" v-if="dialogButton[1]">{{ dialogButton[1] }}</el-button>
        </span>
      </template>
      <template #footer v-else>
        <slot name="footer" v-if="!isFooter" />
      </template>
    </el-dialog>
  </div>
</template>

<script>
import { toRefs, ref } from 'vue'

export default {
  props: {
    isShow: Boolean,
    closeFunc: Function,
    submitFunc: Function,
    width: {
      type: String,
      default: '470px'
    },
    showClose: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '友情提示'
    },
    dialogButton: {
      type: Array,
      default: () => ['取消', '确定']
    },
    appendToBody: {
      type: Boolean,
      default: false
    },
    closeOnPressEscape: {
      //是否可以通过按下 ESC 关闭 Dialog
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      // 是否可以通过点击 modal 关闭 Dialog
      type: Boolean,
      default: false
    },
    contentHeight: {
      //自定义内容高度   不传值 默认内容高度
      type: String,
      default: 'calc(100vh - 400px)'
    },
    isFooter: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const prop = toRefs(props)
    const dialogVisible = prop.isShow

    const closeFunc = (done) => {
      context.emit('onClose')
    }
    const submitFunc = (done) => {
      context.emit('onSubmit')
    }
    const closeFuncBtn = (done) => {
      context.emit('closeFuncBtn')
    }
    const handleDialogOpen = (done) => {
      context.emit('handleDialogOpen')
    }
    return {
      dialogVisible,

      closeFunc,
      submitFunc,
      handleDialogOpen,
      closeFuncBtn
    }
  },
  directives: {
    dialogdrag: (el) => {
      // 可视窗口的宽度
      const clientWidth = document.documentElement.clientWidth
      // 可视窗口的高度
      const clientHeight = document.documentElement.clientHeight
      // 记录坐标
      let domset = {
        x: clientWidth / 4, // 默认width 50%
        y: (clientHeight * 15) / 100 // 根据 15vh 计算
      }

      // 弹窗的容器
      const domDrag = el.firstElementChild.firstElementChild
      // 重新设置上、左距离
      domDrag.style.marginTop = domset.y + 'px'
      domDrag.style.marginLeft = domset.x + 'px'

      // 记录拖拽开始的光标坐标，0 表示没有拖拽
      let start = { x: 0, y: 0 }
      // 移动中记录偏移量
      let move = { x: 0, y: 0 }

      // 鼠标按下，开始拖拽
      document.onmousedown = (e) => {
        // 判断对话框是否重新打开
        if (domDrag.style.marginTop === '15vh') {
          // 重新打开，设置 domset.y  top
          domset.y = (clientHeight * 15) / 100
        }
        start.x = e.clientX
        start.y = e.clientY
        domDrag.style.cursor = 'move' // 改变光标形状
      }

      // 鼠标移动，实时跟踪
      document.onmousemove = (e) => {
        if (start.x === 0) {
          // 不是拖拽状态
          return
        }
        move.x = e.clientX - start.x
        move.y = e.clientY - start.y

        // 初始位置 + 拖拽距离
        domDrag.style.marginLeft = domset.x + move.x + 'px'
        domDrag.style.marginTop = domset.y + move.y + 'px'
      }
      // 鼠标抬起，结束拖拽
      document.onmouseup = (e) => {
        move.x = e.clientX - start.x
        move.y = e.clientY - start.y

        // 记录新坐标，作为下次拖拽的初始位置
        domset.x += move.x
        domset.y += move.y
        domDrag.style.cursor = '' // 恢复光标形状
        domDrag.style.marginLeft = domset.x + 'px'
        domDrag.style.marginTop = domset.y + 'px'
        // 结束拖拽
        start.x = 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.message-visible {
  .scrollbar_content {
    overflow-x: hidden;
    overflow-y: auto;
    /*border-radius: 4px;*/
    cursor: pointer;
    @include scrollBar;
  }
  .scrollbar_content::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
    display: block;
  }
  &:deep(.el-dialog) {
    animation: 0s;
    border-radius: 4px;
    margin: 0 auto !important;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    .el-dialog__header {
      padding: 16px 24px 24px 24px;
      .el-dialog__close {
        font-size: 20px;
      }
      .el-dialog__title {
        font-size: 16px;
        font-family: 'siyuan, siyuan-Medium';
        font-weight: 500;
        color: #1a202c;
        line-height: 24px;
      }
      .el-dialog__headerbtn {
        top: 18px;
        right: 30px;
      }
    }
    .el-dialog__body {
      padding: 0;
    }
    .el-dialog__footer {
      padding: 24px;
    }
    .el-form-item {
      width: 406px;
    }
  }
  .dialog-footer {
    display: block;
    padding: 24px;
  }
  :deep(.table-card) {
    padding-bottom: 28px;
    margin-bottom: 0;
  }
}
</style>
