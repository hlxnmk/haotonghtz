import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import dayjs from 'dayjs'
Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs;//可以全局使用dayjs
import animated from 'animate.css' // npm install animate.css --save安装，在引入
app.use(animated)

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
//导入pinia
import { createPinia } from 'pinia'
// pinia数据持久化


export function createApp() {
  const app = createSSRApp(App)
   const pinia  = createPinia()
    app.use(pinia)
	
  return {
    app
  }
}
// #endif