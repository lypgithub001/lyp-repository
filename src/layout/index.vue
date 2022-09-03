<template>
  <div :class="['about', { 'about-pur': isPurchaseHome }]" v-loading="loading">
    <v-header :originalList="originalList" @chooseMenu="chooseMenu" v-if="showSlide"></v-header>
    <v-sidebar :originalList="originalList" @chooseMenu="chooseMenu" v-if="showSlide" />
    <div
      class="content-box"
      :style="{
        top: '60px',
        overflowY: 'hidden',
        left: !collapse ? '240px' : '60px'
        //   transform: `scale(${scale})`,
        //   width: `${1920 - w}px`,
        //   left: `${w - ((1920 - w) * (1 - scale)) / 2}px`
      }"
      v-if="showSlide"
      :class="{ 'content-collapse': collapse }"
    >
      <v-tags></v-tags>

      <div :style="{ width: childH > boxH ? '100%' : '100%' }" class="scorllBoxLine" ref="boxHeight">
        <div class="content" ref="referWidth" style="position: relative; padding: 0 20px 0 20px">
          <router-view v-slot="{ Component }" v-if="systemDictInfo.length">
            <!-- <transition name="move" mode="out-in"> -->
            <keep-alive :include="tagsList">
              <component :is="Component" :key="$route.query + $route.fullPath" />
            </keep-alive>
            <!-- </transition> -->
          </router-view>
          <!-- <el-backtop target=".content"></el-backtop> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed, ref, getCurrentInstance, provide, onMounted, nextTick, watch, onActivated, onBeforeUnmount, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import vSidebar from '../components/Sidebar.vue'
import vTags from '../components/Tags.vue'
import { useRoute, useRouter } from 'vue-router'
import { slideList } from '@/utils/slider.js'
import vHeader from '@/components/Header.vue'
import { ElMessage } from 'element-plus'

const store = useStore()
let systemDictInfo = computed(() => store.state.dict?.systemDictInfo || []) //解决未拿到字典表数据页面报错情况

const route = useRoute()
const router = useRouter()
const { proxy } = getCurrentInstance()

const resize = ref(true)
const w = ref(store.state.base.collapse ? 60 : 240)
const isPurchaseHome = computed(() => route.path === '/purchase/dashboard')
console.log('🚀 ~ file: index.vue ~ line 49 ~ isPurchaseHome', isPurchaseHome)
const realWidth = ref(0)
const scale = computed(() => {
  return (realWidth.value - w.value) / (1920 - w.value)
})

//定义关闭标签
const closeNowTag = () => {
  proxy.$bus.emit(
    'closeNowTag',
    (window.location.pathname.length > 5 ? window.location.pathname.substring(6, window.location.pathname.length) : window.location.pathname) +
      window.location.search
  ) //触发关闭标签事件
}
//定义刷新左边树事件
const refreshTree = () => {
  showSlide.value = false
  getALlTree()
}
//定义刷新消息数量
const refreshMessage = () => {
  proxy.$bus.emit('refreshMessage') //触发刷新消息数量
}
//滚动条置顶
const scrollTop = () => {
  let scorllBoxLine = document.querySelector('.scorllBoxLine')
  scorllBoxLine.scrollTo({
    top: 0
  })
}
//注入刷新消息数量
provide('refreshMessage', refreshMessage)
//注入关闭标签
provide('closeNowTag', closeNowTag)
//注入刷新左边树
provide('refreshTree', refreshTree)
//注入滚动条置顶方法
provide('scrollTop', scrollTop)

//顶部标签列表
const tagsList = computed(() =>
  store.state.base.tagsList.map((item) => {
    let name = item.name
    if (
      item.name == 'purchase-bidding-addPurchaseApply' ||
      item.name == 'purchase-enquiry-addPurchaseApply' ||
      item.name == 'purchase-shopping-addPurchaseApply'
    ) {
      name = 'purchase-addPurchaseApply'
    }
    if (item.title.indexOf('新建') > -1 || item.title.indexOf('编辑') > -1 || item.keepAlive) {
      return name
    } else {
      return ''
    }
  })
)
let referWidth = ref(null)
let boxHeight = ref()
/**
 * 递归过滤节点，生成新的树结构
 * @param {Node[]} nodes 要过滤的节点
 * @param {node => boolean} predicate 过滤条件，符合条件的节点保留
 * @return 过滤后的节点
 */
