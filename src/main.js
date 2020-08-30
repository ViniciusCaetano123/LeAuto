import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { routes } from "./routes/index";
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './services/store'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

Vue.config.productionTip = false
const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
