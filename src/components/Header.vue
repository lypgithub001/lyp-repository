<template>
  <div class="common-header">
    <div class="left-container">
      <img
        class="logo-img"
        v-show="pmenu.path == '/purchase' || (pmenu.path != '/purchase' && pmenu.path != '/market')"
        src="../assets/img/titleLogo.png"
        alt=""
      />
      <img class="logo-img" v-show="pmenu.path == '/market'" src="../assets/img/sale-logo.png" alt="" />

      <!-- 搜索框 -->
      <div class="seaarch-box">
        <div class="search-container" v-show="pmenu.path == '/purchase'" style="margin-left: 10px">
          <svg-icon :name="'purchaseOrdinary'" width="145px" height="24px" v-if="nowTeam === 0"></svg-icon>
          <svg-icon :name="'standardOrdinary'" width="145px" height="24px" v-if="nowTeam === 1"></svg-icon>
          <svg-icon :name="'majorOrdinary'" width="145px" height="24px" v-if="nowTeam === 2"></svg-icon>
          <!-- <el-input v-model="searchValue" :placeholder="placeholder" class="input-with-select">
            <template #prepend>
              <el-select v-model="serachType" @change="changeSearchType" class="serach-type-change">
                <el-option label="商品" :value="0"></el-option>
                <el-option label="供应商" :value="1"></el-option>
              </el-select>
            </template>
            <template #append>
              <div class="append_box" @click="goMall(searchValue)">
                <div class="search-button">
                  <img src="../assets/img/home/search.png" />
                </div>
              </div>
            </template>
          </el-input> -->
        </div>
        <div class="search-container" v-show="pmenu.path == '/market'">
          <el-input v-model.trim="searchValueSupplier" placeholder="搜索客户" class="input-with-select-sale">
            <template #append>
              <div class="append_box" @click="goSupplier">
                <div class="search-button">
                  <img src="../assets/img/home/search.png" />
                </div>
              </div>
            </template>
          </el-input>
        </div>
      </div>
    </div>

    <div class="flex rightBox">
      <div style="margin-right: 44px; display: flex">
        <el-dropdown class="user-name" trigger="click" :disabled="teamList?.length <= 1" @command="handleCommand">
          <div class="teamName-platform">
            <div class="svg-pla" v-show="pmenu.path == '/market'">
              <svg-icon :name="'platform'" width="39px" height="18px" v-if="businessType"></svg-icon>
            </div>

            <div class="headerCompanyBox">
              {{ teamInfo?.teamName }}
              <i v-if="teamList?.length > 1" class="el-icon-arrow-down"></i>
            </div>
          </div>

          <template #dropdown>
            <el-dropdown-menu class="common-header-companyMenulist">
              <el-dropdown-item v-for="(item, index) in teamList" :key="index" :command="'changeTeam,' + JSON.stringify(item)">
                {{ item.teamName }}</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
      <!-- 待办事项 -->
      <div class="backlog">
        <el-popover placement="bottom" trigger="hover" ref="elPopoverRef" :width="'532px'" @show="popoverShow" popper-class="popperOptions">
          <template #reference>
            <div class="header_waiting">
              <el-badge :value="msgTotal" :hidden="!msgTotal" type="danger" :max="99" plain class="messageBell" style="margin-right: 0px">
                <i class="iconfont icon-dinglandaiban"></i>
              </el-badge>
            </div>
          </template>
          <template #default>
            <div class="waiting-things">
              <div class="waiting-things-title">
                <div>
                  待办事项<span v-if="msgTotal">（{{ msgTotal }}）</span>
                </div>
                <!-- <div class="waiting-things-pagination">
                  <el-pagination background layout="prev, pager, next" @current-change="currentChange" :total="msgTotal" :page-size="5"> </el-pagination>
                  <div class="pagination-count">{{ msgTotal == 0 ? 0 : msgPage?.current }}/{{ msgPageCount }}</div>
                </div> -->
                <div class="check-more" @click="goWaitingInfo">查看更多&nbsp;&nbsp;></div>
              </div>
              <template v-if="msgData?.length > 0">
                <div class="waiting-things-item" v-for="(item, index) in msgData" :key="index" @click="btnClick(item)">
                  <div class="waiting-things-item-left">
                    <svg-icon :name="'waiting_do'" width="24px" height="24px" style="margin-right: 10px"></svg-icon>
                    <el-tooltip placement="left" effect="light">
                      <template #content>
                        {{ item.content }}
                      </template>
                      <div class="waiting-things-item-content">{{ item.content }}</div>
                    </el-tooltip>
                  </div>
                  <div class="waiting-things-item-right">去处理&nbsp;&nbsp;></div>
                </div>
              </template>
              <template v-else>
                <div class="msg-no-data">
                  <img src="@/assets/svg/no-data.svg" />
                  <p>还没有待办事项哦～</p>
                </div>
              </template>
            </div>
          </template>
        </el-popover>
      </div>
      <div v-if="showMessage" class="message-container">
        <!-- 待办消息 -->
        <el-badge :value="sysMessageNum" :hidden="!sysMessageNum" type="danger" @click="gosysInfo" :max="99" plain :key="messageKey" class="messageBell">
          <!-- <i class="iconfont icon-xiaoxi"></i> -->
          <!-- <svg-icon :name="'header_message'" width="24px" height="24px"></svg-icon> -->
          <el-tooltip class="box-item" effect="light" content="消息" placement="bottom" popper-class="tooltip-position">
            <i class="iconfont icon-dinglanxiaoxi"></i>
          </el-tooltip>
        </el-badge>
      </div>

      <!-- <div v-if="showMessage" class="message-container">
        <el-popover placement="bottom" trigger="hover" :width="'160px'" ref="elPopoverRef"   popper-class="popperOptions">
          <template #reference>
            <div class="header_waiting">
              <el-badge :value="sysMessageNum" :hidden="!sysMessageNum" type="danger" @click="gosysInfo" :max="99" plain :key="messageKey" class="messageBell">
               <i class="iconfont icon-dinglanxiaoxi"></i>
              </el-badge>
            </div>
          </template>
          <template #default>
            <span>消息</span>
          </template>
        </el-popover>
      </div> -->

      <!-- <div class="guanlizhidu" @click="goRegimen">
        <el-tooltip class="box-item" effect="light" content="采购制度管理" placement="bottom" popper-class="tooltip-position">
          <i class="icon-guanlizhidu iconfont"></i>
        </el-tooltip>
      </div> -->
      <div class="backlog">
        <el-popover placement="bottom" trigger="hover" ref="elPopoverRef" :width="'160px'"  popper-class="popper-customer-phone">
          <template #reference>
            <div class="header_waiting">
              <i class="iconfont icon-dinglankefudianhua"></i>
            </div>
          </template>
          <template #default> <div class="customer-phone">400 645 6677</div> </template>
        </el-popover>
      </div>

      <div class="backlog">
        <el-popover placement="bottom" trigger="hover" ref="elPopoverRef" width="610px"   popper-class="download-poper">
          <template #reference>
            <div class="header_waiting download">
              <i class="iconfont icon-dinglanxiazaikehuduan"></i>
            </div>
          </template>
          <template #default>
            <Download></Download>
          </template>
        </el-popover>
      </div>
      <div class="backlog" v-hasRole="['GS_JC_GNPZ']">
        <el-popover
          placement="bottom"
          trigger="hover"
          ref="elPopoverRef"
          :width="'110px'"
          popper-class="popper-customer-change-busness-type"
        >
          <template #reference>
            <div class="header_waiting" @click="openOther">
              <i class="iconfont icon-xiaoshouduan" v-if="pmenu.path == '/market'"></i>
              <i class="iconfont icon-caigouduan" v-else></i>
            </div>
          </template>
          <template #default>
            <div class="change-busness-type" @click="openOther">
              {{
                originalList.length === 1 && (teamBusinessType === 0 || teamBusinessType === 1)
                  ? `开启${pmenu.menuName === '采购' ? '销售' : '采购'}端`
                  : `切换至${pmenu.menuName === '采购' ? '销售' : '采购'}端`
              }}
            </div>
          </template>
        </el-popover>
      </div>

      <!-- <div class="shopBox" @click="goShop">
        <i class="el-icon-truck iconfont"></i>
        前往商城
      </div> -->

      <div class="userInfoBox">
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <div class="flex">
            <span class="el-dropdown-link" :style="{ marginTop: userJobName ? '10px' : '15px' }">
              <img :src="info?.avatar ? info?.avatar : userAvatar" alt="" width="32" height="32" />
            </span>
            <span class="userJobInfo">
              <div class="name" :style="{ paddingTop: userJobName ? '8px' : '17px' }">{{ info.name }}</div>
              <div class="job" v-if="userJobName">
                <div>{{ userJobName }}</div>
              </div>
            </span>
          </div>
          <template #dropdown>
            <div class="UserNameBox">
              <img :src="info?.avatar ? info?.avatar : userAvatar" alt="" width="60" height="60" />
              <div class="rightName">
                <div class="userName">{{ info.name }}</div>
                <div class="editInfo flex">
                  <div v-if="info.certificationState === 1" class="Cer">已认证</div>
                  <div v-if="info.certificationState !== 1" class="noCer">未认证</div>
                </div>
              </div>
              <div class="editArrows" @click="changeUserInfo"><span>编辑</span> <i class="iconfont icon-fangxiangxian-you"></i></div>
            </div>
            <div class="goCerBox flex" v-if="info.certificationState !== 1">
              <div class="rightName">
                <div style="width: 95px">认证个人信息</div>
                <div class="editInfo" @click="goCer"><span>前往认证</span> <i class="iconfont icon-fangxiangxian-you"></i></div>
              </div>
              <svg-icon :name="'employeecontent'" width="90px" height="60px" style="margin-top: 12px"></svg-icon>
            </div>
            <el-dropdown-menu class="changeInfoBox">
              <el-dropdown-item command="changePhone"> <i class="iconfont icon-shouji"></i> 修改手机号 </el-dropdown-item>
              <el-dropdown-item command="changePassword"
                ><i class="iconfont icon-mima"></i> {{ info.changePwdCount > 0 ? '修改密码' : '设置密码' }}</el-dropdown-item
              >
              <el-dropdown-item command="feedback"><i class="iconfont icon-bangzhu"></i> 意见反馈</el-dropdown-item>
              <el-dropdown-item command="loginout" class="phone"> 退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
  <!-- 用户信息相关弹窗 -->
  <userInfoAbout ref="userInfoAboutRef" v-if="showUserInfoRef" @closeModel="closeModel"></userInfoAbout>
  <!-- 修改手机号 -->
  <changePhone ref="changePhoneRef" v-if="showRef" @closeModel="closeModel"></changePhone>
  <!-- 修改密码 -->
  <changePassword ref="changePasswordRef" v-if="showPasswordRef" @closeModel="closeModel"></changePassword>
  <!-- 个人认证弹窗 -->
  <PersonalCertificationDialog ref="PersonalCertificationDialogRef" @getList="closeModel"></PersonalCertificationDialog>
  <!-- 更新用户信息 -->
  <updateUserInfo ref="updateUserInfoRef" v-if="showUpdateUserInfo" @closeModel="closeModel"></updateUserInfo>
  <!-- 意见反馈 -->
  <Feedback ref="feedbackRef" v-if="showFeedback" @closeModel="closeModel"></Feedback>
  <Rongyun ref="rongyunRef" @getRyMessage="getRyMessage" />
