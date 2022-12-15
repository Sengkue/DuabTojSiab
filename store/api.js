export const state = () => ({
  duabtojsiab: {},
  duabDetail:{},
})

export const mutations = {
  setDuab(state, data) {
    state.duabtojsiab = data
  },
  setDetail(state, data){
    state.duabDetail = data
  }
}

export const actions = {
  selectDuabTojSiab({ commit }, id) {
    this.$axios
      .get(`https://api.duabhmoobtojsiab.com/page/${id || 1}&__a=1`)
      .then((data) => {
        commit('setDuab', data.data)
      })
  },
  selectDetail({commit},id){
    this.$axios.get(`https://api.duabhmoobtojsiab.com/duab/${id}&__a=1`).then((data)=>{
      commit('setDetail', data.data)
    })
  }
}
