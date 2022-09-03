<template>
  <div class="departManageAdd">
    <el-dialog-module :isShow="isShow" modal-append-to-body :title="title" @onClose="onClose" :dialogButton="dialogButton" @onSubmit="save" width="1000px">
      <template #content>
        <el-form v-loading="loading" size="small" label-position="top" :rules="formRules" ref="formRef" :model="form">
          <h3 class="pb20">基本信息</h3>
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24" v-if="(form.pid && type === 'edit') || type !== 'edit'">
              <el-form-item label="组织类型" prop="orgType">
                <el-radio-group v-model="form.orgType" @change="changeTypeFunc" :disabled="type === 'view' || type === 'edit' || form.type == 2">
                  <el-radio v-for="item in newOrgTypeEnum" :key="item.id" :label="item.id">{{ item.name }}</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24" v-if="isAllDepartment">
              <el-form-item label="公司logo">
                <FileUpload
                  :limit="1"
                  :type="'IMAGE'"
                  size="small"
                  v-if="(type === 'view' && formData.fileList?.length > 0) || type !== 'view'"
                  :multiple="true"
                  :isToBody="false"
                  :accept="'.jpg, .jpeg, .png, .JPG, .JPEG'"
                  :acceptTypeList="['jpg', 'jpeg', 'png', 'JPG', 'JPEG']"
                  :fileList="formData.fileList || []"
                  @submitFile="submitFile"
                ></FileUpload>
                <div v-if="type === 'view' && formData.fileList?.length === 0">暂无公司logo</div>
              </el-form-item>
            </el-col>

            <el-col :lg="12" :sm="12" :xs="24" v-if="((form.pid && type === 'edit') || type !== 'edit') && form.type != 2">
              <el-form-item :label="'上级组织'" prop="upType">
                <el-cascader
                  :options="treeDatas"
                  v-model="form.upType"
                  size="small"
                  :disabled="type === 'view'"
                  ref="goodsTypeTreeChose"
                  :props="{ checkStrictly: true, label: 'name', value: 'id', children: 'child' }"
                  @change="upTypeChange"
                ></el-cascader>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item :label="'组织名称'" prop="name">
                <el-input
                  v-model.trim="form.name"
                  @change="changeName"
                  oninput="value=value.replace(/[\(]/g, '（').replace(/[\)]/g, '）')"
                  maxlength="30"
                  placeholder="请输入"
                  :disabled="type === 'view' || (!form.pid && type === 'edit')"
                  style="width: 300px; margin-right: 20px"
                ></el-input>
                <el-button type="primary" v-show="form.orgType === 0 && (form.pid || type === 'add') && type !== 'view'" @click="companySearch">检测</el-button>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item :label="'组织负责人'" prop="leaders">
                <label class="personnel" @click="handleSelectDept()" v-if="type !== 'view'">
                  <el-input v-model="form.choosename" style="width: 100%" placeholder="请选择负责人" readonly />
                </label>
                <label class="personnel" v-else>
                  <el-input v-model="form.choosename" :disabled="true" style="width: 100%" placeholder="请选择负责人" readonly />
                </label>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24" v-if="!isAllDepartment && form.orgType === 0">
              <el-form-item label="公司logo">
                <FileUpload
                  :limit="1"
                  :type="'IMAGE'"
                  size="small"
                  v-if="(type === 'view' && formData.fileList?.length > 0) || type !== 'view'"
                  :multiple="true"
                  :hiddenDel="type !== 'view'"
                  :isToBody="false"
                  :accept="'.jpg, .jpeg, .png, .JPG, .JPEG'"
                  :acceptTypeList="['jpg', 'jpeg', 'png', 'JPG', 'JPEG']"
                  :fileList="formData.fileList || []"
                  @submitFile="submitFile"
                ></FileUpload>
                <div v-if="type === 'view' && formData.fileList?.length === 0">暂无公司logo</div>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <card-container v-if="!noInfo && isShowEyeSky" style="margin: 0; padding: 0; box-shadow: none">
          <template #title>
            工商信息
            <span class="timeText">{{
              !form.pid && type === 'edit' ? `最后更新时间：${ruleForm.updateTime}` : '（以下信息由第三方提供，用于确认您所在公司）'
            }}</span>
            <el-button v-show="type !== 'view' && form.id && oldcreditCode == ruleForm.creditCode" type="text" class="infoBtn" @click="changeInfo">
              获取最新工商信息
            </el-button>
          </template>
          <template #content>
            <div class="company-name">
              <div class="company-image"><img :src="ruleForm.logo ? ruleForm.logo : enterpriseHeadPortrait" alt="" width="44" height="44" /></div>
              <div>{{ ruleForm.name }}</div>
            </div>
            <div class="company-table mt16" :style="{ height: !offerFlag ? '185px' : '100%' }">
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
        <card-container v-if="noInfo && isShowEyeSky" style="margin: 0; padding: 0; box-shadow: none">
          <template #title> 工商信息</template>
          <template #content>
            <div>未查询到该企业信息，请注意核对企业真实性</div>
          </template>
        </card-container>
      </template>
    </el-dialog-module>
    <chooseOrganizationalStructure
      ref="chooseManRef"
      :nodeKey="'id'"
      :selectDataList="selectDataList"
      :select="false"
      :transferTitle="['选择组织人员', '已选择']"
      @subumit="getMen"
    >
    </chooseOrganizationalStructure>
  </div>
