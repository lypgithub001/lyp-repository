const base = {
  state: {
    tagsList: [], //开启标签列表
    foldTagsList: [], //已折叠标签列表
    collapse: false //侧边栏折叠开启状态
  },
  mutations: {
    //关闭标签
    delTagsItem(state, data) {
      state.tagsList.splice(data.index, 1)
    },
    //新增折叠列表数据
    addFoldTagsList(state, data) {
      state.foldTagsList.unshift(data)
    },
    //删除折叠列表数据
    delFoldTagsList(state, data) {
      state.foldTagsList.splice(data.index, 1)
    },
    //打开标签
    setTagsItem(state, data) {
      state.tagsList.unshift(data)
    },
    //关闭所有标签
    clearTags(state, data) {
      state.tagsList = [data]
      state.foldTagsList = []
    },
    //关闭其他标签
    closeTagsOther(state, data) {
      state.tagsList = data
      state.foldTagsList = []
    },
    //关闭当前页面的标签
    closeCurrentTag(state, data) {
      for (let i = 0, len = state.tagsList.length; i < len; i++) {
        const item = state.tagsList[i]
        if (item.path === data.$route.fullPath) {
          if (i < len - 1) {
            data.$router.push(state.tagsList[i + 1].path)
          } else if (i > 0) {
            data.$router.push(state.tagsList[i - 1].path)
          } else {
            data.$router.push('/')
          }
          state.tagsList.splice(i, 1)
          break
        }
      }
    },
    // 侧边栏折叠
    handleCollapse(state, data) {
      console.log('collapse', data)
      state.collapse = data
    }
  },
  actions: {}
}
export default base
