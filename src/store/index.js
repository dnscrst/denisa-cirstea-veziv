import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    entries: [
      {
        src: require('../assets/interior_design_website.jpg'),
        isActive: true,
        url:'https://nicepage.com/ht/4005496/cheese-burger-html-template',
        name: 'Interior Design'
      },
      {
        src: require('../assets/workshop-website.jpg'),
        isActive: true,
        url:'https://nicepage.com/ht/4005496/cheese-burger-html-template',
        name: 'ABC Workshop'
      },
      {
        src: require('../assets/restaurant_website.jpg'),
        isActive: true,
        url:'https://nicepage.com/ht/4005496/cheese-burger-html-template',
        name: 'Burger Factory'
      },
    ]
  },
  getters: {
  },
  mutations: {
    SET_ACTIVE (state, entries) {
      state.entries = entries
      console.log(entries)
    }
  },
  actions: {
    updateActive({commit, state}, {index}) {
      state.entries[index].isActive = !state.entries[index].isActive
      console.log(state.entries[index])
      commit('SET_ACTIVE', state.entries)
    }
  },
  modules: {
  }
})
