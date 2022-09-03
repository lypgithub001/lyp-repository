<template>
  <div class="updataUserInfoClass">
    <el-dialog-module
      :isShow="isShow"
      :title="title"
      :appendToBody="false"
      @onClose="onClose"
      :closeOnClickModal="false"
      :dialogButton="dialogButton"
      @onSubmit="save"
      :loading="loading"
      :showClose="false"
      width="600px"
    >
      <template #content>
        <el-form size="small" label-position="left" :rules="rules" ref="formRef" :model="formData" style="margin-left: 70px; margin-top: 6px">
          <el-row>
            <el-col :lg="24" :sm="24" :xs="24">
              <el-form-item label="反馈内容" prop="content">
                <el-input
                  v-model.trim="formData.content"
                  type="textarea"
                  :autosize="{ minRows: 4, maxRows: 6 }"
                  maxLength="341"
                  placeholder="请填写反馈内容"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="24" :sm="24" :xs="24">
              <el-form-item label="附件信息">
                <FileUpload :limit="10" :type="'DOCUMENT'" :fileList="formData.fileList || []" @submitFile="submitFile" :fileSend="true" :span="20" />
                <p class="fliedw">(单个附件最大10M,最多上传10个)</p>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </el-dialog-module>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { feedbackAdd } from '@/api/user/index.js'
import '@/assets/js/noCaptcha.js'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import { regulars } from '@/utils/common'

const store = useStore()
const emits = defineEmits(['closeModel'])
//验证码登录
const smsLoginPictureCode = reactive({
  isNeed: false, //是否需要验证码
  base64: '' //图片验证码base64编码
})

const rules = {
  content: [
    {
      required: true,
      message: '请填写反馈内容',
      trigger: 'change'
    }
  ]
}
const title = ref('意见反馈')
const dialogButton = ref(['取消', '确定'])
const isShow = ref(false)
const onClose = () => {
  emits('closeModel', false)
  isShow.value = false
}
const formRef = ref()
let formData = ref(
  reactive({
    fileList: []
  })
)
//提交表单
const save = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      try {
        loading.value = true
        let params = formData.value
        if (formData.value.fileList?.length > 0) {
          params.annexList = formData.value.fileList
        } else {
          params.annexList = []
        }
        let res = await feedbackAdd(params)
        if (res.code === 200) {
          ElMessage.success('提交反馈成功！')
          emits('closeModel', true)
        } else {
          ElMessage.warning(res.message)
        }
        loading.value = false
      } catch (error) {
        loading.value = false
      }
    } else {
      console.log('error submit!!')
      return false
    }
  })
}
//上传文件
const submitFile = (file) => {
  formData.value.fileList = file
}
//初始化
const init = () => {
  isShow.value = true
}
//加载动画
const loading = ref(false)
defineExpose({
  init
})
</script>
<style lang="scss" scope>
.updataUserInfoClass {
  .dialog-visible .el-dialog__header {
    line-height: 68px;
    border-bottom: 1px solid #e5e6eb;
  }
  .dialog-visible .el-dialog__header .el-dialog__title {
    font-size: 20px;
  }
  .el-form-item--small .el-form-item__label {
    color: #4e5969;
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
  }
  .dialog-visible .dialog-footer {
    padding: 20px 30px;
    .el-button--primary {
      height: 32px;
      width: 72px;
      min-width: 104px;
    }
  }
  .titleHint {
    color: #86909c;
    font-weight: 400;
    font-size: 12px;
  }
  .small_image_up {
    width: 45px;
    height: 45px;
  }
  .el-form-item--small.el-form-item {
    margin-bottom: 40px;
  }
}
.fliedw {
  position: relative;
  font-size: 12px;
  color: #7a828a;
}
</style>
