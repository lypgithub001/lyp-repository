<template>
  <div class="basic-settings-form">
    <el-form :model="ruleForm" :rules="rules" ref="ruleFormRef" size="small" class="demo-ruleForm">
      <div class="form-info--13iod">
        <!-- <div class="icon--1GBub">
          <div class="ding-app-icon">
            <img src="https://gw.alicdn.com/tfs/TB1Yfa0CG6qK1RjSZFmXXX0PFXa-112-112.png" class="avatar" alt="" />
            <div class="opacity-mask"></div>
            <img src="https://gw.alicdn.com/tfs/TB1cHKfhUz1gK0jSZLeXXb9kVXa-200-200.png" class="mask" alt="" />
          </div>
        </div> -->
        <el-form-item label="表单名称" prop="businessTypeLabel" class="name--2xJfO" style="max-width: none">
          <el-input v-model="titleData.businessTypeLabel" placeholder="请输入" :disabled="true"></el-input>
        </el-form-item>
      </div>
      <el-form-item label="表单名称" prop="businessTypeLabel" class="name--2xJfO" style="max-width: none">
          <el-input v-model="titleData.businessTypeLabel" placeholder="请输入" :disabled="true"></el-input>
        </el-form-item>
      <el-form-item label="所在分组" prop="businessGroupLabel" style="max-width: none">
        <el-input v-model="titleData.businessGroupLabel" placeholder="请选择" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="审批设置" prop="status" style="max-width: none">
        <el-radio-group v-model="titleData.status">
          <el-radio :label="0">无需审批，直接发布</el-radio>
          <el-radio :label="1">启用审批</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="表单说明" prop="description" style="max-width: none">
        <el-input
          v-model="titleData.description"
          placeholder="请输入"
          type="textarea"
          maxlength="500"
          :autosize="{ minRows: 4, maxRows: 8 }"
          show-word-limit
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { reactive, toRefs, watch, ref } from 'vue'

export default {
  props: {
    titleData: {
      type: Object,
      default: {}
    }
  },
  setup(prop) {
    const ruleFormRef = ref()
    const state = reactive({
      ruleForm: {
        businessType: '',
        businessGroup: '',
        description: '',
        icon: '',
        status: 1
      },
      titleData: {},
      rules: {
        //   name: [{ required: true, message: '表单名称不能为空', trigger: 'blur' }],
        //   businessGroup: [{ required: true, message: '所在分组不能为空', trigger: 'blur' }]
      },
      businessGroupList: []
    })

    watch(prop.titleData, (val, old) => {
      state.titleData = {
        businessTypeLabel: val.businessTypeLabel,
        businessGroupLabel: val.businessGroupLabel,
        description: val.description,
        icon: val.icon,
        id: val.id,
        status: val.status
      }
    })

    return {
      ...toRefs(state),
      ruleFormRef
    }
  }
}
</script>
<style lang="scss" scoped>
.basic-settings-form {
  .el-form-item--small.el-form-item {
    margin-bottom: 24px;
  }
  .icon--1GBub {
    position: relative;
    margin-right: 16px;
    //  margin-top: 10px;
  }
  .form-info--13iod {
    display: flex;
    //  justify-content: center;
    align-items: flex-start;
    overflow: hidden;
    box-sizing: border-box;
    .ding-app-icon {
      min-width: 48px;
      min-height: 48px;
      width: 48px;
      height: 48px;
      cursor: pointer;
      position: relative;
      background-color: rgba(17, 31, 44, 0.12);

      .avatar {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
      }
      .opacity-mask {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background-color: #fff;
        opacity: 0;
      }
      .mask {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        display: block;
      }
      span {
        display: inline-block;
        max-width: 240px;
        font-family: 'siyuan, siyuan-Medium';
        font-size: 16px;
        color: #111f2c;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .name--2xJfO {
      width: 100%;
      flex: 1;
    }
    .edit-icon--3CHK5 {
      position: absolute;
      bottom: 0;
      right: 0;
      background-color: #f6f6f6;
      border: 2px solid #fff;
      border-radius: 16px;
      width: 16px;
      height: 16px;
      line-height: 16px;
      color: rgba(17, 31, 44, 0.4);
      font-size: 12px;
      text-align: center;
      cursor: pointer;
    }
    .anticon {
      display: inline-block;
      color: inherit;
      font-style: normal;
      line-height: 0;
      text-align: center;
      text-transform: none;
      vertical-align: -0.125em;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
  :deep(.el-input.is-disabled .el-input__inner) {
    background: #fff;
  }
}
</style>
