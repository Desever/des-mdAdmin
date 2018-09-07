<template>
	<v-navigation-drawer :clipped="$vuetify.breakpoint.lgAndUp" v-model="App.drawer" fixed app>
		
		<v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
	        <v-layout pa-2 column fill-height class="lightbox white--text">
	          <v-spacer></v-spacer>
	        </v-layout>
	  	</v-img>
		
		<v-list style="padding:0px;">
			<template v-for="item in App.menuList" v-if="item.parShowSidebar">
				<v-list-group 
					v-if="item.children" 
					v-model="item.model" 
					:key="item.text" :append-icon="item.iconDown">
					<v-list-tile slot="activator">
						<v-list-tile-content>
							<v-list-tile-title>
								{{ item.text }}
							</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-list-tile v-for="(child, i) in item.children" 
						v-if="child.childShowSidebar" :key="i" @click="pushPage(child.name)">
						<v-list-tile-action v-if="child.icon">
							<v-icon>{{ child.icon }}</v-icon>
						</v-list-tile-action>
						<v-list-tile-content>
							<v-list-tile-title>
								{{ child.text }}
							</v-list-tile-title>
						</v-list-tile-content>
					</v-list-tile>
				</v-list-group>
				<v-list-tile v-else :key="item.text" @click="pushPage(item.name)">
					<v-list-tile-action>
						<v-icon>{{ item.icon }}</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>
							{{ item.text }}
						</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</template>
		</v-list>
	</v-navigation-drawer>
</template>

<script>
	import { mapState } from 'vuex'
	export default {
		name: 'sidebar',
		data: () => ({
		}),
		computed: {
			//获取veux数据
			//mapState 解决v-model 与vuex冲突
			...mapState({
			    App: state => state.app
		  	})
	  	},
		methods:{
			pushPage(name){
				this.$router.push({ name:name})
			}
		}
	}
</script>

<style>

</style>