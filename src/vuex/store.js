import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
  
  var Initialization = {}
  
   Initialization.one=function(url,i){

             var video_show = localStorage.video_show==1?false:true
       
	 	   	     var options = {
                controls: true,
                url:url,//http://og9dz2jqu.cvoda.com/Zmlyc3R2b2RiOm9jZWFucy0xLm1wNA==_q00000001.m3u8
                type:'video/mp4',
                preload:true,
                stretching:"panscan",
                poster:state.video_b_url,
                autoplay:true // 如为 true，则视频将会自动播放
               }
            
               var player = new QiniuPlayer('demo_video',options); 
        };     
	 	   	Initialization.add = function(url){	}
	 	   	    	
const state = {
	urls:'http://video.cieo.com.cn/',//全局请求头
	
	data:{//全局存储当前登录用登录信息
		
	},
	
	cesi:'vuex内部执行方法',
	
	bottom:'',
	
	btn_show:true,//低部导航栏显示隐藏控制
	
	video_id:'',//获取作品详情数据的id
	
	video_url:'',//播放器url
    
    video_b_url:'',
    
    dat:{
         
      	 Initializationone:Initialization.one,    
      	 Initializationadd:Initialization.add    
      },
    
    tou_url:'',
    
};
        
	 	   



//修改状态
const mutations = {
	 del(state){
	 	 state.cesi == '这个可以，执行完成'?state.cesi='vuex内部执行方法':state.cesi='这个可以，执行完成'
	 },
	 
	 
	 	 
};

export default new Vuex.Store({
	state,
	mutations
});
