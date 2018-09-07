<template>
	<div class="form-item">
		<div class="form-item-container">
			<div class="form-item-content">
				<slot></slot>
			</div>
			<span class="form-required" v-if="formRequired">*</span>
		</div>
		<div class="form-itme-error">
			<span v-text="fieldError" v-if="fieldError" class="animated fadeInDown"></span>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'form-item',
		computed: {
			form() {
				let parent = this.$parent
				while(parent.$options.componentName !== 'DForm') {
					parent = parent.$parent
				}
				return parent
			},
			fieldError() {
				if(!this.prop) {
					return ''
				}
				const formError = this.form.formError
				return formError[this.prop] || ''
			},
			//数据是否必填
			formRequired(){
				var endRes=false;
				var rules=this.form["formRules"][this.prop];
				if(rules){
					for(var i=0;i<rules.length;i++){
						if(rules[i].required&&rules[i].required==true){
							endRes=true;
							break;
						}else{
							endRes=false;
						}
					}
				}
				return endRes;
			}
		},
		methods: {
			dispatchEvent(eventName, params) {
				if(typeof this.form !== 'object' && !this.form.$emit) {
					console.error('FormItem必须在Form组件内')
					return
				}
				this.form.$emit(eventName, params)
			}
		},
		props: {
			prop: String
		},
		mounted() {
			if(this.prop) {
				this.dispatchEvent('form.addField', {
					prop: this.prop,
					el: this.$el
				})
			}
		},
		beforeDestroy() {
			if(this.prop) {
				this.dispatchEvent('form.removeField', {
					prop: this.prop
				})
			}
		}
	}
</script>
<style lang="less" scoped>
	.form-item {
		width:100%;
		
		.form-item-container{
			display: flex;
			align-items: center;
			justify-content: center;
			.form-item-content {
				flex:1;
				input {
					display: block;
					width: 100%;
					line-height: 26px;
					background-color: transparent;
				}
			}
			.form-required{
				color:#f60;
				display: block;
			}
		}
		.form-itme-error{
			padding-left:2em;
			position: relative;
			span{
				display: block;
				text-align:left;
				color: #f60;
				font-size:14px;
				height:16px;
				line-height:16px;
			}
		}
	}
</style>