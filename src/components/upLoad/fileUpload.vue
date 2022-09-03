<template>
  <div class="upload_box">
    <!-- 上传按钮 -->
    <el-upload
      v-if="showUpload"
      :class="[
        isHidden || fileList.length === limit ? 'hidden_up_button' : '',
        type === 'DOCUMENT' ? 'document' : 'image',
        size === 'small' ? 'small_image_up' : ''
      ]"
      action
      :accept="accept"
      :show-file-list="false"
      :before-upload="beforeUpload"
      :http-request="() => {}"
      :multiple="multiple"
      v-loading="loading"
      :disabled="percentage !== 0"
      ref="elUploadRef"
    >
      <div v-if="type === 'DOCUMENT'">{{ btnName ? btnName : '+ 选择文件' }}</div>
      <div v-else :class="['add_box']">
        <div class="add">+</div>
        <div v-if="size !== 'small'" class="text">{{ btnName ? btnName : '添加图片' }}</div>
      </div>
    </el-upload>
    <el-progress v-if="percentage !== 0" class="percentage_box" type="circle" :percentage="percentage" :color="percentageColor" />
    <div v-if="isShowTip && showUpload" class="up_tip">
      <span> (最多上传{{ limit }}个附件</span>
      <span> 单个文件最大{{ maxFileSize }}MB)</span>
    </div>

    <!-- 无附件显示 -->
    <el-row v-if="isHidden && !fileList.length && noFileShow">
      <span v-if="type === 'DOCUMENT'" class="noFile">无附件</span>
    </el-row>

    <!-- 文件展示列表 -->
    <div v-if="type === 'DOCUMENT'" class="documentList">
      <el-row>
        <el-col :span="span" v-for="(item, index) in fileList" :key="item.absolutePath">
          <div class="upDocumentList" @mouseenter="mouseEnter(index)" @mouseleave="mouseEnter(-1)" v-loading="item.loading">
            <svg class="upload_pre_icon" aria-hidden="true">
              <use :xlink:href="getClass(item)"></use>
            </svg>
            <el-tooltip effect="light" :content="item.name" placement="top">
              <div class="file_name">{{ item.name }}</div>
            </el-tooltip>
            <transition name="fade">
              <div class="option" v-show="isShow === index">
                <svg-icon
                  :name="'preview'"
                  :width="'22px'"
                  v-if="
                    (getExt(item.absolutePath || item.path) === 'jpeg' ||
                      getExt(item.absolutePath || item.path) === 'png' ||
                      getExt(item.absolutePath || item.path) === 'jpg') &&
                    showDetail
                  "
                  :height="'22px'"
                  style="margin-right: 8px"
                  @click="onLook(item)"
                ></svg-icon>
                <svg-icon :name="'download'" :width="'16px'" :height="'16px'" style="margin-right: 12px" @click="onDownload(item)" v-if="isHid"></svg-icon>
                <svg-icon
                  :name="'delete'"
                  v-if="$route.query.type !== 'view' && hiddenDel"
                  :width="'16px'"
                  :height="'16px'"
                  @click="handleRemove(item)"
                ></svg-icon>
                <svg-icon :name="'delete'" v-if="showViewDel" :width="'16px'" :height="'16px'" @click="handleRemove(item)"></svg-icon>
              </div>
            </transition>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 图片展示列表 -->
    <div v-else class="upImageList" ref="dragRef">
      <div
        :class="['single_img', size === 'small' ? 'small_img' : '']"
        @mouseenter="mouseEnter(index)"
        @mouseleave="mouseEnter(-1)"
        v-for="(item, index) in fileList"
        :key="item.absolutePath">
        <el-image class="img" :src="item.absolutePath" :preview-src-list="[item.absolutePath]" :appendToBody="isToBody" :z-index="3000" fit="cover" />
        <transition name="fade" v-if="$route.query.type !== 'view' && hiddenDel && !clickMaskUpload">
          <span class="close pointer" v-show="isShow === index" @click="handleRemove(item, index)">×</span>
        </transition>
        <transition name="fade" v-if="$route.query.type !== 'view' && hiddenDel && clickMaskUpload">
          <span class="change_img" v-show="isShow === index" @click="uploadImageByClick">{{ maskContent }}</span>
        </transition>
      </div>
    </div>
  </div>

  <!-- 图片查看 -->
  <el-dialog :title="title" v-model="preFlag" width="80%" :append-to-body="true" destroy-on-close custom-class="dialog-visible">
    <el-scrollbar class="scrollbar_content" :style="{ maxHeight: 'calc(100vh - 225px)', padding: '24px 0px 4px' }">
      <div style="margin: 0px auto; text-align: center">
        <img :src="preUrl" style="background-size: cover; margin-bottom: 20px" alt="图片未生成" />
      </div>
    </el-scrollbar>
  </el-dialog>
