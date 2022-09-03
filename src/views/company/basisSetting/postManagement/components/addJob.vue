<template>
  <el-dialog-module
    :title="title"
    :isShow="jobVisible"
    @onSubmit="handleSubmitDept"
    :modalAppendToBody="true"
    :appendToBody="true"
    @onClose="handleCloseDept"
    @exportFunc="handlechange"
    :width="'600px'"
    :dialogButton="dialogButton"
  >
    <template #content>
      <el-form :model="jobForm" :rules="deptRules" ref="jobFormRef" label-width="110px" size="small" class="jobForm">
        <el-form-item label="岗位名称:" prop="name">
          <el-input v-model="jobForm.name" placeholder="请输入岗位名称" style="width: 320px" />
        </el-form-item>
        <el-form-item label="岗位分组:" prop="groupId">
          <el-select v-model="jobForm.groupId" placeholder="请选择" style="width: 320px">
            <el-option v-for="item in teamTree" :key="item.id" :label="item.name" :value="item.id"> </el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </template>
  </el-dialog-module>
</template>

<script>
import { jobAddJob, jobUpdateJob, jobRemove } from '@/api/company/basisSetting/postManagement.js'
import { reactive, ref, toRefs } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  props: {
    jobVisible: {
      type: Boolean,
      default: false
    },
    jobForm: {
      type: Object,
      default: () => {}
    },
    teamTree: {
      type: Array,
      default: () => []
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
    const jobFormRef = ref()
    const state = reactive({
      deptRules: {
        name: [
          {
            required: true,
            message: '请输入岗位名称',
            trigger: 'blur'
          }
        ],
        groupId: [
          {
            required: true,
            message: '请选择岗位组',
            trigger: 'change'
          }
        ]
      },
      //提交
      handleSubmitDept() {
        jobFormRef.value.validate((valid) => {
          if (valid) {
            let data = {
              name: props.jobForm.name,
              groupId: props.jobForm.groupId
            }
            if (props.jobForm.id) {
              data['id'] = props.jobForm.id
              jobUpdateJob(data).then((res) => {
                if (res.code === 200) {
                  jobFormRef.value.resetFields()
                  ElMessage.success('修改岗位成功')
                  emit('submit', false)
                } else {
                  ElMessage.error(res.message)
                }
              })
            } else {
              jobAddJob(data).then((res) => {
                if (res.code === 200) {
                  ElMessage.success('新增岗位成功')
                  jobFormRef.value.resetFields()
                  emit('submit', false)
                } else {
                  ElMessage.error(res.message)
                }
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
        ElMessageBox.confirm('确定要删除该岗位吗？', '提示', {
          type: 'warning'
        }).then(async () => {
          jobRemove(props.jobForm.id).then((res) => {
            if (res.code === 200) {
              ElMessage.success('删除岗位成功')
              jobFormRef.value.resetFields()
              emit('submit', false, 1)
            } else {
              ElMessage.error(res.message)
            }
          })
        })
      }
    })
    return {
      jobFormRef,
      ...toRefs(state)
    }
  }
}
</script>
