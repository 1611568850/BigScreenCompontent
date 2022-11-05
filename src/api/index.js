import ajax from './ajax'
import mockajax from './mockAjax'
export const reqEnvironmentalMonitoring = ()=>ajax('/getEnvironmentalMonitoring')
// 周告警事件趋势
export const reqWeekAlert = ()=>ajax('alert/getWeekAlert')
// 游客数量统计
export const reqPassengerFlow = ()=>ajax('/area/getPassengerFlow')
// 景点客流统计
export const reqSalesController = ()=>ajax.post('/ShopSalesController/pingxiaoanalysis')
// 车位
export const reqCartoDay = ()=>ajax.post('/overview/cartoday')
// 厕所
export const reqStatusChart = ()=>ajax.post('/WcController/statuschart')
// 厕所
export const reqEcmHistory = ()=>ajax.post('/overview/ecmHistory')
export const reqLogin = ()=> mockajax('/login')