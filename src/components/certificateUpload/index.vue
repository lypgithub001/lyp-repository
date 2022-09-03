<template>
  <div class="certificate-upload" v-loading="loading">
    <el-upload
      v-if="!imgObject?.absolutePath"
      action
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :accept="accept"
    >
      <img src="@/assets/img/upload-default.png" alt="" class="certificate-upload-img" />
    </el-upload>
    <div v-else style="position: relative">
      <el-image class="preview-img" :src="imgObject?.absolutePath" :preview-src-list="[imgObject?.absolutePath]" fit="cover" />
      <div class="close-icon" @click.stop="deletePic" v-if="isShow"><i class="el-icon-close"></i></div>
    </div>
    <div class="certificate-upload-tips">{{ isShow ? tips : tips.replace('上传', '') }}</div>
    <div class="certificate-upload-example" @click="checkExample" v-if="isShow">样例</div>
    <Example ref="exampleRef" :certificateType="certificateType"></Example>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref, computed } from 'vue'
import { upLoad } from '@/api/common/index.js'
import { ElMessage, ElMessageBox } from 'element-plus'
import imgFace from '@/assets/img/id-card-face.png'
import imgBack from '@/assets/img/id-card-back.png'
import businessLicense from '@/assets/img/business-license.png'
import accountLicense from '@/assets/img/account-license.png'
import Example from './example.vue'
export default {
  name: '',
  components: {
    Example
  },
  props: {
    accept: {
      // 可选择类型：
      type: String,
      default: '.jpg, .jpeg, .png'
    },
    isShow: {
      type: Boolean,
      default: true
    },
    imgObject: {
      //附件对象
      type: Object,
      default: {}
    },
    tips: {
      // 文字提示
      type: String,
      default: ''
    },
    certificateType: {
      //上传证件类型
      type: Number,
      default: 0
    },
    maxFileSize: {
      //图片大小限制
      type: Number,
      default: 1.8
    }
  },
  setup(props, { emit }) {
    const exampleRef = ref()
    const state = reactive({
      imgPath: computed(() => {
        return props.certificateType == 0 ? imgFace : props.certificateType == 1 ? imgBack : props.certificateType == 2 ? businessLicense : accountLicense
      }),
      loading: false,
      async beforeAvatarUpload(file) {
        if (!props.isShow) {
          return ElMessage.warning(`当前状态不允许上传！`)
        }
        const fileLength = file.size,
          maxSize = props.maxFileSize * 1024 * 1024
        if (fileLength > maxSize) {
          return ElMessage.warning(`上传的文件大于${state.getSize(maxSize)}`)
        }
        let formData = new FormData()
        formData.append('fileList', file, file.name)
        formData.append('fileType', 'AVATAR')
        state.loading = true
        try {
          const res = await upLoad(formData)
          if (res.code === 200) {
            emit('update:imgObject', res.data[0] || {})
            ElMessage.success(`上传成功！`)
          } else {
            ElMessage.error(`上传失败！`)
          }
          state.loading = false
        } catch (error) {
          state.loading = false
          console.log(error)
        }
      },
      getSize(size) {
        return size > 1024
          ? size / 1024 > 1024
            ? size / (1024 * 1024) > 1024
              ? (size / (1024 * 1024 * 1024)).toFixed(0) + 'GB'
              : (size / (1024 * 1024)).toFixed(1) + 'MB'
            : (size / 1024).toFixed(0) + 'KB'
          : size.toFixed(0) + 'B'
      },
      deletePic() {
        ElMessageBox.confirm('确定删除选中图片吗？', '提示', {
          type: 'warning'
        }).then(async () => {
          emit('update:imgObject', null)
        })
      },
      handleAvatarSuccess() {},
      checkExample() {
        exampleRef.value.init(props.certificateType)
      }
    })
    return {
      ...toRefs(state),
      exampleRef
    }
  }
}
</script>
<style lang="scss">
.certificate-upload {
  background: #f7f8fa;
  border-radius: 4px;
  width: 192px;
  padding: 21px 21px 5px 21px;
  box-sizing: border-box;
  .el-upload--text {
    width: auto;
    height: auto;
    border: transparent;
    background: transparent;
  }
  .certificate-upload-img {
    width: 150px;
    height: 102px;
  }
  .preview-img {
    width: 150px;
    height: 113px;
  }
  .certificate-upload-tips {
    text-align: center;
    font-size: 14px;
  }
  .certificate-upload-example {
    font-size: 12px;
    text-align: center;
    color: #165dff;
    cursor: pointer;
  }
  .el-image__error {
    display: none;
  }
  .close-icon {
    position: absolute;
    top: 5px;
    right: 5px;
    background: #000000;
    color: #ffffff;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    opacity: 0.4;
  }
}
.certificate-upload + .certificate-upload {
  margin-left: 20px;
}
</style>
