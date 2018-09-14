<template>
	<div class="list-loading-box" v-if="showLoading">
		<div class="loadingInfo">
			<lottie 
				:options="defaultOptions" 
				:height="100" 
				:width="100" 
				v-on:animCreated="handleAnimation" />
		</div>
	</div>
</template>
<script>
	import Lottie from 'vue-lottie';
	import * as animationData from '../lottieJson/a_simple_sun_day.json'
	export default {
		name: "listLoading",
		props: ["showLoading"],
		data() {
			return {
				defaultOptions: {
					animationData: animationData
				},
				animationSpeed:1,
				anim: {}
			}
		},
		components:{
			Lottie
		},
		methods:{
			handleAnimation(anim){
				this.anim = anim
			},
			// 停止动画
			stop() {
				this.anim.stop()
			}
		}
	}
</script>

<style lang="scss">
	.list-loading-box {
		position: absolute;
		left: 0px;
		top: 0px;
		bottom: 0px;
		right: 0px;
		z-index: 200;
		display: flex;
		align-items: center;
		justify-content: center;
		.loadingInfo {
			padding: 10px 30px;
			border-radius: 4px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>