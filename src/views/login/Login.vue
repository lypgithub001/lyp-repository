<template>
  <div class="login-wrap">
    <!-- 登录header -->
    <LoginHeader @orderClick="orderClick"></LoginHeader>
    <div style="position: relative">
      <LoginSwiper @register="toRegister"></LoginSwiper>
      <div
        class="leftBox"
        v-loading="loading"
        :style="{
          height: (isRegister === 1 || isRegister === 2) && showRegister ? '457px' : '457px',
          marginTop: (isRegister === 1 || isRegister === 2) && showRegister ? '33px' : '33px'
        }"
      >
        <!-- 滑动解锁 -->
        <sliderLock ref="sliderLockRef" v-if="showSlider" @close="showSlider = false" @sliderSucess="sliderSucess"></sliderLock>
        <!-- 微信绑定手机号 -->
        <bindWechatModule v-if="showBindWechat" @close="showBindWechat = false"></bindWechatModule>
        <!-- 背景图 -->
        <!-- <img src="https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/home/login/loginFormIcon.png" class="bgimg" alt="" width="250" height="57" /> -->
        <!-- 微信登录，手机号登录切换 -->
        <div class="changeImgBox flex-between" @click="goChangeLogin(isRegister)" v-if="isRegister === 0 || isRegister === 3" style="align-items: center">
          <svg-icon :name="'wechatTitle'" class="wechatTitle" v-show="isRegister === 0" width="109px" height="24px" />
          <svg-icon :name="'phoneTitle'" class="phoneTitle" v-show="isRegister === 3" width="72px" height="24px" />
          <img src="https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/home/login/wechatLogin.png" v-show="isRegister === 0" alt="" width="84" height="84" />
          <img src="https://cnpc-app.oss-cn-hangzhou.aliyuncs.com/home/login/phoneLogin.png" v-show="isRegister === 3" alt="" width="84" height="84" />
        </div>
        <!-- 提示头部 -->
        <div
          class="topTitleBox"
          v-show="isRegister === 1 || isRegister === 2 || isRegister === 3 || isRegister === 4"
          :style="{ marginTop: isRegister === 1 || isRegister === 2 ? '84px' : '40px' }"
        >
          <div class="title">
            {{ isRegister === 1 ? '找回密码' : isRegister === 2 ? '注册账号' : isRegister === 3 && !showBindWechat ? '微信扫码登录' : '微信绑定手机号' }}
          </div>
          <div class="info" v-show="isRegister === 1 || isRegister === 2">已有账号，<span @click="chooseLoginWay">返回登录</span></div>
          <div class="info" v-show="isRegister === 4">其他 <span @click="chooseLoginWay"> 登录</span> 方式</div>
        </div>
        <div
          class="lc_form"
          :style="{ marginTop: !isShowImgCode && isRegister === 0 ? '80px' : isShowImgCode && isRegister === 0 && activeName === 'code' ? '67px' : '25px' }"
        >
          <div v-if="isRegister === 0">
            <el-tabs v-model="activeName" @tab-click="hanleChangeTab">
              <el-tab-pane label="密码登录" name="pwd">
                <PasswordModule ref="loginPasswordRef" @showImgCode="showImgCode"></PasswordModule>
              </el-tab-pane>
              <el-tab-pane label="手机号登录" name="code">
                <PhoneModule ref="loginPhoneRef" @showImgCode="showImgCode" @showSlideModel="showSlideModel"></PhoneModule>
              </el-tab-pane>
            </el-tabs>
          </div>
          <div v-if="isRegister === 1 || isRegister === 2">
            <RegisterOrForPassword
              ref="RegisterOrForPasswordRef"
              v-if="(isRegister === 1 || isRegister === 2) && showRegister"
              :isRegister="isRegister"
              @changeSuccess="changeSuccess"
              @showSlideModel="showSlideModel"
            ></RegisterOrForPassword>
          </div>
          <div class="rg_gb" v-show="isRegister === 0 && activeName === 'pwd'" style="margin-top: -5px; z-index: 1; position: relative">
            <div>
              <el-checkbox v-model="checked">记住密码</el-checkbox>
            </div>
            <span @click="toRegister(1)">忘记密码？</span>
          </div>
          <div v-if="isRegister === 3 || isRegister === 4" style="position: relative">
            <WeChatModule ref="WeChatModuleRef"></WeChatModule>
            <div class="loginTypeBox flex" v-if="!showBindWechat">
              <div @click="chooseLogin('pwd')">密码登录</div>
              <span>|</span>
              <div @click="chooseLogin('code')">手机号登录</div>
            </div>
          </div>
          <div class="login-btn">
            <el-button type="primary" class="dl-btn" style="margin-top: 10px" v-show="activeName === 'code' && isRegister === 0" @click="mobileLogin('mobile')"
              >登录
            </el-button>
            <el-button type="primary" class="dl-btn" v-show="activeName === 'pwd' && isRegister === 0" @click="mobileLogin('pwd')">登录 </el-button>
            <el-button type="primary" class="dl-btn" v-show="isRegister === 2" @click="mobileLogin('forwordRigister')"
              >{{ isRegister === 1 ? '确认' : '同意条款并注册' }}
            </el-button>
            <!-- <el-button type="primary" style="width: 100%" v-show="isRegister === 3 && showBindWechat" @click="mobileLogin('bind')">确认绑定 </el-button> -->
          </div>

          <div v-show="isRegister === 0">
            <div class="rg_gb" v-show="isRegister === 0">
              <span class="rg_cur" @click="toRegister(2)">免费注册</span>
            </div>

            <!-- <div class="on_line_log" v-show="activeName === 'pwd'">
              <div class="wx_login">
                <div class="flex" @click="goWXLogin" style="cursor: pointer">
                  <svg-icon :name="'loginWeChat'" width="23px" height="19px" />
                  <div style="margin-left: 12px">微信登录</div>
                </div>
              </div>
            </div> -->
            <div class="login-tips">
              登录即同意
              <span @click="lookAgree">《用户协议》</span> 和
              <span @click="lookAgree">《服务条款》</span>
            </div>
          </div>
          <div v-show="isRegister === 2" class="login-tips">
            注册即同意
            <a href="#" @click="lookAgree" style="color: #6678aa">《智采云服务条款和隐私政策》</a>
          </div>
        </div>
      </div>
    </div>
    <ServiceCustomer></ServiceCustomer>
    <SassProduce></SassProduce>
    <VersionSolution @orderClick="orderClick"></VersionSolution>
    <P8Solution></P8Solution>
    <SaveMoney></SaveMoney>
    <AboutCustomer @toTop="toTop" @orderClick="orderClick"></AboutCustomer>
    <CooperativeCustomers></CooperativeCustomers>
    <SassPlatform @orderClick="orderClick"></SassPlatform>
    <div class="company_info">运营单位：智采云（北京）科技有限公司&nbsp; |&nbsp; 浪潮集团有限公司</div>
    <div class="purchase">智采云备案号：<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2021036704号-2</a></div>
    <!-- 用户注册及隐私协议 -->
    <serviceProtocol ref="serviceProtocolRef"></serviceProtocol>
    <Appointment ref="appointmentRef"></Appointment>
    <el-backtop :bottom="100">
      <img src="@/assets/img/login/customer-4.png" class="el-backtop-img1" alt="" />
      <img src="@/assets/img/login/customer-4-white.png" alt="" class="dislay-none el-backtop-img2" />
      <p>回到顶部</p>
    </el-backtop>
  </div>
