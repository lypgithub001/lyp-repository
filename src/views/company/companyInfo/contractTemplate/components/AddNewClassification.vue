<template>
  <div class="supplier-item">
    <el-dialog-module
      :isShow="isShow"
      :title="title"
      @onClose="onClose"
      :isFooter="true"
      @onSubmit="saveInfo"
      :closeOnClickModal="false"
      :dialogButton="['取消', '保存']"
      :loading="loading"
      width="500px"
    >
      <template #content>
        <el-form :model="ruleForm" ref="formRef" :rules="rules" label-position="top">
          <el-row>
            <el-col :lg="24" :sm="24" :xs="24">
              <el-form-item prop="name" label="分类名称">
                <el-input placeholder="请输入分类名称" v-model="ruleForm.name" maxlength="20"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="24" :sm="24" :xs="24">
              <el-form-item prop="remarks" label="备注说明">
                <el-input placeholder="请输入备注说明" v-model="ruleForm.remarks" type="textarea" rows="4" maxlength="1000" show-word-limit></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </el-dialog-module>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
import { contractTypeAdd, contractTypeUpdate } from '@/api/company/basisSetting/contractTemplate.js'
export default {
  setup(props, { emit }) {
    const tableRef = ref()
    const formRef = ref()
    const state = reactive({
      isShow: false,
      title: '添加合同分类',
      loading: false,
      ruleForm: {},
      rules: {
        name: {
          required: true, trigger: 'blur', message: '请输入分类名称'
        }
      },
      type: '',
      //初始化
      init(type, row) {
        if (formRef.value) {
          formRef.value.resetFields()
        }
        state.ruleForm = {}
        state.isShow = true
        state.type = type
        if (row) {
          state.ruleForm = row
          state.title = '编辑合同分类'
        } else {
          state.title = '添加合同分类'
        }
      },
      onClose: () => {
        state.isShow = false
      },
      saveInfo: () => {
        formRef.value.validate((valid) => {
          if (valid) {
            let func = state.type == 'add' ? contractTypeAdd : contractTypeUpdate
            state.loading = true
            func(state.ruleForm).then(res => {
              state.loading = false
              if (res.code == 200) {
                state.isShow = false
                emit('saveSuccess', state.type)
              }
            }).catch(res => {
              state.loading = false
            })

          }
        })

      }
    })
    return {
      ...toRefs(state),
      tableRef,
      formRef
    }
  }
}
</script>
<style lang="scss">
.supplier-item {
  .pagenation-container {
    display: flex;
    justify-content: flex-end;
  }
  .dialog-visible .dialog-footer {
    border-top: 0;
  }
}
</style>