</template>
<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { upLoad } from '@/api/common/index.js'
import { onMounted, ref, toRefs } from 'vue'
import { handleFileDownload } from '@/utils/common.js'
import Sortable from 'sortablejs'
import uploadByPieces from './upload.js'

const props = defineProps({
  showUpload: {
    //是否在线查看
    type: Boolean,
    default: true
  },
  showDetail: {
    //是否在线查看
    type: Boolean,
    default: true
  },
  hiddenDel: {
    //是否显示删除按钮
    type: Boolean,
    default: true
  },
  showViewDel: {
    //是否详情显示删除按钮
    type: Boolean,
    default: false
  },
  limit: {
    //最大允许上传个数,控制上传按钮是否显示
    type: Number,
    default: 10
  },
  //是否插入body
  isToBody: {
    type: Boolean,
    default: true
  },
  type: {
    // 上传类型：DOCUMENT , IMAGE
    type: String,
    default: 'DOCUMENT'
  },
  accept: {
    // 可选择类型：
    type: String,
    default: '.doc, .docx,.ofd, .xls,.xlsx, .pdf , .jpg, .jpeg, .png, .zip'
  },
  acceptTypeList: {
    // 限制类型，
    type: Array,
    default: ['doc', 'docx', 'ofd', 'xls', 'xlsx', 'pdf', 'jpg', 'jpeg', 'png', 'zip']
  },
  isHidden: {
    // 是否显示上传按钮
    type: Boolean,
    default: false
  },
  fileList: {
    // 上传、显示列表
    type: Array,
    default: []
  },
  maxFileSize: {
    //文件最大值
    type: Number,
    default: 1024
  },
  isHttps: {
    //是否走请求
    type: Boolean,
    default: true
  },
  multiple: {
    //是否多选上传
    type: Boolean,
    default: false
  },
  index: {
    //用于绑定循环渲染上传组件的index
    type: Number,
    default: null
  },
  span: {
    //控制展示的 col 宽度
    type: Number,
    default: 8
  },
  size: {
    // big；图片标准尺寸  small：图片小图
    type: String,
    default: 'big'
  },
  deleteByRequest: {
    //删除是否要经过请求
    type: Boolean,
    default: false
  },
  noFileShow: {
    //删除是否要经过请求
    type: Boolean,
    default: true
  },
  fileSend: {
    //是否使用文件发送图标
    type: Boolean,
    default: false
  },
  // 是否展示上传提示
  isShowTip: {
    type: Boolean,
    default: false
  },
  btnName: {
    type: String,
    default: ''
  },
  // 采购项传过的判断是否显示上传图标
  isHid: {
    type: Boolean,
    default: true
  },
  //点击蒙版上传图片
  clickMaskUpload: {
    type: Boolean,
    default: false
  },
  maskContent: {
    type: String,
    default: '修改头像'
  }
})
const elUploadRef = ref()
const isShow = ref(-1)
const title = ref('图片预览')
const loading = ref(false)
const { maxFileSize } = toRefs(props)
function mouseEnter(e) {
  isShow.value = e
}

const dragRef = ref(),
  { httpRequest } = uploadByPieces()
onMounted(() => {
  if (props.type === 'IMAGE' && !props.isHidden && dragRef.value) {
    var ops = {
      animation: 600,
      dataIdAttr: 'id',
      //拖动结束
      onEnd: function (evt) {
        //获取拖动后的排序
        const list = props.fileList
        list[evt.oldIndex] = list.splice(evt.newIndex, 1, list[evt.oldIndex])[0]
        emit('submitFile', list, props.index)
      }
    }
    //初始化
    var sortable = Sortable.create(dragRef.value, ops)
  }
})
function uploadImageByClick() {
  elUploadRef.value.$refs.uploadRef.$refs.inputRef.click()
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

// 格式化文件大小显示文字
function getSize(size) {
  return size > 1024
    ? size / 1024 > 1024
      ? size / (1024 * 1024) > 1024
        ? (size / (1024 * 1024 * 1024)).toFixed(0) + 'GB'
        : (size / (1024 * 1024)).toFixed(0) + 'MB'
      : (size / 1024).toFixed(0) + 'KB'
    : size.toFixed(0) + 'B'
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
        const list = props.fileList
        list.push(res.data[0])
        console.log('list===', list)
        if (!props.clickMaskUpload) {
          emit('submitFile', list, props.index)
        } else {
          emit('submitFile', [res.data[0]], props.index)
        }
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
    emit('submitFile', list, file)
  }
}

