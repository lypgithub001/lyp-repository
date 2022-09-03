<template>
  <div class="proManageAdd">
    <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" :dialogButton="dialogButton" @onSubmit="save" width="1000px">
      <template #content>
        <h3 v-if="type !== 'leave'" class="pb20">基本信息</h3>
        <el-form v-loading="loading" size="small" label-position="top" :rules="formRules" ref="formRef" :model="form">
          <el-row class="evenLf30" style="margin-bottom: 20px">
            <div class="flex" v-if="type === 'leave'">
              <div class="leftTitle">确认离职人员：</div>
              <div class="rightTitle">{{ form.name }}</div>
              <div class="leftTitle" style="margin-left: 20px">主部门：</div>
              <div class="rightTitle">{{ form.orgNames?.split(',')[0] }}</div>
            </div>
            <el-col v-if="type !== 'leave'" :lg="12" :sm="12" :xs="24">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name" placeholder="请输入姓名" maxlength="10" :disabled="type === 'view'"></el-input>
              </el-form-item>
            </el-col>
            <el-col v-if="type !== 'leave'" :lg="12" :sm="12" :xs="24">
              <el-form-item label="手机号" prop="phone">
                <el-input v-model="form.phone" placeholder="请输入手机号" maxlength="11" :disabled="type !== 'add'"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row v-if="type !== 'leave'" class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="选择主属部门" prop="upType">
                <el-cascader
                  :disabled="type === 'view'"
                  :options="treeData"
                  v-model="form.upType"
                  size="small"
                  filterable
                  @change="(val) => changeDepartment(val, 1)"
                  ref="firstTypeTreeChose"
                  :props="{ checkStrictly: true, label: 'name', value: 'id', children: 'child' }"
                  clearable
                ></el-cascader>
                <!-- @change="upTypeChange" -->
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="选择附属部门">
                <el-cascader
                  :disabled="type === 'view'"
                  :options="treeData"
                  v-model="form.secondaryUpType"
                  size="small"
                  @change="(val) => changeDepartment(val, 2)"
                  filterable
                  ref="goodsTypeTreeChose"
                  :props="{ checkStrictly: true, label: 'name', value: 'id', children: 'child', disabled: 'disabled', multiple: true }"
                  clearable
                ></el-cascader>
                <!-- @change="upTypeChange" -->
              </el-form-item>
            </el-col>
          </el-row>
          <el-row v-if="type !== 'leave'" class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="职位名称" prop="jobName">
                <el-input v-model="form.jobName" placeholder="请输入职位" :disabled="type === 'view'"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="性别" prop="userGender">
                <el-select v-model="form.userGender" placeholder="请选择" :disabled="type === 'view'">
                  <el-option v-for="item in UserGenderEnum" :key="item.id" :label="item.name" :value="item.id"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row v-if="type !== 'leave'" class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="学历" prop="education">
                <el-select v-model="form.education" placeholder="请选择学历" :disabled="type === 'view'" clearable>
                  <el-option v-for="item in education" :key="item.code" :label="item.name" :value="String(item.code)"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="电子邮箱" prop="userEmail">
                <el-input v-model="form.userEmail" placeholder="请输入电子邮箱" :disabled="type === 'view'"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row v-if="type !== 'leave'" class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="入职时间" prop="employeeEntryTime">
                <el-date-picker
                  v-model="form.employeeEntryTime"
                  type="datetime"
                  :disabled="type === 'view'"
                  value-format="YYYY-MM-DD HH:mm:ss"
                  placeholder="请选择入职时间"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>

          <h3 class="pb20" v-if="type !== 'recover' && type !== 'view' && type !== 'add'">交接设置</h3>
          <el-form-item v-if="type !== 'recover' && type !== 'view' && type !== 'add'" prop="menuType">
            <el-radio-group v-model="form.menuType" @change="changeType" :disabled="type === 'view'">
              <el-radio :label="2">业务交接不同人员</el-radio>
              <el-radio :label="1">所有业务交接同一人</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item v-if="type !== 'recover' && type !== 'view' && form.menuType === 1 && type !== 'add'" :label="'选择交接部门及人员'" prop="choosename">
            <label class="personnel" @click="handleSelectDept(1)" v-if="type !== 'view'">
              <el-input v-model="form.choosename" style="width: 100%" placeholder="选择交接部门及人员" readonly />
            </label>
            <label class="personnel" v-else>
              <el-input v-model="form.choosename" :disabled="true" style="width: 100%" placeholder="选择交接部门及人员" readonly />
            </label>
          </el-form-item>
          <Table
            v-if="type !== 'recover' && type !== 'view' && type !== 'add'"
            v-show="form.menuType === 2"
            :showSelect="false"
            :tableData="userApartmentList"
            :single="true"
          >
            <template #column>
              <el-table-column label="部门列表" align="center" show-overflow-tooltip>
                <template #default="scope">
                  <div class="scope_div">
                    {{ scope.row.name + '相关业务数据' }}
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="选择交接部门及人员" show-overflow-tooltip align="center">
                <template #default="scope">
                  <div class="scope_div">
                    部门：{{ scope.row.newName || '-' }} 人员：{{ scope.row.userName || '-' }}
                    <el-button type="text" @click="handleSelectDept(2, scope.row, scope.$index)">选择</el-button>
                  </div>
                </template>
              </el-table-column>
            </template>
          </Table>
          <el-row v-if="type === 'leave'" class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="备注说明" prop="employeeDescribe">
                <el-input type="textarea" v-model="form.employeeDescribe" placeholder="请输入备注说明"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <chooseOrganizationalStructure
          ref="chooseManRef"
          :nodeKey="'id'"
          :selectDataList="selectDataList"
          :select="true"
          :isJoiningTogether="true"
          :transferTitle="['选择组织人员', '已选择']"
          @subumit="getMen"
        >
        </chooseOrganizationalStructure>
      </template>
    </el-dialog-module>
  </div>
