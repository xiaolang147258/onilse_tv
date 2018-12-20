<template>
	<!--点击查看更多 --课程列表页面-->
  <div id="hello" style="width:100%;background:white;float: left;">
  	  
      <div class="titles" v-for="(i,index) in 5">
      	  <img class="titles_img" src="../../../static/img/b_bb.png" alt="" />
      	  <div class="titles_val_box">
      	  	 <img src="../../../static/img/b_bb.png" alt="" />  
      	  	 <div class="titles_val_box_box">
      	  	 	 <p>冲向太空游乐园，和星星月亮一起玩耍</p>
      	  	 	 <div @click="to_Course_details" class="titles_val_box_box_btn">去学习</div>
      	  	 </div>
      	  </div>
      </div>
      
    <div style="float: left;margin-top:0.4rem;width:100%;height:0.906666rem;background:#F0F0F0;text-align:center;line-height:0.906rem;font-size:0.32rem;color:#999999">
      	 已经是最底部了~
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
  computed:{
  	
  },
  methods:{
  	  to_Course_details(){//跳转至课程详情
  	  	router.push({
  	   	     path:'./Course_details',
  	   	}) 
  	  },
  	  
  	  
  },
  mounted(){
  	  store.state.btn_show = false;
  	  store.state.bottom = 'movies'
//	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
  }
}
</script>

<style scoped>
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
		  height: 4.533333rem;
		  width: 9.8rem;
		  position: absolute;
          -webkit-filter: blur(10px); /* Chrome, Opera */
         -moz-filter: blur(10px);
        -ms-filter: blur(10px);    
        filter: blur(10px);
        filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=5, MakeShadow=false); /* IE6~IE9 */
        position: absolute;
        bottom: -0.5rem;
        left: -0.3rem;
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
  	  overflow: hidden;
  	  background: #87CEFA;
  	  margin: 0.4rem auto;
  	  position: relative;
  	  -moz-box-shadow:0em 0.5em 2em #9E9E9E; -webkit-box-shadow:0em 0.5em 2em #9E9E9E; box-shadow:0em 0.5em 2em #9E9E9E;
  }
  .titles_img{
  	  width: 100%;
  	  height: 100%;
  }

</style>