</template>

<script setup>
import { computed, ref, onMounted, nextTick, watch, getCurrentInstance, onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import userInfoAbout from '@/components/userInfoAbout/userInfo.vue'
import changePhone from '@/components/userInfoAbout/changePhone.vue'
import changePassword from '@/components/userInfoAbout/changePassword.vue'
import updateUserInfo from '@/components/userInfoAbout/updateUserInfo.vue'
import Feedback from '@/components/userInfoAbout/feedback.vue'
import { teamUserInfoMultiTeamInfo, userCurrentTeamChange } from '@/api/company/teamManager.js'
import PersonalCertificationDialog from '@/views/company/companyInfo/companyCertification/components/personalCertificationDialog.vue'
import { orgCertificationInfoQueryDetails } from '@/api/company/companyCertification.js'
import { teamUserInfoQueryInfo } from '@/api/systemManagement/organizationalStructure.js'
import { ElMessage } from 'element-plus'
import userAvatar from '@/assets/img/campany/avatar.png'
import leftEnterprise from '@/assets/img/campany/leftEnterprise.png'
import { logout } from '@/api/login/index.js'
import Rongyun from '@/components/meltCloud/index.vue'
import { msgQueryPage, msgUnreadNum } from '@/api/home/index.js'
import axios from 'axios'
import SvgIcon from './svgIcon/svgIcon.vue'
import { platformMallSupplierManagecheckAgreement } from '@/api/home/index.js'
import { getApplyListData } from '@/api/company/teamManager.js'
import { updateSolutionInfo } from '@/api/systemManagement/organizationalStructure.js'
import { userHabitsAdd, userHabitsUpdate, userHabitsDeleteBatch } from '@/api/user/index.js'
import Download from '@/components/Download.vue'
let props = defineProps({
  originalList: {
    type: Array,
    defalt: []
  },
  showHeader: {
    //显示header
    type: Boolean,
    defalt: false
  }
})
const store = useStore()
const route = useRoute()
const router = useRouter()
//判断调整传值
const goPageInfo = (name, path, text) => {
  store.commit('clearPageSet')
  store.commit('clearTags', { name: name, title: text, path: path })
  router.push(path)
}
const companyInfo = computed(() => JSON.parse(sessionStorage.getItem('vuex')).teamInfo)
// 关闭全部标签
const closeAll = (choosePath) => {
  if (JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo?.buttonSet.some((ele) => ele === 'XS' || ele === 'CG')) {
    if (choosePath === '/purchase') {
      goPageInfo('purchase-dashboard', '/purchase/dashboard', '采购大脑')
    } else {
      goPageInfo('market-dashboard', '/market/dashboard', '销售大脑')
    }
  } else {
    goPageInfo('company-joinCompany', '/company/joinCompany', '申请加入团队')
  }
}
//用户习惯列表
const userHabitsList = computed(() => store.state.user.userHabitsList)
//新增用户习惯
const addHabits = async (type) => {
  try {
    let res = await userHabitsAdd({ content: { companyType: type }, type: `business,${companyInfo.value.id}` })
  } catch (error) {}
}
//修改用户习惯
const updateHabits = async (type) => {
  console.log(type)
  try {
    let res = await userHabitsUpdate({ content: { companyType: type }, type: `business,${companyInfo.value.id}`, id: userHabitsList.value[0]?.id || 0 })
  } catch (error) {}
}
//更新用户习惯相关
const userUpdateInfo = (habitsInfo) => {
  if (habitsInfo === '/purchase') {
    if (userHabitsList.value.length > 0) {
      updateHabits('purchase').then(() => {
        userHabitsList.value[0].content.companyType = 'purchase'
        store.commit('SAVE_HABITSLIST', userHabitsList.value)
      })
    } else {
      addHabits('purchase').then(() => {
        store.dispatch('getUserHabitsList', `business,${companyInfo.value.id}`)
      })
    }
  } else if (habitsInfo === '/market') {
    if (userHabitsList.value.length > 0) {
      updateHabits('market').then(() => {
        userHabitsList.value[0].content.companyType = 'market'
        store.commit('SAVE_HABITSLIST', userHabitsList.value)
      })
    } else {
      addHabits('market').then(() => {
        store.dispatch('getUserHabitsList', `business,${companyInfo.value.id}`)
      })
    }
  } else {
    if (userHabitsList.value.length > 0) {
      updateHabits('noInfo').then(() => {
        userHabitsList.value[0].content.companyType = 'noInfo'
        store.commit('SAVE_HABITSLIST', userHabitsList.value)
      })
    } else {
      addHabits('noInfo').then(() => {
        store.dispatch('getUserHabitsList', `business,${companyInfo.value.id}`)
      })
    }
  }
}
//当前团队业务类型
const teamBusinessType = computed(() => JSON.parse(sessionStorage.getItem('vuex')).teamInfo?.businessType)

//开启另一端
const openOther = async () => {
  if (teamBusinessType.value === 2) {
    let list = props.originalList.filter((ele) => pmenu.value.path !== ele.path)
    showMenu(list[0])
    userUpdateInfo(list[0]?.path)
    closeAll(list[0]?.path)
    $bus.emit('refreshMessage', list[0])
  } else {
    try {
      // businessType 业务类别0采购，1销售，2采购+销售
      let res = await updateSolutionInfo({ businessType: 2, solutionVersion: 0 })
      if (res.code === 200) {
        store.commit('SAVE_TREE', {})
        location.reload()
      } else {
        ElMessage.warning(res.message)
      }
    } catch (error) {}
  }
}
const emit = defineEmits(['chooseMenu'])
const internalInstance = getCurrentInstance() //当前组件实例
const $bus = internalInstance.appContext.config.globalProperties.$bus
//如果获取到关闭事件就调用刷新未读消息数量
if (!$bus.all.get('refreshMessage'))
  $bus.on('refreshMessage', (res) => {
    if (res) {
      showMenu(res)
    } else {
      getSysNum()
      getMsgQueryPage()
    }
  })
//用户信息
const info = ref({})

/**
 * 搜索业务
 */
const serachType = ref(0)
const placeholder = ref('请输入商品名称')

onMounted(() => {
  getUserInfo()
  if (route.query.teamId && JSON.parse(sessionStorage.getItem('vuex')).teamInfo.id != route.query.teamId) {
    changeTeam(route.query.teamId, route.path.slice(1))
  }
  getMsgQueryPage(msgPage.value)
  platform()
})

/**
 * 切换查询的类型
 * @param {*} e  0.商品/1.供应商
 */
function changeSearchType(e) {
  if (e == 1) {
    placeholder.value = '请输入供应商名称'
  } else {
    placeholder.value = '请输入商品名称'
  }
}

//跳采购管理制度
const goRegimen = () => {
  router.push('/procurement/system')
}
//搜索客人
const searchValueSupplier = ref('')
const goSupplier = () => {
  router.push({ path: '/market/customerManagement', query: { searchValue: searchValueSupplier.value } })
}
//待办事项
const msgPage = ref({
  size: 5,
  current: 1
})
const msgData = ref([])
const msgTotal = ref(0)
const msgPageCount = ref(0)
const elPopoverRef = ref()
const getMsgQueryPage = (page) => {
  //退出登录之后 依旧请求的报异常的bug修改
  let token = localStorage.getItem('token')
  if (!token) {
    return
  }
  let type1 = ''
  if (pmenu.value.path == '/purchase') {
    type1 = 'PURCHASE'
  } else {
    type1 = 'SELL'
  }
  msgQueryPage({ ...page, isTask: true, status: 0, type1 }).then((res) => {
    if (res.code == 200) {
      msgData.value = res.data.records
      msgTotal.value = res.data.total
      msgPageCount.value = Math.ceil(msgTotal.value / 5)
    }
  })
}
const currentChange = (val) => {
  msgPage.value.current = val
  getMsgQueryPage(msgPage.value)
}
const popoverShow = () => {
  msgPage.value = {
    size: 5,
    current: 1
  }
  getMsgQueryPage(msgPage.value)
}
const btnClick = (row) => {
  elPopoverRef.value.visibility = false
}
const showMessage = ref(true)
const messageKey = ref(0)
//跳待办列表
const goBackLog = () => {
  router.push('/home/announcementa0peration')
}
//系统未读消息数量
const sysMessageNum = ref(null)
//获取消息数量
const getSysNum = async () => {
  //退出登录之后 依旧请求的报异常的bug修改
  let token = localStorage.getItem('token')
  if (!token) {
    return
  }
  let type1 = ''
  if (pmenu.value.path == '/purchase') {
    type1 = 'PURCHASE'
  } else {
    type1 = 'SELL'
  }
  try {
    let res = await msgUnreadNum({ type1 })
    if (res.code === 200) {
      showMessage.value = false
      nextTick(() => {
        sysMessageNum.value = res.data
        messageKey.value++
        showMessage.value = true
      })
    }
    console.log(res)
  } catch (error) {}
}
//前往系统消息
const gosysInfo = () => {
  if (pmenu.value.path == '/purchase') {
    router.push('/home/moreSystemMessages')
  } else {
    router.push('/market/home/moreSystemMessages')
  }
}
const goWaitingInfo = () => {
  if (pmenu.value.path == '/purchase') {
    router.push('/home/announcementa0peration')
  } else {
    router.push('/market/home/announcementa0peration')
  }
}
const searchValue = ref('')
const goMall = (searchValue) => {
  const params = {
    userId: localStorage.getItem('userId'),
    token: localStorage.getItem('token'),
    username: JSON.parse(sessionStorage.getItem('vuex'))?.userInfo?.name,
    teamInfo: JSON.parse(sessionStorage.getItem('vuex'))?.teamInfo
  }
  if (serachType.value === 0) {
    store.dispatch('toMall', {
      path: '/search',
      ycc: params,
      backParams: `keyword=${searchValue}`
    })
  } else {
    store.dispatch('toMall', {
      path: '/searchSupplierList',
      ycc: params,
      backParams: `keyword=${searchValue}`
    })
  }
}
//融云ref
const rongyunRef = ref()
//初始化定时器
let timer = null
// 融云消息
function getRyMessage(data) {
  //接到被移除团队的请求 刷新页面 存在历史消息推送也刷新页面的bug
  // if (data.businessTypeCode === 'REMOVE_TEAM') {
  //   window.location.reload()
  //   return
  // }
  // 如果融云推送消息刷新消息数量
  //   sysMessageNum.value += 1
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(() => {
    getSysNum()
    getMsgQueryPage()
  }, 3000)
}
const teamInfo = ref({})
//多团队列表
const teamList = ref([])
//更新用户
const updateUserInfoRef = ref()
//是否展示引导弹窗
const showUpdateUserInfo = ref(false)
//用户岗位名
const userJobName = ref('')
//获取用户信息
const getUserInfo = async () => {
  //   store.dispatch('queryUserInfo').then((res) => {
  //     let regPhone = /^1\d{10}$/
  //     info.value = res
  //     if (regPhone.test(res.name)) {
  //       showUpdateUserInfo.value = true
  //       nextTick(() => {
  //         updateUserInfoRef.value.init()
  //       })
  //     }
  //     //   要放开注释
  //     rongyunRef.value.getToke()
  //   })
  try {
    info.value = await store.dispatch('queryUserInfo')
    rongyunRef.value.getToke()
  } catch (error) {}
  const businessType = ref([])
  //获取用户当前团队信息
  store.dispatch('getTeamInfo').then(async (res) => {
    teamInfo.value = res
    try {
      let resInfo = await teamUserInfoQueryInfo(res.id)
      if (resInfo.code === 200) {
        userJobName.value = resInfo.data?.employeeJob
      }
    } catch (error) {}
    let list = []
    //获取用户所有团队记录列表
    try {
      const res = await getApplyListData({ size: -1 })
      if (res.code == 200) {
        list = res.data.records.filter((ele, i) => {
          return ele.joinResult === 0
        })
        getNowTeamList(list)
      }
    } catch (error) {}
  })
}
//获取当前团队列表
const getNowTeamList = async (list) => {
  try {
    let res = await teamUserInfoMultiTeamInfo()
    if (res.code === 200) {
      console.log(res.data)
      teamList.value = res.data
      //没有团队就一直弹窗
      if ((!teamList.value || teamList?.value.length == 0) && list.length === 0) {
        showUpdateUserInfo.value = true
        nextTick(() => {
          let regPhone = /^1\d{10}$/
          updateUserInfoRef.value.init(regPhone.test(info.value.name) ? 0 : 1)
        })
      } else if ((!teamList.value || teamList?.value.length == 0) && list.length > 0) {
        router.push({ path: '/company/joinCompany', query: { haveRecord: '1' } })
      }
      if (res.data.length && !teamInfo.value?.teamName) {
        changeTeam(res.data[0]?.id, '', res.data[0]?.rootOrgId)
      }
      //   businessType.value = teamList.value.map((x) => {
      //     return x.businessType
      //   })
    } else {
      ElMessage.warning(res.message)
    }
  } catch (error) {}
}
//个人认证ref弹窗
const PersonalCertificationDialogRef = ref()
//个人认证
const goCer = () => {
  PersonalCertificationDialogRef.value.init('per')
}
//提交反馈
const feedbackRef = ref()
//是否展示提交反馈
const showFeedback = ref()
//切换团队
const changeTeam = async (id, path = '', rootOrgId = '') => {
  if (rootOrgId) {
    //切换团队判断跳转首页
    axios({
      url: import.meta.env.VITE_VUE_APP_ENV + '/api-module/api/module/queryUserModuleTree',
      method: 'post',
      headers: { teamId: id || '', userId: localStorage.getItem('userId') || '', Platform: 'WEB', Access_Token: localStorage.getItem('token') || '' }
    })
      .then(async (res) => {
        if (res.data.code === 200) {
          if (res.data.data?.buttonSet.some((ele) => ele === 'XS' || ele === 'CG')) {
            if (res.data.data?.buttonSet.some((ele) => ele === 'CG')) {
              path = 'purchase/dashboard'
            } else {
              path = 'market/dashboard'
            }
          } else {
            path = 'company/joinCompany'
          }
          try {
            let resInfo = await userCurrentTeamChange(id)
            if (resInfo.code === 200) {
              store.commit('SAVE_TREE', {})
              store.commit('clearTags', { name: 'company-joinCompany', title: '申请加入团队', path: '/company/joinCompany' })
              window.location.href = import.meta.env.VITE_VUE_APP_URL + path
            } else {
              ElMessage.warning(resInfo.message)
            }
          } catch (error) {}
        }
      })
      .catch(async () => {
        try {
          let resInfo = await userCurrentTeamChange(id)
          if (resInfo.code === 200) {
            store.commit('SAVE_TREE', {})
            store.commit('clearTags', { name: 'company-joinCompany', title: '申请加入团队', path: '/company/joinCompany' })
            window.location.href = import.meta.env.VITE_VUE_APP_URL + path
          } else {
            ElMessage.warning(resInfo.message)
          }
        } catch (error) {}
      })
    //  try {
    //    let resInfo = await orgCertificationInfoQueryDetails(rootOrgId)
    //    if (resInfo.code === 200) {
    //      if (resInfo.data.status === 'SUCCESS') {
    //        path = 'company/companyCertification'
    //      } else {
    //        path = 'company/companyCertification'
    //      }
    //      try {
    //        let res = await userCurrentTeamChange(id)
    //        if (res.code === 200) {
    //          store.commit('SAVE_TREE', {})
    //          store.commit('clearTags', { name: 'company-joinCompany', title: '申请加入团队', path: '/company/joinCompany' })
    //          window.location.href = import.meta.env.VITE_VUE_APP_URL + path
    //        } else {
    //          ElMessage.warning(res.message)
    //        }
    //      } catch (error) {}
    //    } else {
    //      ElMessage.warning(resInfo.message)
    //    }
    //  } catch (error) {}
  } else {
    try {
      let res = await userCurrentTeamChange(id)
      if (res.code === 200) {
        store.commit('SAVE_TREE', {})
        window.location.href = import.meta.env.VITE_VUE_APP_URL + path
      } else {
        ElMessage.warning(res.message)
      }
    } catch (error) {}
  }
}
//定义

const onRoutes = computed(() => {
  return route.path
})
//获取当前团队所属版本
const nowTeam = computed(() => JSON.parse(sessionStorage.getItem('vuex')).teamInfo.solutionVersion)

//侧边栏折叠开启状态
const collapse = computed(() => store.state.base.collapse)
//定义列表接收内容
let items = ref([])
items.value = props.originalList
// 判断如果是点击监督人招标大厅
const selectMenu = async (index, indexPath) => {
  router.push({ path: index })
}
//当前路由path
const routePath = ref('')
watch(
  () => route.path,
  (val) => {
    console.log(val, 'route.path')
    routePath.value = val
    showThis()
  }
)
/**
 * 递归过滤节点，生成新的树结构
 * @param {Node[]} nodes 要过滤的节点
 * @param {node => boolean} predicate 过滤条件，符合条件的节点保留
 * @return 过滤后的节点
 */
const deal = (nodes, predicate) => {
  // 如果已经没有节点了，结束递归
  if (!(nodes && nodes.length)) {
    return []
  }

  const newChildren = []
  for (const node of nodes) {
    if (predicate(node)) {
      // 如果节点符合条件，直接加入新的节点集
      newChildren.push(node)
      // node.children = deal(node.child, predicate)
    } else {
      // 如果当前节点不符合条件，递归过滤子节点，
      // 把符合条件的子节点提升上来，并入新节点集
      newChildren.push(...deal(node.child, predicate))
    }
  }
  return newChildren
}

//跳商城
const goShop = () => {
  const params = {
    userId: localStorage.getItem('userId'),
    teamInfo: JSON.parse(sessionStorage.getItem('vuex')).teamInfo,
    username: JSON.parse(sessionStorage.getItem('vuex')).userInfo.name || '暂无用户名',
    token: localStorage.getItem('token')
  }
  store.dispatch('toMall', { ycc: params })
}

const nextMenu = ref([])
const pmenu = ref({})
//路由监听高亮
function showThis(type = 0) {
  nextTick(() => {
    filterUrl(route.path, 1, JSON.parse(JSON.stringify(props.originalList)), [], '', '', type)
  })
}
showThis(1)
//点击显示
function showMenu(routeInfo) {
  console.log(routeInfo)
  pmenu.value = routeInfo
  getSysNum()
  getMsgQueryPage()
  //   nextMenu.value = filterUrl(routeInfo.child, 2)
  //   if (!routeInfo.child || routeInfo.child.length == 0) {
  //     router.push({ path: routeInfo.path })
  //   } else {
  //     if (routeInfo.child[0].child && routeInfo.child[0].child.length) {
  //       let path = lastChild(routeInfo.child[0].child)
  //       router.push({ path: path })
  //     } else {
  //       router.push({ path: routeInfo.child[0].path })
  //     }
  //   }
}
// 递归找出最后一级child
const lastChild = function (arr, path = '') {
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      path = arr[i].path
      if (arr[i].child?.length) {
        lastChild(arr[i].child, path)
      }
    }
  }
  return path
}