</template>

<script setup>
import { ref, reactive, toRefs, onMounted, nextTick, onUnmounted, watch, computed, getCurrentInstance, onUpdated } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import '@/assets/js/noCaptcha.js'
import { orgPublicQueryList, orgPublicQueryCount } from '@/api/login/index.js'
import PasswordModule from './components/passwordModule.vue'
import PhoneModule from './components/phoneModule.vue'
import WeChatModule from './components/weChatModule.vue'
import RegisterOrForPassword from './components/registerOrForPassword.vue'
import LoginHeader from './components/loginHeader.vue'
import BusnissInfo from './components/busnissInfo.vue'
import CompanyInfo from './components/companyInfo.vue'
import ShopInfo from './components/shopInfo.vue'
import LoginSwiper from './components/LoginSwiper.vue'
import serviceProtocol from '@/views/login/components/serviceProtocol.vue'
import SassProduce from './components/SassProduce.vue'
import VersionSolution from './components/VersionSolution.vue'
import P8Solution from './components/P8Solution.vue'
import AboutCustomer from './components/AboutCustomer.vue'
import Appointment from './components/Appointment.vue'
import CooperativeCustomers from './components/CooperativeCustomers.vue'
import SassPlatform from './components/SassPlatform.vue'
import SaveMoney from './components/SaveMoney.vue'
import ServiceCustomer from './components/ServiceCustomer.vue'
import { useStore } from 'vuex'
import { ElMessageBox, ElMessage } from 'element-plus'
import sliderLock from '@/views/login/components/sliderLock.vue'
import bindWechatModule from '@/views/login/components/bindWechatModule.vue'
const router = useRouter()
const route = useRoute()
const showRegister = ref(false)
const store = useStore()
const internalInstance = getCurrentInstance() //当前组件实例
const $bus = internalInstance.appContext.config.globalProperties.$bus
const checked = ref(true)
//显示注册或者找回密码
const toRegister = (type) => {
  switch (type) {
    case 1:
      state.isRegister = 1
      nextTick(() => {
        showRegister.value = true
      })
      break
    case 2:
      state.isRegister = 2
      nextTick(() => {
        showRegister.value = true
      })
      break
    default:
      showRegister.value = false
      break
  }
}
//滑动解锁
const sliderLockRef = ref()
const showSlider = ref(false)
//是否显示图片
const isShowImgCode = ref(false)
//展示图片验证码
const showImgCode = (val) => {
  isShowImgCode.value = val
}
const sliderSucess = (val, token) => {
  showSlider.value = false
  if (isRegister.value === 1 || isRegister.value === 2) {
    RegisterOrForPasswordRef.value.initLockInfo(val, token)
  } else {
    loginPhoneRef.value.initLockInfo(val, token)
  }
}
//展示弹窗
const showSlideModel = () => {
  showSlider.value = true
}
//查看注册协议
const serviceProtocolRef = ref()
const lookAgree = () => {
  serviceProtocolRef.value.init()
}
const toTop = () => {
  document.body.scrollIntoView()
}
const appointmentRef = ref()
const orderClick = () => {
  console.log(123)
  appointmentRef.value.init()
}
const rongIM = computed(() => store.state.user.RongIMClient)
const showBindWechat = ref(false)

