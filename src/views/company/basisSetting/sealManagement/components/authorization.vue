<template>
  <el-dialog-module
    :isShow="generateIsShow"
    title="授权"
    @onClose="generateOnClose"
    :dialogButton="dialogButton"
    :loading="generateloading"
    @onSubmit="generateSave"
    width="500px"
  >
    <template #content>
      <el-form :rules="generateFormRules" ref="generateFormRef" :model="generateform" class="sendPhone">
        <el-row>
          <el-col :span="24">
            <el-form-item label="手机号" prop="phone">
              <el-input v-model.trim="generateform.phone" placeholder="请输入"> </el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </template>
  </el-dialog-module>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { regulars } from '@/utils/common.js'
import { eCompanyAuthApply } from '@/api/company/basisSetting/sealManagement.js'

export default {
  name: 'sendCode',
  components: {},
  setup() {
    const generateFormRef = ref()
    const state = reactive({
      generateIsShow: false,
      generateloading: false,
      generateFormRules: {
        phone: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          { pattern: regulars.phoneReg, required: true, message: '手机号格式错误', trigger: 'blur' }
        ]
      },
      generateform: {},
      dialogButton: [],
      init(companyId) {
        state.generateIsShow = true
        state.dialogButton = ['取消', '确定']
        state.generateform = {
          companyId,
          phone: ''
        }
      },
      generateSave() {
        generateFormRef.value.validate(async (valid) => {
          if (valid) {
            try {
              state.generateloading = true
              let res = await eCompanyAuthApply(state.generateform)
              state.generateloading = false
              if (res.code == 200) {
                window.open(res.data, '_blank')
                state.generateOnClose()
              }
            } catch (error) {
              state.generateloading = false
            }
          }
        })
      },
      generateOnClose() {
        state.generateIsShow = false
        state.generateloading = false
      }
    })
    return {
      ...toRefs(state),
      generateFormRef
    }
  }
}
</script>
 

<style lang="scss">
.sendPhone {
}
</style>
