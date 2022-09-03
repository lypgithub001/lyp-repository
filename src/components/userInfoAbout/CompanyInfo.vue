<template>
  <div class="edit-company" id="edit-company" v-loading="loading">
    <div class="input-container">
      <!-- <el-input
                  placeholder="请输入公司或团队的全称"
                  oninput="value=value.replace(/[\(]/g, '（').replace(/[\)]/g, '）')"
                  prefix-icon="el-icon-search"
                  maxlength="30"
                  v-model.trim="searchValue"
                ></el-input> -->
      <div class="icon-query">
        <img src="@/assets/img/home/search.png" style="width: 12px; height: 12px" />
      </div>
      <el-autocomplete
        style="width: 100%"
        class="company-search-auto"
        v-model="searchValue"
        oninput="value=value.replace(/[\(]/g, '（').replace(/[\)]/g, '）')"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入公司全称"
        :hide-loading="autocompleteLoading"
        @select="handleSelect"
      />
      <div style="margin-left: 10px"><el-button size="" type="primary" @click="companySearch" style="min-width: 60px">检测</el-button></div>
    </div>
    <div class="tips-info" v-if="isOnline === 1 && !noInfo" style="background: #e8f3ff; color: #165dff; margin-bottom: 20px">
      <div><i class="el-icon-warning iconfont"></i></div>
      <div>
        <p>工商信息</p>
        <p>该企业基本信息已从工商登记库中获取，您是该企业第一名入驻人员，完善企业信息后即可使用。</p>
      </div>
    </div>
    <div class="tips-info" v-show="isOnline === 2" style="background: #fff7e8; color: #ff9900">
      <div><i class="el-icon-warning iconfont"></i></div>
      <div>
        <div>注册说明</div>
        <div class="tips-info_detail">
          <div>1、您填写的企业已在平台注册，您可以申请加入该企业，成为该企业成员之一</div>
          <div>
            2、<span v-if="teamAdminName">该企业管理员为：{{ teamAdminName }}，电话{{ teamAdminPhone }}，</span> 如有疑问可联系平台：400-645-6677。
          </div>
        </div>
      </div>
    </div>
    <div class="tips-info" v-show="noInfo && isOnline === 1" style="background: #fff7e8; color: #ff9900; margin-bottom: 20px">
      <div><i class="el-icon-warning iconfont"></i></div>
      <div>
        <div>注册说明</div>
        <div class="tips-info_detail">
          <div>1、您输入的企业名称在国家工商登记信息中未查询到，请输入正确的企业名称。</div>
          <div>2、如果名称无误，请完善信息并进行个人身份认证。</div>
          <div>3、如果在注册时遇到问题，请联系我们的支持团队，电话：400-645-6677。</div>
        </div>
      </div>
    </div>
    <div>
      <el-form :model="form" v-if="isOnline === 1" ref="formRef" class="form-card label124" label-position="left" :rules="rules">
        <card-container class="noinfo-card">
          <template #title> 企业信息</template>
          <template #content>
            <el-row>
              <el-col :span="24">
                <el-form-item prop="businessType" label="选择企业身份类型" style="width: 620px">
                  <!-- <el-select v-model="form.businessType" placeholder="请选择" size="small" style="max-width: 620px">
                    <el-option v-for="item in sysDict.BusinessTypeEnumList" :key="item.id" :label="item.name" :value="item.id"> </el-option>
                  </el-select> -->
                  <el-radio-group v-model="form.businessType">
                    <el-radio :label="item.id" v-for="item in sysDict.BusinessTypeEnumList" :key="item.id">{{ item.name }}</el-radio>
                  </el-radio-group>
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item prop="provinceId" label="确认办公地区" class="province-info">
                  <ChooseAdress @chooseAdress="chooseAdress" ref="ChooseAdressRef" :skyEyeInfo="ruleForm" :selectWidth="140" :form="form" />
                </el-form-item>
              </el-col>
              <!-- <el-col :span="24">
                <el-form-item label="确认详细地址：" style="width: 620px" prop="areaAddress">
                  <el-input placeholder="请确认详细地址" v-model="form.areaAddress" maxlength="30"></el-input>
                </el-form-item>
              </el-col> -->
              <el-col :span="24">
                <el-form-item label="公司logo" style="width: 620px" prop="goodAnnexes">
                  <p style="color: #86909c; font-size: 12px; line-height: 14px; margin: 8px 0 14px">请上传132px*132px正方形企业logo</p>
                  <FileUpload
                    :limit="1"
                    :type="'IMAGE'"
                    size="big"
                    :btnName="'上传logo'"
                    :multiple="true"
                    :accept="'.jpg, .jpeg, .png, .JPG, .JPEG'"
                    :acceptTypeList="['jpg', 'jpeg', 'png', 'JPG', 'JPEG']"
                    :fileList="form.fileList || []"
                    @submitFile="submitFile"
                    :maskContent="'修改logo'"
                    :clickMaskUpload="true"
                  ></FileUpload>
                  <el-input
                    style="width: 250px; margin-top: 16px"
                    placeholder="请输入公司名称"
                    v-model="canvasContent"
                    maxlength="4"
                    @blur="getPrintScreen"
                  ></el-input>
                  <div style="margin-top: 5px">
                    <svg-icon name="alert" width="16px" height="16px" /><span style="font-size: 12px; color: #86909c; margin-left: 8px"
                      >输入2-4个文字可自动生成默认logo</span
                    >
                  </div>
                  <div class="cavans-content" ref="content" @click="getBgcColor" :style="{ backgroundImage: `url(${contentBackground}) ` }">
                    <!-- <img :src="contentBackground" alt="" /> -->
                    <div style="z-index: 1000">
                      {{ canvasContent }}
                    </div>
                  </div>
                </el-form-item>
              </el-col>
            </el-row>
          </template>
        </card-container>
        <div v-if="noInfo" style="padding-bottom: 16px">
          <card-container :typeArea="true" class="noinfo-card">
            <template #title> 个人认证状态</template>
            <template #content>
              <div class="flex-between" style="align-items: center">
                <div>
                  <div class="personalTips">只有个人认证人员可创建无工商信息企业</div>
                  <div class="finishCer">
                    <span>您当前：</span>
                    <span><tag-style :content="getLabel(isPersonalCer, commonList)"></tag-style></span>
                  </div>
                </div>
                <el-button type="primary" size="mini" @click="goCer" v-if="isPersonalCer == 0">前往认证</el-button>
              </div>
            </template>
          </card-container>
        </div>
      </el-form>
      <!-- 已有公司 -->
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

      <!-- <table-bottom v-if="form.name" style="margin-top: 10px">
        <template v-slot:bottomLeft>
          <el-button type="primary" size="mini" @click="submitInfo" :disabled="isOnline === 0">{{ isOnline === 2 ? '申请加入' : '注册' }}</el-button>
        </template>
      </table-bottom> -->
    </div>

    <!-- 个人认证弹窗 -->
    <PersonalCertificationDialog ref="PersonalCertificationDialogRef"></PersonalCertificationDialog>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref, nextTick, computed } from 'vue'
