import Vue from 'vue'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import BootstrapVue from 'bootstrap-vue'
import 'font-awesome/scss/font-awesome.scss'
Vue.use(BootstrapVue);
Vue.use(VeeValidate);
new Vue({
  el: '#app',
  render: h => h(App)
})
