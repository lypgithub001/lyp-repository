<template>
  <div class="proManageAdd">
    <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" :dialogButton="dialogButton" :isFooter="true" width="940px">
      <template #content>
        <el-form size="small" label-position="top" :rules="formRules" ref="formRef" :model="form" v-loading="loading">
          <look-details :list="list" :type="1"></look-details>
          <el-row>
            <el-col :span="24">
              <Table :tableData="tableData" :singleSelect="false" :showSelect="false" @selectedList="handleSelectionChange" ref="tableRef" class="mb20">
                <template #column>
                  <el-table-column label="角色名称" align="center" show-overflow-tooltip>
                    <template #default="scope">
                      <div class="scope_div" style="text-align: center">
                        {{ scope.row.roleName || '-' }}
                      </div>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" align="center" show-overflow-tooltip>
                    <template #default="scope">
                      <div class="scope_div" style="text-align: center">
                        <el-button size="mini" type="text" class="red-button" @click="handleBtn(scope.row)">删除</el-button>
                      </div>
                    </template>
                  </el-table-column>
                </template>
              </Table>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </el-dialog-module>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
import { useStore } from 'vuex'
import { ElMessage, ElMessageBox } from 'element-plus'
import { queryUserRoleList, unlinkUser } from '@/api/company/basisSetting/roleManagement.js'
const store = useStore(),
  //定义子组件传值方法
  clickemit = defineEmits(['getList'])
//定义参数
const formRef = ref(),
  //   弹窗显示隐藏
  isShow = ref(false)
//定义button
let dialogButton = ref(['取消', '保存']),
  form = ref({
    involve: 'ALL',
    sectionId: ''
  }),
  formRules = {
    // 定义表单校验规则
    content: [{ required: true, message: '请输入资格条件', trigger: 'change' }]
  },
  title = ref(''),
  userId = ref(),
  list = ref([]),
  // 初始化调用
  init = (info) => {
    title.value = '浏览'
    dialogButton.value = ['取消']
    isShow.value = true
    userId.value = info.userId
    list.value = [
      {
        label: '姓名',
        name: info.name
      },
      {
        label: '部门',
        name: info.orgNames
      },
      {
        label: '职位',
        name: info.employeeJob
      },
      {
        label: '电话',
        name: info.phone
      },
      {
        label: '拥有角色'
      }
    ]
    getQueryList(info.userId)
  },
  //定义loading
  loading = ref(false),
  //定义table
  tableData = ref()
//选择框事件
const selectData = ref([])
const handleSelectionChange = (val) => {
    console.log(val)
    selectData.value = val
  },
  //获取关联角色列表
  getQueryList = async (id) => {
    nextTick(() => {
      tableRef.value.clearSelection() //清空选中
    })
    try {
      loading.value = true
      let res = await queryUserRoleList(id)
      if (res.code === 200) {
        tableData.value = res.data ? res.data : []
        loading.value = false
      } else {
        loading.value = false
        ElMessage.error(res.message)
      }
    } catch (error) {
      loading.value = false
    }
  },
  //删除角色
  handleBtn = (row) => {
    // 解除关联
    ElMessageBox.confirm('确定删除关联角色吗？', '提示', {
      type: 'warning'
    }).then(() => {
      unlinkUser(row.roleId, userId.value)
        .then((res) => {
          if (res.code === 200) {
            getQueryList(userId.value)
            clickemit('getList')
            ElMessage({
              type: 'success',
              message: '删除成功!'
            })
          } else {
            ElMessage.error(res.message)
          }
        })
        .catch((error) => {
          if (error) {
            console.log(error)
          }
        })
    })
  },
  //重置
  resetFunction = () => {
    selectData.value = []
    formRef.value.resetFields()
  },
  tableRef = ref(),
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
.topHeader {
  width: 64px;
  height: 22px;
  font-size: 16px;
  font-family: 'siyuan, siyuan-Medium';
  font-weight: 500;
  text-align: left;
  color: #1a202c;
  line-height: 22px;
}
:deep(.main-bottom) {
  margin: 0;
  padding: 0;
}
</style>
