import axios from 'axios';
let base = 'http://192.168.1.105:7001/web/';
axios.defaults.withCredentials = true;
//get
export const getData = (getUrl) => {
 	return Promise.race([
		new Promise((resolve, reject) => {
			axios.get(base+getUrl)
			.then((response)=>{
				//无法进入
				if(response.data.state==0){
					var timerOut={
		                "state":0,
		                "msg":response.data.msg
		            }
					resolve(timerOut);
				}
				//登录状态
				else if(response.data.state==2){
					
				}
				else{
					resolve(response.data);
				}
			})
			.catch((error)=>{
				resolve({
					state:0,
					msg:"网络错误，请联系管理员"
				});
			});
		}),
	 	new Promise((resolve, reject)=>{
            var timerOut={
                "state":0,
                "msg":"请求超时"
            }
            setTimeout(() => {
            	resolve(timerOut);
            },60000);
        })
 	])
}
//post
export const postData = (postUrl,param) => {
	return Promise.race([
		new Promise((resolve, reject) => {
			axios.post(base+postUrl,param)
			.then((response)=>{
				//无法进入
				if(response.data.state==0){
					var timerOut={
		                "state":0,
		                "msg":response.data.msg
		            }
					resolve(timerOut);
				}
				//登录状态
				else if(response.data.state==2){

				}
				else{
					resolve(response.data);
				}
			})
			.catch((error)=>{
				resolve({
					state:0,
					msg:"网络错误，请联系管理员"
				});
			});
		}),
		new Promise((resolve, reject)=>{
	        var timerOut={
                "state":0,
                "msg":"请求超时"
            }
            setTimeout(() => {
            	resolve(timerOut);
            },60000);
	    })
	])
}
