<template>
  <!--优惠券-->
  <div id="hello" style="width:100%;background:white;padding-top: 1.306666rem;">
       <div class="top_tab">
       	   <div @click="tab_click(0,'effective')" class="top_tab_c" :class="{top_tab_color:tab_show==0}">可使用<div v-show="tab_show==0" class="top_tab_c_box"></div></div>
       	   <div @click="tab_click(1,'overdue')" class="top_tab_c" :class="{top_tab_color:tab_show==1}" style="margin-left:1.64rem;">已使用<div v-show="tab_show==1" class="top_tab_c_box"></div></div>
       	   <div @click="tab_click(2,'beenused')" class="top_tab_c" :class="{top_tab_color:tab_show==2}" style="margin-left:1.64rem;">已过期<div v-show="tab_show==2" class="top_tab_c_box"></div></div>
       </div>
    <!--没有订单时展示-->
       <div v-if="act_show" class="mei_box">
       	   <img src="../../../static/img/xiaoquan.png" alt="" />
       	   <div class="p_boxa">暂时没发现优惠券哦~去首页看看有什么课程吧</div>
           <div @click="go_home" class="btn">去看看</div>                 
       </div>
    <!--有订单时展示-->   
       <div v-else class="aws_tab_box">
       	    
       	    <div class="box" v-for="i in 3">
       	    	 <div class="boxs1">
       	    	 	<img :src="tab_show==0?'../../../static/img/youhui_c.png':'../../../static/img/youhui_a.png'"/> 
       	    	 	 <div class="boxs1_c">
       	    	 		 <p>限时立减券</p>
       	    	 		 <a>有限日期：2019-12-10</a>
       	    	 	 </div>
       	    	 </div>
       	    	 <div class="boxs2">
       	    	 	 <img src="../../../static/img/youhui_b.png"/>
       	    	 	 <div class="boxs2_c">
       	    	 	 	 <div class="jia_box"><p class="p1"><a style="font-size:0.373333rem;">¥</a>10</p><p class="p2">元优惠券</p></div>
       	    	 	     <div v-show="tab_show==0" class="box_btn">去使用</div>
       	    	 	 </div>
       	    	 	 <img v-show="tab_show==1" id="sy" src="../../../static/img/yishiyong.png" alt="" />
       	    	 	 <img v-show="tab_show==2" id="sy" src="../../../static/img/yiguoqi.png" alt="" />
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
    	tab_show:0,
    	actives:'',//数据
    	act_show:false,
    }
  },
  methods:{
  	 tab_click(index,val){
  	 	 this.tab_show = index;
  	 	  const loading = this.$loading({
  	  	      color:'#FEE045',
  	  	      text:'加载中...'
  	        });
  	 	  axios.get(store.state.urls+'api/coupons/'+val
        	      ).then(res=>{
        	      	 if(res.data.code==200){
        	      	 	  console.log(res.data.data,'优惠券数据');
        	      	 	  this.actives = res.data.data
        	      	 	  this.act_show = this.actives.length==0?true:false;
	  	    	          loading.close();
        	      	 }else{
        	      	 	 this.$toast.error('网络错误')
  	  	             loading.close()
        	      	 }
               }).catch(err=>{
               	     
  	  	             loading.close()
                      console.log(err)
              }); 
  	 },
  	 go_home(){
  	 	 router.push({
  	   	     path:'./Course_selection',
  	   	}) 
  	 }
  },
  mounted(){
  	  this.tab_click(0,'effective');
  	  $("html, body").animate({scrollTop:0});//回顶部
  	  store.state.btn_show = false;
  	  store.state.bottom = 'mine'
//	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
  }
}
</script>

<style scoped>
	#sy{
		width: 1.733333rem;
		height: 1.333333rem;
		position: absolute;
		bottom: 0.066666rem;
		left: 0.786666rem;
		z-index: 3;
	}
	.box_btn{
		width: 1.586666rem;
		height: 0.746666rem;
		margin: 0.146666rem auto;
		background: #FEE045;
		text-align: center;
		line-height:0.746666rem;
		font-size: 0.32rem;
		color: #6E4C45;
		border-radius:0.586666rem;
	}
	.p2{
		font-size:0.293333rem;
		color: #6E4C45;
		margin-top:-0.206666rem;
	}
	.p1{
		font-size:0.88rem;
		color: #F55656;
	}
	.jia_box{
		width: 1.473333rem;
		height: 1.48rem;
		margin: 0 auto;
		text-align: center;
	}
	.boxs2_c{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	    z-index:4;
	}
	.boxs2 img{
		width: 100%;
		height: 100%;
	}
	.boxs1_c a{
		 font-size:0.32rem;
		 color: #6E4C45;
		 
	}
	.boxs1_c p{
		 font-size:0.48rem;
		 color: #6E4C45;
		 font-weight:bold;
		 margin-bottom:0.36rem;
	}
	.boxs1_c{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		padding-top: 0.533333rem;
		padding-left: 0.8rem;
	}
	.boxs2{
		width: 3.306666rem;
		height: 100%;
		float: left;
		position:relative;
	}
	.boxs1 img{
		width: 100%;
		height: 100%;
	}
	.boxs1{
		width: 5.36rem;
		height: 100%;
		float: left;
		position: relative;
		
	}
	.box{
		 width: 8.666666rem;
		 height: 2.533333rem;
		 /*background: #F0F0F0;*/
		 margin:0.68rem auto 0.4rem auto;
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
