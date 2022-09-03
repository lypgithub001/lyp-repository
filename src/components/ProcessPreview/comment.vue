<template>
  <div :class="['comment', { dialogBox: isDialog }]" :style="{ width: width }">
    <div class="commentDiv" v-if="isComment">
      <el-input
        type="textarea"
        v-model="commentCont"
        show-word-limit
        :autosize="{ minRows: 4, maxRows: 6 }"
        maxlength="1000"
        placeholder="请输入评论内容"
      ></el-input>
      <el-button size="mini" type="primary" class="fiexdBtn" @click="commentCommit" commentLoading>发表评论</el-button>
    </div>
    <div class="imgBox">
      <div class="imglist flex">
        <div class="imgItem upload-demo" v-for="(imgItem, index) in imgList" :key="index" @mouseenter="mouseEnter(index)" @mouseleave="mouseEnter(-1)">
          <el-image class="img" :src="imgItem.url" :preview-src-list="imgList" :appendToBody="isToBody" :z-index="3000" fit="cover" />
          <div class="el-upload-list__item-actions" v-show="isShow === index">
            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(imgItem, index)">
              <i class="el-icon-plus"></i>
            </span>
            <span class="el-upload-list__item-preview" @click="handleRemove(imgItem, index)">
              <i class="el-icon-delete"></i>
            </span>
          </div>
        </div>

        <el-upload
          v-if="limit != 0"
          action
          :accept="accept"
          :before-upload="beforeUpload"
          :http-request="() => {}"
          :multiple="multiple"
          v-loading="loading"
          list-type="picture-card"
          :limit="10"
          :show-file-list="false"
          class="upload-demo"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <p v-if="limit != 0" class="tipInfo">(可上传{{ limit }}张图片)</p>
      </div>
    </div>
    <!-- 图片查看 -->
    <el-dialog :title="'图片预览'" v-model="dialogVisible" width="80%" :append-to-body="true" destroy-on-close custom-class="dialog-visible">
      <el-scrollbar class="scrollbar_content" :style="{ padding: '24px 0px 4px' }">
        <div style="margin: 0px auto; text-align: center">
          <img :src="dialogImageUrl" style="background-size: cover; margin-bottom: 20px" alt="图片未生成" />
        </div>
      </el-scrollbar>
    </el-dialog>
  </div>
