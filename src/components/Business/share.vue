<template>
  <!-- 分享二维码 -->
  <div class="share">
    <el-dialog-module :isShow="isShow" :title="title" @onClose="onClose" :isFooter="true" :closeOnClickModal="false" :dialogButton="['', '']" width="317px">
      <template #content>
        <div class="share_t">{{ content }}</div>
        <div class="share_ewm" v-loading="loading">
          <img src="@/assets/img/ewm.png" alt="" style="width: 100%; height: 100%" />
        </div>
      </template>
    </el-dialog-module>
  </div>
</template>
<script>
import { toRefs, reactive, onMounted, ref } from 'vue'
export default {
  props: {
    //默认值
    title: {
      type: String,
      default: '扫一扫分享到更多'
    },
    //标题
    content: {
      type: String,
      default: '将采购信息分享到朋友圈、微信群、微信好友、QQ群、钉钉群等渠道，获得更多潜在供应商报价~~'
    }
  },
  setup(props) {
    const state = reactive({
      isShow: false,
      loading: false,
      //初始化
      init: (type) => {
        state.isShow = true
        state.getList()
      },
      onClose: () => {
        state.isShow = false
      },
      getList: () => {}
    })
    return {
      ...toRefs(state)
    }
  }
}
</script>
<style lang="scss" scoped>
.share {
  .share_t {
    font-size: 14px;
    font-family: 'siyuan, siyuan-Regular';
    font-weight: 400;
    text-align: justify;
    color: #4a5568;
    line-height: 20px;
    margin-bottom: 24px;
  }
  .share_ewm {
    width: auto;
    height: 268px;
    border-radius: 5px;
  }
}
</style>

<style lang="scss">
.share {
}
</style>
