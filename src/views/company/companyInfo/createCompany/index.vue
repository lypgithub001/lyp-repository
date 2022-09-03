<template>
  <div class="edit-company" v-loading="loading">
    <HeaderTabs :headerTitle="headerTitle">
      <template #headerTitleBottomContainer>
        <card-container class="searchBox" :isTitle="false">
          <template #content>
            <div class="input-container">
              <div>
                <el-input
                  placeholder="请输入公司或团队的全称"
                  oninput="value=value.replace(/[\(]/g, '（').replace(/[\)]/g, '）')"
                  prefix-icon="el-icon-search"
                  maxlength="30"
                  v-model.trim="searchValue"
                ></el-input>
              </div>
              <div style="margin-left: 10px"><el-button size="mini" type="primary" @click="companySearch" style="min-width: 60px">搜索</el-button></div>
            </div>
            <div class="redHint" v-if="noInfo">
              您输入的企业名称在国家工商登记信息中未查询到，请输入正确的企业名称，如果名称无误，请完善信息并进行个人身份认证。
            </div>
            <div class="redTwoHint" v-show="isOnline === 2">
              <div>· 每家公司只能在智采云平台中创建一个企业账号，您填写的企业在平台中已存在，您可以申请加入该企业，成为该企业成员之一。</div>
              <div>
                · 该企业管理员为：{{ teamAdminName }}，电话{{ teamAdminPhone }}，如果您所在企业无该成员可联系平台进行身份确认，平台服务电话：400-645-6677。
              </div>
            </div>
          </template>
        </card-container>
      </template>
    </HeaderTabs>
    <div>
      <card-container v-if="isOnline === 1 && !noInfo">
        <template #title> 工商信息</template>
        <template #content>
          <!-- <div class="company-name">
            <div class="company-image"><img :src="ruleForm.logo ? ruleForm.logo : enterpriseHeadPortrait" alt="" width="44" height="44" /></div>
            <div>{{ ruleForm.name }}</div>
          </div> -->
          <div class="company-table" :style="{ height: !offerFlag ? '185px' : '100%' }">
            <div class="cell-container">
              <div class="cell-left">统一社会信用代码</div>
              <div class="cell-right">{{ ruleForm.creditCode || '-' }}</div>
            </div>
            <div class="cell-container">
              <div class="cell-left">法定代表人</div>
              <div class="cell-right">{{ ruleForm.legalPersonName || '-' }}</div>
            </div>
            <div class="cell-container">
              <div class="cell-left">成立日期</div>
              <div class="cell-right">
                {{ ruleForm.estiblishTime ? formatDate(new Date(ruleForm.estiblishTime), 'YYYY-MM-DD') : ruleForm.dateOfEstablishment || '-' }}
              </div>
            </div>
            <div class="cell-container">
              <div class="cell-left">经营状态</div>
              <div class="cell-right">{{ ruleForm.regStatus || '-' }}</div>
            </div>
            <div class="cell-container">
              <div class="cell-left">注册资本</div>
              <div class="cell-right">{{ ruleForm.regCapital || '-' }}</div>
            </div>
            <div class="cell-container">
              <div class="cell-left">实缴资本</div>
              <div class="cell-right">{{ ruleForm.actualCapital || '-' }}</div>
            </div>
            <div class="cell-container">
              <div class="cell-left">企业类型</div>
              <div class="cell-right">{{ ruleForm.companyOrgType || '-' }}</div>
            </div>
            <div class="cell-container">
              <div class="cell-left">所属行业</div>
              <div class="cell-right">{{ ruleForm.industry || ruleForm.industryCategory || '-' }}</div>
            </div>
            <div class="cell-container">
              <div class="cell-left">纳税人识别号</div>
              <div class="cell-right">{{ ruleForm.taxNumber || '-' }}</div>
            </div>
            <div class="cell-container">
              <div class="cell-left">组织机构代码</div>
              <div class="cell-right">{{ ruleForm.orgNumber || '-' }}</div>
            </div>
            <div class="cell-container">
              <div class="cell-left">工商注册号</div>
              <div class="cell-right">{{ ruleForm.regNumber || '-' }}</div>
            </div>
            <div class="cell-container">
              <div class="cell-left">纳税人资质</div>
              <div class="cell-right">{{ ruleForm.taxQualification || '-' }}</div>
            </div>
            <div class="cell-container">
              <div class="cell-left">营业期限</div>
              <div class="cell-right">
                {{
                  (ruleForm.estiblishTime ? formatDate(new Date(ruleForm.estiblishTime), 'YYYY-MM-DD') : ruleForm.dateOfEstablishment || '-') +
                  ('至' + (ruleForm.toTime ? formatDate(new Date(Number(ruleForm.toTime)), 'YYYY-MM-DD') : '-'))
                }}
              </div>
            </div>
            <div class="cell-container">
              <div class="cell-left">行政区划</div>
              <div class="cell-right">{{ (ruleForm.city || '-') + (ruleForm.district || '-') }}</div>
            </div>
            <div class="cell-container">
              <div class="cell-left">登记机关</div>
              <div class="cell-right">{{ ruleForm.regInstitute || '-' }}</div>
            </div>
            <div class="cell-container">
              <div class="cell-left">参保人数</div>
              <div class="cell-right">{{ ruleForm.socialStaffNum || '-' }}</div>
            </div>
            <div class="cell-container" style="width: 100%">
              <div class="cell-left">注册地址</div>
              <div class="cell-right">{{ ruleForm.regLocation || '-' }}</div>
            </div>
            <div class="cell-container" style="width: 100%">
              <div class="cell-left" style="height: auto">经营范围</div>
              <div class="cell-right" style="height: auto; line-height: 30px">{{ ruleForm.businessScope || '-' }}</div>
            </div>
          </div>
          <div class="zksq-btn" v-show="!offerFlag" @click="offerFlag = true">展开<i class="el-icon-arrow-down"></i></div>
          <div class="zksq-btn" v-show="offerFlag" @click="offerFlag = false">收起<i class="el-icon-arrow-up"></i></div>
        </template>
      </card-container>
      <el-form :model="form" v-if="isOnline === 1" ref="formRef" class="form-card label124" label-position="left" :rules="rules">
        <div class="flex">
          <div class="formBox">
            <card-container style="margin-bottom: 0">
              <template #title> 注册信息</template>
              <template #content>
                <el-row>
                  <el-col :span="24">
                    <el-form-item prop="businessType" label="使用智采云平台：" style="width: 620px">
                      <el-select v-model="form.businessType" placeholder="请选择" size="small" style="max-width: 620px">
                        <el-option v-for="item in sysDict.BusinessTypeEnumList" :key="item.id" :label="item.name" :value="item.id"> </el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item prop="provinceId" label="确认办公地区：">
                      <ChooseAdress @chooseAdress="chooseAdress" ref="ChooseAdressRef" :skyEyeInfo="ruleForm" :selectWidth="140" :form="form" />
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item label="确认详细地址：" style="width: 620px" prop="areaAddress">
                      <el-input placeholder="请确认详细地址" v-model="form.areaAddress" maxlength="30"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="24">
                    <el-form-item label="上传logo：" style="width: 620px" prop="goodAnnexes">
                      <p style="color: #606266; font-size: 12px; line-height: 14px; margin: 8px 0 14px">请上传132px*132px正方形企业logo</p>
                      <FileUpload
                        :limit="1"
                        :type="'IMAGE'"
                        size="small"
                        :multiple="true"
                        :accept="'.jpg, .jpeg, .png, .JPG, .JPEG'"
                        :acceptTypeList="['jpg', 'jpeg', 'png', 'JPG', 'JPEG']"
                        :fileList="form.fileList || []"
                        @submitFile="submitFile"
                      ></FileUpload>
                    </el-form-item>
                  </el-col>
                </el-row>
              </template>
            </card-container>
            <div v-if="isPersonalCer === 0 && noInfo" style="margin-top: 10px">
              <card-container :typeArea="true" style="margin-bottom: 0">
                <template #title> 个人认证状态</template>
                <template #content>
                  <div class="flex-between">
                    <div>
                      <div class="personalTips">只有个人认证人员可创建无工商信息企业</div>
                      <div class="finishCer">
                        <span>您当前：</span>
                        <span>未完成认证</span>
                      </div>
                    </div>
                    <el-button type="primary" size="mini" @click="goCer">前往认证</el-button>
                  </div>
                </template>
              </card-container>
            </div>
          </div>
          <card-container style="width: 459px; margin-top: 10px">
            <template #title> 注册说明</template>
            <template #content>
              <p v-for="(item, index) in hintList" :key="index">{{ item }}</p>
            </template>
          </card-container>
        </div>
      </el-form>
      <!-- 已有公司 -->
      <card-container v-if="isOnline === 2">
        <template #title> 公司信息</template>
        <template #content>
          <div class="companyInfo">
            <div class="company-image"><img :src="ruleForm.logo ? ruleForm.logo : enterpriseHeadPortrait" alt="" width="100%" height="100%" /></div>
            <div>
              <div class="name">{{ ruleForm.name }}</div>
              <div class="flex info">
                <div><span>管理员：</span> {{ teamAdminName }}</div>
                <div><span>电话：</span>{{ teamAdminPhone }}</div>
              </div>
            </div>
          </div>
        </template>
      </card-container>
      <el-form :model="form" v-if="isOnline === 2" ref="formRef" class="mt16 form-card label124" label-position="left" :rules="rules">
        <card-container :typeArea="true">
          <template #title> 申请加入团队</template>
          <template #content>
            <el-row>
              <el-col :span="24">
                <el-form-item prop="name" label="姓名：">
                  <el-input placeholder="请输入姓名" v-model.trim="form.name" maxlength="30" class="w520"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item prop="applyDepartment" label="所在部门：">
                  <el-input placeholder="请输入所在部门" v-model.trim="form.applyDepartment" maxlength="30" class="w520"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item prop="employeeJob" label="职位名称：">
                  <el-input placeholder="请输入职位名称" v-model.trim="form.employeeJob" maxlength="30" class="w520"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item prop="applyDescribe" label="申请加入说明：">
                  <el-input placeholder="请输入申请加入说明" v-model.trim="form.applyDescribe" maxlength="20" class="w520"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
        </card-container>
      </el-form>

      <table-bottom v-if="form.name" style="margin-top: 10px">
        <template v-slot:bottomLeft>
          <el-button type="primary" size="mini" @click="submitInfo" :disabled="isOnline === 0">{{ isOnline === 2 ? '申请加入' : '注册' }}</el-button>
        </template>
      </table-bottom>
    </div>
    <!-- 个人认证弹窗 -->
    <PersonalCertificationDialog ref="PersonalCertificationDialogRef"></PersonalCertificationDialog>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref, nextTick, computed } from 'vue'
