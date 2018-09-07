<template>

	<v-app relative>
		<div class="des-bootContainer">
			<navBar/>
			<sideBar/>
			<centerContent/>
		</div>
	</v-app>
</template>

<script>
	//引入左边菜单
	import navBar from "../navBar/navBar";
	import sideBar from "../sideBar/sideBar";
	import centerContent from "../centerContent/centerContent";
	import bottomFooter from "../bottomFooter/bottomFooter";
	export default {
	  	name: 'Main',
	  	components:{
	  		navBar,
	  		sideBar,
	  		centerContent,
	  		bottomFooter
	  	},
	  	data: function () {
		    return {
		    	
		    }
	  	},
	  	created(){
	  		//启动侧边栏
	  		this.$store.dispatch("acStartMenuList");
	  	}
	}
</script>
<style scoped lang="less">
	@import "./main.less";
</style>