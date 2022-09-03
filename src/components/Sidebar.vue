<template>
  <div class="sidebarCon" :style="{ width: !collapse ? 'vw(256)' : 'vw(60)' }">
    <div :class="['sidebar', { collapseSide: !collapse }, { noSide: collapse }]">
      <el-menu
        :class="['sidebar-el-menu', { pl15: !collapse }, { pl10: collapse }]"
        :default-active="onRoutes"
        :collapse="collapse"
        v-if="showSlide"
        text-color="rgba(255,255,255,0.66)"
        active-text-color="#fff"
        @select="selectMenu"
        background-color="#122044"
        unique-opened
      >
        <!-- :style="{ height: computerHeight }" -->
        <div v-for="(item, index) in originalList" :key="index" :class="{ haveBorder: haveBorderLine(item.menuName) }">
          <el-menu-item v-if="item.child && item.child.length > 0 && !item.isShow" :key="item.id" :index="item.path">
            <i
              class="iconfont"
              :style="{ 'margin-right': !collapse ? '12px' : 0 }"
              v-html="item.path === onRoutes ? item.miniatureIcon || item.icon : item.icon"
            ></i>
            <span v-show="!collapse" :class="{ 'active-class-text': item.path === onRoutes }">{{ item.menuName }}</span>
          </el-menu-item>
          <template v-else-if="item.child && item.child.length > 0 && item.isShow">
            <el-submenu :index="item.path" :key="index">
              <template #title v-if="item.hidden && item.menuType != 2">
                <i class="iconfont" v-html="haveChildIcon(item)"></i>
                <span v-show="!collapse" style="margin-left: 12px">{{ item.menuName }}</span>
              </template>
              <div :class="{ towBox: !collapse, towBoxW: collapse }">
                <template v-for="(subItem, j) in item.child" :key="j">
                  <el-menu-item v-if="subItem.hidden && subItem.menuType != 2" :key="subItem.id" :index="subItem.path"
                    ><i class="iconfont" v-html="subItem.icon"></i>{{ subItem.menuName }}
                  </el-menu-item>
                </template>
              </div>
              <!-- <div class="borderOne"></div> -->
            </el-submenu>
          </template>
          <template v-else>
            <el-menu-item v-if="item.hidden && item.menuType != 2" :key="item.id" :index="item.path">
              <i
                class="iconfont"
                :style="{ 'margin-right': !collapse ? '12px' : 0 }"
                v-html="item.path === onRoutes ? item.miniatureIcon || item.icon : item.icon"
              ></i>
              <span v-show="!collapse" :class="{ 'active-class-text': item.path === onRoutes }">{{ item.menuName }}</span>
            </el-menu-item>
          </template>
          <img class="border-img" v-if="haveBorderLine(item.menuName) && collapse" src="../assets/img/home/sidebar-line-small.png" alt="" />
          <img class="border-img-small" v-if="haveBorderLine(item.menuName) && !collapse" src="../assets/img/home/sidebar-line.png" alt="" />
        </div>
      </el-menu>
      <div class="bottomChangeBox" style="height: 100px; pointer-events: none">
        <div class="bottomBtnBox">
          <div class="to-mall" @click="goShop" v-show="pmenu.path == '/purchase'" :style="{ marginLeft: collapse ? '5px' : 'auto' }">
            <img src="@/assets/img/to_mall.png" alt="" />
            <span v-show="!collapse">我的商城</span>
          </div>
          <!-- <div :class="{ flex: !collapse }" v-if="originalList.length > 1">
            <div
              v-for="(item, index) in originalList"
              @click="handleCommand('changeType,' + JSON.stringify(item))"
              :key="index"
              :class="pmenu.path == item.path ? 'bottomBtnActive' : 'bottomBtn'"
              v-show="pmenu.path !== item.path"
            >
              <div>切换<br v-show="collapse" />{{ item.menuName }}端</div>
            </div>
          </div>
          <div v-hasRole="['GS_JC_GNPZ']" :class="{ flex: !collapse }" v-if="originalList.length === 1 && (businessType === 0 || businessType === 1)">
            <div v-for="(item, index) in originalList" @click="openOther" :key="index" :class="'bottomBtn'">
              <div>开启<br v-show="collapse" />{{ item.menuName === '采购' ? '销售' : '采购' }}端</div>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div :class="['sidebarIcon', { sidebarIconC: !collapse }, { sidebarIconO: collapse }]" @click="close"></div>
  </div>