const slideshow = () => {
  //新增代码
  // 获取ul元素，并为其追加一组相同图片（为了做到无缝衔接）  那个轮播图也没了，现在我  先把那个简单的弄过来
  let ul = document.querySelector('.overqin')
  ul.innerHTML = ul.innerHTML + ul.innerHTML
  // 获取所有的li元素和.btn元素
  let lis = document.querySelectorAll('.overqin li')
  let btns = document.querySelectorAll('.btn')
  // 每次滚动的跨度（正数向右，负数向左，默认向左滚动）
  let spa = -1
  // 计算并设置ul的总宽度
  ul.style.width = lis[0].offsetWidth * lis.length + 'px'

  // 滚动函数
  function move() {
    if (ul.offsetLeft < -ul.offsetWidth / 2) {
      // 向左走时，判断图片是否走完（这里本来时4张图片，加上后面追加的4张相同的，共有8张，所以需要用ul的总宽度来除以2进行判断），走完时重新开始
      ul.style.left = '0'
    }
    if (ul.offsetLeft > 0) {
      // 向右走时，判断图片是否走完
      ul.style.left = -ul.offsetWidth / 2 + 'px'
    }
    // 设置偏移位置
    ul.style.left = ul.offsetLeft + spa + 'px'
  }
  // // 定时器，每30毫秒执行一次move函数
  let timer = setInterval(move, 30)
  // // 为ul绑定事件，悬停停止，移开滚动
  ul.addEventListener('mouseover', function () {
    clearInterval(timer)
    // ul.style.width = lis[0].offsetWidth * lis.length + 'px';
  })
  ul.addEventListener('mouseout', function () {
    timer = setInterval(move, 30)
  })
}

