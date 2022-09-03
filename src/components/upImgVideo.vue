<template>
  <div class="upLoad">
    <div class="file_list">
      <div class="img_list" v-for="(item, index) in imgFileList" :key="item.absolutePath" :style="{ width: format === 'video' ? '320px' : '180px' }">
        <img class="el-upload-list__item-thumbnail" :src="item.absolutePath" alt="" v-if="format === 'img'" />
        <vueMiniPlayer
          v-else-if="format === 'video'"
          ref="vueMiniPlayer"
          :video="{
            url: item.absolutePath,
            cover: item.absolutePath,
            preload: 'none',
            muted: false,
            loop: false,
            volume: 1,
            autoplay: false
          }"
          :mutex="false"
        />
        <span class="el-upload-list__item-actions">
          <span
            v-if="format === 'img'"
            class="img_view"
            @click="handlePictureCardPreview(item.absolutePath)"
            :style="{ left: $route.query.type !== 'view' ? '40%' : '50%' }"
          >
            <i class="el-icon-view"></i>
          </span>

          <span
            v-if="$route.query.type !== 'view'"
            class="img_del"
            :style="{
              left: format === 'video' ? '94%' : '60%',
              top: format === 'video' ? '15%' : '50%'
            }"
            @click="handleRemove(index)"
          >
            <i :class="format === 'video' ? 'el-icon-close' : 'el-icon-delete'"></i>
          </span>
        </span>
      </div>
    </div>
    <el-upload
      v-if="imgFileList.length != limit"
      :http-request="submitUpload"
      action=""
      list-type="picture-card"
      :limit="limit"
      class="upload-demo"
      :file-list="imgFileList"
      :show-file-list="false"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" append-to-body>
      <img :src="dialogImageUrl" alt="" />
    </el-dialog>
  </div>
</template>
<script>
import { upLoad } from '@/api/common/index.js'

export default {
  name: 'upLoad',
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    limit: {
      type: Number,
      default: () => 1
    },
    imgFileList: {
      // 展示图片列表
      type: Array,
      default: () => []
    },
    format: {
      // 展示图片列表
      type: String,
      default: 'img'
    }
  },
  mounted() {},
  methods: {
    beforeUploadVideo(file) {
      // var fileSize = file.size / 1024 / 1024 < 50
      if (['video/mp4', 'video/3gp', 'video/avi'].indexOf(file.type) === -1) {
        this.$alert(`文件类型不正确,只允许上传${this.type}文件格式的文件！`, '提示', {
          type: 'warning',
          confirmButtonText: '确定'
        })
        return false
      }

      let videoUrl = URL.createObjectURL(file)
      let audioElement = new Audio(videoUrl)
      audioElement.addEventListener('loadedmetadata', () => {
        let duration = audioElement.duration // 时长为秒，小数，182.36
        if (duration > 15) {
          this.$alert(`上传视频时长不能超过15秒`, '提示', {
            type: 'warning',
            confirmButtonText: '确定'
          })
          return false
        }
      })
      // if (!fileSize) {
      //   this.$alert('视频大小不能超过50MB', '提示', {
      //     type: 'warning',
      //     confirmButtonText: '确定'
      //   })
      //   return false
      // }
    },
    // 校验图片类型及大小
    beforeAvatarUpload(file) {
      const flag = this.handleFileType(this.type, file.name)

      if (!flag) {
        this.$emit('editParents', Array.from(this.imgFileList))
        this.$alert(`文件类型不正确,只允许上传${this.type}文件格式的文件！`, '提示', {
          type: 'warning',
          confirmButtonText: '确定'
        })
        return false
      }

      // const isLt2M = file.size / 1024 / 1024 < 1;
      // if (!isLt2M) {
      //   this.$alert(`上传图标大小不能超过 1MB!`, "提示", {
      //     type: "warning",
      //     confirmButtonText: "确定",
      //   });
      //   this.$emit("editParents", Array.from(this.imgFileList));
      //   return false;
      // }

      if (file.name.length > 50) {
        this.$emit('editParents', Array.from(this.imgFileList))

        this.$alert(`文件名太长，请修改再上传！`, '提示', {
          type: 'warning',
          confirmButtonText: '确定'
        })
        return false
      }

      const fileNameReg = /[,]/gi
      if (fileNameReg.test(file.name)) {
        this.$emit('editParents', Array.from(this.imgFileList))

        this.$alert(`文件名不能含有逗号，请修改再上传！`, '提示', {
          type: 'warning',
          confirmButtonText: '确定'
        })
        return false
      }
    },

    // 上传图标
    submitUpload(content) {
      // 自定义的上传图片的方法
      let formData = new FormData()
      formData.append('fileList', content.file, content.file.name)
      formData.append('fileType', 'AVATAR')
      console.log('formData', formData)

      if (this.format === 'img' ? this.beforeAvatarUpload(content.file) : this.beforeUploadVideo(content.file)) return

      upLoad(formData)
        .then((res) => {
          if (res.data.code === 200) {
            if (this.imgFileList.length === 0) {
              this.imgFileList.push(
                Object.assign(res.data.data[0], {
                  isMaster: 1,
                  serialNo: this.imgFileList.length
                })
              )
            } else {
              this.imgFileList.push(
                Object.assign(res.data.data[0], {
                  isMaster: 0,
                  serialNo: this.imgFileList.length
                })
              )
            }
            this.$emit('editParents', this.imgFileList)
          } else {
            this.$message.error(res.data.message)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 文件类型判断
    handleFileType(acceptType, filename) {
      if (acceptType) {
        let type = filename.slice(filename.lastIndexOf('.') + 1)
        if (type) {
          type = type.toLowerCase()
        }
        let arrowTypeArr = acceptType.split(',')
        let flag = false
        for (let i = 0; i < arrowTypeArr.length; i++) {
          if (type.indexOf(arrowTypeArr[i]) !== -1) {
            flag = true
            break
          }
        }
        return flag
      }
      return true
    },
    handleRemove(file) {
      this.imgFileList.splice(file, 1)
      this.$emit('editParents', this.imgFileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="scss" scoped>
.upLoad {
  .upload-demo {
    display: inline-block;
  }

  :deep(.el-upload--picture-card) {
    width: 180px;
    height: 120px;
    line-height: 120px;
  }

  :deep(.el-upload-list__item) {
    width: 180px;
    height: 120px;
  }

  .el-upload-list__item-thumbnail {
    width: 180px;
    height: 120px;
  }

  .file_list {
    display: inline;
    vertical-align: top;
    margin: 0;
  }

  .img_list {
    position: relative;
    width: 180px;
    height: 120px;
    margin: 0 8px 8px 0;
    border-radius: 6px;
    display: inline-block;
    z-index: 100;

    .img_view {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 40%;
      top: 50%;
      background-color: rgba(0, 0, 0, 0.7);
      text-align: center;
      border-radius: 50%;
      line-height: 30px;
      cursor: pointer;
      color: #fff;
      transform: translate(-50%, -50%);
      display: none;
    }
    .img_del {
      position: absolute;
      width: 30px;
      height: 30px;
      left: 60%;
      top: 50%;
      background-color: rgba(0, 0, 0, 0.7);
      text-align: center;
      border-radius: 50%;
      line-height: 30px;
      cursor: pointer;
      color: #fff;
      transform: translate(-50%, -50%);
      display: none;
    }
  }

  .img_list:hover .img_del {
    display: block;
  }
  .img_list:hover .img_view {
    display: block;
  }
  .vm-player {
    width: 320px;
  }
}
</style>
