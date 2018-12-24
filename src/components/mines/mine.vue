<template>
  <div id="hello" style="width:100%;background:white;padding-bottom: 1.306rem;">
        <div class="top_Avatar_box">
        	    <div class="avatar_box"><img src="../../../static/img/b_bb.png" alt="" /></div>
        </div>
        
        <div class="options"><div @click="to_Personal_information" class="options_c">
        	 	    <img src="../../../static/img/xinxi.png" alt="" />
        	 	    <p>个人信息</p>
        	      <van-icon size='0.466666rem' color='#6E4C45' name="arrow" />
        </div></div>
        
        <div class="options"><div @click="to_My_Order02" class="options_c">
        	 	    <img src="../../../static/img/dindan.png" alt="" />
        	 	    <p>我的订单</p>
        	      <van-icon size='0.466666rem' color='#6E4C45' name="arrow" />
        </div></div>
        
        <div class="options"><div @click="to_My_courses03" class="options_c">
        	 	    <img src="../../../static/img/p_k.png" alt="" />
        	 	    <p>我的课程</p>
        	      <van-icon size='0.466666rem' color='#6E4C45' name="arrow" />
        </div></div>
        <div v-show="true" class="options_c_box">
        	   <div v-for="i in 5" class="options_c_box_c">
        	   	   <img src="../../../static/img/b_bb.png" alt="" />
        	   	   <p>趣味世界…</p>
        	   </div>  
        </div>
        
        <div class="options"><div @click="to_coupon04" class="options_c">
        	 	    <img src="../../../static/img/youhuiquan.png" alt="" />
        	 	    <p>优惠券</p>
        	      <van-icon size='0.466666rem' color='#6E4C45' name="arrow" />
        </div></div>
        
        <div class="options"><div @click="to_my_collection05" class="options_c">
        	 	    <img id="shou" src="../../../static/img/wodeshoucahng (1).png" alt="" />
        	 	    <p>我的收藏</p>
        	      <van-icon size='0.466666rem' color='#6E4C45' name="arrow" />
        </div></div>
        
        <div class="options"><div @click="to_Browse_record06" class="options_c">
        	 	    <img src="../../../static/img/xinxi.png" alt="" />
        	 	    <p>浏览记录</p>
        	      <van-icon size='0.466666rem' color='#6E4C45' name="arrow" />
        </div></div>
        
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
  computed:{
  	
  },
  methods:{
  	to_coupon04(){
  		  router.push({
  	   	     path:'./coupon04',
  	   	}) 
  	},
  	to_Browse_record06(){
  		  router.push({
  	   	     path:'./Browse_record06',
  	   	}) 
  	},
  	to_my_collection05(){
  		     router.push({
  	   	     path:'./my_collection05',
  	   	}) 
  	},
  	to_My_courses03(){
  	 	    router.push({
  	   	     path:'./My_courses03',
  	   	}) 
  	},
  	 to_My_Order02(){
  	 	    router.push({
  	   	     path:'./My_Order02',
  	   	}) 
  	 },
  	 to_Personal_information(){
  	 	   router.push({
  	   	     path:'./Personal_information',
  	   	}) 
  	 },
  	  
  },
  mounted(){
  	  $("html, body").animate({scrollTop:0});//回顶部
  	  store.state.btn_show = true;
  	  store.state.bottom = 'mine'
//	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
  }
}
</script>

<style scoped>
	.options_c_box_c p{
		  width: 100%;
		  font-size: 0.266666rem;
		  color: #6E4C45;
		  overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
	}
	.options_c_box_c img{
		  width: 100%;
		  height: 1.493333rem;
		  margin-top: 0.16rem;
	}
	.options_c_box_c{
		 width: 1.493333rem;
		 height: 100%;
		 padding-top: 0.253333rem;
		 float: left;
		 margin-right: 0.266666rem;
	}
	.options_c_box{
		 width: 100%;
		 height: 2.52rem;
		 padding-left: 0.45rem;
		 /*background:#EAEAEA;*/
	}
	#shou{
		  width: 0.53333rem;
		  height: 0.553333rem;
		  margin-left:0.066666rem;
	}
	.options_c i{
		  float: right;
		  margin-right: 0.4rem;
		  margin-top:0.45rem;
	}
	.options_c p{
		  font-size: 0.426666rem;
		  color: #6E4C45;
		  float: left;
		  margin-left: 0.186666rem;
		  
	}
	.options_c img{
		  width: 0.653333rem;
		  height: 0.653333rem;
		  float: left;
		  margin-top: 0.333333rem;
	}
	.options_c{
		  width: 9.573333rem;
		  height: 100%;
		  border-bottom: 0.013333rem solid #F0F0F0;
		  float: right;
	}
	.options{
		  width: 100%;
		  height: 1.306666rem;
		  line-height: 1.306666rem;
		  
	}
	.avatar_box img{
		  width: 100%;
		  height: 100%;
		  border-radius: 50%;
		  border:0.036666rem solid white;
	}
	.avatar_box{
		 width: 1.706666rem;
		 height: 1.706666rem;
		 margin: 0 auto;
		 
	}
    .top_Avatar_box{
    	  width: 100%;
    	  height: 4.026666rem;
    	  background:url('../../../static/img/bacs.png');
    	  background-size:100% 100%;background-repeat:no-repeat;
    	  padding-top: 0.733333rem;
    	  margin-bottom: 0.266666rem;
    }

</style>
