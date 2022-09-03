<template>
  <div class="proManageAdd">
    <el-dialog-module :isShow="isShow" :title="props.title" @onClose="onClose" :dialogButton="dialogButton" @onSubmit="save" width="1080px">
      <template #content>
        <look-details :list="list" :type="1" v-if="type === 'view'"></look-details>
        <el-form
          v-if="type === 'view'"
          v-loading="loading"
          size="small"
          label-position="top"
          :rules="formRules"
          ref="formRef"
          :model="form"
          style="margin-bottom: 20px"
        >
          <el-row>
            <el-col :lg="12" :sm="12" :xs="24">
              <div class="flex">
                <div class="inputClass">关联功能模块：</div>
                <el-input
                  v-model="form.moduleName"
                  size="small"
                  placeholder="请选择关联功能模块"
                  readonly
                  style="width: 100%"
                  @click="drawerClickFunction(1)"
                />
              </div>
            </el-col>
          </el-row>
        </el-form>
        <el-form v-else v-loading="loading" size="small" label-position="top" :rules="formRules" ref="formRef" :model="form">
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="解决方案名称" prop="name">
                <el-input v-model="form.name" placeholder="请输入解决方案名称" :disabled="type === 'view'"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="解决方案类型" prop="solutionType">
                <el-select v-model="form.solutionType" placeholder="请选择" :disabled="type === 'view'">
                  <el-option v-for="(item, index) in solutionType" :label="item.name" :disabled="item.type === 1" :value="item.id" :key="index"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="关联功能模块" prop="moduleName">
                <el-input
                  v-model="form.moduleName"
                  size="small"
                  placeholder="请选择关联功能模块"
                  readonly
                  style="width: 100%"
                  @click="drawerClickFunction(2)"
                  :disabled="type === 'view'"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </el-dialog-module>
    <el-dialog-module
      :isShow="dialogObj.isShowDialogModule"
      :title="dialogObj.dialogTitle"
      @onClose="onCloseTree"
      :dialogButton="dialogObj.dialogButton"
      @onSubmit="saveTree"
      width="940px"
    >
      <template #content>
        <el-tree
          ref="moduleDialogTreeRef"
          :default-checked-keys="moduleDialogDisabledTree"
          :props="moduleDialogProps"
          :data="moduleDialogTreeData"
          node-key="id"
          show-checkbox
          highlight-current
          @check="getCheckedKeys"
        />
      </template>
    </el-dialog-module>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { GetModuleTree } from '@/api/moduleManagement/fuctionModule'
import { moduleQueryDetails, moduleSolutionAddOrUpdate, moduleSolutionList } from '@/api/moduleManagement/solutionManagement'
import { ElMessage } from 'element-plus'
import { getLabel } from '@/utils/common'
const store = useStore(),
  //定义子组件传值方法
  clickemit = defineEmits(['getList']),
  //定义详情数组
  list = ref([])
//接收参数
const props = defineProps({
    title: {
      type: String,
      defalt: ''
    }
  }),
  formRef = ref(),
  //   弹窗显示隐藏
  isShow = ref(false)
//定义系统字典
let subSystem = ref([])

//定义解决方案类别字典
let solutionType = ref([])