</template>

<script setup>
import { ref, nextTick, reactive, computed } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { changeDetSelect } from '@/utils/common'
import { addOrg, orgUpdate, queryDetails, teamUpdateLogo } from '@/api/systemManagement/organizationalStructure'
import chooseOrganizationalStructure from '@/components/organizationalStructure/index.vue'
import { getQueryInfo } from '@/api/user'
import enterpriseHeadPortrait from '@/assets/img/campany/enterpriseHeadPortrait.png'
import { companyQueryInfoNormal, companyQueryInfoSpecial, companyQueryDetails, updateNormal, updateSpecial } from '@/api/company/createCompany.js'
import { regulars, formatDate } from '@/utils/common.js'

const store = useStore(),
  validatePass = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请再次输入密码'))
    } else if (value !== form.value.password) {
      callback(new Error('两次输入密码不一致!'))
    } else {
      callback()
    }
  },
  //定义子组件传值方法
  clickemit = defineEmits(['getList'])
//展开收起
const offerFlag = ref(false)
//获取最新企业信息
const changeInfo = () => {
  getEnterPriseDetails()
}
//根据id查询企业信息详情
const getEnterPriseDetails = async () => {
  try {
    let res = await companyQueryDetails(form.value.id)
    if (res.code === 200) {
      if (res.isSpecial) {
        updateSkyInfo(res.data.id, 1)
      } else {
        updateSkyInfo(res.data.id, 2)
      }
    }
  } catch (error) {}
}
//统一社会信用代码（用于对比是否改变了公司）
const oldcreditCode = ref('')

//更新天眼查信息
const updateSkyInfo = async (id, type) => {
  try {
    let url
    if (type === 2) {
      url = updateNormal
    } else {
      url = updateSpecial
    }
    let res = await url(id)
    if (res.code === 200) {
      ElMessage.success('获取最新工商信息成功！')
    } else {
      ElMessage.warning(res.message)
    }
  } catch (error) {}
}
//选人员相关
let selectDataList = ref([]) //已选择人员列表
let chooseManRef = ref(), //选人列表
  //选人带回数据
  getMen = (val) => {
    selectDataList.value = val
    form.value.leaders = val.map((ele) => {
      return ele.id
    })

    form.value.choosename = ''
    val.forEach((element) => {
      form.value.choosename += element.name + ','
    })
    //去掉，
    if (form.value.choosename.length > 0) {
      form.value.choosename = form.value.choosename.substring(0, form.value.choosename.length - 1)
    }
  },
  handleSelectDept = () => {
    nextTick(() => {
      if (type.value === 'add') {
        chooseManRef.value.init(form.value.upType[form.value.upType?.length - 1])
      } else {
        chooseManRef.value.init(form.value.id)
      }
    })
  },
  ruleForm = ref({}),
  //是否有该公司
  noInfo = ref(true),
  //是否显示天眼查信息
  isShowEyeSky = ref(false),
  //检索名称天眼查是否有该公司
  companySearch = async () => {
    if (!form.value.name) {
      ElMessage.warning('请输入公司名称！')
      return
    }
    try {
      loading.value = true

      let res = await companyQueryInfoNormal(form.value.name)
      if (res.code === 200) {
        if (res.data) {
          ruleForm.value = res.data
          noInfo.value = false
          isShowEyeSky.value = true
        } else {
          isShowEyeSky.value = false
          getSpecial()
        }
      } else {
      }

      loading.value = false
    } catch (error) {
      loading.value = false
    }
  },
  //获取特别的公司
  getSpecial = async () => {
    try {
      let res = await companyQueryInfoSpecial(form.value.name)
      if (res.code === 200) {
        if (res.data) {
          ruleForm.value = res.data
          noInfo.value = false
        } else {
          noInfo.value = true
        }
      }
      isShowEyeSky.value = true
      loading.value = false
    } catch (error) {
      loading.value = false
    }
  }
//定义参数
const formRef = ref(),
  //   弹窗显示隐藏
  isShow = ref(false)

