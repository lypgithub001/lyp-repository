<template>
  <el-dialog-module :isShow="modelValue" title="相关模板下载" @onClose="onClose" closeOnClickModal width="940px" :dialogButton="['取消']">
    <template #content>
      <el-card
        class="file-card"
        shadow="hover"
        :body-style="{ display: 'flex', justifyContent: 'space-between', alignItems: ' flex-end' }"
        v-for="item in list"
        :key="item.id"
      >
        <div class="file-card-left">
          <div class="title">
            <span class="lable">文件名称：</span>
            <span class="value">{{ item.title }}</span>
          </div>
          <div class="file-name">
            <span class="lable">附件内容：</span>
            <span class="value">{{ item.fileName }}</span>
          </div>
        </div>
        <el-button type="primary" @click="download(item.ossUrl, item.fileName)">下载附件</el-button>
      </el-card>
    </template>
  </el-dialog-module>
</template>

<script setup>
import { ref, defineProps, onMounted } from 'vue'
import { fileList } from '@/api/company/procurementSystem.js'
import { handleFileDownload } from '@/utils/common.js'

const emits = defineEmits(['getData', 'update:modelValue'])

/**
 * 接收父组件的值
 */
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const list = ref([])

onMounted(() => {
  getList()
})

/**
 * 获取附件列表
 */
async function getList() {
  const res = await fileList()
  if (res.code === 200) {
    list.value = res.data
  }
}

/**
 * 关闭弹窗
 */
function onClose() {
  emits('update:modelValue', false)
}

/**
 * 下载
 */
function download(absolutePath, name) {
  handleFileDownload(absolutePath, name)
}
</script>

<style lang="scss" scoped>
.file-card {
  margin-bottom: 10px;
}

.down-load {
  color: #ffffff;
}
</style>
