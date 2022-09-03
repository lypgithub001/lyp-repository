<template>
  <div class="certificationCheck">
    <HeaderTabs :headerTitle="'提交审核'">
      <template v-slot:rightContainer>
        <el-button size="mini" @click="submitInfo">提交</el-button>
      </template>
    </HeaderTabs>
    <el-form :model="ruleForm" ref="formRef" label-position="left" :rules="rules" class="form-card" :label-width="'180px'">
      <card-container :typeArea="true" v-if="certificationType === 'personage'">
        <template #title> 个人信息认证 <span class="finishHint">完成公司认证请同步完成申请个人认证。</span></template>
        <template #content>
          <el-row>
            <el-col :span="12">
              <el-form-item prop="idCardName" label="您的姓名：">
                <el-input placeholder="请输入您的姓名" v-model="ruleForm.idCardName" maxlength="30"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="idNumber" label="您的身份证号码：">
                <el-input placeholder="请输入您的身份证号码" v-model="ruleForm.idNumber" maxlength="20"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </template>
      </card-container>
      <card-container v-if="certificationType === 'company'" :typeArea="true">
        <template #title> 企业证照</template>
        <template #content>
          <el-row>
            <el-col :span="12">
              <el-form-item prop="name" label="公司营业执照：">
                <img src="@/assets/img/campany/businessLicense.png" alt="" width="136" height="160" />
                <div class="flex downloadFileBox">
                  <div class="file">营业执照图片：</div>
                  <div class="down">模版预览</div>
                </div>
                <div class="hint">照片所有信息需清晰可见，内容真实有效，不得做任何修改。 照片支持.jpg .jpeg .bmp .gif .png格式，大小不超过10M。</div>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="time" label="在职证明：">
                <img src="@/assets/img/campany/incumbencyCertification.png" alt="" width="136" height="160" />
                <div class="flex downloadFileBox">
                  <div class="file">请下载《在职证明》</div>
                  <div class="down">点击下载</div>
                </div>
                <div class="hint">
                  按要求填写,并手写仅用于云采采认证字样,并加盖企业公章，照片所有信息需清晰可见，内容真实有效 照片支持.jpg .jpeg .bmp .gif
                  .png格式，大小不超过8M。
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </template>
      </card-container>
      <card-container v-if="certificationType === 'legalPerson'" :typeArea="true">
        <template #title> 法人认证</template>
        <template #content>
          <el-row>
            <el-col :span="12">
              <el-form-item prop="name" label="法人代表姓名：">
                <el-input placeholder="请输入法人代表姓名" v-model="ruleForm.name" maxlength="30"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="time" label="法人代表身份证号码：">
                <el-input placeholder="请输入法人代表身份证号码" v-model="ruleForm.name" maxlength="20"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item prop="time" label="在职证明：">
                <img src="@/assets/img/campany/incumbencyCertification.png" alt="" width="136" height="160" />
                <div class="flex downloadFileBox">
                  <div class="file">请下载《认证授权书》</div>
                  <div class="down">点击下载</div>
                </div>
                <div class="hint">
                  按要求填写,并手写仅用于云采采认证字样,并加盖企业公章，照片所有信息需清晰可见，内容真实有效 照片支持.jpg .jpeg .bmp .gif
                  .png格式，大小不超过8M。
                </div>
              </el-form-item>
            </el-col>
          </el-row>
        </template>
      </card-container>
    </el-form>
  </div>
</template>
<script setup>
import { ref, reactive, defineComponent, inject, toRefs } from 'vue'
import { useRoute } from 'vue-router'
import { userCertify } from '@/api/company/companyCertification.js'

const route = useRoute()
//认证类型
const certificationType = ref('')
certificationType.value = route.query.companyType || ''
const formRef = ref()
const dicData = reactive({
  typeList: [
    { name: '已生效', id: 1 },
    { name: '未生效', id: 0 }
  ]
})
const state = reactive({
  ruleForm: {},
  selectData: [],
  rules: {
    idCardName: { message: '请输入您的姓名', required: true, trigger: 'blur' },
    idNumber: { message: '请输入您的身份证号码', required: true, trigger: 'blur' },
    type: { message: '请选择领用类型', required: true, trigger: 'blur' },
    unitPrice: { message: '', required: true, trigger: 'blur' }
  },
  handleSelectionChange: (val) => {
    state.selectData = val
  },
  submitInfo: () => {
    formRef.value.validate(async (valid) => {
      if (valid) {
        try {
          let res = await userCertify(state.ruleForm)
          console.log(res)
        } catch (error) {}
      }
    })
  }
})
const { ruleForm, selectData, handleSelectionChange, submitInfo, rules } = toRefs(state)
</script>
<script>
export default defineComponent({
  name: 'company-CertificationCheck'
})
</script>
<style lang="scss" scoped>
.certificationCheck {
  .finishHint {
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    color: #b5b5bd;
    margin-left: 15px;
  }
  :deep(.el-form-item__label) {
    width: 120px;
    text-align: right;
  }
  .downloadFileBox {
    .file {
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      color: #b5b5bd;
    }
    .down {
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      color: #3754db;
    }
  }
  .hint {
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    color: #b5b5bd;
    line-height: 18px;
  }
}
</style>
