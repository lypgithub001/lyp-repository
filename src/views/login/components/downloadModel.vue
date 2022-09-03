<template>
  <div>
    <el-dialog-module
      :isShow="isShow"
      @onClose="onClose"
      :append-to-body="false"
      :showClose="false"
      :isFooter="false"
      :dialogButton="dialogButton"
      @onSubmit="onClose"
      width="850px"
    >
      <template #content>
        <div>
          <div class="title">下载客户端</div>
          <div class="twoTitle">同时支持支持 iOS，Android，Windows版本</div>
          <div style="display: flex">
            <div class="box" v-for="(item, index) in list" :key="index">
              <img
                :src="item.img"
                alt=""
                :width="index === 2 ? 46 : 100"
                :height="index === 2 ? 46 : 100"
                :style="{ margin: index === 2 ? '28px 51px 20px' : '25px' }"
              />
              <div class="downBtn" @click="downLoad" v-if="index === 2">点击下载</div>
              <div class="text">{{ item.text }}</div>
            </div>
          </div>
        </div>
      </template>
    </el-dialog-module>
  </div>
</template>
<script setup>
import { toRefs, reactive, onMounted, ref, nextTick } from 'vue'
const emits = defineEmits(['closeModel'])
const dialogButton = ref(['', '确定'])
const isShow = ref(false)

const onClose = () => {
  isShow.value = false
}

const list = ref([
  {
    img: 'https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/windowSys/iosdownload.png',
    text: 'ios下载'
  },
  {
    img: 'https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/windowSys/androidDownload.png',
    text: 'Android下载'
  },
  {
    img: 'https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/windowSys/window.png',
    text: 'Windows下载'
  }
])

//下载
const downLoad = () => {
  window.location.href = 'https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/zhicaiyunWeb/windowSys/%E6%99%BA%E9%87%87%E4%BA%91%E5%AE%A2%E6%88%B7%E7%AB%AF.msi'
}

const init = () => {
  isShow.value = true
}
defineExpose({
  init
})
</script>
<style lang="scss" scoped>
.title {
  text-align: center;
  font-weight: 400;
  font-size: 32px;
  line-height: 45px;
  color: #1d2129;
}
.twoTitle {
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  text-align: center;
  /* 文字/Text-4(次强调-正文标题) */
  color: #4e5969;
  margin: 12px 0 40px;
}
.box {
  background: #ffffff;
  box-shadow: 0px 4px 25px rgba(0, 38, 114, 0.08);
  border-radius: 8px;
  width: 150px;
  height: 150px;
  margin: 0 50px;
  position: relative;
  img {
    margin: 25px;
  }
  .text {
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    text-align: center;
  }
  .downBtn {
    color: #165dff;
    width: 88px;
    height: 32px;
    line-height: 32px;
    margin: 0 auto;
    border: 1px solid #165dff;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;
  }
}
:deep(.dialog-visible .el-dialog__body) {
  height: 400px;
  overflow: hidden;
}
</style>
