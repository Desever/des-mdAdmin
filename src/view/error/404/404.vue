<template>
	<v-app>
		<v-jumbotron>
			<v-container fill-height>
				<v-layout align-center>
					<v-flex>
						<h3 class="display-3">Welcome to the 404</h3>

						<span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>

						<v-divider class="my-3"></v-divider>

						<div class="title mb-3">Check out our newest features!</div>

						<v-btn @click="goHome" class="mx-0" color="primary" large>
							返回首页
						</v-btn>
					</v-flex>
				</v-layout>
			</v-container>
		</v-jumbotron>
	</v-app>
</template>

<script>
	export default {
		data: () => ({
			
		}),
		methods:{
			/**
			 *回首页 
			 */
			goHome(){
				this.$router.replace({
					name:"home"
				})
			}
		}
		
	}
</script>

<style>

</style>