import ChooseAdress from '@/components/Business/chooseAdress.vue'
import logoimage1 from '@/assets/img/logoimage1.png'
import logoimage2 from '@/assets/img/logoimage2.png'
import logoimage3 from '@/assets/img/logoimage3.png'
import logoimage4 from '@/assets/img/logoimage4.png'
import logoimage5 from '@/assets/img/logoimage5.png'
import logoimage6 from '@/assets/img/logoimage6.png'
import logoimage7 from '@/assets/img/logoimage7.png'
import logoimage8 from '@/assets/img/logoimage8.png'
import {
  companyQueryInfoNormal,
  companyQueryInfoSpecial,
  companyIsExist,
  companyAdd,
  companyQueryInfoByName,
  tianyanchaSearch
} from '@/api/company/createCompany.js'
import { teamManagerApply } from '@/api/company/teamManager.js'
import { regulars, formatDate } from '@/utils/common.js'
import { ElMessage } from 'element-plus'
import { useStore } from 'vuex'
import enterpriseHeadPortrait from '@/assets/img/campany/enterpriseHeadPortrait.png'
import { useRoute } from 'vue-router'
import PersonalCertificationDialog from '@/views/company/companyInfo/companyCertification/components/personalCertificationDialog.vue'
import html2canvas from 'html2canvas'
import { upLoad } from '@/api/common/index.js'
import { getLabel } from '@/utils/common.js'

