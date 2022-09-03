<template>
  <div class="contract-template-detailInfo" v-loading="loadingStatus">
    <div class="contract-template-left">
      <iframe ref="frameRef" frameborder="0" width="100%" height="100%" :src="iframeSrc"></iframe>
    </div>
    <div class="contract-template-right">
      <div class="right-top">
        <div class="right-top-header">
          <BtnGroup :btnGroup="btnGroupList" @switchClick="switchClick"></BtnGroup>
          <div style="padding: 24px 0" class="search-container">
            <el-input v-model="searchValue" @input="getSearchValue"></el-input>
            <div @click="addNew" v-if="active == 1 && route.query.type !== 'view'"><i class="el-icon-circle-plus-outline icon-style"></i></div>
          </div>
        </div>
        <el-scrollbar :style="{ height: 'calc(100% - 141px)' }" wrap-style="overflow-x:hidden">
          <div class="filed-list" :style="{ cursor: active == 1 ? 'pointer' : '' }">
            <div class="filed-item" v-for="(item, index) in filedList" :key="index" @click="getItem(item)">
              <span>{{ item.name }}</span>
              <div>
                <el-button type="primary" size="mini" @click="insertValue(item)" v-if="iframeSrc && route.query.type !== 'view'">插入</el-button>
                <el-button type="primary" size="mini" @click="deleteValue(item, index)" v-if="iframeSrc && item.isShow && route.query.type !== 'view'"
                  >删除</el-button
                >
              </div>
            </div>
          </div>
        </el-scrollbar>
      </div>
      <div class="right-bottom">
        <div class="right-bottom-header">
          属性展示 <el-button type="primary" size="mini" v-if="active == 1 && route.query.type !== 'view'" @click="saveInfo">保存</el-button>
        </div>
        <el-scrollbar :style="{ height: 'calc(100% - 70px)' }" wrap-style="overflow-x:hidden">
          <div class="form-container">
            <el-form size="small" label-position="top" :rules="formRules" ref="formRef" :model="form">
              <el-form-item prop="name" label="字段名称">
                <el-input v-model="form.name" style="width: 100%"> </el-input>
              </el-form-item>
              <el-form-item prop="paramType" label="字段类型">
                <el-select v-model="form.paramType" placeholder="请选择" clearable style="width: 100%">
                  <el-option :label="item.name" :value="item.id" v-for="(item, index) in typeList" :key="index"> </el-option>
                </el-select>
              </el-form-item>
              <el-form-item prop="required" label="是否必填">
                <el-radio-group v-model="form.required">
                  <el-radio :label="item.id" v-for="(item, index) in requiredList" :key="index">{{ item.name }}</el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item prop="minimum" label="最小值" v-if="form.paramType == 'NUMBER'">
                <el-input-number v-model="form.minimum" :min="0" style="width: 100%"> </el-input-number>
              </el-form-item>
              <el-form-item prop="maximum" label="最大值" v-if="form.paramType == 'NUMBER'">
                <el-input-number v-model="form.maximum" :min="0" style="width: 100%" :max="1000000000"> </el-input-number>
              </el-form-item>
            </el-form>
          </div>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref, watch, nextTick } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import BtnGroup from '@/components/step/btnGroup.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { contractFieldQueryList, contractFieldAdd, contractFieldUpdate, contractFieldQueryDetails } from '@/api/company/basisSetting/contractTemplate.js'