onMounted(() => {
  //   slideshow()

  if (rongIM.value) {
    rongIM.value?.disconnect().then(() => console.log('断开链接成功'))
  }
  if (route.query.s && route.query.s == 1 && route.query.k) {
    if (!sessionStorage.getItem('closeBindWechat')) {
      showBindWechat.value = true
    } else {
      showBindWechat.value = false
    }
  } else {
    showBindWechat.value = false
  }
  getOrgList()
})
const chooseLogin = (type) => {
  state.isRegister = 0
  state.activeName = type
}
const chooseLoginWay = () => {
  nextTick(() => {
    state.isRegister = 0
  })
}
//入驻列表
const allOrgList = ref([])
const orgList = ref([])
const allNumber = ref()

const showList = ref(false)

// watch(
//   () => orgList.value,
//   (val) => {
//     console.log(val)
//     showList.value = false
//     nextTick(() => {
//       showList.value = true
//     })
//   }
// )

//获取入驻列表
const getOrgList = async () => {
  try {
    let res = await orgPublicQueryList()
    if (res.code === 200) {
      allOrgList.value = res.data
      pageInfo.total = allOrgList.value.length
      orgList.value = allOrgList.value
      // if (pageInfo.total > 6) {
      //   pageInfo.totalPage = pageInfo.total / 6
      //   loadList()
      // }
    }
  } catch (error) {}
  try {
    let res = await orgPublicQueryCount()
    if (res.code === 200) {
      allNumber.value = res.data
    }
  } catch (error) {}
}
let timer = ref()
//加载列表
const loadList = () => {
  timer.value = setInterval(() => {
    if (pageInfo.page >= pageInfo.totalPage) {
      pageInfo.page = 1
    } else {
      pageInfo.page += 1
    }
    if (pageInfo.page === 1) {
      orgList.value = allOrgList.value.slice(pageInfo.page - 1, pageInfo.page + 5)
    } else {
      let num1 = (pageInfo.page - 1) * 6
      let num2 = (pageInfo.page - 1) * 6 + 6
      orgList.value = allOrgList.value.slice(num1, num2)
    }
  }, 2000)
  timer.value
}

// onUnmounted(() => {
//    clearInterval(timer);
// })
//找回密码成功
const changeSuccess = () => {
  state.isRegister = 0
  showRegister.value = false
}
const loginPhoneRef = ref()
const RegisterOrForPasswordRef = ref()
const WeChatModuleRef = ref()
$bus.on('checkMore', (res) => {
  goRegisterOrLogin()
})
//跳转登录或注册
const goRegisterOrLogin = () => {
  ElMessageBox.confirm('请先注册或直接登录。', '提示', {
    type: 'warning',
    distinguishCancelAndClose: true,
    confirmButtonText: '立即登录',
    cancelButtonText: '立即注册'
  })
    .then(async ({ value }) => {
      state.isRegister = 0
      state.activeName = 'code'
      nextTick(() => {
        loginPhoneRef.value.setFocus()
      })
    })
    .catch((action) => {
      if (action === 'cancel') {
        toRegister(2)
      }
    })
}
const state = reactive({
  activeName: 'pwd',
  isRegister: 0,
  //验证码登陆
  mobileLogin(type) {
    console.log(loginPhoneRef.value)
    if (type === 'mobile') {
      loginPhoneRef.value.mobileLogin(1)
    } else if (type === 'pwd') {
      loginPasswordRef.value.submitForm(checked.value)
    } else if (type === 'forwordRigister') {
      RegisterOrForPasswordRef.value.mobileRegister()
    } else if (type === 'bind') {
      WeChatModuleRef.value.mobileBind()
    }
  },
  //跳转微信登录
  goWXLogin() {
    state.isRegister = 3
    window.sessionStorage.wxOperation = '0'
  },
  //切换登录方式
  goChangeLogin(type) {
    isShowImgCode.value = false
    if (type === 0) {
      sessionStorage.removeItem('closeBindWechat')
      state.goWXLogin()
    } else {
      state.isRegister = 0
    }
  },
  //修改登录类型
  hanleChangeTab() {
    state.isRegister = 10
    isShowImgCode.value = false
    nextTick(() => {
      state.isRegister = 0
    })
  }
})

