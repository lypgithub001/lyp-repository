<template>
  <div class="proManageAdd">
    <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" @onSubmit="save" width="600px">
      <template #content v-loading="loading">
        <el-form size="small" label-position="top" :rules="formRules" ref="formRef" :model="form">
          <el-row class="evenLf30">
            <el-col :span="12">
              <el-form-item label="审批意见：" prop="approveOpinion">
                <el-input v-model="form.approveOpinion" placeholder="请输入" type="textarea"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </el-dialog-module>
  </div>
</template>

<script>
import { ref, reactive, toRefs, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useStore } from 'vuex'
import { batchCheckApproval } from '@/api/company/approvalConfig.js'
export default {
  name: 'approval',
  setup(prop, { emit }) {
    const isShow = ref(false), //弹窗
      title = ref('审核'), //标题
      formRef = ref(),
      formRules = {
        approveOpinion: { message: '请输入拒接审批意见', required: true, trigger: 'blur' }
      }

    const state = reactive({
      form: {},
      istype: '',
      loading: false,
      id: '',
      init: (type, id) => {
        //初始化
        isShow.value = true
        state.istype = type
        state.id = id
      },
      // 关闭弹窗
      onClose: () => {
        isShow.value = false
        formRef.value.resetFields()
        state.form = {}
      },
      save: () => {
        // 保存
        if (state.istype === 'agree') {
          state.submitFunc()
        } else {
          state.closeFunc()
        }
      },
      submitFunc() {
        state.loading = true
        batchCheckApproval([
          {
            approveStatus: 1,
            approveOpinion: state.form.approveOpinion,
            relationId: state.id
          }
        ])
          .then((res) => {
            if (res.code === 200) {
              ElMessage.success('审批成功')
              isShow.value = false
              emit('getList')
            }
          })
          .catch((err) => {})
      },
      closeFunc() {
        state.loading = true
        formRef.value.validate((valid) => {
          if (valid) {
            batchCheckApproval([
              {
                approveStatus: 2,
                approveOpinion: state.form.approveOpinion,
                relationId: state.id
              }
            ])
              .then((res) => {
                state.loading = false
                if (res.code === 200) {
                  ElMessage.success('审批成功')
                  isShow.value = false
                  emit('getList')
                }
              })
              .catch((err) => {
                state.loading = false
                reject(false)
              })
          }
        })
      }
    })
    return {
      ...toRefs(state),
      isShow,
      title,
      formRef,
      formRules
    }
  }
}
</script>

<style></style>
