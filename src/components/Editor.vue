<template>
  <div class="editor_box" ref="editorRef" v-loading="loading"></div>
</template>
<script setup>
import E from 'wangeditor'
import { ref, onMounted, toRefs, watch } from 'vue'
import { upLoad } from '@/api/common/index.js'
import { ElMessage } from 'element-plus'

const props = defineProps({
    content: {
      type: String,
      default: ''
    }
  }),
  emits = defineEmits(['catchData'])

const editorRef = ref(null),
  editor = ref(null),
  loading = ref(false),
  { content } = toRefs(props)

watch(content, (newValue, oldValue) => {
  editor.value.txt.html(newValue)
})

onMounted(() => {
  createWang()
})

function createWang() {
  editor.value = new E(editorRef.value)
  editor.value.config.onchange = (html) => {
    emits('catchData', html) // 把这个html通过catchData的方法传入父组件
  }

  editor.value.config.customUploadImg = async function (resultFiles, insertImgFn) {
    // resultFiles 是 input 中选中的文件列表
    // insertImgFn 是获取图片 url 后，插入到编辑器的方法
    let formData = new FormData()
    formData.append('fileList', resultFiles[0], resultFiles[0].name)
    formData.append('fileType', 'AVATAR')
    try {
      loading.value = true
      const res = await upLoad(formData)
      if (res.code === 200) {
        // 上传图片，返回结果，将图片插入到编辑器中
        insertImgFn(res.data[0].absolutePath)
      } else {
        ElMessage.error(`上传失败！`)
      }
      loading.value = false
    } catch (error) {
      console.log(error)
      loading.value = false
    }
  }

  // 配置菜单栏，删减菜单，调整顺序
  editor.value.config.menus = [
    'head',
    'bold',
    'fontSize',
    'fontName',
    'italic',
    'underline',
    'strikeThrough',
    'foreColor',
    // 'link',
    'justify',
    'image'
    // 'video',
  ]

  editor.value.create() // 创建富文本实例

  if (content.value) {
    editor.value.txt.html(content.value)
  }
}
function insertValue(html) {
  editor.value.cmd.do('insertHTML', html)
}
defineExpose({
  insertValue
})
</script>
<style lang="scss" rel="stylesheet/scss">
@import '@/assets/css/mixin.scss';
.editor_box {
  height: 100%;
  .w-e-text-container {
    height: 94% !important;
    .w-e-text {
      @include scrollBar;
    }
  }
}
</style>
