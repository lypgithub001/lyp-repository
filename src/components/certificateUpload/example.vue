<template>
  <div class="supplier-item">
    <el-dialog-module
      :isShow="isShow"
      :title="title"
      @onClose="onClose"
      :isFooter="true"
      @onSubmit="saveInfo"
      :closeOnClickModal="false"
      :dialogButton="['', '我知道了']"
      :loading="loading"
      width="820px"
    >
      <template #content>
        <div class="image-example">
          <div>
            <img :src="imgPath" alt="" />
          </div>
          <div class="instructions">
            <div>上传须知：</div>
            <p>1、企业信息与影印件信息须确保一致；</p>
            <p>2、{{ certificateType == 0 || certificateType == 1 ? '身份' : '' }}证件须在有效期内；</p>
            <p>3、证件正反面影印件照片不得有涂改（除标注证件用途外），须保证文字、图片、证件号码清晰可辨；</p>
            <p>4、每张图片大小不能超过1.8M。</p>
          </div>
        </div>
      </template>
    </el-dialog-module>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref, computed } from 'vue'
import imgFace from '@/assets/img/id-card-face.png'
import imgBack from '@/assets/img/id-card-back.png'
import businessLicense from '@/assets/img/business-license.png'
import accountLicense from '@/assets/img/account-license.png'
export default {
  props: {
    certificateType: {
      type: Number,
      default: 0
    }
  },
  setup(props, { emit }) {
    const tableRef = ref()
    const state = reactive({
      imgPath: computed(() => {
        return props.certificateType == 0 ? imgFace : props.certificateType == 1 ? imgBack : props.certificateType == 2 ? businessLicense : accountLicense
      }),
      isShow: false,
      title: '样例预览',
      loading: false,
      //初始化
      init() {
        state.isShow = true
      },
      onClose: () => {
        state.isShow = false
      },
      saveInfo: () => {
        state.isShow = false
      }
    })
    return {
      ...toRefs(state),
      tableRef
    }
  }
}
</script>
<style lang="scss">
.image-example {
  display: flex;
  justify-content: space-between;
  color: #000000;
  align-items: center;
  .instructions {
    margin-left: 52px;
    div {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 12px;
    }
    p {
      margin-top: 10px;
      font-size: 14px;
      color: #1d2129;
    }
  }
  img {
    width: 370px;
    height: 232px;
  }
}
</style>
