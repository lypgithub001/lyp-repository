<template>
  <div>
    <el-form :model="ruleForm" ref="formRef" class="form-card" label-position="right" :rules="rules">
      <card-container :typeArea="true" :isTitle="false">
        <template #title></template>
        <template #content>
          <el-row v-if="route.query.type !== 'view'">
            <el-col :span="24">
              <el-form-item prop="name" label="合同名称">
                <el-input placeholder="请输入合同名称" v-model="ruleForm.name" class="w520" maxlength="30"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label="合同分类" prop="type">
                <el-select v-model="ruleForm.type" placeholder="请选择合同分类" class="w250">
                  <el-option :label="item.name" :value="item.id" v-for="(item, index) in typeList" :key="index"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item prop="description" label="合同说明" class="w520">
                <el-input placeholder="请输入合同说明" v-model="ruleForm.description" type="textarea" rows="4" maxlength="1000" show-word-limit></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <Descriptions :list="ruleFormList" v-else> </Descriptions>
        </template>
      </card-container>
    </el-form>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
import { getLabel } from '@/utils/common.js'
import { useRoute } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  name: '',
  components: {},
  props: {
    typeList: {
      type: Array,
      default: () => []
    },
    editType: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const formRef = ref()
    const route = useRoute()
    const state = reactive({
      rules: {
        name: { message: '请输入合同名称', required: true, trigger: 'blur' },
        type: { message: '请选择合同分类', required: true, trigger: 'change' }
      },
      ruleForm: {},
      ruleFormList: [],
      saveInfo() {
        if (route.query.type == 'edit') {
          if (!props.typeList.some((item) => item.id == state.ruleForm.type)) {
            return ElMessage.warning('合同分类已删除，请重新选择！')
          }
        }
        formRef.value.validate((valid) => {
          if (valid) {
            emit('setFormInfo', state.ruleForm)
          }
        })
      },
      setValue(form) {
        state.ruleForm = form
        state.ruleFormList = [
          {
            label: '合同名称',
            name: state.ruleForm.name,
            span: 3
          },
          {
            label: '合同分类',
            name: getLabel(state.ruleForm.type, props.typeList),
            span: 3
          },
          {
            label: '合同说明',
            name: state.ruleForm.description,
            span: 3
          }
        ]
      }
    })
    return {
      ...toRefs(state),
      formRef,
      route
    }
  }
}
</script>