// 获取文件后缀
function getExt(filePath) {
  if (!filePath) return
  //获取最后一个.的位置
  var index = filePath.lastIndexOf('.')
  //获取后缀
  var ext = filePath.substr(index + 1)
  return ext.toLowerCase()
}

// 点击删除确定
function handleRemove(file, index) {
  ElMessageBox.confirm('确定删除吗？', '提示', {
    type: 'warning'
  }).then(() => {
    const list = props.fileList
    if (!props.deleteByRequest) {
      emit(
        'submitFile',
        list.filter((item) => item.absolutePath !== file.absolutePath),
        props.index,
        list[index]
      )
    } else {
      emit('deleteFile', file, scope.$index)
    }
  })
}
// 点击下载
async function onDownload(file) {
  //   const posIndex = file?.absolutePath.indexOf('aliyuncs.com'),
  //     targetUrl = file?.absolutePath.slice(posIndex + 12)
  file.loading = true
  //   if (file?.absolutePath.includes('cnpc-document.oss')) {
  //     windowOpen(`/ossDocument${targetUrl}`, file.name)
  //   } else if (file?.absolutePath.includes('cnpc-avatar.oss')) {
  //     windowOpen(`/ossAvatar${targetUrl}`, file.name)
  //   }
  const res = await handleFileDownload(file.absolutePath, file.name)
  //   setTimeout(() => {
  file.loading = res
  //   }, 2000)
  emit('downFile')
}

function windowOpen(url, fileName) {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'blob'
  xhr.setRequestHeader('token', window.token)
  xhr.onload = function (res) {
    if (this.status === 200) {
      var type = xhr.getResponseHeader('Content-Type')
      var blob = new Blob([this.response], { type: type })
      if (typeof window.navigator.msSaveBlob !== 'undefined') {
        /*
         * For IE
         * >=IE10
         */
        window.navigator.msSaveBlob(blob, fileName)
      } else {
        /*
         * For Non-IE (chrome, firefox)
         */
        var URL = window.URL || window.webkitURL
        var objectUrl = URL.createObjectURL(blob)
        if (fileName) {
          var a = document.createElement('a')
          if (typeof a.download === 'undefined') {
            window.location = objectUrl
          } else {
            a.href = objectUrl
            a.download = fileName
            document.body.appendChild(a)
            a.click()
            a.remove()
          }
        } else {
          window.location = objectUrl
        }
      }
    }
  }
  xhr.send()
}

// 获取上传文件前缀icon名称
function getClass(e) {
  const dic = {
    ppt: '#icon-ppt',
    pdf: '#icon-geshi-pdf',
    ofd: '#icon-geshi-pdf',
    png: '#icon-a-geshi-pngjpg',
    jpg: '#icon-a-geshi-pngjpg',
    jpeg: '#icon-a-geshi-pngjpg',
    word: '#icon-geshi-word',
    doc: '#icon-geshi-word',
    docx: '#icon-geshi-word',
    xls: '#icon-geshi-excel',
    xlsx: '#icon-geshi-excel'
  }
  return dic[getExt(e.absolutePath || e.name)]
}
const preFlag = ref(false),
  preUrl = ref('')
// 点击预览图片
function onLookImg(file) {
  preUrl.value = file.absolutePath
  preFlag.value = true
  title.value = '图片预览'
  if (file.name) {
    title.value = file.name
  }
}
// 点击预览文件
function onLook(file) {
  if (getExt(file.absolutePath || file.path) == 'pdf' || getExt(file.absolutePath || file.path) == 'PDF') {
    window.open(file.absolutePath || file.path)
  } else if (getFileType(file)) {
    window.open('https://view.officeapps.live.com/op/view.aspx?src=' + file.absolutePath)
  } else {
    preUrl.value = file.absolutePath
    preFlag.value = true
  }
}
// 区分文件和图片类型
function getFileType(e) {
  const fileName = e.name?.lastIndexOf('.'), // 取到文件名开始到最后一个点的长度
    fileNameLen = e.name?.length, // 取到文件名长度
    extension = e.name?.substring(fileName + 1, fileNameLen) // 截

  const dic = ['doc', 'docx', 'ofd', 'xls', 'xlsx', 'pdf']
  if (dic?.indexOf(extension?.toLowerCase()) >= 0) {
    return true
  } else {
    return false
  }
}

