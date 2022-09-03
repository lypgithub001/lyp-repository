<template>
  <div class="table-file-upload">
    <el-upload class="upload-demo" action="" :before-upload="beforeUpload" :show-file-list="false" :limit="limit" :http-request="() => {}">
      <el-button size="mini" type="primary">选择文件</el-button>
    </el-upload>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { upLoad } from '@/api/common/index.js'
export default {
  name: '',
  components: {

  },
  props: {
    maxFileSize: {
      //文件最大值
      type: Number,
      default: 5
    },
    limit: {
      //最大允许上传个数,控制上传按钮是否显示
      type: Number,
      default: 1
    },
    fileList: {
      // 上传、显示列表
      type: Array,
      default: []
    },
    isHttps: {
      //是否走请求
      type: Boolean,
      default: true
    },
    index: {
      //用于绑定循环渲染上传组件的index
      type: Number,
      default: null
    },
    refresh: {
      type: Boolean,
      default: false
    },
    needAlert: {
      //是否多选上传
      type: Boolean,
      default: false
    },
  },
  setup(props, { emit }) {
    const state = reactive({
      beforeUpload: (file) => {
        const isLt2M = file.size / 1024 / 1024 < props.maxFileSize
        if (!isLt2M) {
          ElMessage.warning(`上传图标大小不能超过${props.maxFileSize}MB!`)
          return false
        }
        const fileNameReg = /[,]/gi
        if (fileNameReg.test(file.name)) {
          ElMessage.warning(`文件名不能含有逗号，请修改再上传！`)
          return false
        }

        if (file.name.length > 50) {
          ElMessage.warning(`文件名太长，请修改再上传！`)
          return false
        }
        state.upLoadHandle(file)
      },
      upLoadHandle: async (file) => {
        let formData = new FormData()
        formData.append('fileList', file, file.name)
        formData.append('fileType', 'AVATAR')
        if (props.isHttps) {
          try {
            const res = await upLoad(formData)
            if (res.code === 200) {
              const list = props.refresh ? [] : props.fileList
              list.push(res.data[0])
              emit('submitFile', list, props.index)
              if (props.needAlert) {
                ElMessage.success(`上传成功！`)
              }
            } else {
              ElMessage.error(`上传失败！`)
            }
          } catch (error) {
            console.log(error)
          }
        } else {
          console.log('file', file)
          const list = [
            {
              name: file.name,
              absolutePath: '',
              fileSize: file.size,
              fileType: getExt(file.name)
            }
          ]
          emit('submitFile', list, file)
        }
      },
      getExt: (filePath) => {
        //获取最后一个.的位置
        var index = filePath.lastIndexOf('.')
        //获取后缀
        var ext = filePath.substr(index + 1)
        return ext
      }
    })
    return {
      ...toRefs(state)
    }
  }


}
</script>
<style lang="scss">
.table-file-upload {
  .el-upload--text {
    width: 100% !important;
    height: 100% !important;
    border: transparent;
    background: transparent;
  }
  .upload-demo {
    display: flex;
    align-content: center;
  }
}
</style>