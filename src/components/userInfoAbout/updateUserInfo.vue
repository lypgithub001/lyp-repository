<template>
  <div class="updataUserInfoClass">
    <el-dialog-module
      :isShow="isShow"
      :title="title"
      :appendToBody="false"
      @onClose="onClose"
      :closeOnClickModal="false"
      :dialogButton="dialogButton"
      @onSubmit="save"
      :loading="loading"
      :showClose="false"
      :closeOnPressEscape="false"
      width="1000px"
    >
      <template #content>
        <div class="header_steps">
          <el-steps :active="active" align-center finish-status="success">
            <el-step title="完善个人信息" class="first"></el-step>
            <el-step title="完善企业信息" class="second"></el-step>
          </el-steps>
        </div>
        <PeosonalInfo v-if="active == 0" ref="peosonalInfo" @saveSuccess="personSaveSuccess"></PeosonalInfo>
        <CompanyInfo @setLoading="getLoading" v-if="active == 1" ref="companyInfo" @buttonList="getButtonList"></CompanyInfo>
      </template>
    </el-dialog-module>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
import PeosonalInfo from './PeosonalInfo.vue'
import CompanyInfo from './CompanyInfo.vue'
export default {
  name: '',
  components: { PeosonalInfo, CompanyInfo },
  setup(props, { emit }) {
    const peosonalInfo = ref()
    const companyInfo = ref()
    const state = reactive({
      isShow: false,
      title: '完善信息',
      dialogButton: ['', '下一步'],
      loading: false,
      active: 0,
      personSaveSuccess() {
        state.active = 1
        state.dialogButton = ['返回上一步', '完成注册']
      },
      getLoading(loading) {
        state.loading = loading
      },
      init(val) {
        state.active = val
        state.isShow = true
        if (val == 0) {
          state.dialogButton = ['', '下一步']
        } else {
          state.dialogButton = ['返回上一步', '完成注册']
        }
      },
      onClose() {
        if (state.active == 1) {
          state.active = 0
          state.dialogButton = ['', '下一步']
        }
      },
      getButtonList(val) {
        if (val == 1) {
          state.dialogButton = ['返回上一步', '完成注册']
        } else {
          state.dialogButton = ['返回上一步', '申请加入公司']
        }
      },
      save() {
        if (state.active == 0) {
          peosonalInfo.value.save()
        } else {
          companyInfo.value.submitInfo()
        }
        console.log('savesavesave')
      }
    })
    return {
      ...toRefs(state),
      peosonalInfo,
      companyInfo
    }
  }
}
</script>
<style lang="scss">
.updataUserInfoClass {
  .image {
    height: 100px;
  }
  .el-radio {
    margin-right: 20px;
  }
  .header_steps {
    padding: 24px 0;
    width: 772px;
    margin: 0 auto;
    margin-bottom: 40px;
    .el-step__main {
      margin-top: 10px;
    }
    .el-step__line {
      background: #e5e6eb;
      .el-step__line-inner {
        display: none;
      }
    }
    .el-step__title.is-success {
      color: #1d2129;
      font-weight: 600;
      font-size: 14px;
    }
    .el-step__head.is-success {
      .el-step__icon {
        border-color: transparent;
        font-size: 22px;
      }
      .el-step__icon:before {
        content: '';
        width: 38px;
        height: 38px;
        border-radius: 100%;
        top: -6;
        position: absolute;
        border: 2px solid #52c41a;
        box-sizing: border-box;
      }
      .el-step__line {
        background-color: #52c41a;
      }
    }
    .el-step.is-horizontal .el-step__line {
      height: 1px;
      top: 17px;
    }
    .el-step__icon {
      width: 30px;
      height: 30px;
    }
    .el-step__title.is-finish,
    .el-step__title.is-process {
      color: #1d2129;
      font-weight: 600;
      font-size: 14px;
    }
    .el-step__title.is-wait {
      color: #86909c;
      font-weight: 600;
      font-size: 14px;
    }
    .el-step.is-center .el-step__line {
      left: 66%;
      right: -34%;
    }
    .el-step__head.is-process {
      color: #52c41a;
      border-color: #52c41a;
    }
    .el-step__head.is-finish {
      color: #52c41a;
      border-color: #52c41a;
    }
    .is-finish .el-step__line {
      background-color: #52c41a;
    }

    .el-step__head.is-process,
    .el-step__head.is-finish {
      .el-step__icon.is-text {
        background-color: #52c41a;
        position: relative;
      }
      .el-step__icon.is-text .el-step__icon-inner {
        color: #fff;
      }
      .el-step__icon:before {
        content: '';
        width: 38px;
        height: 38px;
        border-radius: 100%;
        top: -6;
        position: absolute;
        border: 2px solid #52c41a;
        box-sizing: border-box;
      }
    }
    .el-step__head.is-wait {
      .el-step__icon.is-text {
        color: #fff;
        border-color: #e5e6eb;
        background-color: #e5e6eb;
        position: relative;
      }
      .el-step__icon:before {
        content: '';
        width: 38px;
        height: 38px;
        border-radius: 100%;
        top: -6px;
        position: absolute;
        border: 2px solid #e5e6eb;
        box-sizing: border-box;
      }
    }
  }
  .dialog-visible .el-dialog__header {
    line-height: 68px;
    border-bottom: 1px solid #e5e6eb;
  }
  .dialog-visible .el-dialog__header .el-dialog__title {
    font-size: 20px;
  }
  .el-form-item--small .el-form-item__label {
    color: #4e5969;
    font-weight: 400;
    font-size: 14px;
    line-height: 32px;
  }
  .dialog-visible .dialog-footer {
    padding: 20px 30px;
    .el-button--primary {
      height: 32px;
      width: 72px;
      min-width: auto;
    }
  }
  .scrollbar_content {
    max-height: 530px !important;
    min-height: 530px !important;
  }
  .dialog-visible .el-form-item {
    width: auto;
    margin-bottom: 20px !important;
  }
  .province-info {
    .el-form-item {
      margin-bottom: 0px !important;
    }
  }
  .noinfo-card {
    padding: 0 30px !important;
  }
  .titleHint {
    color: #86909c;
    font-weight: 400;
    font-size: 12px;
  }
  .small_image_up {
    width: 45px;
    height: 45px;
  }
  .el-form-item--small.el-form-item {
    margin-bottom: 40px;
  }
  .el-autocomplete-suggestion {
    height: 190px;
  }
  .small_image_up {
    width: 100px !important;
    height: 100px !important;
  }
  .el-upload--text {
    width: 100px !important;
    height: 100px !important;
    background: #f2f3f5;
    /* 线条/Line-2(一般) */

    border: 1px dashed #e5e6eb;
    //  border: 1px solid transparent;
    .add_box {
      width: 100px !important;
      height: 100px !important;
      border-color: transparent !important;
      .add {
        color: #c9cdd4;
        font-size: 20px;
      }
      .text {
        color: #86909c;
      }
    }
  }
  .single_img {
    width: 100px !important;
    height: 100px !important;
  }
}
</style>
