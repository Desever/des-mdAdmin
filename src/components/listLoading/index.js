import Vue from 'vue';
import listLoadingCom from "./listLoading.vue";
var listLoading={
	install:function(){
		Vue.component("listLoading",listLoadingCom);
	}
}
export default listLoading;