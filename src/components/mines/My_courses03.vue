<template>
  <!--我的课程-->
  <div id="hello" style="width:100%;background:white;padding-top:0.133333rem;">
     <!--没有课程时展示--> 
       <div v-if="false" class="mei_box">
       	   <img src="../../../static/img/meiyoukecheng.png" alt="" />
       	   <div class="p_boxa">暂时没发现课程哦~去首页看看有什么课程吧</div>
           <div @click="go_home" class="btn">去看看</div>                 
       </div>   
     <!--有课程时展示-->     
       <div v-else class="value_box" v-for="i in 3">
       	   <div class="value_box_c">
       	   	   <img class="img_left" src="../../../static/img/bacs.png" alt="" />
       	   	   <div class="box_right">
       	   	   	 <p class="title">十万个为什么|故事全集</p> 
       	   	   	 <p class="title_c">上次学习日期：2018-9-12</p>
       	   	   	 <div class="title_d">
       	   	   	 	<img src="../../../static/img/xuexijindu.png" alt="" /><p>学习进度：30%</p> 
       	   	   	 	<div class="btns">继续学习</div>
       	   	   	 </div>
       	   	   </div>
       	   </div>
       </div>
       
  </div>
</template>

<script>
import store from '../../vuex/store.js'
import router from '../../router/index.js'
export default {
  
  data () {
    return {
    	
    }
  },
  methods:{
  	  go_home(){
  	     router.push({
  	   	     path:'./Course_selection',
  	   	}) 	
  	  },
  	  
  },
  mounted(){
  	   $("html, body").animate({scrollTop:0});//回顶部
  	  store.state.btn_show = false;
  	  store.state.bottom = 'mine'
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
	.img_left{
		 width: 2.133333rem;
		 height: 2.133333rem;
		 float: left;
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
