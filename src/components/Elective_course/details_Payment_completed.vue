<template>
  <div id="hello" style="width:100%;background:white;padding-top: 3rem;">
        <div class="box">
        	<img src="../../../static/img/ganxiezhichi.png"/>
        	<div class="p_box">感谢您的支持和关注，我们会一直努力做到最好的！</div> 
        	<div @click="go_home" class="btn">返回首页</div>
        </div>  
      
  </div>
</template>

<script>
import store from '../../vuex/store.js'
import router from '../../router/index.js'
export default {
  
  data () {
    return {
    	show4:false,
    }
  },
  computed:{
  	
  },
  methods:{
  	  go_home(){
  	  	  router.push({
  		 	   path:'/Course_selection'
  		 }) 
  	  },
  	  
  },
  mounted(){
  	 
  	  store.state.btn_show = false;
  	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
      
  }
}
</script>

<style scoped>
	
	.btn{
		width: 2.546666rem;
		height: 0.96rem;
		background: #FEE045;
		margin: auto;
		text-align: center;
		line-height: 1.05rem;
		font-size: 0.426666rem;
		color: #6E4C45;
		border-radius: 0.586666rem;
		margin-top: 0.8rem;
	}
	.p_box{
		 width: 4.853333rem;
		 height: 1.133333rem;
		 font-size: 0.373333rem;
		 color: #C5B2AB;
		 text-align: center;
		 margin: 0.613333rem auto;
	}
	.box img{
		 width: 100%;
		 height: 4rem;
	}
 .box{
 	 width: 6.066666rem;
 	 height: 8rem;
 	 margin:  auto;
 	 /*background:#E8E8E8;*/
 	 text-align: center;
 }

</style>
