<template>
  <div>
    <el-dialog-module
      :isShow="isShow"
      :title="title"
      @onClose="onClose"
      :isFooter="true"
      :closeOnClickModal="false"
      @onSubmit="save"
      :dialogButton="dialogButton"
      width="500px"
      :loading="loading"
    >
      <template #content>
        <el-form :model="ruleForm" ref="formRef" label-position="right" :rules="rules" labelWidth="130px" class="addAuthor">
          <el-row>
            <el-alert style="margin-bottom: 10px" title="为保证正常使用，请确保授权人经过个人实名认证。" type="info" show-icon :closable="false" />
            <el-col :span="24">
              <el-form-item prop="name" label="授权印章"> {{ ruleForm.name }} </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item prop="dutyByName" label="授权人员">
                <el-input placeholder="请选择授权人员" v-model="ruleForm.dutyByName" readonly>
                  <template #append>
                    <span @click="chooseOrgStructure">选择</span>
                  </template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item prop="termValidity" label="有效期">
                <el-date-picker
                  v-model="ruleForm.termValidity"
                  type="datetimerange"
                  range-separator="-"
                  start-placeholder="开始时间"
                  end-placeholder="截止时间"
                  format="YYYY-MM-DD HH:mm:ss"
                  style="width: 100%"
                  value-format="YYYY-MM-DD HH:mm:ss"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item prop="remarks" label="备注说明">
                <el-input placeholder="请填写备注说明" v-model="ruleForm.remarks" type="textarea" show-word-limit maxlength="1000" :rows="4"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
    </el-dialog-module>
    <!-- 组织架构 -->
    <OrgStructureSelection
      ref="orgStructureSelectionRef"
      :selectDataList="selectDataList"
      :select="select"
      @subumit="submitOrgSelect"
      :appendToBody="true"
      :selectType="selectType"
      :transferTitle="transferTitle"
      :isAuthor="true"
    />
  </div>
</template>
<script>
import { toRefs, reactive, nextTick, ref, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import OrgStructureSelection from '@/components/organizationalStructure/index.vue'
import { sealAuthRecordAdd, sealAuthRecordUpdate } from '@/api/company/basisSetting/sealManagement.js'
import { eCompanyAuthApply } from '@/api/company/basisSetting/sealManagement.js'
import { useRoute } from 'vue-router'
function getTitle(type) {
  return type === 'add' ? '新增' : type === 'edit' ? '编辑' : type === 'view' ? '详情' : ''
}
export default {
  components: {
    OrgStructureSelection
  },
  setup(props, { emit }) {
    const formRef = ref()
    const orgStructureSelectionRef = ref()
    const route = useRoute()
    const state = reactive({
      isShow: false,
      title: '授权',
      loading: false,
      dialogButton: ['取消', '确定'],
      ruleForm: {},
      rules: {
        dutyByName: { message: '请选择授权人员', required: true, trigger: ['change', 'blur'] },
        deptId: { message: '请选择数据归属部门', required: true, trigger: 'change' },
        termValidity: { message: '请选择有效期', required: true, trigger: 'change' }
      },
      selectDataList: [],
      selectType: '0', // 0人员  1部门
      transferTitle: computed(() => {
        return state.selectType == 0 ? ['选择成员', '已选成员'] : state.selectType == 1 ? ['选择部门', '已选部门'] : ['源列表', '目标列表']
      }),
      deptList: [],
      type: '',
      select: true,
      rowInfo: {},
      //初始化
      init: (type, row) => {
        state.rowInfo = row
        state.ruleForm = {}
        state.title = getTitle(type) + '授权'
        state.type = type
        state.selectDataList = []
        //   if (route.query.sealId) {
        //     state.select = true
        //   } else {
        //     state.select = false
        //   }
        if (type == 'add') {
          state.ruleForm.sealId = row.sealId
          state.ruleForm.name = row.name
          state.select = false
        } else {
          state.select = true
          state.ruleForm = row
          state.ruleForm.name = route.query.name
          if (state.ruleForm.beginTime && state.ruleForm.endTime) {
            state.ruleForm.termValidity = [state.ruleForm.beginTime, state.ruleForm.endTime]
          }
          if (row.userId && row.userName) {
            state.ruleForm.dutyByName = state.ruleForm.userName
            state.ruleForm.userList = [
              {
                userId: state.ruleForm.userId,
                userName: state.ruleForm.userName
              }
            ]
          }
        }
        nextTick(() => {
          formRef.value?.clearValidate()
        })
        state.isShow = true
      },
      onClose: () => {
        state.isShow = false
      },
      save: () => {
        formRef.value.validate(async (valid) => {
          if (valid) {
            state.loading = true
            if (state.ruleForm.termValidity && state.ruleForm.termValidity.length) {
              state.ruleForm.beginTime = state.ruleForm.termValidity[0]
              state.ruleForm.endTime = state.ruleForm.termValidity[1]
            }
            let query = '',
              message = ''
            if (state.ruleForm.id) {
              query = sealAuthRecordUpdate
              message = '修改成功'
            } else {
              query = sealAuthRecordAdd
              message = '新增成功'
            }
            console.log(state.ruleForm, 'state.ruleForm')
            query(state.ruleForm).then(res => {
              state.loading = false
              if (res.code == 200) {
                // window.open(res.data, '_blank')
                location.href = res.data
                ElMessage.success(message)
                state.onClose()
                emit('getList')
              }
            }).catch(error => {
              state.loading = false
              if (error.code == 10102) {
                ElMessageBox.confirm("<p>管理公司印章以及用印负责人。进行用印管理前请先完成相关</p><p>人员个人认证以及公司认证。</p>", '提示', {
                  dangerouslyUseHTMLString: true,
                  confirmButtonText: '前往认证',
                }).then(async () => {
                  state.loading = true
                  eCompanyAuthApply({ companyId: state.rowInfo.companyId }).then(res => {
                    state.loading = false
                    if (res.code == 200) {
                      // window.open(res.data, '_blank')
                      location.href = res.data
                      state.onClose()
                    }
                  }).catch(res => {
                    state.loading = false
                  })
                }).catch(() => {
                })
              }
            })
          } else {
            return false
          }
        })
      },
      getList: () => { },
      submitOrgSelect(list) {
        if (list && list.length) {
          state.ruleForm.userList = list.map((x) => {
            return {
              userId: x.id,
              userName: x.name
            }
          })
          state.ruleForm.dutyByName = state.ruleForm.userList.map((x) => x.userName).join(',')
        }
      },
      chooseOrgStructure() {
        if (state.ruleForm.dutyByName) {
          state.selectDataList = state.ruleForm.userList.map((x) => {
            return {
              id: x.userId,
              name: x.userName
            }
          })
        }
        orgStructureSelectionRef.value.init()
      },
      expireTimeOption: computed(() => {
        return (time) => {
          return time.getTime() < Date.now() - 24 * 60 * 60 * 1000
        }
      })
    })

    return {
      ...toRefs(state),
      formRef,
      orgStructureSelectionRef
    }
  }
}
</script>
<style lang="scss">
.addAuthor {
  .el-alert--info.is-light {
    background-color: #e8f3ff;
    color: #1d2129;
    .el-alert__icon {
      color: #1664ff;
    }
  }
}
</style>
