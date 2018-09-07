<template>
	<v-text-field 
		prepend-icon="person" 
		label="用户名" 
		type="text" 
		
		
		:value="currentValue" 
		ref="input" 
		@input="handleInput" 
		@focus="handleFocus" 
		@blur="handleBlur" 
		@change="handleChange">
	</v-text-field>
</template>
<script>
	export default {
		name: 'DlInput',
		componentName: 'DlInput',
		data() {
			return {
				/**
				 *input 值 
				 */
				currentValue: this.value === undefined || this.value === null ? '' : this.value,
			};
		},
		props: {
			value: [String, Number],
		},
		computed: {},
		watch: {},
		methods: {
			//input事件
			handleInput(event) {
				console.log("Input----" + event);
			},
			handleFocus(event) {
				console.log("Focus----" + event);
			},
			handleBlur(event) {
				console.log("Blur----" + event);
			},
			handleChange(event) {
				console.log("Change----" + event);
			},
			/**
			 *修改表单值 
			 */
			setCurrentValue(value) {
				this.currentValue = value;
			}
		},
		created() {},
		mounted() {},
		updated() {}
	};
</script>

<style>

</style>