<template>
  <div class="appointment">
    <el-dialog-module
      :title="''"
      :isShow="isShow"
      @onClose="onClose"
      :append-to-body="false"
      :showClose="false"
      :isFooter="false"
      :dialogButton="[]"
      @onSubmit="onClose"
      :contentHeight="'525px'"
      width="1210px"
    >
      <template #content>
        <div style="position: relative">
          <img src="@/assets/img/login/yuyue.png" alt="" style="width: 1210px" />
          <div class="close-img" @click="onClose"></div>
        </div>
      </template>
    </el-dialog-module>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
export default {
  setup(props, { emit }) {
    const tableRef = ref()
    const state = reactive({
      isShow: false,
      title: '',
      loading: false,
      //初始化
      init() {
        state.isShow = true
      },

      onClose: () => {
        state.isShow = false
      },
      saveInfo: () => {
        state.isShow = false
      }
    })
    return {
      ...toRefs(state),
      tableRef
    }
  }
}
</script>
<style lang="scss">
.appointment {
  .scrollbar_content {
    padding: 0 !important;
    overflow: hidden;
  }
  .dialog-visible .el-dialog__header {
    display: none;
  }
  .dialog-footer {
    display: none;
  }
  .close-img {
    position: absolute;
    width: 30px;
    height: 30px;
    background: transparent;
    right: 15px;
    top: 15px;
    cursor: pointer;
  }
}
</style>
