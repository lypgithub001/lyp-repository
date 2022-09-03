<!--
 * @Descripttion: 
 * @version: 
 * @Author: wanqing
 * @Date: 2022-08-30 16:14:28
 * @LastEditors: wanqing
 * @LastEditTime: 2022-08-30 17:12:58
-->
<template>
  <div class="download">
    <div class="title">下载客户端</div>
    <div class="twoTitle">同时支持支持 iOS，Android，Windows版本</div>
    <div class="download-box">
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
<script setup>
import { toRefs, reactive, onMounted, ref, nextTick } from 'vue'
const emits = defineEmits(['closeModel'])
const dialogButton = ref(['', '确定'])

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
</script>
<style lang="scss" scoped>
.download {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 20px;
  height: 337px;
  box-sizing: border-box;
}
.download-box {
  display: flex;
  justify-content: space-between;

}
.title {
  text-align: center;
  font-weight: 400;
  font-size: 28px;
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
  margin: 12px 0 26px;
}
.box:nth-child(2){
   margin:0 40px
}
.box {
  background: #ffffff;
  box-shadow: 0px 4px 25px rgba(0, 38, 114, 0.08);
  border-radius: 8px;
  width: 150px;
  height: 150px;
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
    font-size: 18px;
    line-height: 24px;
    color: #4e5969;
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