</template>

<script setup>
import { computed, ref, watch, onMounted, getCurrentInstance, inject, nextTick } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { userHabitsAdd, userHabitsUpdate } from '@/api/user/index.js'
import { updateSolutionInfo } from '@/api/systemManagement/organizationalStructure.js'
import { ElMessage } from 'element-plus'
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
//定义
const route = useRoute()
const router = useRouter()
const onRoutes = computed(() => {
  return route.path
})
watch(
  () => route.path,
  (val) => {
    // console.log(val)
    showThis()
  }
)
const internalInstance = getCurrentInstance() //当前组件实例
const $bus = internalInstance.appContext.config.globalProperties.$bus
const refreshMessage = inject('refreshMessage')
//计算侧边栏展示高度
const computerHeight = computed(() => {
  let num = !collapse.value ? 'calc(100% - 206px)' : 'calc(100% - 244px)'

  if (props.originalList.length > 1 && pmenu.value.path == '/purchase') {
    //如果是采购并且有采购+销售权限
    num = !collapse.value ? 'calc(100% - 206px)' : 'calc(100% - 244px)'
  } else if (props.originalList.length > 1 && pmenu.value.path == '/market') {
    //如果是销售并且有采购+销售权限
    num = 'calc(100% - 210px)'
  } else if (pmenu.value.path == '/market') {
    //如果是只有销售权限
    num = 'calc(100% - 80px)'
  } else if (pmenu.value.path == '/purchase') {
    //如果是只有采购权限
    num = 'calc(100% - 136px)'
  }
  return num
})
//计算侧边栏底部导航高度
const bottomBoxcomputerHeight = computed(() => {
  let boxHeight = '0'
  console.log(pmenu.value.path, 'pmenu.value.path')
  if (props.originalList.length > 1 && pmenu.value.path == '/purchase') {
    //如果是采购并且有采购+销售权限
    boxHeight = !collapse.value ? '136px' : '154px'
  } else if (props.originalList.length > 1 && pmenu.value.path == '/market') {
    //如果是销售并且有采购+销售权限
    boxHeight = '60px'
  } else if (pmenu.value.path == '/market') {
    //如果是只有销售权限
    boxHeight = '0'
  } else if (pmenu.value.path == '/purchase') {
    //如果是只有采购权限
    boxHeight = '0px'
  }
  return boxHeight
})
//采购寻源
const goShowList = () => {
  const params = {
    userId: localStorage.getItem('userId'),
    teamInfo: JSON.parse(sessionStorage.getItem('vuex')).teamInfo,
    username: JSON.parse(sessionStorage.getItem('vuex')).userInfo.name || '暂无用户名',
    token: localStorage.getItem('token')
  }
  store.dispatch('toMall', { path: '/searchSupplierList', backParams, ycc: params })
}
const store = useStore()
//侧边栏折叠开启状态
const collapse = computed(() => store.state.base.collapse)
//定义列表接收内容
let items = ref([])
const showSlide = ref(true)
// 判断如果是点击监督人招标大厅
const selectMenu = async (index, indexPath) => {
  const params = {
    userId: localStorage.getItem('userId'),
    username: JSON.parse(sessionStorage.getItem('vuex')).userInfo.name || '暂无用户名',
    token: localStorage.getItem('token'),
    teamInfo: JSON.parse(sessionStorage.getItem('vuex')).teamInfo
  }
  if (index === '/goMall') {
    //防止点击后选中
    showSlide.value = false
    nextTick(() => {
      showSlide.value = true
    })
    store.dispatch('toMall', { ycc: params })
  } else if (
    index === '/purchase/enquiry/addPurchaseApply' ||
    index === '/purchase/bidding/addPurchaseApply' ||
    index === '/purchase/NegotiatedProcedure' ||
    index === '/purchase/shopping/addPurchaseApply' ||
    index === '/purchase/agreement/addPurchaseOrder' ||
    index === '/purchase/direct/addPurchaseOrder'
  ) {
    router.push({ path: index, query: { type: 'add' } })
  } else if (index === '/goMallPlatformServices') {
    //防止点击后选中
    showSlide.value = false
    nextTick(() => {
      showSlide.value = true
    })
    store.dispatch('toMall', {
      path: '/searchSupplierList',
      ycc: params,
      backParams: `keyword=`
    })
  } else {
    router.push({ path: index })
  }
}

