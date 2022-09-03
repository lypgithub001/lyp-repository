const infos = {
  state: {
    prompt: false,
    flags: false
  },
  mutations: {
    set_prompt: (state, data) => {
      state.prompt = data
    },
    set_flag: (state, data) => {
      state.flags = data
    }
  },
  actions: {}
}
export default infos
