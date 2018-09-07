var routerUtil={
	/**
	 * 过滤未定义路由的页面
	 * @param {Object} routerObj
	 * @param {Object} tarName
	 */
	hashRouter:function(routerObj,tarName){
		var allowNext=false;
		for(var i=0;i<routerObj.length;i++){
			if(routerObj[i].children){
				if(allowNext==false){
					for(var j=0;j<routerObj[i].children.length;j++){
						if(routerObj[i].children[j].name==tarName){
							allowNext=true;
							break;
						}else{
							allowNext=false;
						}
					}
				}
			}else{
				if(allowNext==false){
					if(routerObj[i].name==tarName){
						allowNext=true;
						break;
					}
				}
			}
			
		}
		return allowNext;
	}
}
export default routerUtil;