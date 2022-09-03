<template>
  <div class="proManageAdd">
    <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" :dialogButton="dialogButton" @onSubmit="save" width="1000px">
      <template #content>
        <el-form v-loading="loading" size="small" label-position="top" :rules="formRules" ref="formRef" :model="form">
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="角色名称" prop="roleName">
                <el-input v-model="form.roleName" placeholder="最多输入8个字" maxlength="8" :disabled="type === 'view'"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="角色排序：" prop="roleSeq">
                <el-input v-model="form.roleSeq" placeholder="请输入角色排序" type="number" />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="数据权限" prop="roleScope">
                <el-radio-group v-model="form.roleScope" @change=";(form.viewRoleScopeDictionaries = ''), (form.customDataPermissionsList = [])">
                  <el-radio v-for="(item, index) in RoleScopeEnum" :key="index" :label="item.id">{{ item.name }}</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="备注">
                <el-input :disabled="type === 'view'" v-model="form.roleDescribe" placeholder="请输入备注" size="small"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="功能权限" prop="treeRoleData">
                <el-tree :data="treeRoleData" :default-checked-keys="detailTree" show-checkbox ref="limmitTree" node-key="id" :props="defaultProps"> </el-tree>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item v-if="form.roleScope === 5" label="自定义数据权限：">
                <label style="cursor: pointer; display: inline-block; width: 100%" @click="openDialog()" v-if="type !== 'view'">
                  <el-input v-model="form.viewRoleScopeDictionaries" placeholder="选填" readonly />
                </label>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </el-dialog-module>
    <OrgStructureSelection
      ref="OrgStructureSelectionRef"
      :selectDataList="selectDataList"
      :select="false"
      @subumit="subumit"
      :selectType="'1'"
      :transferTitle="['选择组织', '已选择组织']"
    >
    </OrgStructureSelection>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useStore } from 'vuex'
import { queryRoleModuleTree, add, update, queryDetails } from '@/api/company/basisSetting/roleManagement.js'
import { ElMessage } from 'element-plus'
import OrgStructureSelection from '@/components/organizationalStructure/index.vue'

const store = useStore(),
  //定义子组件传值方法
  clickemit = defineEmits(['getList'])
//定义参数
const formRef = ref(),
  //   弹窗显示隐藏
  isShow = ref(false)
//定义选择部门ref
let OrgStructureSelectionRef = ref(),
  openDialog = () => {
    OrgStructureSelectionRef.value.init()
  },
  //选择带回部门数据
  subumit = (val) => {
    console.log(val)
    form.value.viewRoleScopeDictionaries = ''
    form.value.customDataPermissionsList = val.map((ele) => {
      form.value.viewRoleScopeDictionaries = ele.name + '、' + form.value.viewRoleScopeDictionaries
      return {
        nodeId: ele.id,
        nodeType: 0,
        name: ele.name,
        id: ele.id
      }
    })
    selectDataList.value = val.map((ele) => {
      return {
        name: ele.name,
        id: ele.id
      }
    })
    form.value.viewRoleScopeDictionaries = form.value.viewRoleScopeDictionaries.slice(0, -1)
  }
