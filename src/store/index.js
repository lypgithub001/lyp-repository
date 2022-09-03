// store/index.js
import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
// 创建一个新的 store 实例
const initModule = () => {
  // 获取modules文件夹内所有的模块
  const requireModules = import.meta.globEager('./modules/*.js')

  const modules = {}
  for (let i in requireModules) {
    // 将模块路径切割出模块名
    const moduleName = i.split('/')[i.split('/').length - 1].replace('.js', '')
    // 将模块放入modules
    modules[moduleName] = requireModules[i].default
  }
  return modules
}

const store = createStore({
  state() {},
  mutations: {},
  modules: {
    ...initModule()
  },
  /**
   * vuex-persistedstate 数据持久化插件 默认是持久所有的state
指定持久某一项，配置如下
   */
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      reducer(data) {
        return {
          systemDictInfo: data.dict.systemDictInfo,
          dictTreeInfo: data.dict.dictTreeInfo,
          userInfo: data.user.userInfo,
          teamInfo: data.user.teamInfo,
          teamUserInfo: data.user.teamUserInfo,
          treeInfo: data.user.treeInfo,
          user: data.user.user,
          tagsList: data.base.tagsList,
          foldTagsList: data.base.foldTagsList,
          userHabitsList: data.user.userHabitsList,
          prompt: data.infos.prompt,
          flags: data.infos.flags
        }
      }
    })
  ]
})

export default store