const percentage = ref(0),
  percentageColor = [
    { color: '#f56c6c', percentage: 20 },
    { color: '#e6a23c', percentage: 40 },
    { color: '#5cb87a', percentage: 60 },
    { color: '#1989fa', percentage: 80 },
    { color: '#6f7ad3', percentage: 100 }
  ]
// 分片 process cb
function onProcess(current, chunks) {
  percentage.value = parseInt((current / chunks) * 100)
}

// 分片成功cb
function onSuccess(res) {
  const list = props.fileList
  list.push(res.data?.fileInfoVO)
  if (!props.clickMaskUpload) {
    emit('submitFile', list, props.index)
  } else {
    emit('submitFile', [res.data?.fileInfoVO], props.index)
  }
  percentage.value = 0
  ElMessage.success(`上传成功！`)
}

// 分片失败cb
function onError(e) {
  percentage.value = 0
}

const emit = defineEmits(['submitFile', 'downFile'])
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';

.upload_box {
  position: relative;
  .percentage_box {
    position: absolute;
    top: -4px;
    left: 110px;
    width: 40px !important;
    height: 40px !important;

    :deep(.el-progress-circle) {
      width: 40px !important;
      height: 40px !important;
    }
    :deep(.el-progress__text) {
      width: 40px !important;
      font-size: 14px !important;
      transform: translate(-9%, -50%);
    }
  }
}
.document {
  :deep(.el-upload--text) {
    height: 32px;
    line-height: 32px;
    width: 98px;
    color: #1664ff;
    border: 1px solid #1664ff;
    border-radius: 2px;
  }
}
.image {
  :deep(.el-upload--text) {
    width: 80px;
    height: 80px;
    line-height: 14px;
  }

  .add_box {
    width: 80px;
    height: 80px;
    background: #f2f3f5;
    border: 1px dashed #e5e6eb;
    box-sizing: border-box;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #4e5969;
    .add {
      font-weight: 900;
    }
    .text {
      margin-top: 12px;
    }
  }
}
.small_image_up {
  :deep(.el-upload--text) {
    width: 45px !important;
    height: 45px !important;
  }
  .add_box {
    width: 45px !important;
    height: 45px !important;
  }
}

// 上传提示
.up_tip {
  color: #c9cdd4;
  font-size: 12px;
  line-height: 20px;
  position: relative;
  top: -6px;
}

.upDocumentList {
  width: 85%;
  height: 20px;

  background: #f7f8fa;
  border-radius: 2px;

  padding: 8px 12px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  .upload_pre_icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  .file_name {
    flex: 1;
    color: #1d2129;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.2s ease;
  }

  .option {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}

.upImageList {
  display: flex;
  flex-wrap: wrap;

  .single_img {
    width: 80px;
    height: 80px;
    margin-left: 18px;
    line-height: 0;
    position: relative;

    &:nth-of-type(1) {
      margin-left: 0;
    }

    .img {
      width: 100%;
      height: 100%;
      border-radius: 2px;
    }

    .close {
      position: absolute;
      top: 0;
      right: 0px;
      font-size: 12px;
      color: #425466;
      background: rgb(255 255 255 / 50%);
      width: 15px;
      height: 15px;
      line-height: 14px;
      text-align: center;
    }
    .change_img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.6);
      font-size: 14px;
      color: #ffffff;
      cursor: pointer;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: all 0.2s ease;
    }
  }
  .small_img {
    width: 45px;
    height: 45px;
  }
}
.noFile {
  font-size: 13px;
  color: #606266;
}

// 设置隐藏上传按钮或者上传达到限制隐藏
.hidden_up_button {
  display: none !important;
}

// 图片查看
.scrollbar_content {
  overflow-x: hidden;
  overflow-y: auto;
  /*border-radius: 4px;*/
  // cursor: pointer;
  @include scrollBar;
}
</style>
