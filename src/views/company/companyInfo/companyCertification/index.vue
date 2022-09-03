<template>
  <div class="companyCertification" v-loading="loading">
    <HeaderTabs :headerTitle="'公司认证管理'"> </HeaderTabs>
    <div class="flex">
      <div class="leftCardBox">
        <card-container class="selectBox" :typeArea="false">
          <template #content>
            <el-select v-model="chooseCompany" placeholder="请选择要认证公司" @change="changeCompany" style="width: 341px">
              <el-option v-for="(item, index) in companyList" :label="item.name" :value="item.id" :key="index"> </el-option>
            </el-select>
          </template>
        </card-container>
        <card-container :typeArea="false">
          <template #title>
            <div class="flex titleBox">
              <div>公司成员实名认证</div>
              <div v-if="userCertified" :style="{ color: !userCertified ? '#F7936F' : '#66CB9F' }">{{ !userCertified ? '未认证' : '已认证' }}</div>
            </div></template
          >
          <template #content>
            <look-details :list="detailsList"></look-details>
            <el-button size="mini" class="goCheckBtn" type="primary" v-if="!userCertified" @click="goCertification('personage')" style="margin-top: 15px"
              >去认证</el-button
            >
          </template>
        </card-container>
        <card-container :typeArea="false">
          <template #title>
            <div class="flex titleBox">
              <div>公司认证</div>
              <div
                v-show="companyStatus === 'SUCCESS' || (companyStatus === 'IN_CERTIFICATION' && companyWay !== 'PAYMENT') || companyStatus === 'EXPIRED'"
                :style="{ color: companyStatus === 'IN_CERTIFICATION' ? '#F7936F' : companyStatus === 'EXPIRED' ? '#C9CDD4' : '#66CB9F' }"
                style="padding-bottom: 10px"
              >
                {{ companyStatus === 'IN_CERTIFICATION' ? '认证中' : companyStatus === 'EXPIRED' ? '已过期' : '已认证' }}
              </div>
            </div>
          </template>
          <template #content>
            <div>
              <div class="flex-between">
                <div class="infoClass">
                  <div>{{ companyStatus === 'NEW' ? '进行法人信息认证或打款认证或企业支付宝认证' : '完成公司信息认证' }}</div>
                  <div v-show="companyStatus === 'IN_CERTIFICATION' || companyStatus === 'EXPIRED'" class="rightInfo">
                    {{ companyStatus === 'IN_CERTIFICATION' && companyWay === 'PAYMENT' ? '继续完成打款认证' : '预计两个工作日审核完成' }}
                  </div>
                </div>
                <look-details
                  v-if="companyStatus === 'SUCCESS'"
                  :list="[
                    {
                      label: '认证过期时间',
                      name: beOverdueTime || '-'
                    }
                  ]"
                ></look-details>
              </div>
              <el-button
                v-show="companyStatus === 'NEW' || companyStatus === 'IN_CERTIFICATION' || companyStatus === 'EXPIRED'"
                size="mini"
                class="goCheckBtn"
                type="primary"
                @click="goCertification('company')"
                >{{ companyStatus === 'IN_CERTIFICATION' || companyStatus === 'EXPIRED' ? '重新认证' : '立即前往' }}</el-button
              >
            </div>
          </template>
        </card-container>
      </div>
      <div class="rigthBox">
        <h3>注册说明</h3>
        <p v-for="(item, index) in hintList" :key="index">{{ item }}</p>
      </div>
    </div>
    <!-- 公司认证弹窗 -->
    <CompanyCertificationDialog ref="CompanyCertificationDialogRef" @getList="changeCompany"></CompanyCertificationDialog>
    <!-- 个人认证弹窗 -->
    <PersonalCertificationDialog ref="PersonalCertificationDialogRef" @getList="getMembersNumber"></PersonalCertificationDialog>
    <!-- 打款确认 -->
    <PlayCertification ref="PlayCertificationRef" @getList="changeCompany"></PlayCertification>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { queryTeamUserCountInfo, queryCompanyList, orgCertificationInfoQueryDetails } from '@/api/company/companyCertification.js'
import { useStore } from 'vuex'
import CompanyCertificationDialog from './components/companyCertificationDialog.vue'
import PersonalCertificationDialog from './components/personalCertificationDialog.vue'
import PlayCertification from './components/playCertification.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { getBeforeDate, GetDateDiff } from '@/utils/common.js'

