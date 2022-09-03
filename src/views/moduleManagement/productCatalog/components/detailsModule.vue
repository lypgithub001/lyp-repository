<template>
  <div class="proManageAdd">
    <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" :dialogButton="dialogButton" @onSubmit="save" width="940px">
      <template #content>
        <el-form v-loading="loading" size="small" label-position="top" :rules="formRules" ref="formRef" :model="form">
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="上级产品名称" prop="parentName">
                <el-input v-model="form.parentName" placeholder="请输入上级产品名称" :disabled="true"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="产品编码" prop="catalogueCode">
                <el-input :disabled="type !== 'add'" v-model="form.catalogueCode" placeholder="请输入编码" size="small"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="产品名称" prop="catalogueName">
                <el-input :disabled="type === 'view'" v-model="form.catalogueName" size="small" placeholder="请输入产品名称"></el-input>
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
import { saveOrUpdateBatch } from '@/api/moduleManagement/dictionaries'
import { queryDetails, addOrUpdate } from '@/api/moduleManagement/productCatalog.js'
import { ElMessage } from 'element-plus'
//定义子组件传值方法
const clickemit = defineEmits(['getList'])
//定义参数
const formRef = ref(),
  //   弹窗显示隐藏
  isShow = ref(false)
//左侧字典树
let dialogButton = ref(['取消', '保存']),
  form = ref({
    openStatus: 0 //开放状态
  }),
  formRules = {
    // 定义表单校验规则
    catalogueCode: [{ required: true, message: '请输入编码', trigger: 'change' }],
    catalogueName: [{ required: true, message: '请输入产品名称', trigger: 'change' }]
  },
  type = ref(''),
  title = ref(''),
  // 初始化调用
  init = (types, info) => {
    dialogButton.value = ['取消', '保存']
    if (types === 'view') {
      title.value = '浏览'
      dialogButton.value = ['取消']
      getdictTree(info)
    } else if (types === 'add') {
      form.value.parentName = info.parentName
      form.value.parentId = info.parentId
      title.value = '新增'
    } else {
      getdictTree(info)
      title.value = '修改'
    }
    type.value = types
    isShow.value = true
  },
  //定义loading
  loading = ref(false),
  //获取树
  getdictTree = async (info) => {
    try {
      let res = await queryDetails(info.id)
      if (res.code === 200) {
        form.value = res.data
      } else {
        ElMessage.error(res.message)
      }
    } catch (error) { }
  },
  //重置
  resetFunction = () => {
    form.value = {
      openStatus: 1
    }
    formRef.value.resetFields()
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
    addOrUpdate(data)
      .then((res) => {
        if (res.code === 200) {
          if (type.value === 'add') ElMessage.success('创建成功')
          else if (type.value === 'edit') ElMessage.success('编辑成功')

          onClose()
          clickemit('getList')
        } else ElMessage.warning(res.message)
      })
      .catch(() => { })
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
// .proManageAdd {
// }
</style>
