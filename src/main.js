// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//vuex
import store from './store';
Vue.config.productionTip = false

//全局注册验证
import RegExp from "./util/RegExp.js";
Vue.prototype.RegExp=RegExp;

//列表loading
import listLoadingCom from "./components/listLoading";
Vue.use(listLoadingCom);

import 'vuetify/dist/vuetify.min.css';
import Vuetify from 'vuetify';
Vue.use(Vuetify)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
