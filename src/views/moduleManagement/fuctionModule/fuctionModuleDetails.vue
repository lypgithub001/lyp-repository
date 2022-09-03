<!-- 增改查通用组件 -->
<template>
  <div>
    <div class="container" v-if="titleType === 'view'">
      <look-details :list="list"></look-details>
      <el-row>
        <el-col :span="24">
          <el-button size="mini" @click="closeHandle()">取消</el-button>
        </el-col>
      </el-row>
    </div>
    <el-form
      v-else
      ref="formRef"
      :model="form"
      :rules="rules"
      :disabled="titleType === 'view'"
      class="t16L24 cardShadow"
      label-position="top"
      label-width="100px"
      size="small"
    >
      <el-row>
        <el-col :span="8">
          <el-form-item label="菜单类型:" prop="menuType">
            <el-radio-group v-model="form.menuType" @change="changeMenuTypeFunc" :disabled="titleType === 'view' || titleType === 'edit'">
              <el-radio :label="0">功能菜单</el-radio>
              <el-radio v-if="!route.query.id" :label="1">功能页面</el-radio>
              <el-radio v-if="!route.query.id" :label="2">按钮</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="名称:" prop="menuName">
            <el-input v-model="form.menuName" placeholder="请输入名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="所属分类/模块：" v-if="form.menuType == 1 || form.menuType == 2" prop="pid">
            <SelectTree
              v-if="form.menuType === 1 && isshow"
              :value="form.pid"
              @selected="pidFunction"
              :options="functionModule.pageOptionList"
              :props="defaultProps"
              :menuType="form.menuType"
              :clearable="true"
              :width="'340'"
              :levelFlag="form.menuType"
              @parentsConfirm="levelTipsFunc"
              :placeholder="'请选择所属分类/模块'"
              :disabled="titleType === 'view'"
            />
            <SelectTree
              v-if="form.menuType === 2 && isshow"
              :value="form.pid"
              :menuType="form.menuType"
              @selected="pidFunction"
              :options="functionModule.buttonOptionList"
              :props="defaultProps"
              :width="'340'"
              :levelFlag="form.menuType"
              @parentsConfirm="levelTipsFunc"
              :placeholder="'请选择所属页面'"
              :disabled="titleType === 'view'"
            />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="应用终端:" prop="applicationTerminal">
            <el-radio-group v-model="form.applicationTerminal" :disabled="titleType === 'view'">
              <!--                     <el-radio :label="1">系统菜单</el-radio>-->
              <el-radio :label="0">通用</el-radio>
              <el-radio :label="1">PC</el-radio>
              <el-radio :label="2">APP</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8" v-if="form.menuType !== 2">
          <el-form-item label="svg图标:" prop="icon">
            <el-input v-model="form.icon" placeholder="请输入svg图标"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="启用状态:" prop="isEnable">
            <el-radio-group v-model="form.isEnable" :disabled="titleType === 'view'">
              <el-radio :label="false">不启用</el-radio>
              <el-radio :label="true">启用</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="排序:" prop="sort">
            <el-input v-model="form.sort" maxlength="9" type="number" placeholder="请输入排序"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="系统编码:" prop="moduleCode">
            <el-input v-model="form.moduleCode" type="text" placeholder="请输入系统编码"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8" v-if="form.menuType !== 2">
          <el-form-item label="模块名称:" prop="name">
            <el-input v-model="form.name" type="text" placeholder="请输入模块名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8" v-if="form.menuType !== 2">
          <el-form-item label="模块路径:" prop="path">
            <el-input v-model="form.path" type="text" placeholder="请输入模块路径"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8" v-if="form.menuType !== 2">
          <el-form-item label="是否隐藏模块:" prop="hidden">
            <el-radio-group v-model="form.hidden" :disabled="titleType === 'view'">
              <el-radio :label="false">是</el-radio>
              <el-radio :label="true">否</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="模块分组选择:" prop="moduleGroup">
            <el-radio-group v-model="form.moduleGroup" :disabled="titleType === 'view'">
              <el-radio :label="0">通用</el-radio>
              <el-radio :label="1">采购</el-radio>
              <el-radio :label="2">销售</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="用户菜单必选标志:" prop="requiredFlag">
            <el-radio-group v-model="form.requiredFlag" :disabled="titleType === 'view'">
              <el-radio :label="0">非必选</el-radio>
              <el-radio :label="1">必选</el-radio>
              <el-radio :label="2">建议选择</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="8" v-if="form.menuType !== 2">
          <el-form-item label="标志:" prop="miniatureIcon">
            <el-input v-model="form.miniatureIcon" placeholder="请输入标志"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="描述:" prop="description">
            <el-input v-model="form.description" type="textarea" maxlength="100" placeholder="最多输入100个字符"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="24" v-if="titleType !== 'view'">
          <el-button size="mini" type="primary" @click="submitHandle()" :disabled="titleType === 'view'">确定</el-button>
          <el-button size="mini" @click="closeHandle()">取消</el-button>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
