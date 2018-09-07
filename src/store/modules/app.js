import Vue from 'vue';
//引入工具
import consoleObj from "../../util/console";

//引入路由配置文件
import routerObj from '../../router/router'

//构建app state模块
const app = {
    state: {
    	drawer:true,
    	menuList:[]
    },
    mutations: {
    	/**
    	 * 初始化侧边栏
    	 */
    	muStartMenuList(state,targetArray){
    		state.menuList=targetArray;
    	},
    	/**
	     * 修改侧边栏动画
	     */
        muChangeDrawer (state) {
        	state.drawer=state.drawer==true?false:true;
        }
    },
    actions: {
    	/**
    	 * 初始化侧边栏
    	 */
    	acStartMenuList({ dispatch, commit }){
    		var targetArray=routerObj.routes;
	      	commit('muStartMenuList',targetArray)
    	},
	    /**
	     * 修改侧边栏动画
	     */
	    acChangeDrawer: ({ dispatch, commit }) => {
	      	commit('muChangeDrawer')
	    },
  	}
};
export default app;
