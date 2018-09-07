//构建layout布局
import Main from '@/layout/main/main'
export default {
	routes: [
		//登录
		{
			text: '登录',
			path: '/login',
			name: 'login',
			parShowSidebar:false,
			component: resolve => {
				require(['@/view/login/login.vue'], resolve);
			}
		},
		//403
		{
			text: '错误',
			path: '/error-404',
			name: 'error-404',
			parShowSidebar:false,
			component: resolve => {
				require(['@/view/error/404/404.vue'], resolve);
			}
		},
	
		{
			iconUp: 'keyboard_arrow_up',
			iconDown: 'keyboard_arrow_down',
			text: '首页',
			path: '/',
			name: 'main',
			component: Main,
			parShowSidebar:false,//是否显示在左侧菜单
			redirect: '/home',
			children:[
				//首页
				{
					icon: 'subject',
					text: '首页',
					path: 'home',
					name: 'home',
					childShowSidebar:false,//是否显示在左侧菜单
					component: resolve => {
						require(['@/view/home/home.vue'], resolve);
					}
				}
			]
		},
		{
			iconUp: 'keyboard_arrow_up',
			iconDown: 'keyboard_arrow_down',
			text: '控制面板',
			path: '/sys',
			name: 'sys',
			component: Main,
			parShowSidebar:true,//是否显示在左侧菜单
			redirect: '/bigdata',
			children:[
				//首页
				{
					icon: 'subject',
					text: '数据统计',
					path: 'bigdata',
					name: 'bigdata',
					childShowSidebar:true,//是否显示在左侧菜单
					component: resolve => {
						require(['@/view/bigdata/bigdata.vue'], resolve);
					}
				}
			]
		},
		{
			iconUp: 'keyboard_arrow_up',
			iconDown: 'keyboard_arrow_down',
			text: '表格',
			path: '/table',
			name: 'table',
			component: Main,
			parShowSidebar:true,//是否显示在左侧菜单
			redirect: '/editTable',
			children:[
				//首页
				{
					icon: 'art_track',
					text: '编辑表格',
					path: 'editTable',
					name: 'editTable',
					childShowSidebar:true,//是否显示在左侧菜单
					component: resolve => {
						require(['@/view/editTable/editTable.vue'], resolve);
					}
				}
			]
		}
	]
}