export default defineComponent({
  name: 'fuctionModuleDetails'
})
</script>
<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted, reactive, defineComponent, inject, nextTick } from 'vue'
import { ElMessage } from 'element-plus'
import { CreateModuleFunction, UpdateModuleFunction, GetModuleTree } from '@/api/moduleManagement/fuctionModule'
import SelectTree from '@/components/Tree/SelectTree.vue'
import { useStore } from 'vuex'
import { getLabel } from '../../../utils/common'
const route = useRoute(),
  store = useStore(),
  //查看详情数据
  list = ref([]),
  //规则校验
  rules = {
    // 定义表单校验规则
    menuType: [
      {
        required: true,
        message: '请选择菜单',
        trigger: 'change'
      }
    ],
    menuName: [
      {
        required: true,
        message: '请输入名称',
        trigger: 'change'
      }
    ],
    applicationTerminal: [
      {
        required: true,
        message: '请选择终端',
        trigger: 'change'
      }
    ],
    isEnable: [
      {
        required: true,
        message: '请选择启用状态',
        trigger: 'change'
      }
    ],
    name: [
      {
        required: true,
        message: '请输入模块名称',
        trigger: 'change'
      }
    ],
    path: [
      {
        required: true,
        message: '请输入模块路径',
        trigger: 'change'
      }
    ],
    component: [
      {
        required: true,
        message: '请输入组件路径',
        trigger: 'change'
      }
    ]
  },
  //展示类型
  titleType = ref('view'),
  formRef = ref(), // 定义ref
  //定义权限列表相关数据
  functionModule = reactive({
    tableData: [],
    pageOptionList: [],
    buttonOptionList: []
  }),
  //系统字典
  dictData = reactive({
    menuTypeList: [],
    applicationTerminalList: []
  })
//定义form信息
let form = ref({
    applicationTerminal: 0,
    component: '',
    description: '',
    hidden: true,
    icon: '',
    isEnable: true,
    menuName: '',
    menuType: 0,
    miniatureIcon: '',
    moduleCode: '',
    name: '',
    path: '',
    pid: 0,
    redirect: '',
    sort: 1,
    webMeta: '',
    requiredFlag: 0,
    moduleGroup: 0
  }),
  loading = ref(false)
