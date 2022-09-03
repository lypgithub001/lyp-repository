<template>
  <div v-loading="loadingStatus" class="EditContractTemplate">
    <HeaderTabs :headerTitle="headerTitle">
      <template v-slot:rightContainer> </template>
    </HeaderTabs>
    <!-- <Step :stepList="stepList" :active="active" /> -->
    <!-- 基本信息 -->
    <BasicInfo v-show="active == 1" ref="basicInfoRef" @setFormInfo="getFormInfo" :typeList="classList" :addType="editType"></BasicInfo>
    <!-- 详细信息 -->
    <DetailInfo v-show="active == 2" ref="detailInfoRef" :iframeSrc="iframeSrc" :fileId="fileId" :detail="form" :editType="editType"></DetailInfo>
    <table-bottom :isSticky="false">
      <template v-slot:bottomLeft>
        <div class="button-list">
          <el-button type="primary" v-if="active == 1" @click="handleClick('next')">下一步</el-button>
          <el-upload
            ref="uploadRef"
            action
            :auto-upload="true"
            v-if="active == 2 && editType !== 'view'"
            :before-upload="beforeAvatarUpload"
            :show-file-list="false"
            :accept="'.doc,.docx'"
          >
            <el-button type="primary">上传文档</el-button>
            <template #tip> </template>
          </el-upload>
          <el-button type="primary" v-if="active == 2" @click="handleClick('previous')">上一步</el-button>
          <el-button type="primary" v-if="active == 2 && editType !== 'view'" @click="handleClick('save', 'DRAFT')">保存</el-button>
          <el-button type="primary" v-if="active == 2 && editType !== 'view'" @click="handleClick('save', 'FORMAL')">提交</el-button>
        </div>
      </template>
    </table-bottom>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref, nextTick, inject, onBeforeUnmount, onUnmounted, onActivated } from 'vue'
import Step from '@/components/step/index.vue'
import BasicInfo from './BasicInfo.vue'
import DetailInfo from './DetailInfo.vue'
import {
  contractTypeList,
  contractTemplateAdd,
  contractTemplateUpdata,
  contractTemplateQueryDetails,
  contractTemplateUploadFile,
  contractTemplateOpenFile,
  contractTemplateOpenOssFile
} from '@/api/company/basisSetting/contractTemplate.js'
import { useRoute } from 'vue-router'
import { ElMessage, ElMessageBox } from 'element-plus'

