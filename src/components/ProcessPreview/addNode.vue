<template>
  <div class="add-node">
    <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" :closeOnClickModal="false" @onSubmit="save" :dialogButton="dialogButton" width="700px">
      <template #content>
        <el-form :model="ruleForm" ref="formRef" label-position="right" :rules="rules" labelWidth="110px">
          <el-row>
            <el-col :span="24">
              <el-form-item prop="type" label="审批类型">
                <el-radio-group v-model="ruleForm.type">
                  <el-radio label="target_select">发起人自选</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="审批节点">
                <el-radio-group v-model="ruleForm.nodeType">
                  <el-radio label="approver">审批人</el-radio>
                  <el-radio label="notifier">抄送人</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="审批方式" style="width: auto" v-if="ruleForm.nodeType === 'approver'">
                <el-radio-group v-model="ruleForm.actType">
                  <el-radio label="or">或签（一名审批人同意或拒绝即可）</el-radio>
                  <el-radio label="and">会签（须所有审批人同意）</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <!-- <el-col :span="24">
              <el-form-item label="审批人为空时" style="width: auto" v-if="ruleForm.type != 'target_select'">
                <el-radio-group v-model="ruleForm.noneActionerAction">
                  <el-radio label="auto">自动通过</el-radio>
                  <el-radio label="admin">自动转交给管理员</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-col> -->
          </el-row>
        </el-form>
      </template>
    </el-dialog-module>
  </div>
</template>
<script>
import { toRefs, reactive, nextTick, ref, computed } from 'vue'
import { ElMessage } from 'element-plus'

export default {
  components: {},
  setup(props, { emit }) {
    const formRef = ref()
    const orgStructureSelectionRef = ref()
    const applyDutyRecordRef = ref()
    const state = reactive({
      isShow: false,
      title: '新增节点',
      dialogButton: ['', '确定'],
      ruleForm: {
        actType: 'or',
        nodeType: 'approver',
        type: 'target_select'
      },
      rules: {
        actType: { message: '请选择', required: true, trigger: 'change' }
      },
      //初始化
      init: (row) => {
        state.ruleForm = {
          actType: 'or',
          nodeType: 'approver',
          type: 'target_select',
         //  noneActionerAction: 'auto',
          activityActioners: [],
          flag: true
        }
        state.isShow = true
      },
      onClose: () => {
        state.isShow = false
      },
      save: () => {
        state.ruleForm.nodeType == 'approver' && (state.ruleForm.activityName = '审批人')
        if (state.ruleForm.nodeType == 'notifier') {
          state.ruleForm.activityName = '抄送人'
          state.ruleForm.actType = null
        }
        emit('getNodeData', state.ruleForm)
        state.onClose()
      }
    })

    return {
      ...toRefs(state),
      formRef,
      orgStructureSelectionRef,
      applyDutyRecordRef
    }
  }
}
</script>
<style lang="scss" scoped></style>