</template>
<script>
import { ElMessage, ElMessageBox } from 'element-plus'
import { reactive, ref, computed, toRefs } from '@vue/reactivity'
import { onMounted } from 'vue'
import { upLoad } from '@/api/common/index.js'
export default {
  name: 'comment',
  props: {
    isComment: {
      default: true,
      type: Boolean
    },
    width: {
      default: '',
      type: String
    },
    type: {
      default: 'png,jpg,jpeg',
      type: String
    },
    accept: {
      // 可选择类型：
      type: String,
      default: '.jpg, .jpeg, .png'
    },
    acceptTypeList: {
      // 限制类型，
      type: Array,
      default: ['jpg', 'jpeg', 'png']
    },
    maxFileSize: {
      //文件最大值
      type: Number,
      default: 1024
    },
    multiple: {
      //多选
      type: Boolean,
      default: true
    },
    isHttps: {
      //是否走请求
      type: Boolean,
      default: true
    },
    fileList: {
      // 上传、显示列表
      type: Array,
      default: []
    },
    //是否插入body
    isToBody: {
      type: Boolean,
      default: true
    },
    //是否在弹窗里
    isDialog: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      commentCont: '',
      imgList: [],
      limit: computed(() => 10 - state.imgList.length),
      dialogVisible: false,
      isShow: -1,
      dialogImageUrl: '',
      commentLoading: false
    })
    const loading = ref(false)
    const { maxFileSize } = toRefs(props)
    function submitFile(file) {
      state.imgList.push(file)
    }
    // 上传前校验文件类型及大小
    function beforeUpload(file) {
      if (props.accept !== '*') {
        const fileName = file.name.lastIndexOf('.'), // 取到文件名开始到最后一个点的长度
          fileNameLen = file.name.length, // 取到文件名长度
          extension = file.name.substring(fileName + 1, fileNameLen) // 截

        // 上传不区分文件类型大小写，统一转成小写
        if (props.acceptTypeList.indexOf(extension.toLowerCase()) < 0) {
          ElMessage.warning(`只能上传${props.acceptTypeList}类型的文件`)
          return
        }
      }

      const fileNameReg = /[,]/gi
      if (fileNameReg.test(file.name)) {
        ElMessage.warning(`文件名不能含有逗号，请修改再上传！`)
        return
      }

      if (file.name.length > 50) {
        ElMessage.warning(`文件名太长，请修改再上传！`)
        return
      }

      const fileLength = file.size,
        maxSize = maxFileSize.value * 1024 * 1024
      console.log(+fileLength, +maxSize, maxFileSize.value)
      if (+fileLength > +maxSize) {
        ElMessage.error(`上传的文件大于${getSize(maxSize)}`)
      } else if (fileLength > 5 * 1024 * 1024) {
        const reNamedFile = new File([file], file.name.toLowerCase(), { type: 'AVATAR' })
        httpRequest(reNamedFile, onProcess, onSuccess, onError)
        // upLoadHandle(file)
      } else {
        const reNamedFile = new File([file], file.name.toLowerCase(), { type: 'AVATAR' })
        // httpRequest(file, onProcess, onSuccess, onError)
        upLoadHandle(reNamedFile)
      }
    }
    // 上传 Fn
    async function upLoadHandle(file) {
      let formData = new FormData()
      formData.append('fileList', file, file.name)
      formData.append('fileType', 'AVATAR')
      if (props.isHttps) {
        loading.value = true
        try {
          const res = await upLoad(formData)
          if (res.code === 200) {
            let obj = { url: res.data[0].absolutePath }
            submitFile(obj)
            ElMessage.success(`上传成功！`)
          } else {
            ElMessage.error(`上传失败！`)
          }
          loading.value = false
        } catch (error) {
          loading.value = false
          console.log(error)
        }
      } else {
        const list = [
          {
            name: file.name,
            absolutePath: '',
            fileSize: file.size,
            fileType: getExt(file.name)
          }
        ]
        state.imgList.push(list)
      }
    }
    function commentCommit() {
      let urls = state.imgList.map((i) => {
        return i.url
      })
      let param = {
        content: state.commentCont,
        pictureUrl: urls.join(',')
      }
      emit('commentSub', param)
    }

    function handleRemove(uploadFile, index) {
      state.imgList.splice(index, 1)
    }

    function handlePictureCardPreview(uploadFile, index) {
      state.dialogImageUrl = uploadFile.url
      state.dialogVisible = true
    }
    function mouseEnter(e) {
      state.isShow = e
    }
    return {
      ...toRefs(state),
      loading,
      beforeUpload,
      commentCommit,
      handleRemove,
      handlePictureCardPreview,
      mouseEnter
    }
  }
}
</script>
<style lang="scss">
.comment {
  .el-textarea {
    max-width: 870px;
  }
  .commentDiv {
    position: relative;
    .fiexdBtn {
      position: absolute;
      bottom: 0;
      margin-left: 20px;
    }
  }
  .tipInfo {
    color: #86909c;
    line-height: 90px;
    margin-left: 10px;
  }
  .el-upload--picture-card {
    width: 80px;
    height: 80px;
    margin-top: 10px;
    line-height: 80px;
    i {
      vertical-align: sub;
    }
  }
  .imgBox {
    display: flex;
    flex-wrap: wrap;
  }
  .imglist {
    flex-wrap: wrap;
    .imgItem {
      width: 80px;
      height: 80px;
      margin-top: 10px;
      margin-right: 20px;
      position: relative;
      cursor: pointer;
      img {
        width: 80px;
        height: 80px;
      }
      .el-upload-list__item-actions {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        width: 80px;
        height: 80px;
        line-height: 80px;
        background: rgba(78, 89, 105, 0.7);
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 0 20px;
        box-sizing: border-box;
        .el-upload-list__item-preview {
          font-size: 16px;
          color: #fff;
        }
      }
    }
  }
}
.dialogBox {
  .imglist .imgItem .el-upload-list__item-actions,
  .imglist .imgItem,
  .el-upload--picture-card {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .imglist .imgItem img {
    width: 40px;
    height: 40px;
  }
  .el-upload--picture-card {
    i {
      font-size: 16px;
      vertical-align: baseline;
    }
  }
  .tipInfo {
    line-height: 50px;
  }
}
</style>
