<template>
  <div class="proManageAdd">
    <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" :dialogButton="dialogButton" :loading="loading" @onSubmit="save" width="1000px">
      <template #content>
        <el-form v-loading="loading" size="small" label-position="top" :rules="formRules" ref="formRef" :model="form">
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name" placeholder="请输入姓名" maxlength="8"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="手机号">
                <el-input v-model="infoForm.phone" placeholder="请输入手机号" maxlength="11" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="选择主属部门" prop="upType">
                <el-cascader
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
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="职位名称" prop="jobName">
                <el-input v-model="form.jobName" placeholder="请输入职位"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="性别" prop="userGender">
                <el-select v-model="form.userGender" placeholder="请选择">
                  <el-option v-for="item in UserGenderEnum" :key="item.id" :label="item.name" :value="item.id"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="学历" prop="education">
                <el-select v-model="form.education" placeholder="请选择学历" clearable>
                  <el-option v-for="item in education" :key="item.code" :label="item.name" :value="String(item.code)"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="电子邮箱" prop="userEmail">
                <el-input v-model="form.userEmail" placeholder="请输入电子邮箱"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="身份证号" prop="idNumber">
                <el-input v-model="form.idNumber" placeholder="请输入身份证号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="入职时间" prop="employeeEntryTime">
                <el-date-picker v-model="form.employeeEntryTime" type="datetime" value-format="YYYY-MM-DD HH:mm:ss" placeholder="请选择入职时间">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </el-dialog-module>
  </div>
</template>

<script setup>
import { ref, toRefs } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { agreeApplyJoinCompany } from '@/api/company/teamManager'
import { regulars } from '@/utils/common.js'
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
      { min: 2, max: 6, message: '姓名长度在 2 到 6 个字符', trigger: 'change' },
      { pattern: regulars.chineseUserName, message: '请输入正确的姓名', trigger: 'change' }
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
    idNumber: [{ pattern: regulars.IDNumberReg, message: '请输入正确的身份证号', trigger: 'change' }]
  },
  title = ref(''),
  infoForm = ref({}) //加入公司申请对象
// 初始化调用
let init = (types, info, treeData = []) => {
    infoForm.value = info
    form.value.name = info.name
    form.value.jobName = info.employeeJob
    dialogButton.value = ['取消', '通过']
    title.value = '通过前请完善人员信息'
    UserGenderEnum.value = store.getters.filteredSystemDictList('UserGenderEnum')
    education.value = store.getters.filtereTreeDictList('education')
    isShow.value = true
  },
  //定义loading
  loading = ref(false),
  //重置
  resetFunction = () => {
    form.value = {}
    infoForm.value = {}
    formRef.value.resetFields()
  },
  //提交
  save = () => {
    formRef.value.validate((valid) => {
      if (valid) {
        console.log(form.value.upType)
        if (form.value.upType?.length > 0) {
          form.value.masterDeptId = form.value.upType[form.value.upType?.length - 1]
        }
        let list = []
        if (form.value.secondaryUpType?.length > 0) {
          list = form.value.secondaryUpType.map((ele) => {
            return ele[ele.length - 1] || ele
          })
        }
        const params = {
          education: form.value.education,
          employeeJob: form.value.jobName || '',
          masterDeptId: form.value.masterDeptId || '',
          name: form.value.name || '',
          phone: infoForm.value.phone || '',
          gender: form.value.userGender,
          email: form.value.userEmail || '',
          employeeEntryTime: form.value.employeeEntryTime,
          idNumber: form.value.idNumber || '',
          deptIds: list,
          teamId: infoForm.value.teamId || '',
          userId: infoForm.value.userId || ''
        }
        createOrUpdateSolutionFunction(infoForm.value.id, params)
      } else {
        return false
      }
    })
  },
  //创建 or 编辑
  createOrUpdateSolutionFunction = (id, data) => {
    loading.value = true
    agreeApplyJoinCompany(id, data)
      .then((res) => {
        loading.value = false
        if (res.code === 200) {
          ElMessage.success('通过成功')
          onClose()
          clickemit('getList')
        } else {
          ElMessage.warning(res.message)
        }
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
  //数据更新
  changeDepartment = (val, type) => {
    console.log(val)
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

<style lang="scss" scoped></style>