export default {
  name: 'company-editContractTemplate',
  components: {
    Step,
    DetailInfo,
    BasicInfo
  },

  setup() {
    onActivated(() => {
      console.log(state.iframeSrc)
      if (state.iframeSrc) {
        state.getFileUrl()
      }
    })
    onBeforeUnmount(() => {
      if (state.active == 2 && state.fileId && !state.isSave && state.editType == 'edit') {
        state.handleClick('save', state.templateStatus, 1)
      }
    })
    onUnmounted(() => {
      window.addEventListener('beforeunload', (e) => {
        if (state.active == 2 && state.fileId && !state.isSave && state.editType == 'edit') {
          state.handleClick('save', state.templateStatus, 1)
        }
      })
    })
    onMounted(() => {
      //编辑到第二步的时候关闭 会自动保存
      window.addEventListener('beforeunload', (e) => {
        if (state.active == 2 && state.fileId && !state.isSave && state.editType == 'edit') {
          state.handleClick('save', state.templateStatus, 1)
        }
      })
      nextTick(() => {
        state.getTypeList()
        state.editId = route.query.id
        state.editType = route.query.type
        if (state.editType != 'add') {
          state.getDetail()
        }
        state.headerTitle = state.editType == 'add' ? '新建合同模板' : state.editType == 'edit' ? '编辑合同模板' : '浏览合同模板'
      })
    })
    const closeNowTag = inject('closeNowTag')
    const route = useRoute()
    const basicInfoRef = ref()
    const detailInfoRef = ref()
    const state = reactive({
      editType: '',
      editId: '',
      iframeSrc: '',
      headerTitle: '新建合同模板',
      stepList: [{ title: '基本信息' }, { title: '详细信息' }],
      active: 1,
      form: {},
      loadingStatus: false,
      classList: [],
      fileId: '',
      isSave: false,
      templateStatus: 0,
      async beforeAvatarUpload(file) {
        console.log(file)
        let formData = new FormData()
        formData.append('file', file, file.name)
        formData.append('userName', JSON.parse(sessionStorage.getItem('vuex')).userInfo.name)
        state.loadingStatus = true
        try {
          const res = await contractTemplateUploadFile(formData)
          if (res.code === 200) {
            state.iframeSrc = res.data.openFileUrl
            state.fileId = res.data.fileId
            detailInfoRef.value.resetFiledList()
            ElMessage.success(`上传成功！`)
          } else {
            ElMessage.error(`上传失败！`)
          }
          state.loadingStatus = false
        } catch (error) {
          state.loadingStatus = false
          console.log(error)
        }
      },

      handleClick(val, status, type) {
        switch (val) {
          case 'next':
            basicInfoRef.value.saveInfo()
            if (state.editType == 'add' && !state.iframeSrc) {
              state.getDefaultSrc()
            }
            break
          case 'previous':
            state.active = 1
            break
          case 'submit':
            break
          case 'save':
            if (!state.fileId) {
              return ElMessage.warning('请先上传合同模板！')
            }
            state.form.templateUrl = detailInfoRef.value.ruleForm.templateUrl
            state.form.fields = detailInfoRef.value.ruleForm.fields
            state.form.fileId = state.fileId
            let func = state.editType == 'add' ? contractTemplateAdd : contractTemplateUpdata
            state.loadingStatus = true
            state.form.status = status
            func(state.form)
              .then((res) => {
                state.loadingStatus = false
                if (res.code == 200) {
                  state.isSave = true
                  ElMessage.success('保存成功！')
                  if (!type) {
                    closeNowTag()
                  }
                }
              })
              .catch(() => {
                state.loadingStatus = false
              })
            break
        }
      },
      getDetail() {
        state.loadingStatus = true
        contractTemplateQueryDetails(state.editId)
          .then((res) => {
            state.loadingStatus = false
            if (res.code == 200) {
              state.form = res.data
              state.fileId = res.data.fileId
              state.templateStatus = res.data.status
              state.getFileUrl()
              basicInfoRef.value.setValue(state.form)
            }
          })
          .catch(() => {
            state.loadingStatus = false
          })
      },
      getDefaultSrc() {
        state.loadingStatus = true
        let ossUrl = 'https://cnpc-avatar.oss-cn-beijing.aliyuncs.com/2022-06-29/6452b57a66a04ceaad1ab0fdbdc1f9f0.docx'
        let fileName = state.form.name + '.docx'
        contractTemplateOpenOssFile(ossUrl, fileName)
          .then((res) => {
            state.loadingStatus = false
            if (res.code == 200) {
              state.iframeSrc = res.data.openFileUrl
              state.fileId = res.data.fileId
            }
          })
          .catch(() => {
            state.loadingStatus = false
          })
      },
      getFileUrl() {
        state.loadingStatus = true
        let userRight = state.editType == 'view' ? 1 : 0
        contractTemplateOpenFile(state.fileId, userRight)
          .then((res) => {
            state.loadingStatus = false
            if (res.code == 200) {
              state.iframeSrc = res.data.openFileUrl
            }
          })
          .catch(() => {
            state.loadingStatus = false
          })
      },
      getFormInfo(form) {
        let keys = Object.keys(form)
        keys.forEach((item) => {
          state.form[item] = form[item]
        })
        state.active++
        detailInfoRef.value.init(state.form.fields || [])
      },
      getTypeList() {
        state.loadingStatus = true
        contractTypeList()
          .then((res) => {
            state.loadingStatus = false
            if (res.code == 200) {
              state.classList = res.data
            }
          })
          .catch(() => {
            state.loadingStatus = false
          })
      }
    })
    return {
      ...toRefs(state),
      basicInfoRef,
      detailInfoRef
    }
  }
}
</script>
<style lang="scss">
.EditContractTemplate {
  .button-list {
    display: flex;
  }
  .el-upload--text {
    display: inline-block;
    background-color: #fff;
    border-color: transparent;
    border-radius: 3px;
    box-sizing: border-box;
    width: auto;
    height: auto;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    margin-right: 9px;
  }
}
</style>
