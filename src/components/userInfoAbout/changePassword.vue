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
      width="600px"
    >
      <template #content>
        <el-form size="small" label-position="top" :rules="rules" ref="formRef" :model="formData">
          <el-form-item prop="originalPassword" v-if="pwdType">
            <el-input type="password" v-model="formData.originalPassword" placeholder="原密码" show-password></el-input>
          </el-form-item>
          <el-form-item prop="plainPassword">
            <el-input type="password" v-model="formData.plainPassword" placeholder="新密码" show-password></el-input>
          </el-form-item>
          <el-form-item prop="checkPass">
            <el-input type="password" v-model="formData.checkPass" placeholder="确认密码" show-password></el-input>
          </el-form-item>
        </el-form>
      </template>
    </el-dialog-module>
  </div>
</template>
<script setup>
import { toRefs, reactive, onMounted, ref, nextTick } from 'vue'
import { changeUserPasswordByPassword, getPublicKey, setupUserPassword } from '@/api/login/index.js'
import '@/assets/js/noCaptcha.js'
import { ElMessage } from 'element-plus'
import { setRsaEncrpty } from '@/utils/common.js'
const emits = defineEmits(['closeModel'])
//验证码登录
const smsLoginPictureCode = reactive({
  isNeed: false, //是否需要验证码
  base64: '' //图片验证码base64编码
})
//新密码
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入新密码'))
  } else {
    const reg = /^(?=.*\d)(?=.*[a-zA-Z])[\da-zA-Z~!@#$%^&*_\.]{6,18}$/
    if (reg.test(value)) {
      callback()
    } else {
      callback(new Error('密码必须包含数字、字母，长度6-18位'))
    }
    if (state.formData.checkPass !== '') {
      formRef.value.validateField('checkPass')
    }
    callback()
  }
}
//重复新密码
const validatePass2 = (rule, value, callback) => {
  console.log(value)
  if (!value) {
    callback(new Error('请再次输入新密码'))
  } else if (value !== state.formData.plainPassword) {
    callback(new Error('两次输入新密码不一致!'))
  } else {
    callback()
  }
}
const rules = {
  originalPassword: [
    {
      required: true,
      message: '请输入原密码',
      trigger: 'change'
    }
  ],
  plainPassword: [
    { min: 6, max: 20, message: '新密码长度在 6 到 18 位字符', trigger: 'change' },
    { required: true, validator: validatePass, trigger: 'change' }
  ],
  checkPass: [{ required: true, validator: validatePass2, trigger: 'change' }]
}
const title = ref('修改密码')
const dialogButton = ref(['取消', '确定'])
const isShow = ref(false)

const onClose = () => {
  emits('closeModel', false)
  isShow.value = false
}
const formRef = ref()
//提交表单
const save = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      let pubKey = '' //公钥
      let keyId = '' //密码参数
      //定义修改密码相关字段
      let encryData = {
        plainPassword: state.formData.plainPassword,
        timestamp: new Date().getTime()
      }
      let url
      if (pwdType.value) {
        url = changeUserPasswordByPassword
        encryData.originalPassword = state.formData.originalPassword
      } else {
        url = setupUserPassword
      }
      try {
        loading.value = true
        //获取密钥
        let keyRes = await getPublicKey()
        if (keyRes.code === 200) {
          pubKey = keyRes.data.publicKey
          keyId = keyRes.data.keyId
        } else {
          loading.value = false
          ElMessage.error(keyRes.message)
        }
        let params = {
          keyId: keyId,
          data: setRsaEncrpty(JSON.stringify(encryData), pubKey)
        }

        let res = await url(params)
        if (res.code === 200) {
          ElMessage.success('密码修改成功')
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

const state = reactive({
  formData: {}
})
const { formData } = toRefs(state)
//是否修改过密码
const pwdType = ref(false)
const init = (userInfo) => {
  if (userInfo.changePwdCount > 0) {
    title.value = '修改密码'
    pwdType.value = true
  } else {
    pwdType.value = false
    title.value = '设置密码'
  }
  isShow.value = true
}

//加载动画
const loading = ref(false)
defineExpose({
  init
})
</script>
<style lang="scss" scoped>
@import '@/assets/css/plugin.scss';
.captcha {
  vertical-align: top;
  height: 40px;
  cursor: pointer;
  width: 130px;
  margin-left: 10px;
}

.dynacodeClass {
  display: inline-block;
  cursor: pointer;
  width: 128px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  margin-left: 12px;
  background: #f4f5f6;
  color: #1664ff;
  text-align: center;
  border-radius: 4px;
}
.ns-text-color {
  color: #c0c4cc;
}
.ns-text-color-gray {
  background: #fff;
  color: #1664ff;
}
:deep(.el-form-item--small .el-form-item__content) {
  line-height: 40px;
  margin-bottom: 20px;
}
:deep(.el-input--small .el-input__inner) {
  height: 40px;
  line-height: 40px;
}
:deep(.el-input.is-disabled .el-input__icon) {
  line-height: 40px;
}
:deep(.el-form-item__content .el-input-group) {
  vertical-align: top;
  width: 362px;
}
:deep(.el-form-item--small.el-form-item) {
  margin: 0 auto;
}
:deep(#nc[data-v-5d8ce8a3] ._nc .stage1 .slider) {
  left: -22px;
  margin: 0 auto;
}
form {
  padding-left: 45px;
}
:deep(.el-input--small .el-input__icon) {
  line-height: 40px;
}
</style>