//定义组织类别字典
let OrgTypeEnum = ref([]),
  //选择部门树
  treeDatas = ref([])
//左侧字典树
let dialogButton = ref(['取消', '保存']),
  form = ref({
    upType: [], //上级分类
    leaders: null,
    choosename: ''
  }),
  formRules = {
    // 定义表单校验规则
    name: [
      {
        required: true,
        message: '请输入名称',
        trigger: 'change'
      },
      { min: 2, message: '长度最少两个字符', trigger: 'blur' },
      { pattern: regulars.chineseNameReg, required: true, message: '名称仅支持中文,不允许使用英文/数字/特殊字符', trigger: 'change' }
    ],
    orgType: [{ required: true, message: '请选择组织类型', trigger: 'change' }]
  },
  formData = ref(
    reactive({
      fileList: []
    })
  ),
  type = ref(''),
  title = ref(''),
  newTree = ref(),
  //上传图片
  submitFile = (file) => {
    formData.value.fileList = file
  },
  //递归处理可选择数据
  chooseDataDecursionFunc = (data, id) => {
    let list = []
    for (let j = 0; j < data.length; j++) {
      // if (!data[j].manageable || data[j].id === id) {
      //   data[j].disabled = true
      // }
      if (data[j].orgType !== 1) {
        if (data[j].id === id && data[j].child && data[j].child.length > 0) {
          data[j].child = null
        } else if (data[j].child && data[j].child.length > 0) {
          data[j].child = chooseDataDecursionFunc(data[j].child, id)
        }
      } else {
        data[j].disabled = true
        data[j].child = null
      }

      list.push(data[j])
    }
    return list
  },
  //递归部门数据
  chooseDepart = (data, id, parent = []) => {
    let list = []
    for (let j = 0; j < data.length; j++) {
      if (!data[j].manageable || data[j].id === id) {
        data[j].disabled = true
      }
      if (data[j].id === id && data[j].child && data[j].child.length > 0) {
        data[j].child = null
      } else if (data[j].child && data[j].child.length > 0) {
        data[j].child = chooseDepart(data[j].child, id)
      }

      list.push(data[j])
    }
    return list
  },
  // parents:用于返回的数组，childNode:要查询的节点，treeData：json树形数据
  findParent = (parents, childNode, treeData) => {
    for (let i = 0; i < treeData.length; i++) {
      // 父节点查询条件
      if (treeData[i].id === childNode.pid) {
        // 如果找到结果,保存当前节点
        if (treeData[i].orgType !== 1) {
          parents.push(treeData[i])
        } else {
          // 用当前节点再去原数据查找当前节点的父节点
          parents.push(treeData[i])
          findParent(parents, treeData[i], newTreeDatas.value)
        }
        break
      } else {
        if (treeData[i].child instanceof Array) {
          //	没找到，遍历该节点的子节点
          findParent(parents, childNode, treeData[i].child)
        }
      }
    }
    return parents
  },
  newOrgType = ref(''),
  newTreeDatas = ref([]),
  //修改公司名称
  changeName = () => {
    isShowEyeSky.value = false
  },
  //是否是总公司
  isAllDepartment = ref(false),
  // 初始化调用
  init = (types, info, treeData = []) => {
    treeDatas.value = treeData
    newTreeDatas.value = JSON.parse(JSON.stringify(treeData))
    newTree.value = treeData
    dialogButton.value = ['取消', '保存']
    OrgTypeEnum.value = store.getters.filteredSystemDictList('OrgTypeEnum')
    form.value = info
    if (types === 'view') {
      if (info.pid) {
        title.value = '浏览组织'
      } else {
        title.value = '浏览企业信息'
        isAllDepartment.value = true
        companySearch()
      }
      getQueryDetails(info.id, types)
      form.value.upType = changeDetSelect(info.pid, JSON.parse(JSON.stringify(treeData)))
      dialogButton.value = ['取消']
    } else if (types === 'add') {
      title.value = '新建组织'
      form.value.upType = changeDetSelect(info.pid, JSON.parse(JSON.stringify(treeData)))
      if (info.type === 2) {
        form.value.orgType = 0
      } else {
        form.value.orgType = 1
      }

      isShow.value = true
    } else {
      if (info.pid) {
        title.value = '修改组织'
      } else {
        title.value = '编辑企业信息'
        isAllDepartment.value = true
        companySearch()
      }
      form.value.upType = changeDetSelect(info.pid, JSON.parse(JSON.stringify(treeDatas.value)))

      getQueryDetails(info.id)
    }
    type.value = types
    isShow.value = true
  },
  //获取公司信息
  getQueryDetails = async (id, type) => {
    try {
      loading.value = true
      let res = await queryDetails(id)
      if (res.code === 200) {
        form.value = res.data
        oldcreditCode.value = form.value.creditCode || ''
        form.value.upType = changeDetSelect(res.data.pid, JSON.parse(JSON.stringify(treeDatas.value)))
        //  如果有负责人
        if (form.value.leaders) {
          let list = form.value.leaders.map((ele) => {
            ele.id = ele.userId
            return ele
          })
          getMen(list)
        }
        //如果有logo
        if (JSON.parse(sessionStorage.getItem('vuex'))?.teamInfo?.teamLogo && isAllDepartment.value) {
          formData.value.fileList = [{ absolutePath: JSON.parse(sessionStorage.getItem('vuex'))?.teamInfo?.teamLogo || '' }]
        }
        if (!isAllDepartment.value && form.value.logo) {
          formData.value.fileList = [{ absolutePath: form.value.logo || '' }]
        }
        if (form.value.orgType === 0) {
          treeDatas.value = chooseDataDecursionFunc(JSON.parse(JSON.stringify(treeDatas.value)), form.value.id)
        }
        loading.value = false
      }
    } catch (err) {
      loading.value = false
    }
  },
  //定义loading
  loading = ref(false),
  //修改组织类型
  changeTypeFunc = (val) => {
    if (val === 0) {
      treeDatas.value = chooseDataDecursionFunc(JSON.parse(JSON.stringify(treeDatas.value)), form.value.id)
    } else {
      treeDatas.value = JSON.parse(JSON.stringify(newTreeDatas.value))
      isShowEyeSky.value = false
    }
  },
  //重置
  resetFunction = () => {
    form.value = {
      upType: [], //上级分类
      leaders: null,
      choosename: ''
    }
    isAllDepartment.value = false
    selectDataList.value = []
    formData.value.fileList = []
    isShowEyeSky.value = false
    formRef.value.resetFields()
  },
  //提交
  save = () => {
    formRef.value.validate((valid) => {
      if (valid) {
        if (!isShowEyeSky.value && form.value.orgType === 0) {
          ElMessage.warning('请先对公司进行检测！')
          return
        }
        if (isAllDepartment.value && formData.value.fileList.length === 0) {
          ElMessage.warning('请先上传公司logo！')
          return
        }

        if (form.value.upType?.length > 0) {
          form.value.pid = form.value.upType[form.value.upType?.length - 1]
        }
        form.value.userType = 0
        form.value.tianYanChaId = ruleForm.value.id || ''
        form.value.creditCode = ruleForm.value.creditCode || ''
        form.value.isSpecial = ruleForm.value.isSpecial
        form.value.regCapital = ruleForm.value.regCapital || ''
        form.value.staffNumRange = ruleForm.value.staffNumRange || ''
        form.value.industry = ruleForm.value.industry || ''
        form.value.logo = formData.value.fileList[0]?.absolutePath || ''
        createOrUpdateSolutionFunction(form.value)
      } else {
        return false
      }
    })
  },
  //创建 or 编辑
  createOrUpdateSolutionFunction = (data) => {
    loading.value = true
    let url
    if (type.value == 'add') {
      url = addOrg
    } else {
      url = orgUpdate
    }
    url(data)
      .then((res) => {
        loading.value = false
        if (res.code === 200) {
          if (isAllDepartment.value) {
            teamUpdateLogo({ id: JSON.parse(sessionStorage.getItem('vuex'))?.teamInfo?.id || '', teamLogo: formData.value.fileList[0]?.absolutePath || '' })
              .then((res) => {
                loading.value = false
                if (res.code === 200) {
                  if (type.value === 'add') ElMessage.success('创建成功')
                  else if (type.value === 'edit') ElMessage.success('编辑成功')
                  onClose()
                  clickemit('getList', 1)
                } else ElMessage.warning(res.message)
              })
              .catch(() => {
                loading.value = false
              })
          } else {
            if (type.value === 'add') ElMessage.success('创建成功')
            else if (type.value === 'edit') ElMessage.success('编辑成功')
            onClose()
            clickemit('getList')
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
  },
  //新部门类型
  newOrgTypeEnum = computed(() => store.getters.filteredSystemDictList('OrgTypeEnum')),
  //数据更新
  upTypeChange = (val) => {
    let id
    if (val?.length > 0) {
      id = val[val.length - 1]
    }
    const tree = function (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].child) {
          tree(list[i].child)
        }
      }
    }
    tree(JSON.parse(JSON.stringify(newTree.value)))
    if (form.value.upType?.length > 0) {
      form.value.pid = form.value.upType[form.value.upType?.length - 1]
    }
    console.log(form.value.pid)
  }
defineExpose({
  init,
  getQueryDetails
})
</script>

<style lang="scss" scoped>
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
