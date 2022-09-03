<template>
  <div class="" id="personal-info">
    <el-form size="small" label-position="left" :rules="rules" ref="formRef" :model="formData">
      <el-row>
        <el-col :lg="24" :sm="24" :xs="24">
          <el-form-item label="头像" prop="fileList" style="margin-bottom: 20px">
            <FileUpload
              :limit="1"
              :type="'IMAGE'"
              size="big"
              :isToBody="false"
              :multiple="true"
              :accept="'.jpg, .jpeg, .png, .JPG, .JPEG'"
              :acceptTypeList="['jpg', 'jpeg', 'png', 'JPG', 'JPEG']"
              :fileList="formData.fileList || []"
              @submitFile="submitFile"
              :btnName="'上传头像'"
              :clickMaskUpload="true"
            ></FileUpload>
          </el-form-item>
        </el-col>
        <el-col :lg="24" :sm="24" :xs="24">
          <el-form-item label="姓名" prop="name">
            <el-input v-model.trim="formData.name" placeholder="请输入真实姓名"></el-input>
          </el-form-item>
        </el-col>
        <el-col :lg="24" :sm="24" :xs="24">
          <el-form-item label="性别" prop="gender">
            <el-radio-group v-model="formData.gender" @change="genderChange">
              <el-radio :label="0">女</el-radio>
              <el-radio :label="1">男</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script setup>
import { reactive, ref, onMounted } from 'vue'
import { updateUserInfo } from '@/api/login/index.js'
import '@/assets/js/noCaptcha.js'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import { regulars } from '@/utils/common'

onMounted(() => {
  init()
})
const store = useStore()
const emits = defineEmits(['closeModel', 'saveSuccess'])
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
      trigger: 'change'
    },
    { min: 2, max: 6, message: '姓名长度在 2 到 6 个字符', trigger: 'change' },
    { pattern: regulars.chineseUserName, message: '请输入正确的姓名', trigger: 'change' }
  ],
  fileList: [
    {
      required: true,
      message: '请上传头像',
      trigger: 'change'
    }
  ],
  gender: [
    {
      required: true,
      message: '请选择性别',
      trigger: 'blur'
    }
  ]
}
const formRef = ref()
let formData = ref(
  reactive({
    fileList: []
  })
)
const isDefaultAvatar = ref(true)
const genderChange = (val) => {
  //选择性别如果没穿头像默认头像
  if (isDefaultAvatar.value) {
    if (formData.value.gender == 1) {
      //男性
      formData.value.fileList = [{ absolutePath: 'https://cnpc-avatar.oss-cn-beijing.aliyuncs.com/2022-08-08/4b6765709f2941078054e43ff6eefb2d.png' }]
    } else {
      formData.value.fileList = [{ absolutePath: 'https://cnpc-avatar.oss-cn-beijing.aliyuncs.com/2022-08-08/1d00811a220f411893d48fe759760e8b.png' }]
    }
  }
}
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
          emits('saveSuccess', true)
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
const submitFile = (file, index, item) => {
  formData.value.fileList = file
  if (item) {
    isDefaultAvatar.value = true
  } else {
    isDefaultAvatar.value = false
  }
}
//初始化
const init = () => {
  store.dispatch('queryUserInfo').then((res) => {
    formData.value = res
    let regPhone = /^1\d{10}$/
    if (regPhone.test(res.name)) {
      formData.value.name = ''
      formData.value.gender = ''
    }
    if (formData.value.avatar && formData.value.avatar != 'https://cnpc-avatar.oss-cn-beijing.aliyuncs.com/avatar.png') {
      formData.value.fileList = [{ absolutePath: formData.value.avatar }]
      isDefaultAvatar.value = false
    } else {
      formData.value.fileList = []
    }
  })
}
//加载动画
const loading = ref(false)

defineExpose({
  init,
  save
})
</script>
<style lang="scss">
#personal-info {
  width: 600px;
  margin: 0 auto;
}
</style>
