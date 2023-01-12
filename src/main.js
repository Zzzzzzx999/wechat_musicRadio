import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()

// 创建微信云函数的初始化
wx.cloud.init({
  env: "cloud1-3g0m15qa9c528c1f",
  traceUser: true
})