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
								<d-form :model="formData" :rules="rules" ref="form">
									<form-item prop="phone">
										<!--<v-text-field  prepend-icon="person" label="用户名" type="text"></v-text-field>-->
										<DlInput 
											v-model.trim="formData.phone"
										></DlInput>
									</form-item>
									<form-item prop="password">
										<v-text-field v-model.trim="formData.password" prepend-icon="https" label="密码" type="text"></v-text-field>
									</form-item>
								</d-form>
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
	import { DForm, FormItem } from '../../components/Form'
	export default {
		data() {
			return {
				formData: {
					phone: '123123',
					password:''
				},
				rules: {
					phone: [
						{
							pattern: /^1[34578]\d{9}$/,
							message: '您的手机号码输入错误',
							trigger: 'blur'
						},
						{
							required: true,
							message: '您的手机号码未输入',
							trigger: 'blur'
						}
					],
					password: [
						{
							required: true,
							message: '您的密码未输入'
						}
					]
				}
			}
		},
		methods: {
			handleSubmit() {
				this.$refs.form.validate(errs => {
					console.log(errs)
				})
			}
		},
		components: {
			DForm,
			FormItem
		}
	}
</script>