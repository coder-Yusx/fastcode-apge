import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    Menus:[]
  },
  getters:{
    getMenus:function(state){
      return state.Menus
    }
  },
  mutations:{
    initMenus:function(state,menus){
      state.Menus = menus
    }
  }
})

export default store
