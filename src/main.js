import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index'
import store from '@/store/index'
import VueSmoothScroll from "vue2-smooth-scroll"
import *as echarts from 'echarts'
import "echarts-extension-amap";
Vue.prototype.$echarts =echarts
Vue.config.productionTip = false
import BaiduMap from 'vue-baidu-map-v3'

Vue.use(BaiduMap, {
	ak: 'SFjedzDiju6BLBYfQE1Zw8hIdErIBp2e'
})
new Vue({
  render: h => h(App),
  router,
  store,
  VueSmoothScroll
}).$mount('#app')
