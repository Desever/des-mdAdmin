var consoleObj={
	consologArray:function(Arr){
		if(process.env.NODE_ENV === 'production'){
			return true;
		}else{
			console.table(Arr)
		}
	}
}
export default consoleObj;
