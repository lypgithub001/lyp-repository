<template>
  <div class="departManageAdd">
    <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" :dialogButton="dialogButton" @onSubmit="save" width="800px">
      <template #content>
        <el-form v-show="!showCertificationWay" v-loading="loading" size="small" label-position="top" :rules="formRules" ref="formRef" :model="form">
          <!-- <h3 class="pb20">基本信息</h3> -->
          <div class="wayBox flex">
            <div class="leftTitle">公司名称</div>
            <div class="textContent">{{ companyInfo.name }}</div>
          </div>
          <!-- <div class="wayBox flex">
            <div class="leftTitle">组织类型</div>
            <div class="rightContent" v-for="(item, index) in dicData.IdTypeEnumList" :key="index" @click="chooseOrg(item)">
              {{ item.name }}
            </div>
          </div> -->
          <!-- <div class="wayBox flex">
            <div class="leftTitle">认证方式</div>
            <div
              v-for="(item, index) in dicData.certificationTypeList"
              :class="isWay === item.id ? 'rightContent' : 'noChoose'"
              :key="index"
              @click="chooseOrg(item)"
            >
              {{ item.name }}
            </div>
          </div> -->
          <div class="PromptInformation">
            <svg-icon :name="'prompt'" width="16px" height="16px"></svg-icon>
            {{ '提交认证后将跳转认证页面' }}
            <!-- {{
              isWay === '1'
                ? '仅法人代表本人可操作该认证，其他团队成员可选择其他认证方式。'
                : isWay === '2'
                ? '智采云将向您公司以下账户打入指定金额，正确填写打款金额后可通过认证。'
                : '需要向法人代表身份证申请的手机号发送链接，请确保满足该条件。'
            }} -->
          </div>
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item :label="'公司全称'" prop="name">
                <el-input v-model.trim="form.name" placeholder="请输入" style="width: 300px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item :label="'社会统一信用代码'" prop="idNumber">
                <el-input v-model.trim="form.idNumber" placeholder="请输入" style="width: 300px"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <!-- <h3>{{ isWay === '1' ? '企业类' : isWay === '2' ? '个体工商户' : '其他组织' }}</h3> -->
          <!-- <div class="PromptInformation">
            <svg-icon :name="'prompt'" width="16px" height="16px"></svg-icon>
            {{
              isWay === '1'
                ? '仅法人代表本人可操作该认证，其他团队成员可选择其他认证方式。'
                : isWay === '2'
                ? '智采云将向您公司以下账户打入指定金额，正确填写打款金额后可通过认证。'
                : '需要向法人代表身份证申请的手机号发送链接，请确保满足该条件。'
            }}
          </div> -->
          <!-- <el-row class="evenLf30" v-if="isWay !== 'PAYMENT'">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item :label="'法人代表姓名'" prop="orgLegalName">
                <el-input v-model.trim="form.orgLegalName" placeholder="请输入" style="width: 300px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item :label="'证件类型'" prop="orgLegalIdType">
                <el-select v-model="form.orgLegalIdType" placeholder="请选择证件类型">
                  <el-option v-for="item in dicData.IdTypeEnumList" :key="item.id" :label="item.name" :value="item.id"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item :label="'证件号码'" prop="orgLegalIdNumber">
                <el-input v-model="form.orgLegalIdNumber" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24" v-if="isWay === 'AUTHORIZATION'">
              <el-form-item :label="'手机号'" prop="orgLegalPhone">
                <el-input v-model="form.orgLegalPhone" placeholder="请输入" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="evenLf30" v-if="isWay === 'PAYMENT'">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item :label="'法人代表姓名'" prop="orgLegalName">
                <el-input v-model.trim="form.orgLegalName" placeholder="请输入" style="width: 300px"></el-input>
              </el-form-item>
            </el-col>

            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item :label="'开户行'" prop="bank">
                <el-input v-model.trim="form.bank" placeholder="请输入" style="width: 300px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item :label="'开户行支行'" prop="subbranch">
                <el-input v-model="form.subbranch" placeholder="请输入" />
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item :label="'银行账号'" prop="cardNo">
                <el-input v-model.trim="form.cardNo" placeholder="请输入" style="width: 300px"></el-input>
              </el-form-item>
            </el-col>
          </el-row> -->
        </el-form>
      </template>
    </el-dialog-module>
    <PlayCertification ref="PlayCertificationRef" @getList="getInfo"></PlayCertification>
  </div>
</template>

