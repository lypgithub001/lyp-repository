<template>
  <div class="editor_box">
    <Toolbar v-show="isEditing" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" style="border-bottom: 1px solid #ccc" />
    <Editor
      class="editor"
      :defaultConfig="editorConfig"
      :mode="mode"
      v-model="valueHtml"
      style="height: calc(100vh - 350px); overflow-y: hidden"
      @onCreated="handleCreated"
      @onChange="onChangeFn"
    />
  </div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css'
import { onBeforeUnmount, ref, shallowRef } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { upLoad } from '@/api/common/index.js'

const props = defineProps({
  isEditing: {
    type: Boolean,
    default: true
  }
})

// 编辑器实例，必须用 shallowRef，重要！
const editorRef = shallowRef(),
  toolbarConfig = {
    excludeKeys: [
      // 'headerSelect',
      // 'indent',
      // 'delIndent',
      // 'sub',
      // 'sup',
      'code',
      'clearStyle',
      'todo',
      'redo',
      'undo',
      'emotion',

      // 'through',
      'blockquote',
      'bulletedList',
      'numberedList',
      'codeBlock',
      'insertLink',
      'editLink',
      'unLink',
      'viewLink',
      'divider',
      'insertVideo',
      'insertImage',
      'fullScreen'
      //   'uploadVideo',
      //   'uploadImage'
    ]
  },
  editorConfig = { placeholder: '请输入内容' },
  // 内容 HTML
  valueHtml = ref(),
  mode = 'default'

// 编辑器回调函数
function handleCreated(editor) {
  // 记录 editor 实例，重要！
  editorRef.value = editor

  // 判断是否可编辑
  if (!props.isEditing) {
    disable()
  }
  // 图片自定义上传
  editorRef.value.getConfig().MENU_CONF.uploadImage.customUpload = async (file, insertFn) => {
    let formData = new FormData()
    formData.append('fileList', file, file.name)
    formData.append('fileType', 'AVATAR')
    try {
      const res = await upLoad(formData)
      if (res.code === 200) {
        // 上传图片，返回结果，将图片插入到编辑器中
        insertFn(res.data[0].absolutePath)
      } else {
        ElMessage.error(`上传失败！`)
      }
    } catch (error) {
      console.log(error)
    }
  }
  // 视频自定义上传
  editorRef.value.getConfig().MENU_CONF.uploadVideo.customUpload = async (file, insertFn) => {
    console.log('视频上传666666')
    let formData = new FormData()
    formData.append('fileList', file, file.name)
    formData.append('fileType', 'AVATAR')
    try {
      const res = await upLoad(formData)
      if (res.code === 200) {
        // 上传图片，返回结果，将图片插入到编辑器中
        insertFn(res.data[0].absolutePath)
      } else {
        ElMessage.error(`上传失败！`)
      }
    } catch (error) {
      console.log(error)
    }
  }
}

function onChangeFn(editor) {
  emit('richTextCallback', editor.getHtml() === '<p><br></p>' ? '' : editor.getHtml())
}

function disable() {
  const editor = editorRef.value
  if (editor == null) return
  editor.disable()
}
function enable() {
  const editor = editorRef.value
  if (editor == null) return
  editor.enable()
}

// 组件销毁时，也及时销毁编辑器，重要！
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const emit = defineEmits(['richTextCallback'])
defineExpose({
  valueHtml,
  editorRef,
  enable,
  disable
})
</script>
<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.editor_box {
  height: 100%;
  border: 1px solid #ccc;
  @include scrollBar;

  :deep(.w-e-scroll) {
    @include scrollBar;
  }
}

.w-e-full-screen-container {
  z-index: 99999;
}
</style>
