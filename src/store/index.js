import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
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
        app
    }
});
export default store;
