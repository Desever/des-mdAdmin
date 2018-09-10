<template>
	<v-app id="inspire">
		<v-content>
			<v-container fluid fill-height>
				<v-layout align-center justify-center>

					<v-flex xs12 sm8 md4>
						<v-card class="elevation-12">
							<v-toolbar dark color="primary">
								<v-toolbar-title>欢迎使用</v-toolbar-title>
							</v-toolbar>
							<v-card-text>
								<v-form ref="loginForm">
									<v-text-field v-model.trim="loginData.phone" prepend-icon="person" label="手机号" required :rules="phoneRules" type="text"></v-text-field>
									<v-text-field v-model.trim="loginData.password" prepend-icon="lock" label="密码" required :rules="passwordRules" type="password"></v-text-field>
								</v-form>
							</v-card-text>
							<v-card-actions>
								<v-spacer></v-spacer>
								<v-btn color="primary" @click="handleSubmit">登录</v-btn>
							</v-card-actions>
						</v-card>
					</v-flex>

				</v-layout>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
	export default {
		data() {
			return {
				loginData: {
					phone: "",
					password: ""
				},

				//手机号数据验证
				phoneRules: [
					v => !!v || '手机号不能为空',
					v => this.RegExp.checkPhone.test(v) || '手机号格式错误'
				],

				//密码数据验证
				passwordRules: [
					v => !!v || '密码不能为空',
					v => this.RegExp.password.test(v) || '密码格式错误'
				]

			}
		},
		methods: {
			handleSubmit() {
				if(this.$refs.loginForm.validate()) {
					//vuex登录
					this.$store.dispatch("acLogin", this.loginData);
				}
			}
		},
		components: {}
	}
</script>
