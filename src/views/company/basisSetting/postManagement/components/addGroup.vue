<template>
  <el-dialog-module
    :isShow="groupVisible"
    :title="title"
    @onSubmit="handleSubmitDept"
    @onClose="handleCloseDept"
    @exportFunc="handlechange"
    :loading="btnLoading"
    :width="'600px'"
    :dialogButton="dialogButton"
  >
    <template #content>
      <el-form :model="groupForm" :rules="deptRules" ref="groupFormRef" @submit.prevent label-width="110px" size="small" class="groupForm">
        <el-form-item label="岗位组名称:" prop="name">
          <el-input v-model="groupForm.name" placeholder="请输入岗位组名称" style="width: 320px" />
        </el-form-item>
      </el-form>
    </template>
  </el-dialog-module>
</template>

<script>
import { jobAddGroup, jobUpdateGroup, jobRemoveGroup } from '@/api/company/basisSetting/postManagement.js'
import { reactive, ref, toRefs } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  props: {
    groupVisible: {
      //是否显示弹窗
      type: Boolean,
      default: false
    },
    groupForm: {
      //表单
      type: Object
    },
    jobType: {
      //类型
      type: Number,
      default: null
    },
    dialogButton: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const groupFormRef = ref()
    const state = reactive({
      deptRules: {
        name: [
          {
            required: true,
            message: '请输入岗位组名称',
            trigger: 'blur'
          }
        ]
      },
      btnLoading: false, //加载动画
      //提交
      handleSubmitDept() {
        groupFormRef.value.validate((valid) => {
          if (valid) {
            let data = {
              name: props.groupForm.name
            }
            state.btnLoading = true
            console.log(21212)
            if (props.groupForm.id) {
              data['id'] = props.groupForm.id
              jobUpdateGroup(data)
                .then((res) => {
                  state.btnLoading = false
                  if (res.code === 200) {
                    groupFormRef.value.resetFields()
                    ElMessage.success('修改岗位分组成功')
                    emit('submit', false)
                  } else {
                    ElMessage.warning(res.message)
                  }
                })
                .catch(() => {
                  state.btnLoading = false
                })
            } else {
              jobAddGroup(data)
                .then((res) => {
                  state.btnLoading = false
                  if (res.code === 200) {
                    ElMessage.success('新增岗位分组成功')
                    groupFormRef.value.resetFields()
                    emit('submit', false)
                  } else {
                    ElMessage.warning(res.message)
                  }
                })
                .catch(() => {
                  state.btnLoading = false
                })
            }
          }
        })
      },
      //删除
      handleCloseDept() {
        emit('close', false)
      },
      //取消
      handlechange() {
        ElMessageBox.confirm('确定要删除该岗位组吗？', '提示', {
          type: 'warning'
        })
          .then(async () => {
            state.btnLoading = true
            jobRemoveGroup(props.groupForm.id)
              .then((res) => {
                state.btnLoading = false
                if (res.code === 200) {
                  ElMessage.success('删除岗位组成功')
                  groupFormRef.value.resetFields()
                  emit('submit', false, 1)
                } else {
                  ElMessage.warning(res.message)
                }
              })
              .catch(() => {
                state.btnLoading = false
              })
          })
          .catch(() => {
            console.log(222)
            emit('close', true)
          })
      }
    })
    return {
      groupFormRef,
      ...toRefs(state)
    }
  }
}
</script>

<style></style>
