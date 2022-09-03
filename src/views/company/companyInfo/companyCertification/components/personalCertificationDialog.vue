<template>
  <div class="departManageAdd">
    <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" :dialogButton="dialogButton" @onSubmit="save(1)" width="800px">
      <template #content>
        <el-form v-show="!showCertificationWay" v-loading="loading" size="small" label-position="top" :rules="formRules" ref="formRef" :model="form">
          <!-- <h3 class="pb20">基本信息</h3> -->
          <!-- <div class="wayBox flex">
            <div class="leftTitle">认证方式</div>
            <div class="rightContent">人脸识别</div>
          </div> -->
          <div class="PromptInformation">
            <svg-icon :name="'prompt'" width="16px" height="16px"></svg-icon>仅支持大陆人士，填写中国大陆居民身份证姓名、证件号。
          </div>
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item :label="'姓名'" prop="userName">
                <el-input v-model.trim="form.userName" placeholder="请输入" style="width: 300px"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item :label="'身份证号'" prop="idCardNo">
                <el-input v-model="form.idCardNo" placeholder="请输入" />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div v-show="showCertificationWay">
          <!-- <div class="wayBox flex">
            <div class="leftTitle">识别方式</div>
            <div v-for="(item, index) in wayList" :key="index" :class="isPay === item.type ? 'rightContent' : 'noChoose'" @click="chooseWay(item, index)">
              {{ item.name }}
            </div>
          </div> -->
          <!-- <div class="PromptInformation">
            <svg-icon :name="'prompt'" width="16px" height="16px"></svg-icon>请使用{{
              isPay === 'ZHIMACREDIT' ? '支付宝' : '微信'
            }}扫描二维码，并依照提示完成人脸识别
          </div> -->
          <div style="text-align: center">
            <div class="PromptInformation"><svg-icon :name="'prompt'" width="16px" height="16px"></svg-icon>认证完成后点击已完成即可！</div>
            <!-- <QRCode :value="codeUrl" :width="280" :height="280"></QRCode> -->
          </div>
        </div>
      </template>
    </el-dialog-module>
  </div>
</template>

<script setup>
import { ref, nextTick, reactive, onMounted } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { certificationInfoAdd, certificationInfoQueryDetails } from '@/api/company/companyCertification.js'
import { regulars, formatDate, GetRequest } from '@/utils/common.js'
import { useRoute } from 'vue-router'
import QRCode from '@/components/qrcode/index.vue'

const store = useStore(),
  route = useRoute(),
  //定义子组件传值方法
  clickemit = defineEmits(['getList'])
//定义参数
const formRef = ref(),
  //   弹窗显示隐藏
  isShow = ref(false),
  //认证方式
  isPay = ref('ZHIMACREDIT'),
  //是否显示认证
  showCertificationWay = ref(false),
  //二维码字符串路径
  codeUrl = ref('')
//选择个人认证方式
const chooseWay = (item) => {
  isPay.value = item.type
  save(2)
}
onMounted(() => {})
//定义基础数据
let dialogButton = ref(['取消', '提交前往认证']),
  form = ref({
    idCardNo: '',
    phone: '',
    userName: ''
  }),
  wayList = ref([
    { type: 'ZHIMACREDIT', name: '支付宝' },
    { type: 'TENCENT', name: '微信' }
  ]),
  formRules = {
    // 定义表单校验规则
    userName: [
      {
        required: true,
        message: '请输入姓名',
        trigger: 'change'
      },
      { min: 2, max: 6, message: '姓名长度在 2 到 6 个字符', trigger: 'change' },
      { pattern: regulars.chineseUserName, message: '请输入正确的姓名', trigger: 'change' }
    ],
    idCardNo: [
      { required: true, message: '请输入身份证号', trigger: 'change' },
      { pattern: regulars.IDNumberReg, message: '请输入正确的身份证号', trigger: 'change' }
    ]
  },
  type = ref(''),
  title = ref('个人信息认证'),
  // 初始化调用
  init = (types) => {
    dialogButton.value = ['取消', '提交前往认证']
    type.value = types
    isShow.value = true
  },
  //定义loading
  loading = ref(false),
  //重置
  resetFunction = () => {
    form.value = {
      idCardNo: '',
      phone: '',
      userName: ''
    }
    showCertificationWay.value = false
    formRef.value?.resetFields()
  },
  //提交
  save = (type) => {
    formRef.value.validate((valid) => {
      if (valid) {
        if (showCertificationWay.value) {
          dialogButton.value = ['取消', '已完成']
          createOrUpdateSolutionFunction(form.value, type)
        } else {
          showCertificationWay.value = true
          save(2)
        }
      } else {
        return false
      }
    })
  },
  //创建 or 编辑
  createOrUpdateSolutionFunction = (data, type) => {
    let query = ''
    if (location.search.indexOf('?') != -1) {
      query = location.search.substr(1)
    }
    loading.value = true
    let params = {
      idCardNo: form.value.idCardNo,
      userName: form.value.userName,
      phone: JSON.parse(sessionStorage.getItem('vuex'))?.userInfo?.phone || '',
      userId: localStorage.getItem('userId') || '',
      way: isPay.value,
      redirectPage: import.meta.env.VITE_VUE_APP_URL + route.path.slice(1) + (query ? `?${query}` : '')
    }
    let url
    let paramsInfo
    if (type === 1) {
      url = certificationInfoQueryDetails
      paramsInfo = localStorage.getItem('userId') || ''
    } else {
      url = certificationInfoAdd
      paramsInfo = params
    }
    url(paramsInfo)
      .then((res) => {
        loading.value = false
        console.log(res)
        if (res.code === 200) {
          if (type === 1) {
            switch (res.data.status) {
              case 'NEW':
                ElMessage.warning('尚未完成认证，请认证完成后操作！')
                break
              case 'IN_CERTIFICATION':
                ElMessage.warning('认证中，请认证完成后操作！')
                break
              case 'SUCCESS':
                ElMessage.success('认证成功！')
                if (type.value == 'per') {
                  clickemit('getList', true)
                } else {
                  clickemit('getList')
                }
                onClose()

                break
              case 'FAIL':
                ElMessage.warning('认证失败！')
                break
              default:
                break
            }
          } else {
            location.href = res.data
            // window.open(res.data)
            // codeUrl.value = res.data.authUrl
          }
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
.dialog-visible .el-form-item {
  width: 300px;
}
.wayBox {
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
