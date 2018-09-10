import Vue from 'vue';
//引入工具
import consoleObj from "../../util/console";

//引入路由配置文件
import routerObj from '../../router/router'

//构建app state模块
const app = {
    state: {
    	
    	//侧边栏
    	drawer:true,
    	
    	//全局加载
    	windowLoading:false,
    	
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
        },
        /**
         *打开全局loading 
         */
        muOpenWindowLoading(){
        	state.windowLoading=true;
        },
        /**
         *关闭全局loading 
         */
        muCloseWindowLoading(){
        	state.windowLoading=false;
        }
    },
    actions: {
    	/**
    	 * 初始化侧边栏
    	 */
    	acStartMenuList({ dispatch, commit }){
    		var targetArray=routerObj.routes;
	      	commit('muStartMenuList',targetArray);
    	},
	    /**
	     * 修改侧边栏动画
	     */
	    acChangeDrawer: ({ dispatch, commit }) => {
	      	commit('muChangeDrawer');
	    },
	    /**
	     *打开全局loading加载 
	     */
	    acOpenWindowLoading:({ dispatch, commit }) => {
	      	commit('muOpenWindowLoading');
	    },
	    /**
	     *关闭全局loading加载 
	     */
	    acCloseWindowLoading:({ dispatch, commit }) => {
	      	commit('muCloseWindowLoading');
	    }
  	}
};
export default app;