let dialogButton = ref(['取消', '保存']),
  form = ref({
    name: '',
    subSystem: null,
    solutionType: null,
    moduleRelList: [
      {
        checkState: '', //选中状态(0未选中1已选中2半选)
        moduleId: ''
      }
    ]
  }),
  formRules = {
    // 定义表单校验规则
    name: [
      {
        required: true,
        message: '请输入解决方案名称',
        trigger: 'change'
      }
    ],
    subSystem: [
      {
        required: true,
        message: '请选择应用系统',
        trigger: 'change'
      }
    ],
    solutionType: [
      {
        required: true,
        message: '请选择解决方案类型',
        trigger: 'change'
      }
    ],
    moduleName: [{ required: true, message: '请选择关联功能模块', trigger: 'change' }]
  },
  type = ref(''),
  // 初始化调用
  init = (types, id) => {
    dialogButton.value = ['取消', '保存']
    if (types === 'view') {
      dialogButton.value = ['取消']
      viewOrEditSolutionFunction(id)
    }
    type.value = types
    getModuleTreeListFunc(id)
    subSystem.value = store.getters.filteredSystemDictList('SubSystemEnum')
    solutionType.value = store.getters.filteredSystemDictList('SolutionTypeEnum')
    //  getModuleSolutionList()
    isShow.value = true
  },
  //递归处理数据回显
  recursionFunc = (list1, list2) => {
    if (list1.length > 0 && list2.length > 0) {
      let str = ''
      for (var i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
          if (list1[i].id === list2[j].moduleId && list2[j].checkState === 1) {
            str += list1[i].menuName + '，'
            if (list1[i].isOptional) list1[i]['disabled'] = true
          }
        }
        if (list1[i].child && list1[i].child.length > 0) {
          str += recursionFunc(list1[i].child, list2)
        }
      }
      return str
    }
    return ''
  },
  //递归处理勾选数据，添加勾选状态
  recursionFuncTwo = (list1, list2) => {
    if (list1.length > 0 && list2.length > 0) {
      for (var i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
          if (list1[i].id === list2[j].moduleId && list2[j].checkState === 1) {
            list1[i].checkState = 1
            if (list1[i].isOptional) list1[i]['disabled'] = true
            if (list1[i].child && list1[i].child.length > 0) {
              list1[i].child = recursionFuncTwo(list1[i].child, list2)
              let a = true
              list1[i].child.forEach((element) => {
                if (element.checkState !== 1) {
                  a = false
                }
              })
              if (a === false) {
                list1[i].checkState = 2
              }
            }
          } else if (list1[i].id === list2[j].moduleId && list2[j].checkState === 2) {
            list1[i].checkState = 2
            if (list1[i].isOptional) list1[i]['disabled'] = true
            if (list1[i].child && list1[i].child.length > 0) {
              list1[i].child = recursionFuncTwo(list1[i].child, list2)
            }
          }
        }
      }
      return list1
    }
    return []
  },
  //递归处理勾选数据回显
  recursionFuncThree = (list1, list2) => {
    if (list1.length > 0 && list2.length > 0) {
      for (let j = 0; j < list2.length; j++) {
        const screen = function (list, id) {
          for (let i = 0; i < list.length; i++) {
            if (list[i].id === id) {
              list2[j].checkState = list[i].checkState
              return
            }
            if (list[i].child && list[i].child.length > 0) {
              screen(list[i].child, id)
            }
          }
        }
        screen(list1, list2[j].moduleId)
      }

      return list2
    }
    return []
  },
  //定义loading
  loading = ref(false),
  //查看/编辑
  viewOrEditSolutionFunction = (id) => {
    moduleQueryDetails(id)
      .then((res) => {
        loading.value = false
        if (res.code === 200) {
          form.value = Object.assign({}, res.data)
          //关联功能模块回显处理
          form.value.moduleName = recursionFunc(JSON.parse(JSON.stringify(moduleDialogTreeData.value)), JSON.parse(JSON.stringify(form.value.moduleRelList)))
          //已有数据处理勾选状态
          form.value.moduleRelList = recursionFuncThree(
            recursionFuncTwo(JSON.parse(JSON.stringify(moduleDialogTreeData.value)), JSON.parse(JSON.stringify(form.value.moduleRelList))),
            JSON.parse(JSON.stringify(form.value.moduleRelList))
          )
          form.value.moduleName =
            form.value.moduleName.substring(form.value.moduleName.length - 1) === '，'
              ? form.value.moduleName.substring(0, form.value.moduleName.length - 1)
              : form.value.moduleName // 去掉最后多余的逗号
          list.value = [
            {
              label: '解决方案名称',
              name: form.value.name
            },
            // {
            //   label: '应用系统',
            //   name: getLabel(form.value.subSystem, subSystem.value)
            // },
            {
              label: '解决方案类型',
              name: getLabel(form.value.solutionType, solutionType.value)
            }
            // {
            //   label: '关联功能模块',
            //   name: form.value.moduleName
            // }
          ]
        } else ElMessage.warning(res.message)
      })
      .catch(() => {
        loading.value = false
      })
  }
