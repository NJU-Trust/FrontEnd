// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import axios from './httpConfig/http'
import Vuex from 'vuex'
import store from './vuex/store'
import echarts from 'echarts'


// import store from './store/index'; //引入store


Vue.use(ElementUI)
Vue.use(Vuex)

Vue.config.productionTip = false;
Vue.prototype.$axios= axios;
Vue.prototype.$echarts = echarts



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  components: { App },
  template: '<App/>'
})
