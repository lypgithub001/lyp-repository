<template>
  <div v-loading="loading">
    <HeaderTabs :headerTitle="'采购制度管理'">
      <template #rightContainer>
        <el-button type="primary" size="mini" @click="downLoad">相关模板下载</el-button>
      </template>
    </HeaderTabs>
    <div class="procurement_system">
      <Editor ref="editRef" :isEditing="isEditing" />
      <!-- <iframe ref="frameRef" frameborder="0" width="100%" height="100%" :src="iframeSrc"></iframe> -->
    </div>
    <table-bottom>
      <template v-slot:bottomRight>
        <el-button v-if="!isEditing" @click="logicFn('edit')" type="primary" size="mini">编辑</el-button>
        <el-button v-if="isEditing" @click="logicFn('sub')" type="primary" size="mini">提交修改</el-button>
        <el-button v-if="isEditing && form" @click="logicFn('reset')" size="mini">恢复默认</el-button>
        <el-button v-if="isEditing" @click="logicFn('cancle')" size="mini">取消</el-button>
      </template>
    </table-bottom>
  </div>
  <!-- 附件下载 -->
  <fileList v-if="fileListShow" v-model="fileListShow"></fileList>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Editor from '@/components/EditorNew.vue'
import { ElMessage } from 'element-plus'
import { purchaseSystemAdd, purchaseSystemDetails, purchaseSystemUpdate, purchaseSystemRecovery } from '@/api/company/procurementSystem.js'

import fileList from './components/fileList.vue'

onMounted(() => {
  init()
  window.addEventListener(
    'message',
    (e) => {
      //本地开发iframe跨域 需要到开发测试
      let application = frameRef.value.contentWindow.YozoOffice.Application
      application.ActiveWindow.View.Zoom.Percentage = 100
    },
    false
  )
})

const form = ref(null),
  loading = ref(false),
  isEditing = ref(false),
  iframeSrc = ref(''),
  frameRef = ref()
async function init() {
  try {
    loading.value = true
    const res = await purchaseSystemDetails(1)
    if (res.code === 200) {
      form.value = res.data?.id || null
      // iframeSrc.value = res.data?.openFileUrl || ''
      editRef.value.valueHtml = res.data?.content || ''
      content
    } else {
      ElMessage.error(res.message)
    }
    loading.value = false
  } catch (error) {
    loading.value = false
    console.log(error)
  }
}

/**
 * 相关模板下载
 */
const fileListShow = ref(false)
function downLoad() {
  fileListShow.value = true
}

const editRef = ref()
// 底部按钮逻辑处理
async function logicFn(type) {
  switch (type) {
    case 'edit':
      editRef.value.enable()
      init()
      isEditing.value = true
      break
    case 'sub':
      try {
        loading.value = true
        const Ittr = purchaseSystemUpdate
        const res = await Ittr({ id: form.value, content: editRef.value.editorRef.getHtml() })
        if (res.code === 200) {
          init()
          ElMessage.success('修改成功')
          logicFn('cancle')
        } else {
          ElMessage.error(res.message)
        }
        loading.value = false
      } catch (error) {
        loading.value = false
        console.log(error)
      }
      break
    case 'reset':
      try {
        loading.value = true
        const res = await purchaseSystemRecovery()
        if (res.code === 200) {
          iframeSrc.value = res.data?.openFileUrl
          ElMessage.success('恢复默认成功')
        } else {
          ElMessage.error(res.message)
        }
        loading.value = false
      } catch (error) {
        loading.value = false
        console.log(error)
      }
      break
    case 'cancle':
      // init()
      isEditing.value = false
      break
    default:
      break
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';

.procurement_system {
  height: calc(100vh - 307px);
  padding: 30px 20px 20px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  .onlyView {
    height: 100%;
    overflow: auto;
    @include scrollBar;
  }
  :deep(.richText) {
    max-width: 100%;
    .el-form-item__content {
      z-index: 0;
    }
  }
}
</style>