// 分页相关
const pageInfo = reactive({
  pagesize: 6, //每页条数
  page: 1,
  total: 0,
  totalPage: 0,
  currentList: [] //当前页内容
})

const { activeName, isRegister, goWXLogin, hanleChangeTab, mobileLogin, goChangeLogin } = toRefs(state)
const loginPasswordRef = ref(null),
  //加载动画
  loading = ref(false)
</script>

<style lang="scss" scoped>
@import '@/assets/css/plugin.scss';
@import '@/views/login/css/login.css';

.detailtitle {
  font-size: 30px;
}
.detailbody {
  width: 80%;
  margin-top: 50px;
  font-size: 16px;
}
.detailbodytow {
  margin-top: 20px;
}
.striping {
  width: 70px;
  height: 5px;
  background: white;
  margin-top: 10px;
}
.detaildot {
  width: 8px;
  height: 8px;
  background: #ffffff;
  border-radius: 22px;
}
.detailone {
  display: flex;
}
.contentDiv {
  // width: 100px !important;
}
.contentDiv img {
  width: 120px;
  margin-top: -55px;
}
.mb40 {
  margin-bottom: -40px;
}
.savemoney {
  text-align: center;
  font-size: 15px;
  color: #4e5969;
  margin-top: 20px;
}
.out {
  margin-top: 50px;
  width: 100%;
  height: auto;
}
.coffeeOut {
  margin: 0 auto;
  width: 1200px;
  height: auto;
  text-align: center;
}
.qinradius {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  border: 1px solid red;
  border-radius: 50%; //圆角百分比
}
.qinradius img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.titleButton {
  margin-left: 5px;
  width: 100px;
  height: 25px;
  background-color: #2aabd2;
}
.content {
  width: 100px;
  height: 100px;
}

/*图片的样式*/

.titleButton .one {
  width: 50px;
  height: 25px;
  text-align: left;
  float: left;
  background-color: #2aabd2;
}
.titleButton .two {
  width: 50px;
  height: 25px;
  text-align: left;
  float: left;
  background-color: #2aabd2;
}

/*轮播容器*/
.container {
  margin-top: 50px;
  width: 1200px;
  height: 500px;
  /*前后页按钮添加属性*/
  position: relative;
  overflow: hidden;
}
.colorqin {
  text-align: center;
  box-shadow: 0px 0px 8px 0px rgb(166 166 166 / 30%);
  height: 550px;
}
.colorqin:hover {
  // background-color: #3d4b66;
}
.colorqin:hover .detail {
  z-index: 1;
  color: white;
  position: relative;
  font-size: 12px;
  top: 0;
  left: 0;
  display: initial;
}
.label {
  margin-top: 20px;
  margin-left: 0;
  width: 160px;
  height: 24px;
  border: 1px solid blue;
  text-align: left;
  font-size: 18px;
  /*设置半圆形边框*/
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
  background-color: #2aabd2;
}
.exp {
  margin-top: 38px;
  text-align: center;
}

.detail {
  font-size: 18px;
  /*超出部分显示省略号*/
  display: none;
}

.buttons {
  width: 1200px;
  height: 111px;
  /*position: relative;*/
}
.slider-nav {
  margin-left: -38px;
}
.slider-nav li {
  width: 23px;
  background: #3e3e3e;
  cursor: pointer;
  margin: 0 5px;
  overflow: hidden;
  text-align: center;
  display: inline-block;
  height: 9px;
}
.slider-nav li:hover {
  // background: #31b0d5;
  // background: rgba(0, 50, 149, 0.4);
}
.list {
  width: 3300px;
  height: 420px;
  position: absolute;
}

