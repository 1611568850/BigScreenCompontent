import home from './modules/home'
import login from './modules/login'
import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const mutations ={

}
const actions ={

}
const getters={

}
export default new Vuex.Store({
  mutations,
  actions,
  getters,
  modules:{
    home,
    login
  }
})