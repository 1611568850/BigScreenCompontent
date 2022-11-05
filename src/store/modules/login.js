import reqLogin from '@/api'
const state ={
  
}
const mutations ={

}
const actions ={
  async getLogin(){
    const result =await reqLogin()
    if(result.code===200){
      console.log('chenggong ')
    }
  }
}
const getters={

}
export default {
  mutations,
  actions,
  getters,
  state
}