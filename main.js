import Vue from 'vue'
import App from './App'
import getRequest from './utils/api.js'
Vue.config.productionTip = false
Vue.prototype.$getRequest = getRequest
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