//递归处理数据回显
const recursionFuncTwo = (list1, id) => {
  if (list1.length > 0 && id) {
    let str = ''
    for (var i = 0; i < list1.length; i++) {
      if (list1[i].id === id) {
        return list1[i].menuName
      }
      if (list1[i].child && list1[i].child.length > 0) {
        str = recursionFuncTwo(list1[i].child, id)
      }
    }
    return str
  }
  return ''
}
onMounted(() => {
  dictData.menuTypeList = store.getters.filteredSystemDictList('MenuTypeEnum') || [] //菜单类型字典
  dictData.applicationTerminalList = store.getters.filteredSystemDictList('ModuleTerminalEnum') || [] //设备类型字典
  if (route.query.type !== 'add') {
    form.value = JSON.parse(decodeURIComponent(route.query.obj))
  } else {
    form.value.pid = route.query.id || 0
  }
  getModuleTreeFunc()
  titleType.value = route.query.type
})
let isshow = ref(false)
//获取功能模块树
const getModuleTreeFunc = () => {
  functionModule.pageOptionList = []
  functionModule.buttonOptionList = []
  loading.value = true
  GetModuleTree()
    .then((res) => {
      loading.value = false
      if (res.code === 200) {
        functionModule.tableData = recursionFunc(JSON.parse(JSON.stringify(res.data)), 'sort', '1') //递归处理数据并排序
        if (functionModule.tableData && functionModule.tableData.length > 0) {
          //功能页面一级，需要取系统菜单和功能菜单数据
          functionModule.pageOptionList = recursionFunc(JSON.parse(JSON.stringify(res.data)), 'sort', '2') //递归处理数据并排序
          //按钮一级，需要取系统菜单、功能菜单和功能页面数据
          functionModule.buttonOptionList = functionModule.tableData
        }
        list.value = [
          {
            label: '菜单类型',
            name: getLabel(form.value.menuType, dictData.menuTypeList)
          },
          {
            label: '名称',
            name: form.value.menuName
          },
          {
            label: '所属分类模块',
            name: recursionFuncTwo(functionModule.tableData, form.value.pid)
          },
          {
            label: '应用终端',
            name: getLabel(form.value.applicationTerminal, dictData.applicationTerminalList)
          },
          {
            label: 'svg图标',
            name: form.value.icon
          },
          {
            label: '启用状态',
            name: form.value.isEnable ? '启用' : '不启用'
          },
          {
            label: '排序',
            name: form.value.sort
          },
          {
            label: '系统编码',
            name: form.value.moduleCode
          },
          {
            label: '模块名称',
            name: form.value.name
          },
          {
            label: '模块路径',
            name: form.value.path
          },
          {
            label: '重定向路径',
            name: form.value.redirect
          },
          {
            label: '是否隐藏模块',
            name: form.value.hidden ? '否' : '是'
          },
          {
            label: '组件路径',
            name: form.value.component,
            width: '98px'
          },
          {
            label: 'meta路径',
            name: form.value.meta
          },
          {
            label: '标志',
            name: form.value.miniatureIcon
          },
          {
            label: '描述',
            name: form.value.description
          }
        ]
        nextTick(() => {
          isshow.value = true
        })
      } else ElMessage.warning(res.message)
    })
    .catch(() => {
      loading = false
    })
}
//排序方法
const compare = (property) => {
  return function (a, b) {
    let x = parseInt(a[property])
    let y = parseInt(b[property])
    return x < y ? -1 : x > y ? 1 : 0
  }
}
//递归处理数据
const recursionFunc = (list, flag, type) => {
  let data = []
  if (list) {
    list.sort(compare(flag))
    for (let i = 0; i < list.length; i++) {
      if (list[i].child && list[i].child.length > 0) {
        list[i].child = recursionFunc(list[i].child, 'sort', type)
      }
      if (type === '1') {
        if (list[i].menuType === 1 || list[i].menuType === 0) {
          data.push({
            pid: list[i].pid || 0,
            index: i, //该索引在树形表格懒加载时使用
            menuName: list[i].menuName,
            sort: list[i].sort,
            menuType: list[i].menuType,
            createTime: list[i].createTime,
            updateTime: list[i].updateTime,
            isEnable: list[i].isEnable,
            // isOptional: list[i].isOptional,
            id: list[i].id,
            child: list[i].child
            // hasChildren: (list[i].child && list[i].child.length > 0) ? true : false
          })
        }
      } else {
        if (list[i].menuType === 0) {
          data.push({
            pid: list[i].pid || 0,
            index: i, //该索引在树形表格懒加载时使用
            menuName: list[i].menuName,
            sort: list[i].sort,
            menuType: list[i].menuType,
            createTime: list[i].createTime,
            updateTime: list[i].updateTime,
            isEnable: list[i].isEnable,
            // isOptional: list[i].isOptional,
            id: list[i].id,
            child: list[i].child
            // hasChildren: (list[i].child && list[i].child.length > 0) ? true : false
          })
        }
      }
    }
  }
  return data || list
}
const pidFunction = (value) => {
  if (value) {
    form.value.pid = value
  } else {
    form.value.pid = 0
  }
  //   formRef.clearValidate('pid')
}
const defaultProps = ref({
  // 数据默认字段
  parent: 'pid', // 父级唯一标识
  value: 'id', // 唯一标识
  label: 'menuName', // 标签显示
  children: 'child' // 子级
})
//所属分类/模块等级问题校验
const levelTipsFunc = (type) => {
    if (!type) ElMessage.warning('请选择正确的所属分类/模块')
  },
  //修改按钮
  changeMenuTypeFunc = (type) => {
    form.value.menuType = type
    form.value.pid = 0
    //  formRef.clearValidate()
  }

// 确定、关闭hangdle
const submitHandle = () => {
  console.log(form.value)
  formRef.value.validate(async (valid) => {
    if (valid) {
      let url = ''
      if (titleType.value === 'add') {
        url = CreateModuleFunction
      } else {
        url = UpdateModuleFunction
      }
      if (form.value.menuType === 1 || form.value.menuType === 2) {
        if (form.pid == 0 || form.pid) {
          ElMessage.warning('请指定所属分类/模块')
          return
        }
      }
      try {
        const res = await url(form.value)
        if (res.code === 200) {
          ElMessage.success(titleType.value === 'add' ? '新增成功' : '修改成功')
          closeHandle()
        } else {
          ElMessage.error(res.message)
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      return false
    }
  })
}
//注入关闭标签方法
const closeNowTag = inject('closeNowTag')
//取消
const closeHandle = () => {
  //调用关闭当前页面
  closeNowTag()
}
</script>
