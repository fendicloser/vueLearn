import Vue from 'vue'
import Vuex from 'vuex' 

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1111
  },
  mutations: {
    addCount:(state)=>{
      state.count+=1

    },
    subAddCount:(state)=>{
      state.count-=1
    },
    clearCount:(state)=>{
      state.count=0
    }
  },
  getters:{
    count:state=>state.count
  },
  actions: {
    addCountAsync:(context)=>{
      setTimeout(()=>{
        context.commit('addCount')
      },2000)
    }
  }
})