</template>

<script setup>
import { ref, toRefs, nextTick } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { userAdd, userUpdate, teamUserInfoQueryDetails, queryUserOrgNameInfoList, markLeave } from '@/api/systemManagement/organizationalStructure'
import chooseOrganizationalStructure from '@/components/organizationalStructure/index.vue'
import { regulars, getArrDifference, changeDetSelect } from '@/utils/common.js'
const props = defineProps({
  treeData: {
    type: Array,
    defalt: []
  }
})

const store = useStore(),
  //定义子组件传值方法
  clickemit = defineEmits(['getList'])
//定义参数
const formRef = ref(),
  //   弹窗显示隐藏
  isShow = ref(false)

//定义组织类别字典
let UserGenderEnum = ref([]), //性别
  education = ref([]), //学历
  //选择人员树
  { treeData } = toRefs(props)
//左侧字典树
let dialogButton = ref(['取消', '保存']),
  form = ref({
    upType: [], //主属部门上级分类
    menuType: 2,
    deptIds: [],
    secondaryUpType: [] //附属部门上级分类
  }),
  formRules = {
    // 定义表单校验规则
    name: [
      {
        required: true,
        message: '请输入姓名',
        trigger: 'change'
      },
      { min: 2, message: '长度最少两个字符', trigger: 'blur' },
      { pattern: regulars.chineseNameReg, required: true, message: '姓名仅支持中文,不允许使用英文/数字/特殊字符', trigger: 'change' }
    ],
    sort: [{ required: true, message: '请填写序号', trigger: 'change' }],
    employeeEntryTime: [{ required: true, message: '请选择入职时间', trigger: 'change' }],
    userGender: [{ required: true, message: '请选择性别', trigger: 'change' }],
    phone: [
      {
        required: true,
        message: '请输入手机号码',
        trigger: 'blur'
      },
      { pattern: /^1[1|2|3|4|5|6|7|8|9]\d{9}$/, message: '请输入正确的手机号码', trigger: 'change' }
    ],
    username: [
      { required: true, message: '请设置登录账号', trigger: 'change' },
      { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' },
      { pattern: regulars.userNameReg, required: true, message: '用户名仅支持数字或字母组成,不允许使用中文与特殊字符', trigger: 'change' }
    ],
    userEmail: [
      {
        type: 'email',
        message: '请输入正确的邮箱地址',
        trigger: ['blur', 'change']
      }
    ],
    upType: [
      {
        required: true,
        message: '请选择主属部门',
        trigger: 'blur'
      }
    ],
    jobName: [
      {
        required: true,
        message: '请输入职位',
        trigger: 'blur'
      }
    ],
    choosename: [
      {
        required: true,
        message: '请选择交接部门及人员',
        trigger: 'blur'
      }
    ]
  },
  type = ref(''),
  title = ref('')
// 初始化调用
let init = (types, info, treeData = []) => {
    dialogButton.value = ['取消', '保存']
    type.value = types
    if (types === 'view') {
      title.value = '浏览人员'
      getDetails(info)
      dialogButton.value = ['取消']
    } else if (types === 'add') {
      form.value.upType = changeDetSelect(info, JSON.parse(JSON.stringify(treeData)))
      title.value = '新增人员'
    } else if (types === 'leave') {
      title.value = '标记离职'
      getDetails(info)
    } else if (types === 'recover') {
      title.value = '取消标记离职'
      getDetails(info)
    } else {
      getDetails(info)
      title.value = '修改人员'
    }

    UserGenderEnum.value = store.getters.filteredSystemDictList('UserGenderEnum')
    education.value = store.getters.filtereTreeDictList('education')
    isShow.value = true
  },
  //定义loading
  loading = ref(false),
  //重置
  resetFunction = () => {
    form.value = {
      menuType: 2,
      secondaryUpType: [],
      deptIds: [],
      upType: []
    }
    formRef.value.resetFields()
  },
  //递归处理数据回显
  recursionFunc = (list, id) => {
    if (list.length > 0) {
      let str = ''
      for (var i = 0; i < list.length; i++) {
        if (list[i].id == id) {
          str += list[i].name
        }
        if (list[i].child && list[i].child.length > 0) {
          str += recursionFunc(list[i].child, id)
        }
      }
      return str
    }
    return ''
  },
  //获取用户详情
  getDetails = async (item) => {
    try {
      let res = await teamUserInfoQueryDetails(item.id)
      if (res.code === 200) {
        form.value.name = res.data.name
        form.value.phone = res.data.phone
        form.value.education = res.data.userInfoVO.education
        form.value.userGender = res.data.userInfoVO.gender
        form.value.userEmail = res.data.email
        form.value.jobName = res.data.employeeJob
        form.value.employeeEntryTime = res.data.employeeEntryTime
        form.value.employeeStatus = res.data.employeeStatus
        form.value.id = item.id
        form.value.userId = res.data.userId
        form.value.upType = changeDetSelect(res.data.masterDeptId, JSON.parse(JSON.stringify(treeData.value)))
        if (res.data.deptIds?.length > 0) {
          if (type.value !== 'leave') {
            form.value.secondaryUpType = res.data.deptIds.filter((ele) => ele !== res.data.masterDeptId)
          }
          userApartmentList.value = res.data.deptIds.map((ele) => {
            return {
              id: ele
            }
          })
          form.value.orgNames = res.data.orgNames
          form.value.deptIds = res.data.deptIds
          res.data.orgNames.split('、').forEach((ele, index) => {
            userApartmentList.value[index].name = ele
          })
          userApartmentList.value.forEach((ele) => {
            ele.name = recursionFunc(JSON.parse(JSON.stringify(treeData.value)), ele.id)
          })
        }
      }
    } catch (error) {}
  },
  //用户所在部门列表
  userApartmentList = ref([]),
  //修改交接类型
  changeType = (val) => {
    form.value.choosename = ''
    userApartmentList.value = []
    selectDataList.value = []
    userApartmentList.value = form.value.deptIds.map((ele) => {
      return {
        id: ele
      }
    })
    form.value.orgNames.split('、').forEach((ele, index) => {
      userApartmentList.value[index].name = ele
    })
  },
  //选人员相关
  selectDataList = ref([]), //已选择人员列表
  chooseManRef = ref(),
  //选人带回数据
  getMen = (val) => {
    selectDataList.value = val
    let idList = val[0].id.split(',')
    let newNameList = []
    if (val[0].newName) {
      newNameList = val[0].newName?.split(',')
    } else {
      newNameList = val[0].name?.split(',')
    }
    if (form.value.menuType === 2) {
      if (userApartmentList.value.length > 0) {
        userApartmentList.value[chooseIndex.value].newOrgId = idList[0]
        userApartmentList.value[chooseIndex.value].newUserId = idList[1]
        userApartmentList.value[chooseIndex.value].newName = newNameList[0]
        userApartmentList.value[chooseIndex.value].userName = newNameList[1]
      }
    } else {
      form.value.choosename = ''
      form.value.choosename = `部门：${newNameList[0]} 姓名：${newNameList[1]}`
      form.value.newOrgId = idList[0]
      form.value.newUserId = idList[1]
    }
  },
  //选择部门下标
  chooseIndex = ref(),
  //选择交接部门人员
  handleSelectDept = (type, row, i) => {
    if (type === 1) {
    } else {
      chooseIndex.value = i
      if (row?.newOrgId) {
        selectDataList.value = [{}]
        selectDataList.value[0] = {
          id: row.newOrgId + ',' + row.newUserId,
          name: row.newName + ',' + row.userName
        }
      } else {
        selectDataList.value = []
      }
    }
    nextTick(() => {
      chooseManRef.value.init()
    })
  },
  //提交
  save = () => {
    formRef.value.validate((valid) => {
      if (valid) {
        if (form.value.upType?.length > 0) {
          form.value.masterDeptId = form.value.upType[form.value.upType?.length - 1]
        }
        let list = []
        if (form.value.secondaryUpType?.length > 0) {
          list = form.value.secondaryUpType.map((ele) => {
            return ele[ele.length - 1] || ele
          })
        }
        if (type.value === 'leave') {
          form.value.employeeStatus = 0
        } else {
          form.value.employeeStatus = 1
        }
        const params = {
          id: form.value.id || '',
          education: form.value.education,
          employeeJob: form.value.jobName || '',
          masterDeptId: form.value.masterDeptId || '',
          name: form.value.name || '',
          phone: form.value.phone || '',
          gender: form.value.userGender,
          email: form.value.userEmail || '',
          employeeEntryTime: form.value.employeeEntryTime,
          deptIds: list,
          departmentIdArray: list,
          employeeStatus: form.value.employeeStatus
        }
        createOrUpdateSolutionFunction(params)
      } else {
        return false
      }
    })
  },
  //创建 or 编辑
  createOrUpdateSolutionFunction = (data) => {
    let url
    if (type.value == 'add') {
      url = userAdd
    } else {
      if (type.value == 'leave') {
        url = markLeave
      } else {
        url = userUpdate
      }

      let allList = data.deptIds.filter((ele) => ele == data.masterDeptId) || []
      if (allList.length === 0 && type.value !== 'leave') {
        data.deptIds.push(data.masterDeptId)
      }
      //如果是减少了人员部门
      if (form.value.deptIds.length > data.deptIds.length) {
        let diffList = getArrDifference(form.value.deptIds, data.deptIds)
        if (form.value.menuType === 2) {
          for (let i = 0; i < userApartmentList.value.length; i++) {
            let sameList = []
            sameList = diffList.filter((ele) => ele == userApartmentList.value[i].id)
            if (sameList.length > 0 && !userApartmentList.value[i].newOrgId) {
              ElMessage.warning(`请为${userApartmentList.value[i].name}选择交接部门及成员！`)
              return
            }
          }
        }
      }
      if (form.value.menuType === 2) {
        data.handoverRules = userApartmentList.value
          .filter((ele) => ele.newOrgId)
          .map((element) => {
            return {
              newOrgId: element.newOrgId,
              originalOrgId: element.id,
              originalUserId: form.value.userId,
              newUserId: element.newUserId
            }
          })
      } else {
        data.handoverRules = userApartmentList.value.map((ele) => {
          return {
            newOrgId: form.value.newOrgId,
            originalOrgId: ele.id,
            originalUserId: form.value.userId,
            newUserId: form.value.newUserId
          }
        })
      }
    }
    //  return
    url(data)
      .then((res) => {
        if (res.code === 200) {
          if (type.value === 'add') ElMessage.success('邀请成功')
          else if (type.value === 'edit') ElMessage.success('编辑成功')
          else if (type.value === 'leave') ElMessage.success('标记离职成功')
          else if (type.value === 'recover') ElMessage.success('取消标记离职成功')
          onClose()
          clickemit('getList')
        } else {
          ElMessage.warning(res.message)
        }
      })
      .catch(() => {})
  },
  //关闭弹窗
  onClose = () => {
    resetFunction()
    isShow.value = false
  },
  //数据更新
  changeDepartment = (val, type) => {
    if (val && val.length > 0) {
      if (type === 1) {
        if (form.value.secondaryUpType?.length > 0) {
          form.value.secondaryUpType = form.value.secondaryUpType.filter((ele) => ele[ele.length - 1] !== val[val.length - 1])
        }
      } else {
        if (form.value.upType?.length > 0) {
          let list = []
          list = val.filter((ele) => {
            return ele[ele.length - 1] === form.value.upType[form.value.upType.length - 1]
          })
          if (list.length > 0) {
            form.value.upType = []
          }
        }
      }
    }
    //  let id = val[val.length - 1]
    //  const tree = function (list) {
    //    for (let i = 0; i < list.length; i++) {
    //      //   if (id == list[i].id) {
    //      //   }
    //      if (list[i].child) {
    //        tree(list[i].child)
    //      }
    //    }
    //  }
    //  tree(JSON.parse(JSON.stringify(treeData.value)))
  }
defineExpose({
  init
})
</script>

<style lang="scss" scoped>
.leftTitle {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #4e5969;
}
.rightTitle {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #1d2129;
}
</style>