export default {
  name: 'company-createCompany',
  components: { ChooseAdress, PersonalCertificationDialog },
  setup(props, { emit }) {
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
    const content = ref()
    const getPrintScreen = () => {
      if (state.canvasContent?.length < 2) return
      state.getBgcColor()
      // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
      emit('setLoading', true)
      state.loading = true
      nextTick(() => {
        html2canvas(content.value, {
          //   width: 132, //截图宽度
          //   height: 132, //截图高度
          backgroundColor: null, //画出来的图片有白色的边框,不要可设置背景为透明色（null）
          useCORS: true, //支持图片跨域
          scale: 1 //设置放大的倍数
        }).then((canvas) => {
          // 把生成的base64位图片上传到服务器,生成在线图片地址
          let url = canvas.toDataURL('image/png') // toDataURL: 图片格式转成 base64
          var arr = url.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n)
          while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
          }
          let file = new File([u8arr], 'logo.png', { type: mime })
          let formData = new FormData()
          formData.append('fileList', file, file.name)
          formData.append('fileType', 'AVATAR')
          upLoad(formData)
            .then((res) => {
              emit('setLoading', false)
              state.loading = false
              if (res.code == 200) {
                state.form.fileList = res.data
              }
            })
            .catch(() => {
              emit('setLoading', false)
              state.loading = false
            })
        })
      })
    }
    const state = reactive({
      canvasContent: '',
      loading: false,
      headerTitle: '创建公司',
      searchValue: route.query.searchName ? route.query.searchName : '',
      sysDict: reactive({
        //公司注册类型
        BusinessTypeEnumList: store.getters.filteredSystemDictList('BusinessTypeEnum').map((item) => {
          if (item.id == 0) {
            item.name = '我是采购方'
          }
          if (item.id == 1) {
            item.name = '我是销售方'
          }
          if (item.id == 2) {
            item.name = '我是采购方+销售方'
          }
          return item
        })
      }),
      //天眼查返回数据
      ruleForm: {
        provinceId: '',
        cityId: '',
        countryId: ''
      },
      autocompleteLoading: false,
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
      contentBackground: logoimage1,
      colorIndex: 0,
      commonList: [
        { name: '未认证', id: 0 },
        { name: '已认证', id: 1 }
      ],
      getBgcColor() {
        let index = Math.floor(Math.random() * 8)
        let url = ''
        switch (index) {
          case 0:
            url = logoimage1
            break
          case 1:
            url = logoimage2
            break
          case 2:
            url = logoimage3
            break
          case 3:
            url = logoimage4
            break
          case 4:
            url = logoimage5
            break
          case 5:
            url = logoimage6
            break
          case 6:
            url = logoimage7
            break
          case 7:
            url = logoimage8
            break
        }
        state.contentBackground = url
      },
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
        state.canvasContent = ''
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
            emit('buttonList', isOnline.value)
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
      querySearchAsync(queryString, cb) {
        if (!queryString) {
          cb([])
          return
        }
        tianyanchaSearch({ word: queryString, pageSize: 60 })
          .then((res) => {
            if (res.code == 200) {
              let data = res.data?.items.map((item) => {
                item.value = item.name
                return item
              })
              console.log(data)
              cb(data)
            }
          })
          .catch((res) => {})
      },
      handleSelect(val) {
        state.companySearch()
      },
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
        console.log('submitInfo')
        if (!formRef.value) {
          return ElMessage.warning('请先完善企业信息！')
        }
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
                console.log(res, isOnline.value)
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
                    location.href = import.meta.env.VITE_VUE_APP_URL + 'company/joinCompany?haveRecord=1'
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
      PersonalCertificationDialogRef,
      getPrintScreen,
      content,
      getLabel,
      logoimage1,
      logoimage2,
      logoimage3,
      logoimage4,
      logoimage5,
      logoimage6,
      logoimage7,
      logoimage8
    }
  }
}
</script>
<style lang="scss" scoped>
.tips-info {
  border-radius: 2px;
  font-size: 14px;
  padding: 16px;
  width: 840px;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  .iconfont {
    padding-right: 8px;
  }
  .tips-info_detail {
    div {
      margin-top: 4px;
    }
  }
}
.cavans-content {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  color: white;
  font-size: 30px;
  padding: 14px 14px 14px 18px;
  box-sizing: border-box;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
  position: absolute;
  background-position: center center;
  background-size: contain;
  line-height: 38px;
  letter-spacing: 4px;
  text-align: center;
  top: -20000000px;
}
.searchBox {
  padding: 0 0 30px;
  box-shadow: none;
  z-index: 99;
  background: #fff;
  margin-bottom: 0;
}
.edit-company {
  padding: 0 10px;
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
    //  color: #1a202c;
  }
  p + p {
    margin-top: 12px;
  }
  .personalTips {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    /* 文字/Text-4(次强调-正文标题) */
    color: #4e5969;
  }
  .finishCer {
    margin-top: 12px;
  }
  .finishCer span:nth-child(1) {
    color: #4e5969;
  }
  .finishCer span:nth-child(2) {
    color: #1d2129;
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
    border-radius: 6px;
    width: 550px;
    margin: 0 auto;
    margin-bottom: 30px;
    .icon-query {
      width: 38px;
      height: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f2f3f5;
      border: 1px solid #e5e6eb;
      box-sizing: border-box;
      border-right: 0px solid transparent;
      // box-shadow: inset -1px 0px 0px #e5e6e8;
      border-radius: 2px 0px 0px 2px;
    }
    :deep(.el-input--small .el-input__inner) {
      width: 100%;
      border: 1px solid #e5e6eb;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .el-autocomplete {
      width: 446px !important;
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