//定义数据权限字典
let RoleScopeEnum = ref()
RoleScopeEnum.value = store.getters.filteredSystemDictList('RoleScopeEnum')
//选择字典表树
let treeRoleData = ref([])
//默认菜单树
let detailTree = ref([])
//左侧字典树
let dialogButton = ref(['取消', '保存']),
  form = ref({
    // 角色form
    roleId: null, // 角色id
    roleModuleRelList: [], // 功能id组
    roleDescribe: '', // 角色描述
    roleName: '', // 角色名称
    roleScope: 0, // 数据权限
    viewRoleScopeDictionaries: '', //部门
    customDataPermissionsList: [] // 自定义 数据权限
  }),
  defaultProps = ref({
    // 数据默认字段
    parent: 'pid', // 父级唯一标识
    value: 'id', // 唯一标识
    label: 'menuName', // 标签显示
    children: 'child' // 子级
  }),
  formRules = {
    // 定义表单校验规则
    roleName: [
      { required: true, message: '请输入角色名称', trigger: 'blur' },
      { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
    ],
    roleScope: [{ required: true, message: '请选择数据权限', trigger: 'change' }],
    roleDescribe: [{ required: true, message: '请填写备注', trigger: 'change' }],
    roleSeq: [{ required: true, message: '请输入角色排序', trigger: 'change' }]
  },
  type = ref(''),
  title = ref(''),
  listNewLength = ref(0),
  // 初始化调用
  init = (types, info, listLength = 0) => {
    listNewLength.value = listLength
    getdictTree(types, info)
  },
  //定义loading
  loading = ref(false),
  //部门列表
  moreManagerList = ref([]),
  //部门回显列表
  selectDataList = ref([]),
  //获取详情
  getInfo = (row) => {
    // 编辑角色
    form.value.roleId = row.roleId
    form.value.roleName = row.roleName
    queryDetails(row.roleId).then((res) => {
      if (res.code === 200) {
        let data = res.data
        let arr = []
        data.roleModuleRelList.forEach((item) => {
          if (item.selectFlag) {
            arr.push({ id: item.moduleId })
          }
        })
        form.value = JSON.parse(JSON.stringify({ ...row }))
        nextTick(() => {
          //  limmitTree.value.setCheckedNodes(arr)
          arr.forEach((value) => {
            limmitTree.value.setChecked(value, true, false)
          })
        })
        moreManagerList.value = []
        selectDataList.value = []
        //部门树回显
        let str = ''
        if (data.customDataPermissionsList && data.customDataPermissionsList.length > 0) {
          for (let i = 0; i < data.customDataPermissionsList.length; i++) {
            if (data.customDataPermissionsList[i]) {
              moreManagerList.value.push({
                id: data.customDataPermissionsList[i].id,
                nodeId: data.customDataPermissionsList[i].nodeId,
                nodeType: data.customDataPermissionsList[i].nodeType
              })
              selectDataList.value.push({
                name: data.customDataPermissionsList[i].nodeName,
                id: data.customDataPermissionsList[i].nodeId
              })
              str += data.customDataPermissionsList[i].nodeName + '、'
            }
          }
        }
        if (data.roleScope == 5) {
          form.value.customDataPermissionsList = JSON.parse(JSON.stringify(moreManagerList.value))
        } else {
          form.value.customDataPermissionsList = JSON.parse(JSON.stringify(moreManagerList.value))
        }
        console.log(form.value.customDataPermissionsList)
        form.value.viewRoleScopeDictionaries = str.slice(0, -1)
      }
    })
  },
  //获取树
  getdictTree = async (types, info) => {
    try {
      let res = await queryRoleModuleTree()
      if (res.code === 200) {
        console.log(res)
        treeRoleData.value = res.data
        if (types === 'view') {
          title.value = '浏览'
          form.value = info
          dialogButton.value = ['取消']
          // viewOrEditSolutionFunction(id)
        } else if (types === 'add') {
          title.value = '新增'
          form.value.roleSeq = listNewLength.value
        } else {
          getInfo(info)
          title.value = '修改'
        }
        type.value = types
        isShow.value = true
      } else {
        ElMessage.error(res.message)
      }
    } catch (error) {}
  },
  //重置
  resetFunction = () => {
    form.value = {}
    if (limmitTree.value) {
      limmitTree.value.setCheckedKeys([])
    }
    formRef.value.resetFields()
  },
  //功能权限树ref
  limmitTree = ref(),
  //提交
  save = () => {
    formRef.value.validate((valid) => {
      if (valid) {
        if (form.value.roleScope === 5) {
          if (JSON.stringify(form.value.customDataPermissionsList) === 'null' || JSON.stringify(form.value.customDataPermissionsList) === '[]') {
            ElMessage({
              message: '请选择自定义数据权限范围',
              type: 'warning'
            })
            return true
          }
        }
        if (limmitTree.value?.getCheckedNodes()?.length > 0) {
          //数据数的处理
          form.value.roleModuleRelList = []
          let childrenList = JSON.parse(JSON.stringify(limmitTree.value.getCheckedKeys()))
          for (let i = 0; i < childrenList.length; i++) {
            form.value.roleModuleRelList.push({
              selectFlag: 1,
              moduleId: childrenList[i]
            })
          }
          let parentList = JSON.parse(JSON.stringify(limmitTree.value.getHalfCheckedKeys()))
          for (let j = 0; j < parentList.length; j++) {
            form.value.roleModuleRelList.push({
              selectFlag: 1,
              moduleId: parentList[j]
            })
          }
          createOrUpdateSolutionFunction(form.value)
        } else {
          ElMessage({
            message: '请选择权限',
            type: 'warning'
          })
          return
        }
      } else {
        return false
      }
    })
  },
  //创建 or 编辑
  createOrUpdateSolutionFunction = (data) => {
    let url
    if (type.value === 'add') {
      url = add
    } else {
      url = update
    }
    url(data)
      .then((res) => {
        if (res.code === 200) {
          if (type.value === 'add') ElMessage.success('创建成功')
          else if (type.value === 'edit') ElMessage.success('编辑成功')

          onClose()
          clickemit('getList')
        } else ElMessage.warning(res.message)
      })
      .catch(() => {})
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
:deep(.el-scrollbar__wrap) {
  overflow: auto;
  height: 100%;
  width: 101%;
}
:deep(.el-radio) {
  margin: 10px 20px 0 0px;
}
</style>
