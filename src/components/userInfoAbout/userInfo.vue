<template>
  <div>
    <el-dialog-module
      :isShow="isShow"
      :title="title"
      @onClose="onClose"
      :closeOnClickModal="false"
      :dialogButton="dialogButton"
      @onSubmit="save"
      :loading="loading"
      width="1000px"
    >
      <template #content>
        <el-form size="small" label-position="top" :rules="rules" ref="formRef" :model="formData">
          <el-row>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="头像：">
                <FileUpload
                  :limit="1"
                  :type="'IMAGE'"
                  size="small"
                  :isToBody="false"
                  :multiple="true"
                  :accept="'.jpg, .jpeg, .png, .JPG, .JPEG'"
                  :acceptTypeList="['jpg', 'jpeg', 'png', 'JPG', 'JPEG']"
                  :fileList="formData.fileList || []"
                  @submitFile="submitFile"
                ></FileUpload>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="姓名:" prop="name">
                <el-input v-model.trim="formData.name" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="电话:" prop="phone">
                <el-input v-model.trim="formData.phone" placeholder="请输入" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="邮箱:" prop="email">
                <el-input v-model.trim="formData.email" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="性别:" prop="gender">
                <el-radio-group v-model="formData.gender">
                  <el-radio :label="0">女</el-radio>
                  <el-radio :label="1">男</el-radio>
                </el-radio-group>
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
import { updateUserInfo } from '@/api/login/index.js'
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
  name: [
    {
      required: true,
      message: '请输入姓名',
      trigger: 'blur'
    },
    { min: 2, max: 6, message: '姓名长度在 2 到 6 个字符', trigger: 'change' },
    { pattern: regulars.chineseUserName, message: '请输入正确的姓名', trigger: 'change' }
  ],
  email: [
    {
      type: 'email',
      message: '请输入正确的邮箱地址',
      trigger: ['blur', 'change']
    }
  ]
}
const title = ref('编辑个人资料')
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
          params.avatar = formData.value.fileList[0]?.absolutePath || ''
        }

        console.log(params)
        let res = await updateUserInfo(params)
        if (res.code === 200) {
          ElMessage.success('个人资料修改成功')
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
//上传图片
const submitFile = (file) => {
  formData.value.fileList = file
}
//初始化
const init = () => {
  isShow.value = true
  store.dispatch('queryUserInfo').then((res) => {
    formData.value = res
    if (formData.value.avatar && formData.value.avatar != 'https://cnpc-avatar.oss-cn-beijing.aliyuncs.com/avatar.png') {
      formData.value.fileList = [{ absolutePath: formData.value.avatar }]
    } else {
      formData.value.fileList = []
    }
  })
}
//加载动画
const loading = ref(false)
defineExpose({
  init
})
</script>
<style lang="scss" scoped></style>
