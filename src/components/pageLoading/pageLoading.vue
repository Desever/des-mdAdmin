<template>
	<div class="list-loading-box" v-if="showLoading">
		<div class="loadingInfo">
			<svg version="1.1" id="L2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve">
				<circle fill="none" stroke="#1565c0" stroke-width="4" stroke-miterlimit="10" cx="50" cy="50" r="48"></circle>
				<line fill="none" stroke-linecap="round" stroke="#1565c0" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="85" y2="50.5" transform="rotate(347.832 50 50)">
					<animateTransform attributeName="transform" dur="1s" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
				</line>
				<line fill="none" stroke-linecap="round" stroke="#1565c0" stroke-width="4" stroke-miterlimit="10" x1="50" y1="50" x2="49.5" y2="74" transform="rotate(22.3776 50 50)">
					<animateTransform attributeName="transform" dur="10s" type="rotate" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
				</line>
			</svg>
		</div>
	</div>
</template>
<script>
	export default {
		name: "pageLoading",
		props: ["showLoading"],
		data() {
			return {}
		},
		mounted() {}
	}
</script>

<style lang="scss">
	.list-loading-box {
		position: fixed;
		left: 0px;
		top: 0px;
		bottom: 0px;
		right: 0px;
		z-index:9999;
		display: flex;
		align-items: center;
		justify-content: center;
		background: rgba(255,255,255,0.7);
		.loadingInfo {
			padding: 10px 30px;
			border-radius: 4px;
			display: flex;
			align-items: center;
			justify-content: center;
			svg{
			    width:50px;
			    height:50px;
			}
			span {
				display: block;
				padding-left: 10px;
				color:#fff;
			}
		}
	}
</style>