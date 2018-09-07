<template>
	<v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="blue darken-3" dark app fixed>
		<v-toolbar-side-icon @click.stop="changeDrawer"></v-toolbar-side-icon>
		<v-toolbar-title>Google Contacts</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-toolbar-items class="hidden-sm-and-down">
			<v-btn flat>Link One</v-btn>
			<v-btn flat>Link Two</v-btn>
			<v-menu
				absolute
	      		offset-y
			>
				<div
					flat 
					slot="activator"
				>
					<v-btn style="padding-right:0px;" flat>Desever</v-btn>
					<v-avatar
			          	size="30"
			          	color="grey lighten-4"
			        >
		          		<img src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg" alt="avatar">
			        </v-avatar>
				</div>
				<v-list>
					<v-list-tile v-for="(item, index) in items" :key="index" @click="">
						<v-list-tile-title>{{ item.title }}</v-list-tile-title>
					</v-list-tile>
				</v-list>
			</v-menu>
		</v-toolbar-items>
	</v-toolbar>

</template>

<script>
	export default {
		name: 'navBar',
		data: () => ({
			items: [{
					title: 'Click Me'
				},
				{
					title: 'Click Me'
				},
				{
					title: 'Click Me'
				},
				{
					title: 'Click Me 2'
				}
			]
		}),
		created() {},
		methods: {
			changeDrawer() {
				this.$store.dispatch("acChangeDrawer");
			}
		}
	}
</script>

<style>

</style>