//转换外部链接的路由
function filterUrl(map, type, list = [], childList = [], titleName = '', path = '', judge) {
  let newMap = []
  if (type === 1) {
    for (let i = 0; i < list.length; i++) {
      //路由对比处理菜单展示
      if (list[i].path === map) {
        let newListInfo = JSON.parse(JSON.stringify(list[i]))
        pmenu.value = newListInfo
        pmenu.value.menuName = titleName || newListInfo.menuName
        pmenu.value.path = path || newListInfo.path
        nextMenu.value = childList || filterUrl(list[i]?.child || [], 2)
        if (judge) {
          getSysNum()
          getMsgQueryPage()
        }
        break
      } else {
        //递归循环
        if (list[i].child && list[i].child.length > 0) {
          filterUrl(map, type, list[i].child, childList.length > 0 ? childList : list[i].child, titleName || list[i].menuName, path || list[i].path, judge)
        }
      }
    }
  } else {
    map &&
      map.forEach((item) => {
        //处理隐藏
        if (!item.hidden) {
          return false
        }
        //递归循环
        if (item.child && item.child.length > 0) {
          item.child = filterUrl(item.child, type)
        }
        newMap.push(item)
      })
    return newMap
  }
}
//用户信息修改相关
const userInfoAboutRef = ref()
const changePhoneRef = ref()
const changePasswordRef = ref()
const showRef = ref(false)
const showPasswordRef = ref(false)
const showUserInfoRef = ref(false)
//批量删除用户偏好
const delUserHabits = async () => {
  try {
    let list = userHabitsList.value.map((ele) => ele.id).filter((ele, index) => index != 0)
    let res = await userHabitsDeleteBatch(list)
    if (res.code === 200) {
    }
  } catch (error) {}
}
// 用户名下拉菜单选择事件
const handleCommand = async (command) => {
  delUserHabits()
  if (command == 'loginout') {
    //退出登录
    try {
      let res = await logout()
      if (res.code === 200) {
        store.commit('SET_USERINFO', {})
        store.commit('set_systemDictInfo', {})
        store.commit('set_dictTreeInfo', {})
        store.commit('SAVE_TREE', {})
        store.commit('SET_TEAMINFO', {})
        store.commit('SET_TEAMUSERINFO', {})
        store.commit('SAVE_HABITSLIST', [])
        localStorage.clear()
        window.sessionStorage.clear()
        location.href = import.meta.env.VITE_VUE_APP_URL + 'login'
      } else {
        ElMessage.warning(res.message)
      }
    } catch (error) {}
  } else if (command == 'changePhone') {
    //修改手机号
    showRef.value = true
    nextTick(() => {
      changePhoneRef.value.init()
    })
  } else if (command == 'changePassword') {
    //修改密码
    showPasswordRef.value = true
    nextTick(() => {
      changePasswordRef.value.init(info.value)
    })
  } else if (command.split('changeTeam,')[0] == '') {
    //修改团队
    changeTeam(JSON.parse(command.split('changeTeam,')[1])?.id, '', JSON.parse(command.split('changeTeam,')[1])?.rootOrgId)
  } else if (command.split('changeType,')[0] == '') {
    //修改采购销售
    showMenu(JSON.parse(command.split('changeType,')[1]))
  } else if (command == 'feedback') {
    //意见反馈
    showFeedback.value = true
    nextTick(() => {
      feedbackRef.value.init()
    })
  }
}
//编辑个人资料
const changeUserInfo = () => {
  showUserInfoRef.value = true
  nextTick(() => {
    userInfoAboutRef.value.init()
  })
}
//关闭弹窗
const closeModel = (val) => {
  //   console.log(val)
  if (val) {
    getUserInfo()
  }
  showRef.value = false
  showPasswordRef.value = false
  showUserInfoRef.value = false
  showUpdateUserInfo.value = false
  showFeedback.value = false
}
const businessType = ref()
// 判断有没有签约平台服务商
const platform = async () => {
  try {
    let res = await platformMallSupplierManagecheckAgreement()
    if (res.code == 200) {
      businessType.value = res.data
    }
  } catch (error) {}
}
</script>
<style lang="scss" scope>
   .download-poper{
      margin: 0 0 0 -13px !important;
   }
   .download-poper,
