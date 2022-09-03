<template>
  <div>
    <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" :closeOnClickModal="false" :dialogButton="dialogButton" @onSubmit="save" :loading="loading" width="940px">
      <template #content>
        <el-form size="small" label-position="top" :rules="formRules" ref="formRef" :model="form">
          <el-row class="evenLf30">
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="变量名称" prop="name">
                <el-input v-model.trim="form.name" placeholder="请输入" :disabled="isReadonly"></el-input>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="变量备注" prop="remark">
                <el-input v-model.trim="form.remark" placeholder="请输入" :disabled="isReadonly"></el-input>
              </el-form-item>
            </el-col>
            <!-- <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="复杂变量" prop="isComplex">
                <el-select v-model="form.isComplex" :disabled="isReadonly" placeholder="请选择">
                  <el-option :label="item.name" :value="item.id" v-for="(item, index) in varList" :key="index"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="显示方式" prop="showType">
                <el-select v-model="form.showType" :disabled="isReadonly" placeholder="请选择">
                  <el-option :label="item.name" :value="item.id" v-for="(item, index) in showTypeList" :key="index"> </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :lg="12" :sm="12" :xs="24">
              <el-form-item label="显示序号" prop="serialNumber">
                <el-input-number v-model="form.serialNumber" :disabled="isReadonly" />
              </el-form-item>
            </el-col> -->
          </el-row>
        </el-form>
      </template>
    </el-dialog-module>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref, computed, nextTick } from 'vue'
export default {
  setup() {
    const formRef = ref()
    const state = reactive({
      isReadonly: false,
      isShow: false,
      title: '',
      dialogButton: [],
      loading: false,
      form: {
        name: '',
        remark: '',
        isComplex: 0,
        // source: '',
        showType: 0,
        serialNumber: 0
      },
      formRules: {
        name: {
          required: true,
          message: '请输入变量名称',
          trigger: 'blur'
        },
        remark: {
          required: true,
          message: '请输入变量备注',
          trigger: 'blur'
        },
        // source: {
        //   required: true,
        //   message: '请输入数据来源',
        //   trigger: 'blur'
        // },
        isComplex: {
          required: true,
          message: '请选择复杂变量',
          trigger: 'change'
        },
        showType: {
          required: true,
          message: '请选择显示方式',
          trigger: 'change'
        },
        serialNumber: {
          required: true,
          message: '请输入显示序号',
          trigger: 'blur'
        },
      },
      showTypeList: [
        {
          name: '无列表',
          id: 2
        },
        {
          name: '有列表',
          id: 1
        }
      ],
      varList: [
        {
          name: '是',
          id: 1
        },
        {
          name: '不是',
          id: 0
        },
      ],
      onClose: () => {
        state.isShow = false
      },
      save: () => {
        formRef.value.validate((valid) => {
          if (valid) {
            console.log('success')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      init: (type, row) => {
        state.title = state.getTitle(type) + '变量'
        nextTick(() => {
          formRef.value.resetFields()
        })
        state.isReadonly = type === 'view' ? true : false
        state.dialogButton = ['取消', '保存']
        if (type != 'add') {
          //编辑 详情
          state.form = row[0]
        } else {
          //新增
        }
        if (type === 'view') {
          state.dialogButton = ['取消']
        }
        state.isShow = true
      },
      getTitle: (type) => {
        return type === 'add' ? '新增' : type === 'edit' ? '修改' : type === 'view' ? '浏览' : ''
      }
    })
    return {
      ...toRefs(state),
      formRef,

    }
  }

}
</script>