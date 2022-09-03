<template>
  <div class="tags" v-if="showTags">
    <transition name="fade">
      <div v-if="showHeader && show" class="oneLine" :style="{ width: `calc(100% - ${widthInfo}px)` }"></div>
    </transition>
    <div ref="referWidth" style="width: calc(100% - 210px)"></div>
    <div class="ul" ref="getWidth">
      <li class="tags-li" v-for="(item, index) in tagsList" :class="{ active: isActive(item.path) }" :key="index">
        <div class="borderLeft" v-if="index != 0"></div>
        <router-link :to="item.path" class="tags-li-title">{{ item.title }}</router-link>
        <span
          class="tags-li-icon"
          style="padding-right: 4px"
          v-if="tagsList.length !== 1 && item.path !== '/preBidEvaluation/basicInformation'"
          @click="closeTags(index)"
        >
          <i class="el-icon-close"></i>
        </span>
        <div class="borderRight"></div>
      </li>
    </div>
    <div class="tags-close-box" v-if="foldTagsList?.length > 0">
      <el-dropdown @command="handleTags" trigger="click" :placement="'bottom-start'" style="margin-top: 10px">
        <div class="chooseDown">
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu size="small" class="tagListBox">
            <el-dropdown-item :command="{ item: item, index }" v-for="(item, index) in foldTagsList" :key="index">{{ item.title }}</el-dropdown-item>
            <el-dropdown-item v-if="foldTagsList.length > 0" command="other" divided>关闭其他</el-dropdown-item>
            <el-dropdown-item v-if="foldTagsList.length === 0" command="other" style="margin: 30px 16px">关闭其他</el-dropdown-item>
            <el-dropdown-item command="all">关闭所有</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <!-- <img src="@/assets/img/common/header/headerLogo.png" class="rightLogo" alt="" width="100" height="15" /> -->
  </div>
</template>