.popperOptions {
  inset: -6px auto auto 0px !important;
  box-sizing: border-box !important;
}
.search-button {
  img {
    width: 16px;
    height: 16px;
  }
}
.seaarch-box {
  min-width: 280px;
  margin-left: 80px;
}
.serach-type-change {
  width: 78px !important;
  padding: 0 10px !important;
  color: #1d2129 !important;
  .el-input-group--append .el-select .el-input .el-input__inner {
    width: 78px !important;
  }
}
.change-busness-type {
  width: 110px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-weight: 400;
  font-size: 14px;
  color: #165dff;
}
</style>

<style lang="scss">
.common-header {
  -webkit-touch-callout: text;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  width: 100%;
  min-width: 1440px;
  box-sizing: border-box;
  user-select: text;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(78, 89, 105, 0.06);
  //   width: calc(100% - 240px);
  transition: margin 0.3s linear;
  transition: width 0.3s linear;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  //   z-index: 0; 采购制度全屏冲突
  position: relative;

  .input-with-select-sale .el-input__inner::-webkit-input-placeholder,
  .input-with-select .el-input__inner::-webkit-input-placeholder {
    color: #c9cdd4 !important;
  }
  .input-with-select-sale .el-input__inner::-moz-input-placeholder,
  .input-with-select .el-input__inner::-moz-input-placeholder {
    color: #c9cdd4 !important;
  }
  .input-with-select-sale .el-input__inner::-ms-input-placeholder,
  .input-with-select .el-input__inner::-ms-input-placeholder {
    color: #c9cdd4 !important;
  }
  .input-with-select .el-input__inner {
    padding: 0 10px !important;
    color: #1d2129 !important;
    width: 200px !important;
  }
  .input-with-select-sale .el-input__inner {
    width: 100% !important;
  }
  .input-with-select .el-input-group--append {
    border-radius: 4px;
    border-top-left-radius: 0 !important;
    border-bottom-left-radius: 0 !important;
  }

  .input-with-select .el-input-group__prepend {
    background-color: var(--el-fill-color-blank);
    border-radius: 4px;
    border-top-right-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .leftBox {
    display: flex;
    align-items: center;
    .teamName-platform {
      display: flex;
      align-items: center;
      .svg-pla {
        margin-right: 8px;
      }
    }
  }
  .clue {
    height: 60px;
    display: flex;
    align-items: center;
    margin-right: 30px;
  }
  .message-container {
    display: flex;
    align-items: center;
    height: 60px;
  }

  .clue-container {
    margin-left: 100px;
    background: #f7f8fa;
    border-radius: 2px;
    height: 36px;
    display: flex;
    align-items: center;
    padding: 14px;
    box-sizing: border-box;
    font-size: 14px;
    color: #1d2129;
    .clue-name {
      margin-left: 20px;
      cursor: pointer;
      width: 224px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-weight: 600;
      font-size: 14px;
    }
    .waiting::after {
      position: absolute;
      content: '';
      width: 1px;
      height: 14px;
      right: -14px;
      top: 25px;
      background: #e5e6eb;
    }
    .waiting {
      margin-left: 12px;
      display: flex;
      align-items: center;
      position: relative;
      font-size: 14px;
      cursor: pointer;
      span {
        color: #ff4d4f;
        font-size: 24px;
        margin: 0 5px;
        margin-bottom: 5px;
      }
    }
  }
  .search-container {
    margin-right: 23px;
    width: 280px;
    .append_box {
      padding: 0 10px;
    }
  }
  .serach-type-change {
    width: 78px !important;
    padding: 0 10px !important;
    color: #1d2129 !important;
    .el-input__inner {
      width: 78px !important;
    }
  }
  .messageBell {
    cursor: pointer;
    height: 20px;
    line-height: 20px;
    margin-right: 24px;
    i {
      font-size: 24px;
      color: #4e5969;
    }

    .el-badge__content--danger {
      font-size: 12px;
      background-color: rgba(255, 77, 79, 1);
    }
    .el-badge__content.is-fixed {
      top: 2px;
      right: 11px;
    }
  }
  .messageBell:hover .iconfont {
    color: #1664ff;
  }
  .guanlizhidu {
    cursor: pointer;
    height: 20px;
    line-height: 20px;
    margin-right: 25px;
    display: flex;
    align-items: center;
    height: 60px;
    i {
      font-size: 24px;
      color: #4e5969;
    }
  }
  .guanlizhidu:hover .iconfont {
    color: #1664ff;
  }
  .chooseTypeBox {
    font-size: 16px;
    font-weight: 600;
    color: rgba(29, 33, 41, 1);
    cursor: pointer;
    div {
      margin-right: 5px;
    }
  }
  .rightBox {
    position: absolute;
    right: 20px;
    top: 0;
    height: 60px;
    display: flex;
    align-items: center;
    .backlog {
      .download {
        background: #ffffff;
        .image1,
        .image2 {
          width: 24px;
          height: 24px;
        }
        &:hover {
          .image1 {
            display: none;
          }
          .image2 {
            display: inline-block !important;
          }
        }
      }
      .header_waiting {
        cursor: pointer;
        margin-right: 24px;
        font-size: 24px;
        align-items: center;
        height: 60px;
        display: flex;
        .iconfont {
          font-size: 24px;
          color: #4e5969;
        }
      }
      .header_waiting:hover .iconfont {
        color: #1664ff;
      }
      // i {
      //   font-size: 24px;
      //   cursor: pointer;
      //   margin-right: 20px;
      // }
      // padding-right: 15px;
    }
    .userInfoBox {
      height: 60px;
      img {
        border-radius: 50%;
      }
      .el-dropdown-link {
        width: 38px;
        margin-top: 10px;
      }
      .userJobInfo {
        cursor: pointer;
        width: auto;
        margin: 6px 0 0 0;
        position: relative;
        .name {
          font-weight: 600;
          color: #1d2129;
          font-size: 14px;
          padding-top: 17px;
        }
        .job {
          line-height: 20px;
          height: 20px;
          div {
            font-weight: 500;
            /* transform: scale(0.5); */
            color: #1664ff;
            /* margin-left: -20px;
            margin-top: -6px; */
            font-size: 12px;
          }
        }
      }
    }
    .shopBox {
      display: flex;
      align-items: center;
      cursor: pointer;
      width: 100px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      color: #1664ff;
      font-weight: 600;
      font-size: 14px;
      /* 主色调/浅色背景 */
      /* background: #e8f3ff; */
      border-radius: 20px;
      margin: 13px 30px 0;
      i {
        margin-right: 3px;
      }
    }
    .teamName-platform {
      display: flex;
      align-items: center;
      .svg-pla {
        margin-right: 8px;
      }
    }
  }
  .left-container {
    display: flex;
    align-items: center;
    min-width: 865px;
    .logo-img {
      // width: 390px;
      height: 20px;
    }
  }
}
.UserNameBox {
  width: 270px;
  height: 100px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  img {
    margin: 20px 16px 20px 24px;
    border-radius: 6px;
  }
  .rightName {
    line-height: 25px;
    padding-top: 5px;
    margin: 20px 16px 0 0;
    color: #1d2129;
    width: 84px;
    font-size: 14px;
    font-weight: 600;
    .userName {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
    }
    .editInfo {
      position: relative;
      .noCer {
        width: 64px;
        height: 32px;
        line-height: 32px;
        font-size: 18px;
        text-align: center;
        background: #f2f3f5;
        border-radius: 2px;
        transform: scale(0.5);
        position: absolute;
        left: -15px;
        color: #86909c;
      }
      .Cer {
        width: 64px;
        height: 32px;
        line-height: 32px;
        font-size: 18px;
        text-align: center;
        background: #e8f3ff;
        border-radius: 2px;
        transform: scale(0.5);
        position: absolute;
        color: #1664ff;
        left: -15px;
      }
    }
  }
  .editArrows {
    cursor: pointer;
    font-weight: 500;
    height: 20px;
    margin: 40px 25px 0 0;
    display: flex;
    align-items: center;
    span {
      color: #c9cdd4;
      font-size: 12px;
      height: 20px;
      line-height: 18px;
      display: inline-block;
    }
  }
}
.goCerBox {
  background: #ffffff;
  border: 1px solid #94bfff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 2px;
  width: 230px;
  height: 84px;
  margin: 0 auto 5px;
  .rightName {
    line-height: 22px;
    margin: 20px 16px 0 20px;
    color: #1d2129;
    width: 85px;
    font-size: 14px;
    font-weight: 600;
    .editInfo {
      cursor: pointer;
      font-weight: 500;
      height: 20px;
      margin: 4px 0 0 0;
      display: flex;
      align-items: center;
      span {
        color: #1664ff;
        font-size: 12px;
        height: 20px;
        line-height: 18px;
        display: inline-block;
      }
    }
  }
  .editArrows {
    cursor: pointer;
    font-weight: 500;
    height: 20px;
    margin: 40px 25px 0 0;
    display: flex;
    align-items: center;
    span {
      color: #c9cdd4;
      font-size: 12px;
      height: 20px;
      line-height: 18px;
      display: inline-block;
    }
  }
}
.common-header-menulist {
  text-align: center;
  width: auto !important;
  padding: 20px 40px !important;
}
.headerCompanyBox {
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #1d2129;
  i {
    color: #4e5969;
    font-weight: 600;
    margin-left: 15px;
  }
}
.changeInfoBox {
  padding: 0 !important;
  .el-dropdown-menu__item {
    line-height: 51px !important;
    text-align: left;
    padding-left: 23px !important;
  }
  .phone {
    line-height: 62px !important;
    border-top: 1px solid #f2f3f5;
    text-align: center;
  }
}
.common-header-companyMenulist {
  max-height: 500px;
  padding: 0 !important;
  .el-dropdown-menu__item {
    line-height: 35px !important;
    border-bottom: 1px solid #e8f3ff;
  }
}
</style>