//当前团队业务类型
const businessType = computed(() => JSON.parse(sessionStorage.getItem('vuex')).teamInfo?.businessType)
console.log(businessType.value)

//开启另一端
const openOther = async () => {
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
const companyInfo = computed(() => JSON.parse(sessionStorage.getItem('vuex')).teamInfo)
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
//判断调整传值
const goPageInfo = (name, path, text) => {
  store.commit('clearPageSet')
  store.commit('clearTags', { name: name, title: text, path: path })
  router.push(path)
}
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
onMounted(() => {
  console.log(route.path)
  if (route.path == '/purchase/dashboard' || route.path == '/market/dashboard') {
    store.dispatch('getUserHabitsList', `business,${companyInfo.value.id}`).then((res) => {
      if (res[0]?.content?.companyType == 'market' && JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo?.buttonSet.some((ele) => ele === 'XS')) {
        goPageInfo('market-dashboard', '/market/dashboard', '销售大脑')
      } else if (res[0]?.content?.companyType == 'purchase' && JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo?.buttonSet.some((ele) => ele === 'CG')) {
        goPageInfo('purchase-dashboard', '/purchase/dashboard', '采购大脑')
      } else {
        if (JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo?.buttonSet.some((ele) => ele === 'CG')) {
          goPageInfo('purchase-dashboard', '/purchase/dashboard', '采购大脑')
        } else {
          goPageInfo('market-dashboard', '/market/dashboard', '销售大脑')
        }
      }
    })
  }
  sidebarLogo.value = ' @/assets/img/sidebarLogo.png'
})
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
const handleCommand = async (command) => {
  if (pmenu.value.path == JSON.parse(command.split('changeType,')[1]).path) {
  } else {
    if (command.split('changeType,')[0] == '') {
      console.log(JSON.parse(command.split('changeType,')[1]))
      // showMenu(JSON.parse(command.split('changeType,')[1]))
      // userUpdateInfo(JSON.parse(command.split('changeType,')[1])?.path)
      // closeAll(JSON.parse(command.split('changeType,')[1])?.path)
      // $bus.emit('refreshMessage', JSON.parse(command.split('changeType,')[1]))
    }
  }
}
//点击显示
function showMenu(routeInfo) {
  pmenu.value = routeInfo
  nextMenu.value = filterUrl(routeInfo.child, 2)
  if (!routeInfo.child || routeInfo.child.length == 0) {
    router.push({ path: routeInfo.path })
  } else {
    if (routeInfo.child[0].child && routeInfo.child[0].child.length) {
      let path = lastChild(routeInfo.child[0].child)
      router.push({ path: path })
    } else {
      router.push({ path: routeInfo.child[0].path })
    }
  }
}
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

const nextMenu = ref([])

const pmenu = ref({})
const sidebarLogo = ref('')
//路由监听高亮
function showThis() {
  filterUrl(route.path, 1, JSON.parse(JSON.stringify(props.originalList)))
}
showThis()
// 递归找出最后一级child
const lastChild = function (arr, path = '') {
  for (let i = 0; i < arr.length; i++) {
    if (i == 0) {
      path = arr[i].path
      if (arr[i].child && arr[i].child?.length) {
        lastChild(arr[i].child, path)
      }
    }
  }
  return path
}

//转换外部链接的路由
function filterUrl(map, type, list = [], childList = [], titleName = '', path = '') {
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
        break
      } else {
        //递归循环
        if (list[i].child && list[i].child.length > 0) {
          filterUrl(map, type, list[i].child, childList.length > 0 ? childList : list[i].child, titleName || list[i].menuName, path || list[i].path)
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
const close = () => {
  store.commit('handleCollapse', !collapse.value)
}

function haveBorderLine(name) {
  const haveBorderList = {
    '/purchase': ['采购申请', '合同管理', '仓库管理 '],
    '/market': ['供应协议管理', '合同管理', '回款管理 ']
  }
  if (!haveBorderList[pmenu.value.path]) return false

  return Boolean(~haveBorderList[pmenu.value.path].indexOf(name))
}

function haveChildIcon(list) {
  return list.child.some((item) => item.path === onRoutes.value) ? list.miniatureIcon || list.icon : list.icon
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
.sidebarCon {
  height: calc(100% - 60px);
  display: block;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  .sidebar {
    overflow-y: hidden;
    overflow-x: hidden;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    background: #122044;
  }
  .sidebar > ul {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding-bottom: 116px;
    box-sizing: border-box;
    @include scrollBar;
  }
  .sidebar-el-menu:not(.el-menu--collapse) {
    //  width: 204px;
    transition: width 0.3s linear;
    margin-left: -3px;
    padding-top: 20px;
    background: rgba(18, 32, 68, 1);
    .towBox {
      background: rgba(18, 32, 68, 1);
    }
    .haveBorder {
      position: relative;
      padding-bottom: 20px;
      .border-img {
        width: calc(100% + 40px);
        height: 2px;
        position: absolute;
        bottom: 10px;
        left: -20px;
      }
      .border-img-small {
        width: calc(100% + 10px);
        height: 2px;
        position: absolute;
        bottom: 10px;
        left: -5px;
      }
    }
  }
}
// --------------------------------------

.bottomChangeBox {
  margin-top: 10px;
  height: 90px;
  width: 240px;
  transition: width 0.3s linear;
  position: absolute;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  background: linear-gradient(180deg, rgba(18, 32, 68, 0) 0%, rgba(18, 32, 68, 1) 14%);
  .to-mall {
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    font-size: 14px;
    width: 200px;
    transition: width 0.3s linear;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #165dff;
    border-radius: 2px;
    margin: 0 auto 30px;
    img {
      margin-right: 5px;
      width: 16px;
      height: 16px;
    }
  }
  .bottomBtnActive {
    width: 198px;
    transition: width 0.3s linear;
    height: 40px;
    background: #1664ff;
    border-radius: 2px;
    margin: 10px 5px 20px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;
  }
  .bottomBtn {
    transition: width 0.3s linear;
    width: 198px;
    height: 40px;
    opacity: 0.6;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 2px;
    margin: 10px 5px 30px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    cursor: pointer;
    text-align: center;
  }
  .bottomBtnBox {
    position: absolute;
    bottom: 0;
    left: 15px;
    pointer-events: auto;
  }
}
.pl15 {
  padding: 20px 20px 0;
  transition: padding 0.3s 0.3s;
}
.pl10 {
  padding: 20px 5px;
  transition: padding 0.3s 0.3s;
}
/* 文字 */
:deep(.el-submenu.is-active > .el-submenu__title) {
  color: #fff !important;
}
/* icon图标也跟着变 */
:deep(.el-submenu.is-active > .el-submenu__title i) {
  color: #fff;
}
:deep(.el-menu-item i) {
  color: rgba(255, 255, 255, 0.66);
}
:deep(.el-input--small) {
  width: 100%;
}
:deep(.el-menu-item.is-active) {
  background: #165dff !important;
  height: 40px !important;
  line-height: 40px !important;
  margin-top: 4px;
  margin-bottom: 4px;
}
:deep(.el-menu-item.is-active i) {
  color: #fff !important;
}
:deep(.el-menu--collapse) {
  padding-top: 20px;
  transition: width 0.3s linear;
}
:deep(.el-menu) {
  border-right: 0 !important;
}
.el-menu-item {
  width: 204px;
  line-height: 40px;
  height: 40px;
  margin: 4px 0;
  background: rgba(18, 32, 68, 1);
  //   margin: 4px 20px;
  font-weight: 400;
  border-radius: 4px;
  transition-property: padding, width;
  transition-duration: 0.3s 0.3s;
}
.active-class-text {
  font-family: 'PingFang SC';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
}
.noSide :deep(.el-submenu__title) {
  padding-left: 18px !important;
}
:deep(.el-submenu__title) {
  font-family: 'PingFang SC';
  font-style: normal;
  line-height: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.66) !important;
  font-size: 14px;
  font-weight: 400;
  margin: 4px 0;
  border-radius: 4px;
  position: relative;
  i {
    color: rgba(255, 255, 255, 0.66);
  }
  .el-icon-arrow-down {
    right: 12px !important;
    color: #fff;
  }
}
.collapseSide {
  width: 240px;
  transition: width 0.3s linear;
}
.noSide {
  width: 60px;
  transition: width 0.3s linear;
  .el-menu-item {
    transition: padding 0.3s 0.3s;
    width: 50px;
    margin: 4px 0px;
    padding: 0 !important;
    text-align: center;
    &:hover {
      background: rgba(22, 100, 255, 0.15) !important;
      i {
        border-radius: 4px;
        transition: padding 0.3s 0.3s;
      }
    }
  }
  .el-menu-item.is-active {
    background: none !important;
    transition: background-color 0.3s ease-out;
    background: #1664ff !important;

    .iconfont {
      border-radius: 4px;
    }
  }
  // 收起时不需要箭头
  :deep(.el-icon-arrow-right) {
    display: none !important;
  }
  .bottomBtnBox {
    transition: left 0.3s linear;
    left: 0;
    .to-mall {
      width: 50px;
      img {
        margin-right: 0;
      }
    }
    .bottomBtnActive {
      transition: width 0.3s linear;
      width: 50px;
      font-size: 10px;
      margin-bottom: 10px;
      font-family: 'PingFang SC';
    }
    .bottomBtn {
      line-height: 20px;
      transition: width 0.3s linear;
      width: 50px;
      text-align: center;
      font-size: 10px;
      padding: 5px 0;
      font-family: 'PingFang SC';
    }
  }
}
.towBoxW {
  padding: 5px 20px;
  transition: padding 0.3s linear;
}
.towBoxW .el-menu-item {
  //   background: #fff; //122044
  color: #fff !important;
  padding-left: 20px !important;
  text-align: left;
  margin-bottom: 8px !important;
  width: unset;
  box-sizing: content-box;
}
.towBoxW .el-menu-item.is-active {
  background: #1664ff;
  color: #fff !important;
}
.el-popper.is-light.is-pure {
  border: none !important;
}
:deep(.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow) {
  position: absolute;
  right: 0;
}
:deep(.el-submenu__icon-arrow) {
  right: 0;
}
.el-submenu .el-menu-item {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  margin: 4px 0;
}
:deep(.el-menu) {
  background: rgba(18, 32, 68, 1) !important;
}
.el-popper {
  :deep(.el-menu--popup) {
    padding: 20px !important;
  }
}
.el-menu-item [class^='el-icon-'],
.el-submenu [class^='el-icon-'] {
  font-size: 16px;
}
.sidebarIcon {
  position: absolute;
  top: 50%;
  width: 6px;
  height: 80px;
  z-index: 2;
  cursor: pointer;
}
.sidebarIconC {
  background: url('@/assets/img/home/close.png') center left / 6px 80px no-repeat;
  left: 240px;
  animation: mymoveR 0.3s ease-in;
}
.sidebarIconO {
  background: url('@/assets/img/home/open.png') center left / 6px 80px no-repeat;
  left: 60px;
  animation: mymoveL 0.3s ease-out;
}

.sidebar::-webkit-scrollbar,
.el-menu::-webkit-scrollbar {
  width: 0 !important;
}
@keyframes mymoveL {
  from {
    left: 240px;
  }
  to {
    left: 60px;
  }
}
@keyframes mymoveR {
  from {
    left: 60px;
  }
  to {
    left: 240px;
  }
}
</style>
