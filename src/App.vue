<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
	//注册组件
	import Vue from 'vue';
	import DlInput from './components/input';
	Vue.use(DlInput)
	export default {
		name: 'App',
		mounted: function(){
        }
	}
</script>

<style>
	/*引入动画*/
	@import "./assets/css/animate.min.css";
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
	
	.v-text-field__details{
		display: none;
	}
</style>