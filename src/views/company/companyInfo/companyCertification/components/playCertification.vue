<template>
  <div class="departManageAdd">
    <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" :dialogButton="dialogButton" @onSubmit="save(1)" width="800px">
      <template #content>
        <el-form v-loading="loading" size="small" label-position="top" :rules="formRules" ref="formRef" :model="form">
          <div class="PromptInformation"><i class="el-icon-success"></i>打款已受理！预计2小时内到账</div>
          <div v-if="processType != 2" class="flex-between bankBox">
            <div>
              <div class="flex">
                <div class="">对公账号：</div>
                <div>{{ companyInfo.bank + companyInfo.subbranch }}</div>
              </div>
              <div class="flex">
                <div></div>
                <div>{{ companyInfo.cardNo }}</div>
              </div>
            </div>
            <div class="recertification" @click="reClick">重新认证</div>
          </div>
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item :label="'到账金额'" prop="randomAmount">
                <el-input v-model="form.randomAmount" type="number" placeholder="请输入" style="width: 300px" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </el-dialog-module>
  </div>
</template>

<script setup>
import { ref, nextTick, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { orgCertificationInfoVerifyRandomAmount } from '@/api/company/companyCertification.js'
import { regulars, formatDate } from '@/utils/common.js'

const store = useStore(),
  //定义子组件传值方法
  clickemit = defineEmits(['getList'])
//定义参数
const formRef = ref(),
  //   弹窗显示隐藏
  isShow = ref(false)
onMounted(() => {})
//定义基础数据
let dialogButton = ref(['取消', '提交']),
  form = ref({
    randomAmount: ''
  }),
  formRules = {
    // 定义表单校验规则
    randomAmount: [
      {
        required: true,
        message: '请输入打款金额',
        trigger: 'change'
      }
    ]
  },
  companyInfo = ref({ bank: '', cardNo: '' }),
  title = ref('打款认证'),
  //   打款认证进度
  processType = ref(1),
  companyId = ref(),
  // 初始化调用
  init = (info, type = 1) => {
    console.log(info)
    processType.value = type
    if (processType.value == 2) {
      companyId.value = info
    } else {
      companyId.value = info.companyId
      companyInfo.value = info
    }

    dialogButton.value = ['取消', '提交']
    isShow.value = true
  },
  //重新认证
  reClick = () => {
    resetFunction()
    isShow.value = false
  },
  //定义loading
  loading = ref(false),
  //重置
  resetFunction = () => {
    form.value = {
      randomAmount: ''
    }
    formRef.value?.resetFields()
    clickemit('getList', 2)
  },
  //提交
  save = () => {
    formRef.value.validate((valid) => {
      if (valid) {
        createOrUpdateSolutionFunction(form.value)
      } else {
        return false
      }
    })
  },
  //创建 or 编辑
  createOrUpdateSolutionFunction = (data) => {
    loading.value = true
    let params = {
      companyId: companyId.value,
      randomAmount: form.value.randomAmount || ''
    }
    orgCertificationInfoVerifyRandomAmount(params)
      .then((res) => {
        loading.value = false
        if (res.code === 200) {
          ElMessage.success('认证成功！')
          onClose()
          clickemit('getList', companyId.value, 1)
        } else ElMessage.warning(res.message)
      })
      .catch(() => {
        loading.value = false
      })
  },
  //关闭弹窗
  onClose = () => {
    resetFunction()
    isShow.value = false
  }
defineExpose({
  init
})
</script>

<style lang="scss" scoped>
.el-icon-success {
  color: #52c41a;
  font-size: 16px;
  margin-right: 9px;
}
.PromptInformation {
  margin-top: 0;
}
.dialog-visible .el-form-item {
  width: 300px;
}
.bankBox {
  width: 100%;
  height: 84px;
  line-height: 84px;
  padding: 10px 36px;
  background: #f7f8fa;
  box-sizing: border-box;
  margin-bottom: 20px;
  div {
    line-height: 32px;
  }
  .recertification {
    line-height: 64px;
    height: 64px;
    box-sizing: border-box;
    color: #1664ff;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
  }
}
</style>