export default {
  name: '',
  components: {
    BtnGroup
  },
  props: {
    iframeSrc: {
      type: String,
      default: ''
    },
    fileId: {
      default: ''
    },
    detail: {
      type: Object,
      default: {}
    }
  },
  setup(props) {
    let checkNumMinimum = (rule, value, callback) => {
      if ((state.form.maximum || state.form.maximum === 0) && (state.form.minimum || state.form.minimum === 0)) {
        if (state.form.minimum > state.form.maximum) {
          callback('最小值不能大于最大值！')
        } else {
          callback()
        }
      } else {
        callback()
      }
    }
    onMounted(() => {
      window.addEventListener(
        'message',
        (e) => {
          //本地开发iframe跨域 需要到开发测试
          let application = frameRef.value.contentWindow.YozoOffice.Application
          application.ActiveWindow.View.ShowBookmarks = true
          application.ActiveWindow.View.Zoom.Percentage = 100
        },
        false
      )
    })
    const route = useRoute()
    const store = useStore()
    const formRef = ref()
    const frameRef = ref()
    const dicData = reactive({
      typeList: store.getters.filteredSystemDictList('ContractFieldParamTypeEnum'),
      requiredList: [
        { name: '非必填', id: 0 },
        { name: '必填', id: 1 }
      ]
    })
    const state = reactive({
      searchValue: '',
      ruleForm: {
        fields: []
      },
      btnGroupList: [
        {
          label: '系统字段',
          id: 0
        },
        {
          label: '自定义字段',
          id: 1
        }
      ],
      filedList: [],
      initFiledList: [],
      form: {
        required: 0,
        paramType: 'NUMBER'
      },
      active: 0,
      formRules: {
        name: { required: true, message: '请输入字段名称' },
        minimum: { validator: checkNumMinimum, trigger: ['blur', 'change'] },
        maximum: { validator: checkNumMinimum, trigger: ['blur', 'change'] }
      },
      editType: 'add',
      loadingStatus: false,
      getSearchValue() {
        if (!state.searchValue) {
          state.filedList = state.initFiledList
          return
        }
        state.filedList = state.initFiledList.filter((item) => {
          return item.name.indexOf(state.searchValue) != -1
        })
      },
      getItem(item) {
        if (state.active == 1) {
          state.form = JSON.parse(JSON.stringify(item))
          state.editType = 'edit'
        }
      },
      resetFiledList() {
        state.ruleForm.fields = []
        state.filedList = state.filedList.map((el) => {
          el.isShow = false
          return el
        })
      },
      init(fields) {
        state.ruleForm.fields = fields
        console.log('init')
        state.getList()
        state.editType = 'add'
        formRef.value.resetFields()
      },
      insertValue(item, index) {
        try {
          let application = frameRef.value.contentWindow.YozoOffice.Application
          application.ActiveDocument.Bookmarks.Add(item.code)
          if (!state.ruleForm.fields.some((element) => element.code == item.code)) {
            state.ruleForm.fields.push(item)
          }
          state.filedList = state.filedList.map((el) => {
            if (el.code == item.code) {
              el.isShow = true
            }
            return el
          })
          ElMessage.success('插入成功')
          application.Selection.GoTo(-1, null, null, item.code)
          console.log(state.filedList)
        } catch (e) {
          ElMessage.warning('插入失败')
        }
      },
      deleteValue(item) {
        try {
          let activeDocument = frameRef.value.contentWindow.YozoOffice.Application.ActiveDocument
          let num = activeDocument.Bookmarks.Count
          for (let index = 1; index < num + 1; index++) {
            const name = activeDocument.Bookmarks.Item(index).Name
            if (name == item.code) {
              activeDocument.Bookmarks.Item(index).Delete()
              ElMessage.success('删除成功')
              state.filedList = state.filedList.map((el) => {
                if (el.code == item.code) {
                  el.isShow = false
                }
                return el
              })
              state.ruleForm.fields = state.ruleForm.fields.filter((el) => {
                return el.code != item.code
              })
            }
          }
        } catch (e) {
          ElMessage.warning('删除失败')
        }
      },
      saveInfo() {
        formRef.value.validate((valid) => {
          if (valid) {
            console.log(state.editType)
            let func = state.editType == 'add' ? contractFieldAdd : contractFieldUpdate
            if (state.editType == 'add') {
              state.form.fileId = props.fileId
            }
            state.loadingStatus = true
            func(state.form)
              .then((res) => {
                state.loadingStatus = false
                if (res.code == 200) {
                  state.getList()
                  state.editType = 'add'
                  formRef.value.resetFields()
                  state.form = {
                    required: 0,
                    paramType: 'NUMBER'
                  }
                  ElMessage.success('保存成功')
                }
              })
              .catch(() => {
                state.loadingStatus = false
              })
          }
        })
      },
      getList() {
        state.loadingStatus = true
        contractFieldQueryList(state.active == 0 ? 'SYSTEM' : 'CONSUMER')
          .then((res) => {
            state.loadingStatus = false
            if (res.code == 200) {
              state.filedList = res.data
              if (state.ruleForm?.fields?.length > 0) {
                state.filedList.forEach((item) => {
                  state.ruleForm.fields.forEach((el) => {
                    if (item.code == el.code) {
                      item.isShow = true
                    }
                  })
                })
              }
              state.initFiledList = res.data
            }
          })
          .catch(() => {
            state.loadingStatus = false
          })
      },
      switchClick(row) {
        console.log(row)
        state.active = row.id
        state.getList()
        state.editType = 'add'
        formRef.value.resetFields()
      },
      addNew() {
        formRef.value.resetFields()
        state.editType = 'add'
      }
    })
    return {
      ...toRefs(state),
      ...toRefs(dicData),
      frameRef,
      formRef,
      route
    }
  }
}
</script>
<style lang="scss">
.contract-template-detailInfo {
  display: flex;
  background: #edf2f7;
  .search-container {
    display: flex;
    align-items: center;
    .icon-style {
      font-size: 20px;
      color: #1664ff;
      margin-left: 14px;
    }
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
  .contract-template-left {
    flex: 1;
    // padding: 0 16px;
    .botton-container {
      padding: 20px 0;
    }
  }
  .contract-template-right {
    height: calc(100vh - 292px);
    width: 433px;
    margin-left: 16px;
    margin-right: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px 0;
    .right-top-header {
      padding: 16px 16px 0 16px;
      border-bottom: 1px solid #edf2f7;
      box-sizing: border-box;
    }
    .filed-list {
      padding: 0 24px;
      .filed-item {
        font-size: 14px;
        padding: 16px 0;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #edf2f7;
        align-items: center;
      }
    }
    .right-bottom-header {
      padding: 24px;
      border-bottom: 1px solid #edf2f7;
      font-size: 14px;
      font-weight: bold;
      display: flex;
      justify-content: space-between;
    }
    .form-container {
      padding: 16px 24px;
      width: 100%;
      box-sizing: border-box;
    }
  }
  .contract-template-right > div {
    height: 49%;
    background: #ffffff;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0px 3px 8px -1px rgba(50, 50, 71, 0.05), 0px 0px 1px 0px rgba(12, 26, 75, 0.24);
    overflow: hidden;
  }
}
</style>
