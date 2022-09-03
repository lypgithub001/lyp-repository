<!-- add -->
<template>
  <el-dialog v-model="dialogVisible" @close="close">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm">
      <el-form-item label="申请加入: ">{{ baseData.name }}</el-form-item>
      <el-form-item label="姓名: ">{{ store.getters.userInfoObj()?.name || '' }}</el-form-item>
      <el-form-item label="所在部门: " prop="applyDepartment">
        <el-input v-model="ruleForm.applyDepartment" placeholder="请输入所在部门"></el-input>
      </el-form-item>
      <el-form-item label="职位名称: " prop="employeeJob">
        <el-input v-model="ruleForm.employeeJob" placeholder="请输入职位名称"></el-input>
      </el-form-item>
      <el-form-item label="申请加入说明: " prop="applyDescribe">
        <el-input v-model="ruleForm.applyDescribe" maxlength="20" placeholder="最多20 字说明" type="textarea"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="postData" :loading="loading">申请加入</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { toRefs, reactive, ref, nextTick } from 'vue'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { teamManagerApply, getCompanyListData } from '@/api/company/teamManager'

export default {
  name: 'add',
  components: {},
  emits: ['load'],
  setup(props, { emit }) {
    let state = reactive({
      loading: false,
      dialogVisible: false,
      baseData: null,
      ruleForm: {},
      ruleFormRef: ref(),
      rules: {
        applyDepartment: {
          required: true,
          message: '请输入所在部门',
          trigger: 'blur'
        },
        employeeJob: {
          required: true,
          message: '请输入职位名称',
          trigger: 'blur'
        },
        applyDescribe: {
          min: 0,
          max: 20,
          message: '长度应该在0到20之间',
          trigger: 'blur'
        }
      },
      store: useStore()
    })

    const showConfirm = (record) => {
      state.dialogVisible = true
      // console.log(record)
      // console.log(state.store.getters.userInfoObj())
      state.baseData = record
    }

    const close = (isShow) => {
      state.dialogVisible = false
      nextTick(() => {
        state.ruleFormRef.resetFields()
      })
    }
    const postData = () => {
      state.loading = true
      // console.log(state.ruleForm)
      state.ruleForm.companyId = state.baseData.id
      state.ruleForm.phone = state.store.getters.userInfoObj()?.phone
      state.ruleForm.name = state.store.getters.userInfoObj()?.name
      // console.log(state.ruleForm)
      state.ruleFormRef.validate(async (valid, object) => {
        if (valid) {
          try {
            const res = await teamManagerApply(state.ruleForm)
            if (res.code == '200') {
              ElMessage({
                message: '申请公司成功',
                type: 'success'
              })
              close()
              state.loading = false
              if (res.data == 1) {
                // 同意申请加入
                state.store.dispatch('getTeamInfo').then(() => {
                  //获取树列表
                  state.store.dispatch('getTreeList').then((resInfo) => {
                    ElMessage.success('加入成功')
                    if (JSON.parse(JSON.stringify(resInfo.buttonSet)).some((ele) => ele === 'XS' || ele === 'CG')) {
                      state.store
                        .dispatch('getUserHabitsList', `business,${JSON.parse(sessionStorage.getItem('vuex')).teamInfo.id}`)
                        .then((res) => {
                          let path = ''
                          if (res[0]?.content?.companyType == 'market' && JSON.parse(JSON.stringify(resInfo.buttonSet)).some((ele) => ele === 'XS')) {
                            path = 'market/dashboard'
                          } else if (res[0]?.content?.companyType == 'purchase' && JSON.parse(JSON.stringify(resInfo.buttonSet)).some((ele) => ele === 'CG')) {
                            path = 'purchase/dashboard'
                          } else {
                            if (JSON.parse(JSON.stringify(resInfo.buttonSet)).some((ele) => ele === 'CG')) {
                              path = 'purchase/dashboard'
                            } else {
                              path = 'market/dashboard'
                            }
                          }
                          window.location.href = import.meta.env.VITE_VUE_APP_URL + path
                        })
                        .catch(() => {
                          let path = ''
                          if (JSON.parse(JSON.stringify(resInfo.buttonSet)).some((ele) => ele === 'CG')) {
                            path = 'purchase/dashboard'
                          } else {
                            path = 'market/dashboard'
                          }
                          window.location.href = import.meta.env.VITE_VUE_APP_URL + path
                        })
                    } else {
                      window.location.href = import.meta.env.VITE_VUE_APP_URL + 'company/companyCertification'
                    }
                  })
                })
              } else {
                emit('load', { joinStatus: res.data, teamId: state.baseData.teamId })
              }
            } else {
              ElMessage.warning(res.message)
            }
          } catch (error) {
            state.loading = false
          }
        } else {
          state.loading = false
        }
      })

      // close()
    }

    return {
      ...toRefs(state),
      showConfirm,
      close,
      postData
    }
  }
}
</script>

<style scoped lang="scss">
.add {
}
</style>
