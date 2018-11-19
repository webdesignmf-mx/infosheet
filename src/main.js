import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import BootstrapVue from 'bootstrap-vue'
import 'font-awesome/scss/font-awesome.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

window.axios = axios
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
new Vue({
  el: '#app',
  render: h => h(App)
})
