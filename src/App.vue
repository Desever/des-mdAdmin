<template>
	<div id="app">
		<transition name="slide-x-reverse-transition">
			<router-view/>
		</transition>
		<pageLoading :showLoading="showWindowLoading"></pageLoading>
	</div>
</template>

<script>
	//引入全局加载组件
	import pageLoading from "./components/pageLoading/pageLoading.vue";
	//注册组件
	import Vue from 'vue';
	export default {
		name: 'App',
		computed:{
		    showWindowLoading(){
		        return this.$store.state.app.windowLoading;
		    }
	  	},
	  	components:{
	  		pageLoading
	  	},
	  	created(){
	  	}
	}
</script>

<style>
	/*引入动画*/
	body,
	html {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		width: 100%;
		height: 100%;
		overflow: hidden;
		position: relative;
	}
</style>