//定义功能模块
let moduleDialogTreeData = ref(),
  //获取功能模块树
  getModuleTreeListFunc = (id) => {
    loading.value = true
    GetModuleTree()
      .then((res) => {
        if (type.value === 'add') {
          loading.value = false
        }
        if (res.code === 200) {
          moduleDialogTreeData.value = res.data
          for (var i = 0; i < moduleDialogTreeData.value.length; i++) {
            if (type.value === 'view') {
              moduleDialogTreeData.value[i].disabled = true
            }
            if (moduleDialogTreeData.value[i].child) {
              for (let j = 0; j < moduleDialogTreeData.value[i].child.length; j++) {
                if (type.value === 'view') {
                  moduleDialogTreeData.value[i].child[j].disabled = true
                  if (moduleDialogTreeData.value[i].child[j].child) {
                    for (let l = 0; l < moduleDialogTreeData.value[i].child[j].child.length; l++) {
                      if (type.value === 'view') {
                        moduleDialogTreeData.value[i].child[j].child[l].disabled = true
                      }
                    }
                  }
                }
                if (moduleDialogTreeData.value[i].child[j].menuType === 1) {
                  delete moduleDialogTreeData.value[i].child[j].child
                }
              }
            }
          }
          if (type.value === 'view' || type.value === 'edit') {
            viewOrEditSolutionFunction(id)
          }
        } else ElMessage.warning(res.message)
      })
      .catch(() => {
        if (type.value === 'add') {
          loading.value = false
        }
      })
  },
  //定义树弹窗字段
  dialogObj = reactive({
    dialogTitle: '',
    isShowDialogModule: false,
    dialogButton: ['取消', '保存']
  }),
  moduleDialogProps = reactive({
    label: 'menuName',
    children: 'child',
    value: 'id',
    parent: 'pid',
    disabled: 'disabled'
  }),
  //回显数据列表
  moduleDialogDisabledTree = ref([]),
  openType = ref(0),
  //点击选择数据
  drawerClickFunction = (type) => {
    if (type === 1) {
      dialogObj.dialogButton = ['取消']
    } else {
      dialogObj.dialogButton = ['取消', '保存']
    }
    openType.value = type
    dialogObj.isShowDialogModule = true
    moduleDialogDisabledTree.value = []
    dialogObj.dialogTitle = '关联功能模块'
    //已选择的数据回显设置
    if (form.value.moduleRelList.length > 0) {
      for (let i = 0; i < form.value.moduleRelList.length; i++) {
        if (form.value.moduleRelList[i].checkState === 1) moduleDialogDisabledTree.value.push(form.value.moduleRelList[i].moduleId)
      }
    }
    //如果系统菜单是套餐内必选，那么默认勾选且不可编辑
    for (var j = 0; j < moduleDialogTreeData.value.length; j++) {
      if (moduleDialogTreeData.value[j].isOptional) {
        moduleDialogDisabledTree.value.push(moduleDialogTreeData.value[j].id)
        moduleDialogTreeData.value[j]['disabled'] = true
        //该系统菜单下的所有功能模块默认勾选且不可编辑
        if (moduleDialogTreeData.value[j].child && moduleDialogTreeData.value[j].child.length > 0) {
          for (let a = 0; a < moduleDialogTreeData.value[j].child.length; a++) {
            moduleDialogDisabledTree.value.push(moduleDialogTreeData.value[j].child[a].id)
            moduleDialogTreeData.value[j].child[a]['disabled'] = true
          }
        }
      }
    }
  },
  //定义树ref
  moduleDialogTreeRef = ref(),
  //检索选中
  getCheckedKeys = (data, checked) => {
    //点击的是系统菜单一级且是选中状态
    //让此系统菜单下套餐内必选的功能菜单禁止操作
    if (data.menuType === 1 && checked.checkedKeys.length > 0) {
      if (checked.checkedKeys.filter((res) => res === data.id).length > 0) {
        //选中
        if (data.child && data.child.length > 0) {
          for (let i = 0; i < data.child.length; i++) {
            if (data.child[i].isOptional) {
              data.child[i]['disabled'] = true
            }
          }
        }
      } else {
        if (data.child && data.child.length > 0) {
          for (var i = 0; i < data.child.length; i++) {
            if (data.child[i].isOptional) {
              delete data.child[i]['disabled']
            }
            for (let j = checked.checkedNodes.length - 1; j >= 0; j--) {
              if (checked.checkedNodes[j].menuType === 2 && data.child[i].id === checked.checkedNodes[j].id) {
                checked.checkedNodes.splice(j, 1)
              }
            }
            for (let j = checked.checkedKeys.length - 1; j >= 0; j--) {
              if (data.child[i].id === checked.checkedKeys[j]) {
                checked.checkedKeys.splice(j, 1)
              }
            }
            moduleDialogTreeRef.value.setCheckedKeys(checked.checkedKeys)
          }
        }
      }
    } else if (data.menuType === 2 && data.isOptional) {
      data['disabled'] = true
    }

    form.value.moduleRelList = []
    form.value.moduleName = ''
    if (checked.checkedNodes.length > 0) {
      for (let i = 0; i < checked.checkedNodes.length; i++) {
        form.value.moduleRelList.push({
          checkState: 1, //选中状态(0未选中1已选中2半选)
          moduleId: checked.checkedNodes[i].id
        })
        form.value.moduleName += checked.checkedNodes[i].menuName + ','
      }
      //半选状态
      for (let i = 0; i < checked.halfCheckedNodes.length; i++) {
        form.value.moduleRelList.push({
          checkState: 2, //选中状态(0未选中1已选中2半选)
          moduleId: checked.halfCheckedNodes[i].id
        })
      }
      form.value.moduleName =
        form.value.moduleName.substring(form.value.moduleName.length - 1) === ','
          ? form.value.moduleName.substring(0, form.value.moduleName.length - 1)
          : form.value.moduleName // 去掉最后多余的逗号
    }
  },
  //重置
  resetFunction = () => {
    form.value = {
      name: '',
      subSystem: '',
      userType: '',
      moduleRelList: [
        {
          checkState: '', //选中状态(0未选中1已选中2半选)
          moduleId: ''
        }
      ]
    }
    if (type.value !== 'view') {
      moduleDialogTreeRef.value?.setCheckedKeys([])
      formRef.value.resetFields()
    }
  },
  //提交
  save = () => {
    formRef.value.validate((valid) => {
      if (valid) {
        createOrUpdateSolutionFunction(form.value)
      } else {
        return false
      }
    })
  },
  //创建 or 编辑
  createOrUpdateSolutionFunction = (data) => {
    moduleSolutionAddOrUpdate(data)
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
  },
  //关闭树弹窗
  onCloseTree = () => {
    //  formRef.value.resetFields()
    dialogObj.isShowDialogModule = false
  },
  //提交
  saveTree = () => {
    dialogObj.isShowDialogModule = false
  }
defineExpose({
  init
})
</script>

<style lang="scss" scoped>
.inputClass {
  display: flex;
  color: #718096;
  width: 118px;
  font-size: 14px;
  line-height: 33px;
}
</style>
