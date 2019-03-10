<template>
  <!--浏览记录-->
  <div id="hello" style="width:100%;background:white;padding-top:0.133333rem;">
     <!--没有课程时展示--> 
       <div v-if="act_show" class="mei_box">
       	   <img src="../../../static/img/liulanjilv.png" alt="" />
       	   <div class="p_boxa">暂时没发现浏览记录哦~去首页看看有什么课程吧</div>
           <div @click="go_home" class="btn">去看看</div>                 
       </div>   
     <!--有课程时展示-->     
       <div v-else class="value_box" v-for="(i,index) in actives">
       	   <div class="value_box_c">
       	   	   
       	   	  <div id="img_box">
       	    		 <img v-show="img_show==false" style="width:50%;height:50%;margin-top:0.433333rem;" src="../../../static/img/gif/5-121204193R5-50.gif" alt="" />
       	    		 <img v-show="img_show" @load="img_show=true" :src="i.pic" alt="" />
       	    	</div>
       	   	   
       	   	   <div class="box_right">
       	   	   	 <p class="title">{{i.title}}</p> 
       	   	   	 <p class="title_c">{{i.synopsis}}</p>
       	   	   	 <div class="title_d">
       	   	   	 	<img src="../../../static/img/lisi.png" alt=""/><p>{{i.time}}</p> 
       	   	   	 	<div @click="go_xa(i)" class="btns">查看详情</div>
       	   	   	 </div>
       	   	   </div>
       	   </div>
       </div>
       
  </div>
</template>

<script>
import store from '../../vuex/store.js'
import router from '../../router/index.js'
import axios from 'axios'
export default {
  data () {
    return {
    	actives:[],//数据
    	act_show:false,
    	img_show:false,
    }
  },
  methods:{
  	 go_xa(i){
  	 	  localStorage.video_id = i.videos_group_id;
	 	    router.push({
	   	     path:'./Course_details'
	   	  }) 	
  	 },
  	
  	 git_act(){
  	 	    const loading = this.$loading({
  	  	      color:'#FEE045',
  	  	      text:'加载中...'
  	        });
  	 	    axios.get(store.state.urls+'api/fotoplaces/index?token='+localStorage.api_token1
        	      ).then(res=>{
        	      	 if(res.data.code==200){
        	      	 	  console.log(res.data.data.data,'订单数据');
        	      	 	  this.actives = res.data.data.data;
        	      	 	  if(this.actives){
        	      	 	  	 for(var i=0;i++;i<this.actives.length){
        	      	 	  	 	    this.actives[i].pic+'-dbsf'
        	      	 	  	 }
        	      	 	  }
        	      	 	  this.actives = this.actives?this.actives:[];
        	      	 	  this.act_show = this.actives.length==0?true:false;
	  	    	          loading.close();
        	      	 }else{
        	      	 	 this.$toast.error('网络错误')
  	  	             loading.close()
        	      	 }
               }).catch(err=>{
                      console.log(err);
                     
  	  	             loading.close()
              }); 
  	 	   
  	 	   
  	 },
  	
  	
  	  go_home(){
  	     router.push({
  	   	     path:'./Course_selection',
  	   	}) 	
  	  },
  	  
  },
  mounted(){
  	   this.git_act()
  	   $("html, body").animate({scrollTop:0});//回顶部
  	  store.state.btn_show = false;
  	  store.state.bottom = 'mine';
  	  localStorage.video_show='true'
//	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
  }
}
</script>

<style scoped>
	.btns{
		width: 2rem;
		height: 100%;
		background: #FEE045;
		float: right;
		font-size: 0.32rem;
		color: #6E4C45;
		text-align: center;
        line-height: 0.786666rem;
        border-radius: 0.586666rem;
	}
	.title_d p{
		font-size: 0.293333rem;
		color: #C5B2AB;
		float: left;
		margin-top: 0.346666rem;
		margin-left: 0.186666rem;
	}
	.title_d img{
		 width: 0.386666rem;
		 height: 0.386666rem;
		 float: left;
		 margin-top: 0.346666rem;
	}
	.title_d{
		 width: 100%;
		 height: 0.746666rem;
		 margin-top: 0.226666rem;
	}
	.title_c{
		 font-size: 0.32rem;
		 color: #C5B2AB;
		 margin-top: 0.146666rem;
		 width: 100%;
		 overflow: hidden;
         text-overflow:ellipsis;
         white-space: nowrap;
	}
	.title{
		 font-size: 0.373333rem;
		 color: #6E4C45;
		 font-weight: 600;
		 width: 100%;
		 overflow: hidden;
         text-overflow:ellipsis;
         white-space: nowrap;
	}
	.box_right{
		width: 6.586666rem;
		height:2.133333rem;
		float: right;
		/*background: #F0F0F0;*/
	}
	#img_box{
		 width: 2.133333rem;
		 height: 2.133333rem;
		 float: left;
		 text-align: center;
	}
	#img_box img{
		 width: 100%;
		 height: 100%;
	}
	.value_box_c{
		 width: 9.2rem;
		 height: 100%;
		 margin: 0 auto;
		 border-bottom:0.013333rem solid #F0F0F0;
		 padding-top: 0.3rem;
	}
	.value_box{
		width: 100%;
		height: 2.666666rem;
		/*padding:0 0.4rem;*/
	}
	.btn{
		 width: 2.546666rem;
		 height: 0.96rem;
		 text-align: center;
         line-height: 0.96rem;
         font-size: 0.426666rem;
         color: #6E4C45;
         border-radius: 0.586666rem;
         background: #FEE045;
         margin: 0.8rem auto;
	}
	.p_boxa{
		width: 4.106666rem;
		height: 1.066666rem;
		margin: 0 auto;
	}
	.mei_box img{
		 width: 100%;
		 height: 4rem;
		 margin-bottom: 0.613333rem;
		 
	}
	.mei_box{
		 width: 6.066666rem;
		 height: 8rem;
		 margin:2.293333rem auto 0 auto;
		 /*background: red;*/
		text-align: center;
		font-size: 0.373333rem;
		color: #C5B2AB;
	}
</style>