const store = useStore()
const router = useRouter()
const route = useRoute()
const detailsList = ref([])
//公司列表
const companyList = ref([])
//提示数据
let hintList = ref([
  '1、智采云平台非常注重平台内企业信息、采购信息、产品/服务信息真实有效，一切虚假信息将做下线处理，相关账号将永久封禁，对于造成侵害的平台将协助追究相关人员法律责任；',
  '2、完成高级认证将分别比公司认证和不认证企业额外获得30%和80%的推荐曝光机会，可以获得更多供应商报价或获得更多商机推送；',
  '3、企业在进行询价时会设置报价条件，未认证可能不能参与报价。',
  '4、个人代表公司所操作的相关数据归公司所有，不因个人离职而丢失，成员离开团队时做交接即可。',
  '5、公司成员进行实名认证可提高公司信誉度。'
])
onMounted(() => {
  getTeamList()
})
//公司认证ref弹窗
const CompanyCertificationDialogRef = ref()
//个人认证ref弹窗
const PersonalCertificationDialogRef = ref()
//跳详情页
const goCertification = (type) => {
  if (type === 'personage') {
    PersonalCertificationDialogRef.value.init()
  } else {
    if (!userCertified.value) {
      ElMessage.warning('请先进行个人认证！')
      return
    }
    if (chooseCompany.value) {
      if (companyStatus.value === 'IN_CERTIFICATION' && companyWay.value === 'PAYMENT') {
        PlayCertificationRef.value.init(chooseCompany.value, '2')
      } else {
        CompanyCertificationDialogRef.value.init(chooseCompanyInfo.value)
      }
    } else {
      ElMessage.warning('请选择要认证的公司！')
      return
    }
  }
  //   router.push({ path: '/company/CertificationCheck', query: { companyType: type } })
}
//选择公司
const chooseCompany = ref('')
//公司信息
const chooseCompanyInfo = ref({})
//当前公司认证状态
const companyStatus = ref('')
//打款认证ref
const PlayCertificationRef = ref()
//公司认证类型
const companyWay = ref()
const loading = ref(false)
//认证成功时间
const finishTime = ref('')
//认证过期时间
const beOverdueTime = ref('')
//修改公司
const changeCompany = async (val, type = 2) => {
  loading.value = true
  chooseCompanyInfo.value = companyList.value.filter((ele) => ele.id === val)[0] || {}
  if (val) {
    if (type == 1) {
      store.commit('SAVE_TREE', {})
      location.reload()
    } else {
      try {
        let res = await orgCertificationInfoQueryDetails(val)
        loading.value = false
        if (res.code === 200) {
          companyStatus.value = res.data.status
          companyWay.value = res.data.way
          finishTime.value = res.data.finishTime
          if (finishTime.value) {
            beOverdueTime.value = getBeforeDate(GetDateDiff(finishTime.value), 365)
            console.log(beOverdueTime.value)
          }
          //如果是认证中就弹窗提示认证中
          if (companyStatus.value === 'IN_CERTIFICATION') {
            ElMessageBox.alert('公司认证成功后，生效时间可能会有延迟', '认证提示', {
              confirmButtonText: '好的'
            })
          }
        } else {
          ElMessage.warning(res.message)
        }
        console.log(res)
      } catch (error) {
        loading.value = false
      }
      getMembersNumber(val)
    }
  }
}
//查询团队公司列表
const getTeamList = async () => {
  try {
    let res = await queryCompanyList()
    if (res.code === 200) {
      companyList.value = res.data
      if (companyList.value?.length) {
        //获取主公司认证状态
        let companyId = route.query.companyId ? Number(route.query.companyId) : companyList.value[0].id
        chooseCompany.value = companyId
        changeCompany(companyId)
        getMembersNumber(companyId)
      }
    }
  } catch (error) {}
}
//个人是否认证
const userCertified = ref(false)
//获取企业成员数量
const getMembersNumber = async (id = companyList.value[0].id) => {
  try {
    let res = await queryTeamUserCountInfo(id)
    if (res.code === 200) {
      detailsList.value = [
        {
          label: '公司成员',
          name: res.data.count + '人' || '-'
        },
        {
          label: '实名认证',
          name: res.data.certifiedUserCount + '人' || '-'
        }
      ]
    }
  } catch (error) {}
  //更新成员认证状态
  store.dispatch('queryUserInfo').then((res) => {
    if (res.certificationState === 0) {
      userCertified.value = false
    } else {
      userCertified.value = true
    }
  })
}
</script>

<style scoped lang="scss">
.companyCertification {
  .card {
    position: relative;
  }
  :deep(.title) {
    padding-bottom: 24px;
  }
  .infoClass {
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: rgba(55, 84, 219, 0.74);
  }
  .goCheckBtn {
    width: 104px;
    height: 40px;
    background: #1664ff;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 600;
    position: absolute;
    right: 24px;
    top: 60%;
    transform: translate(0, -50%);
  }
  .titleBox {
    justify-content: space-between;
    .rightInfo {
      font-size: 12px;
      font-weight: 400;
      text-align: right;
      color: #b5b5bd;
    }
  }
  :deep(.leftlabel) {
    margin-bottom: 0;
  }
  :deep(.rightName) {
    margin-bottom: 0;
    margin-right: 0;
    span {
      display: block;
      width: 90px;
      text-align: right;
    }
  }
  .leftCardBox {
    width: calc(100% - 469px);
    margin-right: 10px;
    height: 365px;
    border-radius: 2px;
    background: #fff;
    .selectBox {
      padding-top: 34px;
      :deep(.title) {
        padding: 0;
      }
    }
  }
  .rigthBox {
    padding: 34px 24px;
    width: 459px;
    height: 365px;
    background: #ffffff;
    border-radius: 2px;
    box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
    box-sizing: border-box;
    h3 {
      font-size: 14px;
      font-weight: 600;
      text-align: left;
      color: #27272e;
    }
    p {
      font-size: 14px;
      font-weight: 400;
      text-align: left;
      color: #1a202c;
      margin-top: 10px;
    }
  }
}
</style>