.arrow {
  position: absolute;
  display: none;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 36px;
  text-align: center;
  font-weight: bold;
  top: 140px;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
}
#prev {
  left: 20px;
}
#next {
  right: 20px;
}
#container:hover .arrow {
  display: block;
}
.arrow:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
.buttons .on {
  background: orange;
}

/////e33333333333333333333333

.label {
  margin-top: 20px;
  margin-left: 0;
  width: 160px;
  height: 24px;
  border: 1px solid blue;
  text-align: left;
  font-size: 18px;
  /*设置半圆形边框*/
  border-bottom-right-radius: 12px;
  border-top-right-radius: 12px;
  background-color: #2aabd2;
}
.overqin {
  li {
    position: relative;
    transition: 0.3s all;
    bottom: 0;
  }
  li:hover {
    bottom: 20px;
  }
}

.titleqin {
  margin-top: 15px;
  text-align: center;
  font-size: 25px;
  font-weight: 600;
}
.moneyqin {
  font-family: 'CKTKingKong';
  font-style: normal;
  margin-top: 30px;
  text-align: center;
  font-size: 20px;
  color: #165dff;
  font-weight: 600;
}
.moneyqin span {
  font-family: 'CKTKingKong';
}
.container {
  // width: 1600px;
  width: 100%;
  height: 460px;
  padding: 8px 0px;
  padding-top: 28px;
  /* 相对定位 */
  position: relative;
  /* 溢出隐藏 */
  overflow: hidden;
}
.overqin {
  // height: 300px;
  display: flex;
  position: relative;
}
.overqin li {
  list-style: none;
  height: 100%;
  padding-right: 20px;
}
.typeqin {
  width: 390px;
  height: 722px;
  position: absolute;
  z-index: 999;
}
.typeqin:hover {
  background: rgba(52, 67, 102, 0.9);
}
.detail {
  display: none;
  color: white;
  padding-left: 30px;
  padding-top: 40px;
}
.typeqin:hover .detail {
  display: block;
}
.imgqin img {
  width: 390px;
  height: 180px;
  z-index: -1;
  /* 保持原有尺寸比例，裁切长边 */
  object-fit: cover;
  /* 图片定位正中间 */
  object-position: center;
}
.btns {
  display: flex;
  justify-content: center;
  padding-top: 50px;
}
.btn {
  color: #fff;
  border: 1px solid #ddd;
  padding: 5px 15px;
  margin: 0 15px;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
}
.btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

//新增样式

.purchase-info-business {
  background: #fff;
  padding: 60px 0;
  //   margin-top: -40px;
}

.company_info {
  text-align: center;
  font-size: 14px;
  color: #1d2129;
  margin-bottom: 10px;
  margin-top: 40px;
  a {
    color: #1d2129;
  }
}
.topTitleBox {
  margin: 40px auto 0;
  width: 330px;
  display: flex;
  justify-content: space-between;
  .title {
    color: #1d2129;
    font-weight: 600;
    font-size: 16px;
  }
  .info {
    font-size: 16px;
    color: #1d2129;
    span {
      cursor: pointer;
      color: #1664ff;
    }
  }
}
:deep(.el-input--small .el-input__icon) {
  line-height: 40px;
}
:deep(.el-form-item--small.el-form-item) {
  margin-bottom: 20px;
}
:deep(.el-divider) {
  background-color: #e2e8f0;
  span {
    color: #cbd5e0;
    font-size: 12px;
  }
  :deep(.el-divider--vertical) {
    margin: 4px 10px;
  }
}
:deep(.el-divider--horizontal) {
  margin: 23px 0 34px;
}
:deep(.el-tabs__header) {
  margin-bottom: 25px;
}
:deep(.el-button) {
  margin-left: 0;
}
:deep(.el-input--small .el-input__inner) {
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  margin: auto;
}

