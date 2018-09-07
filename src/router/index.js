import Vue from 'vue'
import Router from 'vue-router'
//引入cookie控制
import Cookies from 'js-cookie';
//引入工具
import routerUtil from "../util/checkRouter.js";
//路由配置文件
import routerObj from "./router";
Vue.use(Router)
var router=new Router(routerObj);

router.beforeEach((to, from, next) => {
	//判断用户是否登录
	var isLogin=Cookies.get("loginType");
	//如果进入页面不是login页面，进入登录权限判断
	if(to.name!="login"){
		if(!isLogin){
			next({
                name: 'login'
            });
		}else{
			//判断是否进入404
			if(routerUtil.hashRouter(routerObj.routes,to.name)){
				next();
			}else{
				next({
					name: 'error-404'
				});
			}
		}
	}else{
		//如果进入的是登录页面，判断是否登录，如果登录则进入首页
		if(isLogin){
			next({
				name:"home"
			});
		}else{
			next();
		}
	}
})
export default router;
