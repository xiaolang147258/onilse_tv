<template>
  <!--我的订单-->
  <div id="hello" style="width:100%;background:white;padding-top: 1.306666rem;">
       <div class="top_tab">
       	   <div @click="tab_click(0)" class="top_tab_c" :class="{top_tab_color:tab_show==0}">待支付<div v-show="tab_show==0" class="top_tab_c_box"></div></div>
       	   <div @click="tab_click(1)" class="top_tab_c" :class="{top_tab_color:tab_show==1}" style="margin-left:1.64rem;">已支付<div v-show="tab_show==1" class="top_tab_c_box"></div></div>
       	   <div @click="tab_click(2)" class="top_tab_c" :class="{top_tab_color:tab_show==2}" style="margin-left:1.64rem;">待评价<div v-show="tab_show==2" class="top_tab_c_box"></div></div>
       </div>
    <!--没有订单时展示-->
       <div v-if="false" class="mei_box">
       	   <img src="../../../static/img/wodedindan.png" alt="" />
       	   <div class="p_boxa">暂时没发现订单哦~去首页看看有什么课程吧</div>
           <div @click="go_home" class="btn">去看看</div>                 
       </div>
    <!--有订单时展示-->   
       <div v-else v-for="i in 4" class="aws_tab_box">
       	    <div class="aws_tab_box_t1">
       	    	 <img src="../../../static/img/bacs.png" alt="" />
       	    	 <div class="aws_tab_box_t1_c">
       	    	 	<div class="aws_tab_box_t1_c1"><p>智慧英语课</p><a>¥178</a></div>
       	    	 	<p class="go_dan">下单日期：2018-12-23  22:21:45</p>	     
       	    	 	<p v-show="tab_show!=0" style="margin-top:0.16rem;" class="go_dan">下单日期：2018-12-23  22:21:45</p>	
       	    	 </div>
       	    </div>
       	    <div class="aws_tab_box_t2">
       	    	<p>订单编号：AJDJK1234</p>
       	    	<div v-if="tab_show==2" class="btn_3">去评价</div>
       	    	<div v-else-if="tab_show==1" class="btn_3">查看课程</div>
       	    	<div v-else-if="tab_show==0">
       	    		<div class="btn_3">去支付</div><div style="margin-right:0.4rem;background:#EAEAEA;" class="btn_3">取消支付</div>
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
    	tab_show:0,
    }
  },
  methods:{
  	 tab_click(index){
  	 	 this.tab_show = index;
  	 },
  	 go_home(){
  	 	 router.push({
  	   	     path:'./Course_selection',
  	   	}) 
  	 }
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
	.btn_3{
		float: right;
		width: 2.16rem;
		height: 0.746666rem;
		background:#FEE045;
		font-size: 0.346666rem;
		color: #6E4C45;
		text-align: center;
		line-height: 0.776666rem;
		border-radius: 0.133333rem;
	}
	.aws_tab_box_t2 p{
		 float: left;
		 font-size: 0.32rem;
		 color: #C5B2AB;
		 margin-top: 0.16rem;
	}
	.aws_tab_box_t2{
		width: 100%;
	}
	.go_dan{
		font-size: 0.32rem;
		color: #C5B2AB;
	}
	.aws_tab_box_t1_c1 a{
		 float: right;
		color: #F55656;
	}
	.aws_tab_box_t1_c1 p{
		 float: left;
		 color: #6E4C45;
		 font-weight: bold;
		 width: 4.6rem;
		 overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
	}
	.aws_tab_box_t1_c1{
		 width: 100%;
		 height: 0.8rem;
		 font-size: 0.426666rem;
	}
	.aws_tab_box_t1_c{
		width:6.933333rem;
		height: 1.866666rem;
		float:right;
		/*background:#E0E0E0;*/
		margin-top: 0.32rem;
	}
	.aws_tab_box_t1 img{
		width: 1.866666rem;
		height: 1.866666rem;
		float: left;
		/*margin-right: 0.4rem;*/
		margin-top: 0.32rem;
	}
	.aws_tab_box_t1{
		 width: 100%;
		 height: 2.506666rem;
		 
	}
	.aws_tab_box{
		width: 100%;
		height:3.533333rem;
		border-bottom: 0.013333rem solid #F0F0F0;
		padding: 0 0.4rem;
		/*padding-top: 0.386666rem;*/
		margin-bottom: 0.4rem;
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
	.top_tab_color{
		   color:#6E4C45;
	}
	.top_tab_c_box{
		width: 100%;
		height: 0.16rem;
		background:#FEE045;
		position: absolute;
		bottom: 0.36rem;
		left: 0;
		border-radius: 0.093333rem;
		z-index:-1;
	}
  .top_tab_c{
  	 width: 1.453333rem;
  	 height: 100%;
  	 float: left;
  	 margin-left: 1.2rem;
  	 /*background: red;*/
  	position: relative;
  	z-index:2;
  }
 .top_tab {
      width: 100%;
      height: 1.306666rem;
      line-height: 1.306666rem;
      font-size: 0.48rem;
      color:#C5B2AB;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 200;
      background: white;
  }

</style>