.login-wrap {
  width: 100%;
  background: #f7f8fa;
  min-width: 1228px;
  position: relative;
  .el-backtop {
    flex-direction: column;
    height: 64px;
    width: 64px;
    border-radius: 2px;
    p {
      font-size: 12px;
      color: #1d2129;
    }
    img {
      width: 24px;
      height: 24px;
      margin-bottom: 6px;
    }
  }
  .el-backtop:hover {
    background: #165dff;
    box-shadow: 0 6px 16px rgba(0, 50, 149, 0.4);
    p {
      color: white;
    }
    .el-backtop-img1 {
      display: none;
    }
    .el-backtop-img2 {
      display: inline-block;
    }
  }
}
.ms-title {
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  color: #1664ff;
  font-family: 'siyuan, siyuan-Medium';
  text-shadow: 0px 12px 30px 0px rgba(31, 32, 36, 0.65);
  margin: 40px auto 30px;
  text-align: center;
  line-height: 70px;
  position: relative;
  letter-spacing: 4px;
}

.leftBox {
  z-index: 100;
  top: 0;
  right: calc((100% - 1228px) / 2);
  margin: 59px 0 0 0;
  background: #ffffff;
  border-radius: 8px;
  width: 410px;
  height: 442px;
  position: absolute;
  .bgimg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
  }
  .changeImgBox {
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    .wechatTitle {
      position: absolute;
      top: 20px;
      right: 68px;
    }
    .phoneTitle {
      position: absolute;
      top: 20px;
      right: 65px;
    }
  }
  .loginTypeBox {
    width: 150px;
    margin: 25px auto 0;
    font-weight: 400;
    font-size: 14px;
    cursor: pointer;
    line-height: 20px;
    /* identical to box height */
    color: #165dff;
    span {
      color: #e5e6eb;
      margin: 0 10px;
    }
  }
  .lc_form {
    width: 330px;
    margin: 40px auto 0;
    .err_msg {
      width: 320px;
      height: 32px;
      opacity: 1;
      font-size: 14px;
      background: #ffe7ea;
      border: 1px solid #e01b2f;
      border-radius: 5px;
      line-height: 30px;
      padding-left: 16px;
      box-sizing: border-box;
    }
    .QR {
      width: 190px;
      height: 190px;
      margin: 50px 68px 0 68px;
    }
    .open_zc {
      margin-top: 20px;
      text-align: center;
    }
    .rg_gb {
      display: flex;
      justify-content: space-between;
      color: #1664ff;
      font-size: 14px;
      text-align: center;
      margin-bottom: 20px;
      .rg_cur {
        cursor: pointer;
        margin: 0 auto;
      }
      span {
        cursor: pointer;
      }
    }
    .on_line_log {
      display: flex;
      justify-content: space-between;

      .wx_login {
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        color: #1664ff;
        margin: 0 auto;

        :deep(.el-divider--vertical) {
          margin: 4px 10px;
        }
      }
    }
    .captcha {
      vertical-align: top;
      height: 40px;
      cursor: pointer;
      width: 130px;
      margin-left: 10px;
    }

    .dynacodeClass {
      display: inline-block;
      cursor: pointer;
      width: 128px;
      height: 40px;
      line-height: 40px;
      border: 1px solid #e2e8f0;
      border-radius: 4px;
      margin-left: 12px;
      background: #f4f5f6;
      color: #1664ff;
      text-align: center;
      border-radius: 4px;
    }

    .ns-text-color-gray {
      background: #fff;
      color: #1664ff;
    }
  }
  h1 {
    font-size: 22px;
    font-weight: 600;
    padding: 0 55px;
    text-align: left;
    color: #1a202c;
    line-height: 30px;
    text-shadow: 0px 12px 30px 0px rgba(211, 219, 240, 0.65);
    position: relative;
  }
}
.ms-login {
  display: flex;
  min-width: 1228px;
  height: 520px;
  margin-bottom: 40px;
  // background: url('@/assets/img/login/loginsBg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
:deep(.el-form-item__content) {
  display: flex;
}
.ms-content {
  padding: 25px 55px 0;
}
.login-btn button {
  margin-top: 0;
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-family: 'siyuan, siyuan-Medium';
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  line-height: 21px;
  margin-bottom: 15px;
}
.login-tips {
  font-size: 14px;
  margin-top: 10px;
  font-family: 'siyuan, siyuan-Regular';
  font-weight: 400;
  text-align: center;
  color: #86909c;
  width: 100%;
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translate(-50%, 0);
  span:hover {
    cursor: pointer;
    color: #165dff;
  }
  a {
    color: #86909c;
    border-bottom: 1px solid #86909c;
  }
}
.captcha {
  width: 111px;
  height: 40px;
  margin-left: 18px;
}
:deep(.el-select__caret) {
  height: 40px;
}

.lc_right {
  position: relative;
  width: 400px;
  height: 498px;
  margin-right: 64px;
  /*margin-top: 40px;*/
  padding: 26px 37px 24px 37px;
  box-sizing: border-box;
  border-radius: 6px;
  background: #fff;

  .code_login {
    position: absolute;
    width: 70px;
    height: 19px;
    top: 12px;
    right: 70px;
    cursor: pointer;
    object-fit: cover;
  }

  .qr_code {
    position: absolute;
    width: 53px;
    height: 53px;
    top: 12px;
    right: 10px;
    position: absolute;
  }

  :deep(.el-checkbox__label) {
    font-size: 12px;
  }

  .agreement {
    position: absolute;
    width: 295px;
    font-size: 12px;
    bottom: 30px;
    left: 55px;
    .agree {
      color: #6678aa;
      font-size: 12px;
      cursor: pointer;
    }
  }
}

/*
修改选项卡相关
*/
:deep(.el-tabs__active-bar) {
  height: 3px;
  background-color: #1664ff;
}

:deep(.el-tabs__nav) {
  width: 196px;
}
:deep(.el-tabs__item) {
  font-size: 16px;
  text-align: center;
  color: #4e5969;
  padding: 0 15px;
  //   width: 98px;
}
:deep(.is-active) {
  color: #1d2129;
  font-weight: 600;
  font-size: 16px;
}
:deep(.el-tabs__nav-wrap::after) {
  height: 0px;
  background-color: #e2e8f0;
}
.bottomBox {
  //   padding-bottom: 32px;
  .rightBox {
    box-sizing: border-box;
    width: 580px;
    padding-left: 10px;
    background: #fff;
    padding: 30px;
    height: 357px;
    border-radius: 4px;
    .companyInfo {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      .joinUs {
        color: #4e5969;
        font-size: 16px;
        display: flex;
        align-items: center;
        cursor: pointer;
        i {
          margin-top: 2px;
        }
      }
    }
    .companyNumber {
      font-weight: 700;
      font-size: 40px;
      line-height: 46px;
      color: #ff4d4f;
      margin-top: 59px;
    }
    .companyTitle {
      font-weight: 600;
      font-size: 24px;
      line-height: 34px;
      color: #1d2129;
      margin: 7px 0 32px;
    }
    ul {
      li {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        padding: 14px 0;
        color: #1d2129;
        .name {
          width: 330px;
        }
        .time {
          width: 170px;
        }
        .type {
          width: 70px;
        }
      }
      li + li {
        border-top: 1px solid #f2f3f5;
      }
    }
  }
}
.trans-enter {
  /*进入刚开始的时候*/
  /* opacity: 0; */
}
.trans-enter-to {
  /*进入过程结束的时候*/
  opacity: 1;
}
/* .trans-leave {
  离开动画开始的时候
  opacity: 0.5;
}
.trans-leave-to {
  离开动画结束的时候
  opacity: 0;
} */
.trans-move {
  /* opacity: 0.5; */
  transition: all 1s ease;
}
.trans-enter-active,
.trans-leave-active {
  /* opacity: 0.5; */
  transition: all 1s ease;
}
.purchase {
  color: #86909c;
  font-size: 14px;
  text-align: center;
  padding-bottom: 20px;
  a {
    color: #86909c;
  }
}
</style>
