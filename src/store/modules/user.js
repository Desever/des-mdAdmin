import Vue from 'vue';
//引入路由控制
import router from '../../router';
//引入工具
import consoleObj from "../../util/console";
//cookis
import Cookies from 'js-cookie';
//api
//api请求已经给你封装好了
import api from "../../api";
//构建app state模块
const user = {
    state: {
    },
    mutations: {
        /**
         *登录 
         * 你可以在这里写登录的请求逻辑
         */
        muLogin (state,loginData) {
        	//写入Cookies
        	Cookies.set("loginType",loginData.phone);
        	/**
        	 *跳转首页 
        	 */
        	router.replace({
        		name:"home"
        	})
        },
        /**
         *退出登录 
         * 你可以在这里写退出登录的服务器请求逻辑
         */
        muOutLogin (state) {
        	//写入Cookies
        	Cookies.remove('loginType');
        	/**
        	 *退回登录 
        	 */
        	router.replace({
        		name:"login"
        	})
        }
    },
    actions: {
	    /**
	     * 登录
	     */
	    acLogin: ({ dispatch, commit },loginData) => {
	      	commit('muLogin',loginData)
	    },
	    /**
	     * 退出登录
	     */
	    acOutLogin: ({ dispatch, commit }) => {
	      	commit('muOutLogin')
	    }
  	}
};
export default user;
