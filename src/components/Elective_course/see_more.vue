<template>
	<!--点击查看更多 --课程列表页面-->
  <div id="hello" style="width:100%;background:white;float: left;">
  	  <!-- <mu-scale-transition> -->
		  
		  
  	  <div v-for="(i,index) in 4" v-show="dal">
	   <mu-scale-transition>
      <div v-show="img_shows" class="titles" >
      	 <!-- <div v-show="img_shows==false" id="login_box">
      	 	<img src="../../../static/img/gif/5-121204193R5-50.gif" alt="" />
      	 </div> -->
      	 
      	    <div v-show="img_shows" style="width: 100%;height: 100%;">
      	       <img @load="img_shows=true" class="titles_img" src="http://img3.imgtn.bdimg.com/it/u=1206232608,432063717&fm=26&gp=0.jpg" alt="" />
      	    </div>
      	 
      	  <div class="titles_val_box">
      	  	 <img src="http://img3.imgtn.bdimg.com/it/u=1206232608,432063717&fm=26&gp=0.jpg" alt="" />  
      	  	 <div class="titles_val_box_box">
      	  	 	 <p>{{'标题内容'}}</p>
      	  	 	 <div @click="to_Course_details(i)" class="titles_val_box_box_btn">去学习</div>
      	  	 </div>
      	  </div>
      </div>
	  </mu-scale-transition>
     </div>
	 
	 
     <!-- </mu-scale-transition> -->
     
     <div v-show="active.length>6" style="float: left;margin-top:0.4rem;width:100%;height:0.906666rem;background:#F0F0F0;text-align:center;line-height:0.906rem;font-size:0.32rem;color:#999999">
      	 已经是最底部了~
     </div>           
    
  </div>
</template>

<script>
import store from '../../vuex/store.js'
import router from '../../router/index.js'
import axios from 'axios'
export default {
  
  data (){
    return{
    	active:[],
    	dal:true,
    	img_shows:false,
    }
  },
  computed:{
  	
  },
  methods:{
  	  git_act(){
  	  	    const loading = this.$loading({
  	  	      color:'#FEE045',
  	  	      text:'加载中...'
  	        });
  		  	axios.get(store.state.urls+'api/videos/indexData'
        	      ).then(res=>{
        	      	 if(res.data.code==200){
        	      	 	  
        	      	 	  this.active = res.data.data.data;
        	      	 	  this.active = this.active?this.active:[];
        	      	 	  console.log(this.active,'首页视频列表数据');
        	      	 	  this.dal = true;
	  	    	          loading.close();
	  	                  
        	      	 }else{
        	      	 	
        	      	 	 this.$toast.warning({
  		   	     	       message:'网络错误',
  		   	     	       time:'1500'
  		   	             })
  	  	                 loading.close();
  	  	                 
        	      	 }
               }).catch(err=>{
                   loading.close();    
                     
                      
              });  
  	  },
  	  to_Course_details(i){//跳转至课程详情
  	  	localStorage.video_id = i.id
  	  	router.push({
  	   	     path:'./Course_details',
  	   	}) 
  	  },
  	  
  	  
  	  
  },
  mounted(){
  	  localStorage.video_show='true';
	  localStorage.video_show2='true';
  	  this.git_act()
  	  store.state.btn_show = false;
  	  store.state.bottom = 'movies'
  }
}
</script>

<style scoped>
	#login_box{
		 width: 1.066666rem;
		 height: 1.066666rem;
		 margin: 1.2rem auto;
	}
	#login_box img{
		  width: 100%;
		  height: 100%;
	}
	
	.titles_val_box_box_btn{
		 width: 1.586666rem;
		 height: 0.746666rem;
		 background: #FEE045;
		 text-align: center;
         line-height: 0.746666rem;
         font-size: 0.32rem;
         color: #6E4C45;
         float: right;
         margin-top: 0.133333rem;
         border-radius: 0.373333rem;
	}
	.titles_val_box_box p{
		width: 6.5rem;
		 font-size: 0.373333rem;
		 color: white;
		 float: left;
         overflow: hidden;
          text-overflow:ellipsis;
         white-space: nowrap;
	}
	.titles_val_box_box{
		 width: 100%;
		 height: 100%;
		 line-height: 1.0133rem;
		 position: absolute;
		 top: 0;
		 left: 0;
		 z-index: 2;
		 padding-left: 0.4rem;
		 padding-right: 0.266666rem;
		 /*background:rgba(0,0,0,.4);*/
		 border-radius: 0.066666rem 0.066666rem 0 0;
	}
	.titles_val_box img{
		  height:4.533333rem;
		  width:9.8rem;
		  position: absolute;
          -webkit-filter: blur(10px); /* Chrome, Opera */
         -moz-filter: blur(10px);
        -ms-filter: blur(10px);    
        filter: blur(10px);
        filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=5, MakeShadow=false); /* IE6~IE9 */
        position:absolute;
        bottom:-0.5rem;
        left:-0.3rem;
        
	}
	.titles_val_box{
		 width: 100%;
		 height: 1.013333rem;
         position: absolute;
         bottom: 0;
         left:0;
         overflow: hidden;
	}
  .titles{
  	  width: 9.2rem;
  	  height: 4.133333rem;
  	  border-radius: 0.20666rem;
  	  overflow:hidden;
  	  background:#F5F5F5;
  	  margin: 0.4rem auto;
  	  position: relative;
  	  -moz-box-shadow:0em 0.5em 2em #9E9E9E; -webkit-box-shadow:0em 0.5em 2em #9E9E9E; box-shadow:0em 0.5em 2em #9E9E9E;
      overflow: hidden;
  }
  .titles_img{
  	  width:100%;
  	  height:100%;
  	  border-radius:0.20666rem;
  }

</style>