<script setup>
import { ref, nextTick, reactive, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { orgCertificationInfoAdd } from '@/api/company/companyCertification.js'
import { regulars, formatDate } from '@/utils/common.js'
import PlayCertification from './playCertification.vue'
import { useRoute } from 'vue-router'

const store = useStore(),
  route = useRoute(),
  //定义子组件传值方法
  clickemit = defineEmits(['getList'])
//定义参数
const formRef = ref(),
  //   弹窗显示隐藏
  isShow = ref(false),
  //是否显示认证
  showCertificationWay = ref(false),
  //二维码字符串路径
  codeUrl = ref('')
const IdTypeEnumList = computed(() => store.getters.filteredSystemDictList('IdTypeEnum')) //证件类型
const certificationTypeList = computed(() => store.getters.filteredSystemDictList('CertifyOrgTypeEnum')) //机构类型
const dicData = reactive({
  IdTypeEnumList,
  certificationTypeList
  //   certificationTypeList: [
  //     {
  //       name: '法人认证',
  //       id: 'ORG_LEGAL'
  //     },
  //     {
  //       name: '对公打款认证',
  //       id: 'PAYMENT'
  //     },
  //     {
  //       name: '授权认证',
  //       id: 'AUTHORIZATION'
  //     }
  //   ]
})
onMounted(() => {})
//重新认证
const getInfo = (val) => {
  if (val === 2) {
    resetFunction()
  } else {
    onClose()
    clickemit('getList', companyInfo.value.id, 1)
  }
}
//定义基础数据
let dialogButton = ref(['取消', '提交认证']),
  form = ref({
    orgLegalIdNumber: '',
    phone: '',
    orgLegalName: '',
    orgLegalIdType: 'CRED_PSN_CH_IDCARD'
  }),
  formRules = {
    name: [
      {
        required: true,
        message: '请输入社会统一信用代码',
        trigger: 'change'
      }
    ],
    // 定义表单校验规则
    idNumber: [
      {
        required: true,
        message: '请输入社会统一信用代码',
        trigger: 'change'
      }
    ],
    orgLegalName: [
      {
        required: true,
        message: '请输入姓名',
        trigger: 'change'
      },
      { min: 2, max: 6, message: '姓名长度在 2 到 6 个字符', trigger: 'change' },
      { pattern: regulars.chineseUserName, message: '请输入正确的姓名', trigger: 'change' }
    ],
    orgLegalIdNumber: [{ required: true, message: '请输入证件号码', trigger: 'change' }],
    orgLegalIdType: [
      {
        required: true,
        message: '请选择证件类型',
        trigger: 'change'
      }
    ],
    orgLegalPhone: [
      {
        required: true,
        message: '请输入法人代表手机号',
        trigger: 'change'
      }
    ],
    bank: [
      {
        required: true,
        message: '请输入开户名',
        trigger: 'change'
      }
    ],
    cardNo: [
      {
        required: true,
        message: '请输入银行账号',
        trigger: 'change'
      }
    ],
    subbranch: [
      {
        required: true,
        message: '请输入开户行支行',
        trigger: 'change'
      }
    ]
  },
  title = ref('公司认证'),
  //公司信息
  companyInfo = ref({}),
  // 初始化调用
  init = (info) => {
    companyInfo.value = JSON.parse(JSON.stringify(info))
    form.value.name = companyInfo.value.name
    form.value.idNumber = companyInfo.value.creditCode || ''
    dialogButton.value = ['取消', '提交认证']
    isShow.value = true
  },
  //定义loading
  loading = ref(false),
  //重置
  resetFunction = () => {
    form.value = {
      orgLegalIdNumber: '',
      phone: '',
      orgLegalName: '',
      orgLegalIdType: 'CRED_PSN_CH_IDCARD'
    }
    showCertificationWay.value = false
    isWay.value = '1'
    formRef.value?.resetFields()
  },
  //认证方式
  isWay = ref('1'),
  //选择认证方式
  chooseOrg = (val) => {
    isWay.value = val.id
    if (isWay.value === 'PAYMENT') {
      dialogButton.value = ['取消', '下一步']
    } else {
      dialogButton.value = ['取消', '提交认证']
    }
  },
  //打款认证ref
  PlayCertificationRef = ref(),
  //提交
  save = () => {
    formRef.value.validate((valid) => {
      if (valid) {
        createOrUpdateSolutionFunction()
      } else {
        return false
      }
    })
  },
  //创建 or 编辑
  createOrUpdateSolutionFunction = () => {
    loading.value = true
    let params = {
      orgLegalIdNumber: form.value.orgLegalIdNumber,
      orgLegalName: form.value.orgLegalName,
      companyId: companyInfo.value.id || '',
      name: form.value.name || '',
      orgLegalIdType: form.value.orgLegalIdType,
      orgLegalPhone: form.value.orgLegalPhone,
      idNumber: form.value.idNumber,
      way: isWay.value,
      redirectUrl: import.meta.env.VITE_VUE_APP_URL + route.path.slice(1)
    }
    let payParams = {
      bank: form.value.bank,
      companyId: companyInfo.value.id || '',
      name: form.value.name || '',
      cardNo: form.value.cardNo,
      subbranch: form.value.subbranch,
      idNumber: form.value.idNumber,
      orgLegalName: form.value.orgLegalName,
      way: isWay.value,
      redirectUrl: import.meta.env.VITE_VUE_APP_URL + route.path.slice(1)
    }
    let paramsInfo
    if (isWay.value === 'PAYMENT') {
      paramsInfo = payParams
    } else {
      paramsInfo = params
    }
    orgCertificationInfoAdd(paramsInfo)
      .then((res) => {
        loading.value = false
        if (res.code === 200) {
          if (isWay.value === 'PAYMENT') {
            let item = {
              companyId: companyInfo.value.id,
              bank: form.value.bank,
              subbranch: form.value.subbranch,
              cardNo: form.value.cardNo
            }
            PlayCertificationRef.value.init(item)
          } else {
            if (res.data) {
              window.location.href = res.data
            }
            // ElMessage.success('认证成功！')
            // onClose()
            // clickemit('getList', companyInfo.value.id, 1)
          }
        } else {
          ElMessage.warning(res.message)
        }
      })
      .catch((err) => {
        console.log(err)
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
.dialog-visible .el-form-item {
  width: 300px;
}
.wayBox {
  margin-bottom: 26px;
  .leftTitle {
    color: #4e5969;
    font-size: 14px;
    line-height: 26px;
    margin-right: 10px;
  }
  .noChoose {
    background: #f2f3f5;
    color: #86909c;
    font-size: 12px;
    border: 1px solid #e5e6eb;
    box-sizing: border-box;
    padding: 0 16px;
    line-height: 26px;
    text-align: center;
    border-radius: 2px;
    margin-left: 10px;
    cursor: pointer;
  }
  .textContent {
    font-weight: 400;
    font-size: 14px;
    color: #1d2129;
    line-height: 26px;
    margin-left: 10px;
  }
  .rightContent {
    background: #e8f3ff;
    padding: 0 16px;
    line-height: 26px;
    font-size: 12px;
    color: $--color-primary;
    text-align: center;
    border: 1px solid $--color-primary;
    box-sizing: border-box;
    border-radius: 2px;
    margin-left: 10px;
    cursor: pointer;
  }
}
.zksq-btn {
  font-size: 13px;
  line-height: 18px;
  color: #1664ff;
  cursor: pointer;
  margin: 10px 0px;
}
.timeText {
  color: darkgray;
  font-size: 13px;
  margin: 0 20px;
}
.infoBtn {
  font-size: 14px;
}
.company-table {
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  .cell-container {
    width: 50%;
    display: flex;
    border: 1px solid #edf2f7;
    border-top: 0px;
    box-sizing: border-box;
    .cell-left {
      width: 160px;
      height: 45px;
      line-height: 45px;
      background: #f7fafc;
      flex-shrink: 0;
      padding: 0 24px;
      border-right: 1px solid #edf2f7;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .cell-right {
      flex: 1;
      height: 45px;
      line-height: 45px;
      padding: 0 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  .cell-container:nth-child(1) {
    border-top: 1px solid #edf2f7;
  }
  .cell-container:nth-child(2) {
    border-top: 1px solid #edf2f7;
  }
}
.back-container {
  background: #fff;
  border-top: 1px solid #edf2f7;
  padding: 13px 24px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  align-items: center;
  height: 54px;
  .button-tips {
    // width: 208px;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 15px 20px 0px rgba(20, 37, 63, 0.08), 0px 0px 1px 0px rgba(12, 26, 75, 0.1);
    padding: 12px;
    box-sizing: border-box;
    position: relative;
    top: -3px;
  }
}
.input-container {
  display: flex;
  align-items: center;
  background: #f7fafc;
  justify-content: space-between;
  border-radius: 6px;
  padding: 6px;
  width: 500px;
  .el-input__inner {
    border: 1px solid transparent;
    background: #f7fafc;
    width: 400px;
  }
}
.information-tips {
  color: #b5b5bd;
  font-size: 12px;
}
.company-name {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  color: #27272e;
  .company-image {
    width: 44px;
    height: 44px;
    margin-right: 16px;
    background: #f7fafc;
  }
}
:deep(.title) {
  padding-bottom: 8px;
}
.persennel {
  cursor: pointer;
  display: inline-block;
  width: 100%;
}
</style>
