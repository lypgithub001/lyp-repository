<template>
  <div class="Add">
    <el-dialog-module class="class_map" width="580px" :isShow="isShow" :title="title" @onClose="onClose" :dialogButton="dialogButton" @onSubmit="save">
      <template #content>
        <h3 class="pb20">基本信息</h3>
        <el-form v-loading="loading" ref="formRef" :model="form" :rules="formRules" size="small" label-width="120px">
          <el-row>
            <el-col :span="24">
              <el-form-item label="放弃原因:" prop="fieldName">
                <el-input v-model="form.fieldName" placeholder="请输入放弃原因" maxlength="20" show-word-limit :disabled="type === 'view'"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="排序序号:" prop="sortNo">
                <el-input-number :min="1" v-model="form.sortNo" :max="2147483647" :disabled="type === 'view'"></el-input-number>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="是否启用:" prop="isDel">
                <el-radio-group v-model="form.isDel" :disabled="type === 'view'">
                  <el-radio :label="0">是</el-radio>
                  <el-radio :label="1">否</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="字段说明:" prop="fieldExplain">
                <el-input v-model="form.fieldExplain" placeholder="请输入字段说明" maxlength="20" show-word-limit :disabled="type === 'view'"></el-input>
              </el-form-item> </el-col
          ></el-row>
        </el-form>
      </template>
    </el-dialog-module>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { userAdd, userUpdate, teamUserInfoQueryDetails, deLete } from '@/api/company/basisSetting/dataDictionary'
import { regulars, getArrDifference, changeDetSelect } from '@/utils/common.js'

const store = useStore(),
  //定义子组件传值方法
  clickemit = defineEmits(['getList'])
//定义参数
const formRef = ref()
//   弹窗显示隐藏
let isShow = ref(false)
const valIds = ref('')

//左侧字典树
let dialogButton = ref(['取消', '保存']),
  form = ref({}),
  formRules = {
    // 定义表单校验规则
    fieldName: { required: true, min: 0, max: 20, message: '长度应该在0到20之间', trigger: 'blur' },
    sortNo: { required: true, message: '请输入显示序号', trigger: 'blur' },
    isDel: { required: true, message: '是否启用', trigger: 'blur' },
    fieldExplain: { required: true, min: 0, max: 20, message: '长度应该在0到20之间', trigger: 'blur' }
  },
  type = ref(''),
  title = ref('')
// 初始化调用
let init = (types, info, treeData = []) => {
    console.log(types)
    form.value.id = info.id
    dialogButton.value = ['取消', '保存']
    type.value = types
    if (types === 'view') {
      title.value = '浏览'
      dialogButton.value = ['取消']
      valIds.value = info.masterDeptId
      getDetails(info)
    } else if (types === 'add') {
      title.value = '新增'
      valIds.value = info
    } else {
      valIds.value = info.masterDeptId
      getDetails(info)
      title.value = '编辑'
    }
    isShow.value = true
  },
  //定义loading
  loading = ref(false),
  //重置
  resetFunction = () => {
    valIds.value = ''
    formRef.value.resetFields()
  },
  //获取用户详情
  getDetails = async (item) => {
    try {
      let res = await teamUserInfoQueryDetails(item.id)
      if (res.code === 200) {
        if (res.data.isDel === true) {
          form.value.isDel = 1
        } else {
          form.value.isDel = 0
        }
        form.value.fieldName = res.data.fieldName
        form.value.sortNo = res.data.sortNo
        form.value.fieldExplain = res.data.fieldExplain
      }
    } catch (error) {}
  },
  //提交
  save = () => {
    formRef.value.validate((valid) => {
      if (valid) {
        const params = {
          enumVal: valIds.value || '',
          fieldExplain: form.value.fieldExplain || '',
          fieldName: form.value.fieldName || '',
          isDel: form.value.isDel,
          sortNo: form.value.sortNo || '',
          id: form.value.id || ''
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
      if (type.value == 'stop') {
        url = deLete
      } else if (type.value == 'edit') {
        url = userUpdate
      }
    }
    //  return
    url(data)
      .then((res) => {
        if (res.code === 200) {
          if (type.value === 'add') {
            ElMessage.success('添加成功')
            onClose()
            clickemit('getList', data.fieldName)
            return
          } else if (type.value === 'edit') ElMessage.success('修改成功')
          else if (type.value === 'stop') ElMessage.success('停用成功')
          else if (type.value === 'recover') ElMessage.success('取消停用成功')
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
