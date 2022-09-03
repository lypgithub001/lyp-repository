<template>
  <div>
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
      custom-class="dialog-visible"
    >
      <slot name="header" />
      <el-scrollbar class="scrollbar_content" :style="{ maxHeight: contentHeight, padding: '24px 30px 4px 30px' }">
        <slot name="content" />
      </el-scrollbar>
      <template #footer v-if="isFooter">
        <span class="dialog-footer">
          <el-button :loading="loading" @click="closeFunc" v-if="dialogButton[0]">{{ dialogButton[0] }}</el-button>
          <el-button type="primary" :loading="loading" @click="submitFunc" v-if="dialogButton[1]">{{ dialogButton[1] }}</el-button>
          <el-button type="primary" :loading="loading" @click="exportFunc" v-if="dialogButton[2]">{{ dialogButton[2] }}</el-button>
        </span>
      </template>
      <span class="dialog-footer" style="padding: 12px 30px; text-align: right" v-if="!isFooter">
        <slot name="footer" />
      </span>
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
    exportFunc: Function,
    width: {
      type: String,
      default: '30%'
    },
    title: {
      type: String,
      required: true
    },
    dialogButton: {
      type: Array,
      default: () => ['取消', '确定']
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      //是否可以通过按下 ESC 关闭 Dialog
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      // 是否可以通过点击 modal 关闭 Dialog
      type: Boolean,
      default: true
    },
    contentHeight: {
      //自定义内容高度   不传值 默认内容高度
      type: String,
      default: 'calc(100vh - 275px)'
    },
    isFooter: {
      //是否隐藏footer
      type: Boolean,
      default: true
    },
    isHeaderer: {
      //是否隐藏header
      type: Boolean,
      default: false
    },
    loading: {
      //按钮加载动画
      type: Boolean,
      default: false
    },
    //是否显示关闭图标
    showClose: {
      type: Boolean,
      default: true
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
      const handleDialogOpen = (done) => {
         context.emit('handleDialogOpen')
      }
      const exportFunc = () => {
         context.emit('exportFunc')
      }
      return {
         dialogVisible,
         closeFunc,
         submitFunc,
         handleDialogOpen,
         exportFunc
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

<style lang="scss">
@import '@/assets/css/mixin.scss';
.dialog-visible {
   border-radius: 4px;
   margin-top: 93px !important;
   margin-bottom: 5px;
   .scrollbar_content {
      overflow-x: hidden;
      overflow-y: auto;
      /*border-radius: 4px;*/
      // cursor: pointer;
      @include scrollBar;
   }
   .scrollbar_content::-webkit-scrollbar {
      /*滚动条整体样式*/
      width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
      height: 1px;
      display: block;
   }

   .el-dialog__header {
      padding: 0 30px;
      line-height: 48px;
      border-bottom: 1px solid #eeeeee;
      .el-dialog__close {
         font-size: 25px;
      }
      .el-dialog__title {
         font-size: 16px;
         font-family: 'siyuan, siyuan-Medium';
         font-weight: 500;
         color: #1a202c;
         line-height: 24px;
      }
      .el-dialog__headerbtn {
         top: 12px;
         right: 30px;
      }
   }
   .el-dialog__body {
      padding: 0;
   }
   .el-dialog__footer {
      padding: 0;
   }
   .el-form-item {
      width: 406px;
   }
   .dialog-footer {
      display: block;
      border-top: 1px solid #eeeeee;
      padding: 12px 30px;
      .main-bottom {
         padding: 15px 30px 15px;
         margin: -12px -30px !important;
      }
   }
   :deep(.table-card) {
      padding-bottom: 28px;
      margin-bottom: 0;
   }
}
</style>

<style lang="scss" scoped>
.dialog-footer {
   :deep(.el-button--default) {
      color: #1d2129;
      background: #ffffff;
      min-width: 104px;
      height: 32px;
      font-size: 12px;
      font-weight: 400;
      border-radius: 4px;
      // box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
   }
   :deep() {
      .el-button--primary,
      .el-button--danger {
         min-width: 104px;
         height: 32px;
         font-size: 12px;
         font-weight: 400;
         // box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
      }
   }
}
</style>
