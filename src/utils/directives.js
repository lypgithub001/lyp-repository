import store from '@/store'
import { computed } from 'vue'
let roleList = computed(() => JSON.parse(sessionStorage.getItem('vuex'))?.treeInfo?.buttonSet || [])
export default (app) => {
  //按钮权限指令  v-hasRole="['DEC']"
  app.directive('hasRole', {
    mounted(el, binding) {
      // roles的值，应为string数组，存放角色列表  例子：['user','proxy']
      // 也可以根据自己的逻辑修改
      const roles = roleList.value // 使用插件时，绑定的值
      const value = binding.value
      let flag = value.filter((v) => roles.includes(v)).length > 0
      if (!flag) {
        if (!el.parentNode) {
          el.style.display = 'none'
        } else {
          el.parentNode.removeChild(el)
        }
      }
    }
    //  beforeUpdate(el, binding) {
    //    // roles的值，应为string数组，存放角色列表  例子：['user','proxy']
    //    // 也可以根据自己的逻辑修改
    //    const roles = roleList // 使用插件时，绑定的值
    //    const value = binding.value
    //    let flag = value.filter((v) => roles.includes(v)).length > 0
    //    if (!flag) {
    //      if (!el.parentNode) {
    //        el.style.display = 'none'
    //      } else {
    //        el.parentNode.removeChild(el)
    //      }
    //    }
    //  }
  })
  //防重提交
  app.directive('preventReClick', {
    // 指令的定义
    inserted(el, binding) {
      el.addEventListener('click', () => {
        if (!el.disabled) {
          el.disabled = true
          setTimeout(() => {
            el.disabled = false
          }, binding.value || 2000)
        }
      })
    }
  })
}
