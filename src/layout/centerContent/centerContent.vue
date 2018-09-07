<template>
	<v-content>
		<v-container fluid fill-height>
			<!--存放二级路由-->
			<transition name="slide-x-reverse-transition">
				<router-view/>
			</transition>
		</v-container>
	</v-content>
</template>

<script>
	export default {
		name: 'centerContent'
	}
</script>

<style>
.des-pos-container{
	position: absolute;
	left:20px;
	right:20px;
	bottom:20px;
	top:20px;
	overflow-y: auto;
}
</style>