import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import Store from "@/store/index.js"
console.log(Store)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App,
	store:Store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App);
	// console.log(Store)
	// app.use(Store);
  return {
    app
  }
}
// #endif