import ChooseAdress from '@/components/Business/chooseAdress.vue'
import { companyQueryInfoNormal, companyQueryInfoSpecial, companyIsExist, companyAdd, companyQueryInfoByName } from '@/api/company/createCompany.js'
import { teamManagerApply } from '@/api/company/teamManager.js'
import { regulars, formatDate } from '@/utils/common.js'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import enterpriseHeadPortrait from '@/assets/img/campany/enterpriseHeadPortrait.png'
import { useRoute } from 'vue-router'
import PersonalCertificationDialog from '@/views/company/companyInfo/companyCertification/components/personalCertificationDialog.vue'

export default {
  name: 'company-createCompany',
  components: { ChooseAdress, PersonalCertificationDialog },
  setup() {
    const route = useRoute()
    //选择城市ref
    const ChooseAdressRef = ref()
    const store = useStore()
    const formRef = ref()
    const hintList = ref([
      '1、每家公司只能在智采云平台中创建一个企业账号，如果您填写的企业在平台中已经存在，请联系管理人员添加公司成员；',
      '2、填写此表格代表您已经获得公司合法授权；',
      '3、平台将检测和分析注册行为，做出是否需要实名认证判断；',
      '4、对于恶意注册行为，平台将协助受害公司对责任人进行追责；',
      '5.如果在注册时遇到问题，请联系我们的支持团队。',
      '联系电话：400-645-6677'
    ])
    //是否已进行个人认证
    const isPersonalCer = computed(() => store.getters.userInfoObj().certificationState)
    //个人认证ref弹窗
    const PersonalCertificationDialogRef = ref()
    //个人认证
    const goCer = () => {
      PersonalCertificationDialogRef.value.init('per')
    }
    //展开收起
    const offerFlag = ref(false)
    //公司是否存在
    const isOnline = ref(0)
    //未查询到信息
    const noInfo = ref(false)
    const state = reactive({
      loading: false,
      headerTitle: '创建公司',
      searchValue: route.query.searchName ? route.query.searchName : '',
      sysDict: reactive({
        //公司注册类型
        BusinessTypeEnumList: store.getters.filteredSystemDictList('BusinessTypeEnum')
      }),
      //天眼查返回数据
      ruleForm: {
        provinceId: '',
        cityId: '',
        countryId: ''
      },
      //项目表单数据
      form: {
        provinceId: '',
        cityId: '',
        countryId: '',
        fileList: [],
        name: '',
        provinceName: '',
        cityName: '',
        countryName: ''
      },
      rules: {
        businessType: [{ required: true, message: '请选择', trigger: 'change' }],
        provinceId: [{ required: true, message: '请选择省份', trigger: 'change' }],
        cityId: [{ message: '请选择城市', required: true, trigger: 'change' }],
        countryId: [{ message: '请选择区', required: true, trigger: 'change' }],
        areaAddress: [{ message: '请输入详细地址', required: true, trigger: 'change' }],
        name: [
          { message: '请输入姓名', required: true, trigger: 'change' },
          { min: 2, max: 6, message: '姓名长度在 2 到 6 个字符', trigger: 'change' },
          { pattern: regulars.chineseUserName, message: '请输入正确的姓名', trigger: 'change' }
        ],
        applyDepartment: [{ message: '请输入所在部门', required: true, trigger: 'change' }],
        employeeJob: [{ message: '请输入职位', required: true, trigger: 'change' }]
      },
      //是否是特殊企业
      isSpecialEnterprise: ref(false),
      //公司搜索
      companySearch: async () => {
        if (!state.searchValue) {
          ElMessage.warning('请输入公司名称！')
          return
        }
        if (!regulars.chineseNameReg.test(state.searchValue)) {
          ElMessage.warning('公司名称仅支持中文,不允许使用英文/数字/特殊字符')
          return
        }
        state.form = {
          provinceId: '',
          cityId: '',
          countryId: '',
          fileList: [],
          name: '',
          provinceName: '',
          cityName: '',
          countryName: ''
        }
        try {
          state.isSpecialEnterprise = false
          state.loading = true

          let res = await companyQueryInfoNormal(state.searchValue)
          if (res.code === 200) {
            if (res.data) {
              state.ruleForm = res.data
              noInfo.value = false
              state.getIsOnline()
            } else {
              state.getSpecial()
            }
          } else {
            state.loading = false
          }
        } catch (error) {
          state.loading = false
        }
      },
      //获取特别的公司
      getSpecial: async () => {
        try {
          let res = await companyQueryInfoSpecial(state.searchValue)
          if (res.code === 200) {
            if (res.data) {
              state.isSpecialEnterprise = true
              state.ruleForm = res.data
              noInfo.value = false
              state.getIsOnline()
            } else {
              state.ruleForm = {
                provinceId: '',
                cityId: '',
                countryId: ''
              }
              state.getIsOnline()
              noInfo.value = true
            }
          } else {
            state.isSpecialEnterprise = false
            noInfo.value = true
          }
          state.loading = false
        } catch (error) {
          state.isSpecialEnterprise = false
          state.loading = false
        }
      },
      //上传图片
      submitFile: (file) => {
        state.form.fileList = file
      },
      // 根据名称查询企业是否已存在
      getIsOnline: async () => {
        try {
          let res = await companyIsExist(state.searchValue)
          if (res.code === 200) {
            isOnline.value = res.data ? 2 : 1
            if (isOnline.value === 2) {
              state.getEnterpriseInfo()
            } else if (isOnline.value === 1) {
              nextTick(() => {
                ChooseAdressRef.value.skyEyeSearch()
              })
            }
          }
          state.form.name = state.ruleForm.name || state.searchValue
          //如果有logo
          if (state.ruleForm.logo) {
            state.form.fileList = []
            state.form.fileList.push({})
            state.form.fileList[0].absolutePath = state.ruleForm.logo
          }
          if (state.ruleForm.base) {
          }
          state.loading = false
        } catch (error) {
          state.loading = false
        }
      },
      //公司管理员
      teamAdminName: ref(''),
      //公司电话
      teamAdminPhone: ref(''),
      //根据名称获取企业详情
      getEnterpriseInfo: async () => {
        try {
          let res = await companyQueryInfoByName(state.searchValue)
          if (res.code === 200) {
            state.form.companyId = res.data.id
            state.teamAdminName = res.data.teamAdminName
            state.teamAdminPhone = res.data.teamAdminPhone
            state.form.name = store.getters.userInfoObj().name
            state.form.phone = store.getters.userInfoObj().phone
          }
        } catch (error) {}
      },
      //注册提交
      submitInfo: () => {
        if (isPersonalCer.value === 0 && noInfo.value) {
          ElMessage.warning('只有个人认证人员可创建无工商信息企业,请先进行个人认证！')
          return
        }
        formRef.value.validate(async (valida) => {
          if (valida) {
            try {
              state.loading = true
              let FormData = JSON.parse(JSON.stringify(state.form))
              let url
              let params
              if (isOnline.value === 1) {
                params = {
                  logo: state.form.fileList[0]?.absolutePath || '',
                  areaProvinceId: state.form.provinceId,
                  areaCityId: state.form.cityId,
                  areaCountryId: state.form.countryId,
                  areaLocation: state.form.provinceName + state.form.cityName + state.form.countryName,
                  businessType: state.form.businessType,
                  name: state.form.name,
                  areaAddress: state.form.areaAddress,
                  regCapital: state.ruleForm.regCapital || '',
                  staffNumRange: state.ruleForm.staffNumRange || '',
                  industry: state.ruleForm.industry || '',
                  tianYanChaId: state.ruleForm.id || '',
                  isSpecial: state.isSpecialEnterprise,
                  creditCode: state.ruleForm.creditCode || ''
                }
                url = companyAdd
              } else {
                params = FormData
                url = teamManagerApply
              }

              let res = await url(params)
              if (res.code === 200) {
                if (isOnline.value === 1) {
                  ElMessage.success('注册公司成功！')
                  store.commit('SAVE_TREE', {})
                  location.href = import.meta.env.VITE_VUE_APP_URL
                } else if (isOnline.value === 2) {
                  if (res.data === 1) {
                    ElMessage.success('申请加入公司成功！')
                    store.commit('SAVE_TREE', {})
                    location.href = import.meta.env.VITE_VUE_APP_URL
                  } else {
                    ElMessage.success('加入公司申请已提交！')
                    router.push({ path: '/company/joinCompany', query: { haveRecord: '1' } })
                  }
                }
              } else {
                ElMessage.warning(res.message)
              }
              state.loading = false
            } catch (error) {
              state.loading = false
            }
          } else {
            if (isOnline.value === 1) {
              ElMessage.warning('请先完善注册信息！')
            } else if (isOnline.value === 2) {
              ElMessage.warning('请先完善加入公司信息！')
            }
          }
        })
      },
      //选择省市区
      chooseAdress: (val, type) => {
        switch (type) {
          case 'province':
            state.form.provinceId = val.id
            state.form.provinceName = val.name
            state.form.cityId = ''
            state.form.cityName = ''
            break
          case 'city':
            state.form.cityId = val.id
            state.form.cityName = val.name
            state.form.countryId = ''
            state.form.countryName = ''
            break
          case 'country':
            state.form.countryId = val.id
            state.form.countryName = val.name
            break
          default:
            break
        }
      }
    })
    return {
      ...toRefs(state),
      formRef,
      hintList,
      isOnline,
      noInfo,
      formatDate,
      ChooseAdressRef,
      enterpriseHeadPortrait,
      offerFlag,
      isPersonalCer,
      goCer,
      PersonalCertificationDialogRef
    }
  }
}
</script>
<style lang="scss" scoped>
.searchBox {
  padding: 0 0 30px;
  box-shadow: none;
  z-index: 99;
  background: #fff;
  margin-bottom: 0;
}
.edit-company {
  .zksq-btn {
    font-size: 13px;
    line-height: 18px;
    color: #1664ff;
    cursor: pointer;
    margin: 10px 0px;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    text-align: left;
    color: #1a202c;
    margin-bottom: 12px;
  }
  .formBox {
    width: calc(100% - 469px);
    margin-right: 10px;
    margin-top: 10px;
    .personalTips {
      font-weight: 400;
      font-size: 14px;
      line-height: 22px;
      /* 文字/Text-4(次强调-正文标题) */
      color: #4e5969;
    }
    .finishCer span:nth-child(1) {
      color: #4e5969;
    }
    .finishCer span:nth-child(2) {
      color: #1d2129;
    }
  }
  .redHint {
    height: 52px;
    line-height: 52px;
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    color: #4e5969;
    padding-left: 24px;
    margin-top: 24px;
    background: #e8f3ff;
    border-radius: 4px;
  }
  .redTwoHint {
    height: 76px;
    font-size: 13px;
    font-weight: 400;
    text-align: left;
    color: #4e5969;
    padding-left: 24px;
    margin-top: 24px;
    padding-top: 14px;
    line-height: 25px;
    box-sizing: border-box;
    background: #e8f3ff;
    border-radius: 4px;
  }
  .width100 {
    width: 100%;
    max-width: 100%;
  }
  .contact-container {
    background: #f7fafc;
    border-radius: 8px;
    display: flex;
    align-items: center;
    padding: 16px;
    .contact-right {
      width: 200px;
      justify-content: center;
      display: flex;
    }
    .contact-left {
      flex: 1;
    }
  }
  .contact-container + .contact-container {
    margin-top: 16px;
  }
  .add-people {
    display: flex;
    justify-content: space-between;
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
      font-size: 13px;
      box-sizing: border-box;
      .cell-left {
        width: 160px;
        height: 36px;
        line-height: 36px;
        background: #f7fafc;
        flex-shrink: 0;
        color: #86909c;
        padding: 0 24px;
        border-right: 1px solid #edf2f7;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .cell-right {
        flex: 1;
        height: 36px;
        line-height: 36px;
        padding: 0 12px;
        white-space: nowrap;
        overflow: hidden;
        color: #4e5969;
        text-overflow: ellipsis;
      }
    }
    .cell-container:nth-child(2n) {
      /* border-left: 1px solid transparent; */
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
    justify-content: space-between;
    border-radius: 6px;
    width: 500px;
    :deep(.el-input--small .el-input__inner) {
      border: 1px solid #e5e6eb;
      width: 430px;
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
  /* 公司信息 */
  .companyInfo {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    color: #27272e;
    .company-image {
      width: 64px;
      height: 64px;
      margin-right: 16px;
      background: #f7fafc;
    }
    .info {
      font-size: 14px;
      font-weight: 600;
      text-align: left;
      color: #27272e;
      margin-top: 10px;
      div {
        margin-right: 24px;
      }
      span {
        white-space: nowrap;
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        color: #7a828a;
      }
    }
  }
}
</style>
