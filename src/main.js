import Vue from 'vue'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import './main.css'
import router from './router'

Vue.config.productionTip = false
Vue.use(iview)

new Vue({
  el: '#app',
  router,
  template: '<router-view />',
})
