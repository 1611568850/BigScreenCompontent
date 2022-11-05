import {
  reqWeekAlert,
  reqPassengerFlow,
  reqSalesController,
  reqCartoDay,
  reqStatusChart,
  reqEnvironmentalMonitoring,
  reqEcmHistory
} from '@/api'
const state ={
  WeekAlertList:[],
  yearPassengerFlow:[],
  dayData:[],
  SalesControllerList:[],
  index:true,
  CartoDayList:{},
  StatusChartList:[],
  EnviromenList:{},
  EcmHistoryList:[]
}
const mutations={
  reciveWeekAlert(state,WeekAlertList){
    state.WeekAlertList=WeekAlertList
  },
  reciveSalesController(state,SalesControllerList){
    state.SalesControllerList=SalesControllerList
  },
  recivePassengerFlow(state,{yearPassengerFlow,dayData}){
    state.yearPassengerFlow=yearPassengerFlow
    state.dayData=dayData
  },
  reciveChangeIndex(state){
    state.index = !state.index
  },
  reciveCartoDay(state,CartoDayList){
    state.CartoDayList = CartoDayList
  },
  reciveStatusChart(state,StatusChartList){
    state.StatusChartList = StatusChartList
  },
  // 天气
  reciveEnvironmen(state,EnviromenList){
    state.EnviromenList = EnviromenList
  },
  reciveEcmHistory(state,EcmHistoryList){
    state.EcmHistoryList = EcmHistoryList
  }
}
const actions={
  async getWeekAlert ({commit}){
    const result = await reqWeekAlert()
    if(result.code ===200){
       const WeekAlertList = result.data
      // console.log(WeekAlertList)
      commit('reciveWeekAlert',WeekAlertList)
    }
  },
  async getPassengerFlow ({commit}){
    const result = await reqPassengerFlow()
    if(result.code ===200){
       const yearPassengerFlow = result.yearPassengerFlow
       const dayData = result.dayData
      commit('recivePassengerFlow',{yearPassengerFlow,dayData})
    }
  },
  async getSalesController ({commit},searchInfo){
    const result = await reqSalesController(searchInfo)
    if(result.code ===200){
      const SalesControllerList = result.data
      SalesControllerList.sort((a,b)=>{
        return b.value - a.value
      })
      // console.log(SalesControllerList)
     commit('reciveSalesController',SalesControllerList)
   }
  },
  async getCartoDay ({commit}){
    const result = await reqCartoDay()
    if(result.code ===200){
       const CartoDayList = result.data
      // console.log(WeekAlertList)
      commit('reciveCartoDay',CartoDayList)
    }
  },
  async getStatusChart ({commit}){
    const result = await reqStatusChart()
    if(result.code ===200){
       const StatusChartList = result.data
      // console.log(WeekAlertList)
      commit('reciveStatusChart',StatusChartList)
    }
  },
  // 天气
  async GetEnvironmen ({commit}){
    const result = await reqEnvironmentalMonitoring()
    if(result.code ===200){
       const EnviromenList = result.data
      commit('reciveEnvironmen',EnviromenList)
    }
  },
  async GetEcmHistory ({commit}){
    const result = await reqEcmHistory()
    if(result.code ===200){
       const EcmHistoryList = result.data
      commit('reciveEcmHistory',EcmHistoryList)
    }
  }
}
const getters={
  WeekAlertListName (state){
    return state.WeekAlertList.map(item=>{
      return item.name
    })
  },
  WeekAlertListdataParam (state){
    return state.WeekAlertList.map(item=>{
      return item.dataParam
    })
  },
  
  yearPassengerFlowName (state){
    return state.yearPassengerFlow.map(item=>{
      return item.name
    })
  },
  yearPassengerFlowdataParam (state){
    return state.yearPassengerFlow.map(item=>{
      return item.dataParam
    })
  },

  dayDataName (state){
    return state.dayData.map(item=>{
      return item.name
    })
  },
  dayDatadataParam (state){
    return state.dayData.map(item=>{
      return item.dataParam
    })
  },

  SalesControllerListName (state){
    return state.SalesControllerList.map(item=>{
      return item.name
    })
  },
  SalesControllerListValue (state){
    return state.SalesControllerList.map(item=>{
      return item.value
    })
  },
  EcmHistoryListTime (state){
    return state.EcmHistoryList.map(item=>{
      return item.time
    })
  },
  EcmHistoryListValue (state){
    return state.EcmHistoryList.map(item=>{
      return item.value
    })
  },
}
export default {
  state,
  mutations,
  actions,
  getters
}