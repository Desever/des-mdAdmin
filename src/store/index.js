import Vue from 'vue';
import Vuex from 'vuex';

//app模块
import app from './modules/app';

//用户相关模块
import user from './modules/user'

//使用vuex
Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        //
    },
    mutations: {
        //
    },
    actions: {

    },
    modules: {
        app,
        user
    }
});
export default store;