// const deal = (nodes, predicate) => {
//   // 如果已经没有节点了，结束递归
//   if (!(nodes && nodes.length)) {
//     return []
//   }

//   const newChildren = []
//   for (const node of nodes) {
//     if (predicate(node)) {
//       // 如果节点符合条件，直接加入新的节点集
//       newChildren.push(node)
//       node.child = deal(node.child, predicate)
//     } else {
//       // 如果当前节点不符合条件，递归过滤子节点，
//       // 把符合条件的子节点提升上来，并入新节点集
//       newChildren.push(...deal(node.child, predicate))
//     }
//   }
//   return newChildren
// }
const deal = (nodes) => {
  // 如果已经没有节点了，结束递归
  if (!(nodes && nodes.length)) {
    return []
  }

  let newChildren = []
  for (const node of nodes) {
    // 如果节点符合条件，直接加入新的节点集
    if (node.child && node.child.length) {
      let isShow = false
      for (let i = 0; i < node.child.length; i++) {
        if (node.child[i].hidden && node.child[i].menuType != 2) {
          isShow = true
          break
        }
      }
      if (isShow) {
        node.isShow = true
      } else {
        node.isShow = false
      }
      newChildren.push(node)
      node.child = deal(node.child)
    } else {
      // 如果当前节点不符合条件，递归过滤子节点，
      // 把符合条件的子节点提升上来，并入新节点集
      newChildren.push(node)
    }
  }
  return newChildren
}
//定义左边栏树数据
let loading = ref(false),
  showSlide = ref(false),
  originalList = ref([])
//折叠展开状态
const collapse = computed(() => store.state.base.collapse)
//判断调整传值
const goPageInfo = (name, path, text) => {
  store.commit('clearPageSet')
  store.commit('clearTags', { name: name, title: text, path: path })
  // router.push(path)
  router.replace({
    path: path
  })
}
//获取树列表
const getLeftTree = async () => {
  await store
    .dispatch('getTreeList')
    .then((res) => {
      nextTick(() => {
        console.log(slideList)
        originalList.value = deal(slideList)
        //   originalList.value = deal(JSON.parse(JSON.stringify(res.moduleTree)))
      })
    })
    .catch(() => {})
  showSlide.value = true
  loading.value = false
}
//公司是否已经认证
const isCertification = ref(false)
//当前版本类型
const nowVersion = computed(() => JSON.parse(sessionStorage.getItem('vuex'))?.teamInfo.solutionVersion || 0)
//获取用户当前团队信息
const getTree = () => {
  store
    .dispatch('getTeamInfo')
    .then((res) => {
      isCertification.value = res.masterAdminUserId
      getLeftTree()
    })
    .catch(() => {
      getLeftTree()
    })
}
let boxH = ref(0)
let childH = ref(0)
watch(
  () => route.query,
  (val) => {
    scrollTop()
    nextTick(() => {
      childH.value = referWidth.value?.clientHeight
      boxH.value = boxHeight.value?.clientHeight
    })
  }
)
//获取所有树信息
const getALlTree = () => {
  //获取树信息
  loading.value = true
  getTree()
}
onMounted(() => {
  getALlTree()
  //获取系统字典
  store.dispatch('getSystemDict')
  //获取树字典
  store.dispatch('getDictTree')
  if (isPurchaseHome.value) {
    resizeFn()
    window.addEventListener('resize', resizeFn, false)
  }
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeFn, false)
})
function resizeFn() {
  realWidth.value = document.body.offsetWidth
}

//选中菜单数据
const chooseMenuList = ref([])
//选择菜单
function chooseMenu(val) {}
</script>
<style scoped lang="scss">
.about {
  background-color: #f7fafc;
  height: 100%;
  //   min-width: 1440px;
  display: flex;
}

.headerTop {
  position: absolute;
  top: 0;
  width: 100%;
  left: 0;
}
.posInfo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 1440px;
  .shadow {
    width: 210px;
    position: absolute;
    top: 160px;
    left: 210px;
  }
}
</style>
