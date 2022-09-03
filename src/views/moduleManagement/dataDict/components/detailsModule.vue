<template>
  <div class="proManageAdd">
    <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" :dialogButton="dialogButton" @onSubmit="save" width="940px">
      <template #content>
        <el-form v-loading="loading" size="small" label-position="top" :rules="formRules" ref="formRef" :model="form">
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="档案名称" prop="content">
                <el-input v-model="form.content" placeholder="请输入档案名称" :disabled="type === 'view'"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="上级分类" prop="upType">
                <el-cascader
                  :disabled="type === 'view' || type === 'edit'"
                  :options="treeDicData"
                  v-model="form.upType"
                  size="small"
                  ref="goodsTypeTreeChose"
                  :props="{ checkStrictly: true, label: 'content', value: 'id', children: 'child' }"
                  clearable
                  @change="upTypeChange"
                ></el-cascader>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="编码：" prop="code">
                <el-input :disabled="type === 'view'" v-model="form.code" placeholder="请输入编码" size="small"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24" class="pl30">
              <el-form-item label="标识参数：" prop="type2">
                <el-input :disabled="type === 'view'" v-model="form.type2" size="small" placeholder="请输入标识参数"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="业务大类：" prop="type1">
                <el-input :disabled="type === 'view'" v-model="form.type1" size="small" placeholder="请输入（后台使用）"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="助记码：" prop="keyword">
                <el-input :disabled="type === 'view'" v-model="form.keyword" size="small" placeholder="请输入（后台使用）"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </el-dialog-module>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { dictTree, saveOrUpdateBatch } from '@/api/moduleManagement/dictionaries'
import { ElMessage } from 'element-plus'
import { changeDetSelect } from '@/utils/common'
const store = useStore(),
  //定义子组件传值方法
  clickemit = defineEmits(['getList'])
//定义参数
const formRef = ref(),
  //   弹窗显示隐藏
  isShow = ref(false)

//定义用户类别字典
let userType = ref([]),
  //选择字典表树
  treeDicData = ref([])
//左侧字典树
let dialogButton = ref(['取消', '保存']),
  form = ref({
    upType: [] //上级分类
  }),
  formRules = {
    // 定义表单校验规则
    content: [
      {
        required: true,
        message: '请输入档案名称',
        trigger: 'change'
      }
    ],
    //  upType: [{ required: true, message: '请选择上级分类', trigger: 'change' }],
    code: [{ required: true, message: '请输入编码', trigger: 'change' }],
    type1: [{ required: true, message: '请输入业务大类', trigger: 'change' }],
    type2: [{ required: true, message: '请输入标识参数', trigger: 'change' }]
  },
  type = ref(''),
  title = ref(''),
  // 初始化调用
  init = (types, info) => {
    dialogButton.value = ['取消', '保存']
    getdictTree(types, info)
  },
  //定义loading
  loading = ref(false),
  //获取树
  getdictTree = async (types, info) => {
    try {
      let res = await dictTree()
      if (res.code === 200) {
        treeDicData.value = res.data
        if (types === 'view') {
          title.value = '浏览'
          form.value = info
          form.value.upType = changeDetSelect(info.pid, JSON.parse(JSON.stringify(treeDicData.value)))
          dialogButton.value = ['取消']
          // viewOrEditSolutionFunction(id)
        } else if (types === 'add') {
          form.value.upType = changeDetSelect(info, JSON.parse(JSON.stringify(treeDicData.value)))
          upTypeChange(form.value.upType, false)
          title.value = '新增'
        } else {
          form.value = info
          form.value.upType = changeDetSelect(info.pid, JSON.parse(JSON.stringify(treeDicData.value)))
          title.value = '修改'
        }
        type.value = types
        userType.value = store.getters.filteredSystemDictList('UserTypeEnum')
        isShow.value = true
      } else {
        ElMessage.error(res.message)
      }
    } catch (error) {}
  },
  //重置
  resetFunction = () => {
    form.value = {}
    formRef.value.resetFields()
  },
  //提交
  save = () => {
    formRef.value.validate((valid) => {
      if (valid) {
        console.log(form.value.upType)
        if (form.value.upType?.length > 0) {
          form.value.pid = form.value.upType[form.value.upType?.length - 1]
        } else {
          form.value.pid = ''
        }
        createOrUpdateSolutionFunction(form.value)
      } else {
        return false
      }
    })
  },
  //创建 or 编辑
  createOrUpdateSolutionFunction = (data) => {
    saveOrUpdateBatch([data])
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
  //数据更新
  upTypeChange = (val, isEdit) => {
    console.log(val)
    console.log(isEdit)
    if (val && JSON.stringify(val) !== '[]') {
      let id = val[val?.length - 1]
      const tree = function (list) {
        for (let i = 0; i < list.length; i++) {
          if (id == list[i].id) {
            if (list[i].pid == 0) {
              if (!isEdit) {
                form.value.type2 = ''
                form.value.type1 = ''
              }
            } else {
              if (!isEdit) {
                form.value.type2 = list[i].type2 + '-' + (i + 1)
                form.value.type1 = list[i].type1
              }
            }
            if (!isEdit) {
              form.value.type2 = list[i].child ? list[i].type2 + '-' + list[i].child.length : `${list[i].type2}-0`
              form.value.type1 = list[i].type1
              form.value.code = list[i].child ? list[i].child.length : 0
              form.value.pid = list[i].id
              form.value.state = 0 //状态(0.启用，1.停用)
              form.value.type3 = 0
            }
          }
          if (list[i].child) {
            tree(list[i].child)
          }
        }
      }
      tree(JSON.parse(JSON.stringify(treeDicData.value)))
    } else {
      form.value.code = treeDicData.value?.length
      form.value.type2 = ''
      form.value.type1 = ''
    }
  }
defineExpose({
  init
})
</script>

<style lang="scss" scoped>
// .proManageAdd {
// }
</style>
