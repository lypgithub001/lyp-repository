<template>
  <div class="headerBox">
    <div class="marginAuto flex-between header-content">
      <div class="flexCenter">
        <svg-icon :name="'zhicaiyunloginLOGO'" :width="'162px'" :height="'26px'"></svg-icon>
        <span class="line"></span>
        <!-- <svg-icon :name="'slogan'" :width="'207px'" :height="'26px'"></svg-icon> -->
        <span class="leftText">智慧采购管理系统</span>
        <!-- <svg-icon :name="'free'" :width="'72px'" :height="'26px'"></svg-icon> -->
        <!-- <svg-icon :name="'slogan_hader'" width="220px" height="20px" style="margin-left: 35px"></svg-icon> -->
      </div>
      <div class="flexCenter header-right">
        <div class="header-right-item" @click="onopen()">
          <img src="@/assets/img/login/customer-1.png" alt="" class="image1" /><img
            src="@/assets/img/login/customer-1-blue.png"
            class="image2"
            alt=""
            style="display: none"
          /><span>在线客服</span>
        </div>
        <div class="header-right-item" @click="onopenModel()">
          <img src="@/assets/img/login/download-system.png" alt="" class="image1" /><img
            src="@/assets/img/login/download-system-blue.png"
            class="image2"
            alt=""
            style="display: none"
          /><span>下载应用</span>
        </div>
        <div class="header-right-item">
          <img src="@/assets/img/login/customer-2.png" alt="" class="image1" /><img
            src="@/assets/img/login/customer-2-blue.png"
            alt=""
            class="image2"
            style="display: none"
          /><span>400-645-6677</span>
        </div>
        <div class="header-right-item"><el-button type="primary" @click="orderClick">立即咨询</el-button></div>
      </div>
    </div>
    <!-- 用户注册及隐私协议 -->
    <downloadModel ref="downloadModelRef"></downloadModel>
  </div>
</template>

<script>
import { reactive, toRefs, ref } from 'vue'
import downloadModel from '@/views/login/components/downloadModel.vue'

export default {
  components: {
    downloadModel
  },
  setup(props, { emit }) {
    const downloadModelRef = ref()
    const state = reactive({
      onopen: () => {
        window.open('https://p.qiao.baidu.com/cps/chat?siteId=18067452&userId=37369465&siteToken=b898605ed28bab0f695b9a4950edf28e')
      },
      onhelp: () => {
        window.open('http://www.yunchuangzhicai.com/d/manual.html')
      },
      onopenModel: () => {
        downloadModelRef.value.init()
      },
      orderClick() {
        emit('orderClick')
      }
    })
    return {
      ...toRefs(state),
      downloadModelRef
    }
  }
}
</script>

<style lang="scss" scoped>
.headerBox {
  height: 70px;
  // line-height: 100px;
  background: #fff;
  width: 100%;
  font-size: 21px;
  .header-right {
    img {
      width: 24px;
      height: 24px;
      margin-right: 4px;
    }
    .header-right-item {
      display: flex;
      align-items: center;
      cursor: pointer;
      height: 30px;
      span {
        color: #1d2129;
        font-size: 16px;
      }
      .el-button {
        width: 104px;
        height: 38px;
        border-radius: 2px;
        font-size: 16px;
        //   line-height: 38px;
      }
    }
    .header-right-item + .header-right-item {
      margin-left: 30px;
    }
    .header-right-item:hover {
      color: #1664ff;
      span {
        color: #1664ff;
      }
      .image1 {
        display: none;
      }
      .image2 {
        display: inline-block !important;
      }
    }
  }
  .header-content {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .line {
    background: #5d6882;
    margin: 0 15px;
    height: 24px;
    width: 1px;
  }
  .leftText {
    font-weight: 600;
    font-size: 23px;
    color: #165dff;
    margin-right: 40px;
  }
  .telInfo {
    margin-left: 7px;
    font-weight: 400;
    font-size: 16px;
    color: #1d2129;
  }
  .onlineMen {
    cursor: pointer;
    width: 78px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #1664ff;
    box-sizing: border-box;
    border-radius: 4px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    margin-right: 20px;
    align-items: center;
    justify-content: center;
    i {
      font-size: 20px;
      color: #1664ff;
    }
  }
  .onhelp {
    cursor: pointer;
    width: 78px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #1664ff;
    box-sizing: border-box;
    border-radius: 4px;
    text-align: center;
    display: flex;
    margin-right: 20px;
    align-items: center;
    justify-content: center;
    i {
      font-size: 20px;
      color: #1664ff;
    }
  }
  .onlineMen:hover .telInfo,
  .onlineMen:hover i {
    color: #1664ff;
  }
  .flexCenter {
    display: flex;
    align-items: center;
    p {
      color: #4e5969;
      font-size: 16px;
      font-weight: 600;
      line-height: 24px;
      margin-top: 5px;
    }
    .phoneBox {
      height: 42px;
      text-align: left;
      margin-left: 10px;
      .tel {
        font-weight: 600;
        font-size: 14px;
        line-height: 22px;
        color: #1d2129;
        letter-spacing: 0.7px;
      }
      .serveTime {
        display: flex;
        align-items: center;
        color: #1d2129;
        font-weight: 400;
        cursor: pointer;
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
}
</style>
