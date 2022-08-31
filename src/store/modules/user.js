export default {
  state: () => ({
    name: 'ibuki'
  }),
  getters: {},
  mutations: {
    SET_NAME(state, data) {
      state.name = data
    }
  },
  actions: {
    saveName({ commit }, data){
      commit('SET_NAME', data)
    }
  }
}