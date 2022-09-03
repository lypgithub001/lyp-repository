import { dictTree, systemDict } from '@/api/moduleManagement/dictionaries'

//判断是否是数字类型字符串
const isNumber = (val) => {
  var regPos = /^\d+(\.\d+)?$/ //非负浮点数
  var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/ //负浮点数
  if (regPos.test(val) || regNeg.test(val)) {
    return true
  } else {
    return false
  }
}
const dict = {
  state: {
    systemDictInfo: JSON.parse(sessionStorage.getItem('vuex'))?.systemDictInfo || [], //系统字典
    dictTreeInfo: JSON.parse(sessionStorage.getItem('vuex'))?.dictTreeInfo || [] //树级联字典
  },
  getters: {
    //查询系统字典
    filteredSystemDictList: (state) => (data) => {
      if (!Array.isArray(state.systemDictInfo)) {
        return []
      }
      return state.systemDictInfo
        .filter((item) => item.type === data)[0]
        ?.items.map((ele) => {
          return {
            name: ele.label,
            id: isNumber(ele.code) ? Number(ele.code) : ele.code
          }
        })
    },
    //查询树字典
    filtereTreeDictList: (state) => (data) => {
      if (!Array.isArray(state.dictTreeInfo)) {
        return []
      }
      return state.dictTreeInfo
        .filter((item) => item.type2 === data)[0]
        ?.child.map((ele) => {
          return {
            name: ele.content,
            code: ele.code,
            child: ele.child,
            id: ele.code,
            keyword: ele.keyword
          }
        })
    }
  },
  mutations: {
    //修改系统字典
    set_systemDictInfo: (state, data) => {
      state.systemDictInfo = data
    },
    //修改树级字典
    set_dictTreeInfo: (state, data) => {
      state.dictTreeInfo = data
    }
  },
  actions: {
    //获取系统字典
    getSystemDict({ commit }) {
      return new Promise((resolve, reject) => {
        systemDict().then((res) => {
          if (res.code === 200) {
            commit('set_systemDictInfo', res.data)
            resolve(res.data)
          } else {
            reject()
          }
        })
      })
    },
    //获取树字典
    getDictTree({ commit }) {
      return new Promise((resolve, reject) => {
        dictTree().then((res) => {
          if (res.code === 200) {
            commit('set_dictTreeInfo', res.data)
            resolve(res.data)
          } else {
            reject()
          }
        })
      })
    }
  }
}
export default dict