<script setup>
import { computed, ref, nextTick, getCurrentInstance, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const isActive = (path) => {
  return path === route.fullPath
}
let props = defineProps({
  showHeader: {
    type: Boolean,
    defalt: false
  }
})
const internalInstance = getCurrentInstance() //当前组件实例
const $bus = internalInstance.appContext.config.globalProperties.$bus
//如果获取到关闭事件就调用关闭单个标签到方法
if (!$bus.all.get('closeNowTag'))
  $bus.on('closeNowTag', (res) => {
    delDetail.value = true
    closeTags(0, true, res)
  })

//定义新增修改关闭使用
let delDetail = ref(false)

const store = useStore()
//显示标签列表
const tagsList = computed(() => store.state.base.tagsList)
const showTags = computed(() => tagsList.value.length > 0)
//折叠标签列表
const foldTagsList = computed(() => store.state.base.foldTagsList)
const foldshowTags = ref(false)
//定义获取dom宽度元素
let getWidth = ref(null)
let referWidth = ref(null)
let widthInfo = ref(88)
let show = ref(true)
watch(
  () => widthInfo.value,
  (val) => {
    show.value = false
    setTimeout(() => {
      show.value = true
    }, 1000)
  }
)
/*
 * 获取某个元素下标
 * arr: 传入的数组
 * obj: 需要获取下标的元素
 * */
const getArrayIndex = (arr, obj) => {
  var i = arr.length
  while (i--) {
    if (arr[i].path === obj) {
      return i
    }
  }
  return -1
}
// 关闭单个标签
const closeTags = async (index, delDetail = false, path = '') => {
  // 如果从详情返回
  if (delDetail) {
    index = getArrayIndex(JSON.parse(JSON.stringify(tagsList.value)), path)
    router.go(-1)
  }
  const delItem = tagsList.value[index]
  //删除标签
  store.commit('delTagsItem', { index })
  const item = tagsList.value[index] ? tagsList.value[index] : tagsList.value[index - 1]
  if (tagsList.value.length === 0) {
    store.commit('clearTags', { name: 'company-joinCompany', title: '申请加入团队', path: '/company/joinCompany' })
    setTags(
      { name: 'company-joinCompany', meta: { title: '申请加入团队' }, fullPath: '/company/joinCompany', query: {} },
      getWidth.value.clientWidth,
      referWidth.value.clientWidth
    )
    router.push('/')
  } else if (tagsList.value.length > 0) {
    if (item) {
      delItem.path === route.fullPath && router.push(item.path)
    } else {
      router.push('/')
    }
    nextTick(() => {
      setTags({ name: item.name, meta: { title: item.title }, fullPath: item.path, query: {} }, getWidth.value.clientWidth, referWidth.value.clientWidth)
    })
  }
}

// 设置标签
const setTags = (route, w, r) => {
  const isExist = tagsList.value.some((item) => {
    return item.path === route.fullPath
  })
  let nameInfo = ''
  if (route.query?.type === 'add') {
    nameInfo = '新建' + route.meta.title
  } else if (route.query?.type === 'edit') {
    nameInfo = '编辑' + route.meta.title
  } else if (route.query?.type === 'view') {
    nameInfo = route.meta.title + '详情'
  } else if (route.query?.type === 'audit') {
    nameInfo = '审批' + route.meta.title
  } else {
    nameInfo = route.meta.title
  }
  if (!!route.query.isApproval) {
    nameInfo = '审批' + route.meta.title
  }
  if (route.path === '/market/businessOpportunityDetails') {
    if (route.query.isConsulte) {
      nameInfo = '咨询'
    }
  }
  if (route.path === '/market/clueDetails') {
    if (route.query.isConsulte) {
      nameInfo = '咨询详情'
    }
  }
  //如果包含当前路由的处理
  if (!isExist) {
    if (w >= r) {
      foldshowTags.value = true
      store.commit('addFoldTagsList', tagsList.value[tagsList.value.length - 1])
      store.commit('delTagsItem', { index: tagsList.value.length - 1 })
      let reduNum = w - r
      if (reduNum > 122) {
        store.commit('addFoldTagsList', tagsList.value[tagsList.value.length - 1])
        store.commit('delTagsItem', { index: tagsList.value.length - 1 })
      }
    } else {
      foldshowTags.value = false
    }
    //设置标签
    store.commit('setTagsItem', {
      name: route.name,
      title: nameInfo,
      path: route.fullPath,
      keepAlive: route.meta.keepAlive || false
    })
    //如果折叠标签列表有该路由删除
    if (
      (foldTagsList.value.some = (ele) => {
        return ele.path === route.fullPath
      })
    ) {
      foldTagsList.value.forEach((element, index) => {
        if (element.path === route.fullPath) {
          store.commit('delFoldTagsList', { index: index })
        }
      })
    }
    if (w) {
      widthInfo.value = w + 88 || 88
    }
  } else {
    if (w >= r) {
    } else {
      //  宽度小于的时候往外扔
      if (foldTagsList.value.length > 0) {
        store.commit('setTagsItem', foldTagsList.value[0])
        store.commit('delFoldTagsList', { index: 0 })
      }
      foldshowTags.value = false
    }
    if (
      (foldTagsList.value.some = (ele) => {
        return ele.path === route.fullPath
      })
    ) {
      foldTagsList.value.forEach((element, index) => {
        if (element.path === route.fullPath) {
          store.commit('delFoldTagsList', { index: index })
        }
      })
    }
    if (w) {
      widthInfo.value = w || 88
    }
  }
}
setTags(route)
//路由更新设置标签
onBeforeRouteUpdate((to) => {
  nextTick(() => {
    //   如果不是新增修改的页面处理
    if (!delDetail.value) {
      setTags(to, getWidth.value.clientWidth, referWidth.value.clientWidth)
    }
    delDetail.value = false
  })
})
//判断调整传值
const goPageInfo = (name, path, text) => {
  store.commit('clearPageSet')
  store.commit('clearTags', { name: name, title: text, path: path })
  router.push(path)
}
const companyInfo = computed(() => JSON.parse(sessionStorage.getItem('vuex')).teamInfo)
// 关闭全部标签
const closeAll = () => {
  if (JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo?.buttonSet.some((ele) => ele === 'XS' || ele === 'CG')) {
    store
      .dispatch('getUserHabitsList', `business,${companyInfo.value.id}`)
      .then((res) => {
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
      .catch(() => {
        if (JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo?.buttonSet.some((ele) => ele === 'CG')) {
          goPageInfo('purchase-dashboard', '/purchase/dashboard', '采购大脑')
        } else {
          goPageInfo('market-dashboard', '/market/dashboard', '销售大脑')
        }
      })
  } else {
    goPageInfo('company-joinCompany', '/company/joinCompany', '申请加入团队')
  }
}
// 关闭其他标签
const closeOther = () => {
    const curItem = tagsList.value.filter((item) => {
      return item.path === route.fullPath
    })
    store.commit('closeTagsOther', curItem)
    foldshowTags.value = false
  },
  //选择标签
  chooseTag = (item) => {
    router.push(item.item.path)
    store.commit('delFoldTagsList', { index: item.index })
  }
const handleTags = (command) => {
  command === 'other' ? closeOther() : command === 'all' ? closeAll() : chooseTag(command)
}

// 关闭当前页面的标签页
// store.commit("closeCurrentTag", {
//     $router: router,
//     $route: route
// });
</script>
<style lang="scss" scoped>
.fade-enter {
  opacity: 0.2;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-to {
  opacity: 0.2;
}
.fade-leave-active {
  transition: opacity 1s;
}
.oneLine {
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  right: 0;
  top: 6px;
  background: linear-gradient(to right, rgb(247 250 252 / 5%), rgb(247 250 252 / 60%));
}
.el-scrollbar {
  position: relative;
}
.el-dropdown-menu--small .el-dropdown-menu__item {
  font-size: 14px;
  /* width: 98px; */
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  margin: 0 16px;
  padding: 0;
}
.el-dropdown__popper .el-dropdown-menu {
  border: none;
  max-height: 637px;
  position: static;
  width: auto;
  background: #ffffff;
  text-align: center;
}
.chooseDown {
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
  cursor: pointer;
  .el-icon--right {
    color: #4e5969;
    font-weight: 600;
    margin-left: 0;
  }
}
.tags {
  position: relative;
  //   height: 34px;
  box-sizing: border-box;
  overflow: hidden;
  margin-left: 20px;
  /* background: #fff; */
  padding-right: 70px;
  .rightLogo {
    position: absolute;
    right: 20px;
    top: 20px;
  }
}

.tags .ul {
  box-sizing: border-box;
  display: inline-flex;
  white-space: nowrap;
  //   width: 100%;
  height: 100%;
}

.tags-li {
  display: flex;
  margin: 0 0 0 0;
  border-radius: 4px 4px 0px 0px;
  font-size: 16px;
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  //   background: #f7f8fa;
  padding: 0;
  vertical-align: middle;
  color: #1d2129;
  //   -webkit-transition: all 0.3s ease-in;
  //   -moz-transition: all 0.3s ease-in;
  //   transition: all 0.3s ease-in;
  .el-icon-close {
    color: #c9cdd4;
    font-weight: 600;
  }
  .borderLeft {
    width: 0;
    height: 0;
    border-top: 40px solid #f2f3f5;
    border-right: 22px solid #f7f8fa;
    margin-right: -2px;
  }
  .borderRight {
    width: 0;
    height: 0;
    border-top: 40px solid #f2f3f5;
    border-left: 22px solid #f7f8fa;
    margin-left: -2px;
  }
}

.tags-li-title {
  background: #f7f8fa;
  padding: 0 14px 0 16px;
  border-top-left-radius: 4px;
  color: #4e5969;
}
.tags-li-icon {
  padding-right: 4px;
  background: #f7f8fa;
  display: inline-block;
  border-top-right-radius: 4px;
  z-index: 1;
}

.tags-li.active {
  background: #ffffff;
  .tags-li-title {
    background: #fff;
  }
  .tags-li-icon {
    background: #fff;
  }
  .borderLeft {
    border-right: 22px solid #fff;
  }
  .borderRight {
    border-left: 22px solid #fff;
  }
}

.tags-close-box {
  position: absolute;
  right: 0px;
  top: -3px;
  box-sizing: border-box;
  padding-top: 1px;
  text-align: center;
  width: 64px;
  height: 40px;
  z-index: 10;
  :deep(.el-dropdown) {
    background: #ffffff;
  }
}
.userInfo {
  position: absolute;
  width: 82px;
  right: 0;
  top: 0;
  margin-top: 6px;
  line-height: 34px;
  //   background: #f7fafc;
  color: #505780;
  font-size: $font-size-base;
  .moreBtn {
    cursor: pointer;
    margin-top: 9px;
  }
}
.tagListBox {
  min-height: 160px;
}
</style>
