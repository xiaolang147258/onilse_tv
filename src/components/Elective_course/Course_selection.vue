<template>
  <div id="hello" style="width:100%;background:#FFFFFF;border-top: 0.013333rem solid #DEDEDE;padding-bottom: 1.306rem;">
<!--顶部导航滑动区---------------------------------------------------------------------------------------------------> 
      <div id="titles">
      	  <van-tabs @click='tab_click' style=''>
                <van-tab  v-for="index in 8" :title="'标签 ' + index" ></van-tab>
         </van-tabs>
      </div>
      
<!--轮播区域---------------------------------------------------------------------------------------------------->  
      <div style="width:100%;height:4.566666rem;">
      	  <div class="swiper-container">
          	  <div class="swiper-wrapper">
              	  <div v-for="(i,index) in 6" @click="to_click" style="width:7.866666rem;" class="swiper-slide">Slide 21</div>
           	</div>
      	  </div>
      </div>
<!------------------------------------------------------------------------------------------------------>       
      <div class="tabs_box" v-for="index in 3">
      	   <div class="tabs_top">
      	   	   <p class="tabs_top_p_left">满足孩子的好奇心</p>
      	   	   <img class="tabs_top_img_right" src="../../../static/img/xueshngxinxi_xuanz.png"/>
      	   	   <p @click="to_see_more" class="tabs_top_p_right">查看更多</p>
      	   </div>
      	   
      	   <div class="tabs_title" v-for="index in 3">
      	   	   <div class="tabs_title_img"></div>
      	   	   <div class="tabs_title_titles">
      	   	   	     <p class="tabs_title_titles_p1">十万个为什么|故事全集</p>
      	   	   	     <p class="tabs_title_titles_p2">打开新世界的大门，了解更多的知识</p>
      	   	   	     
      	   	   	    <p style="margin-top: 0.533333rem;"><img class="tabs_title_titles_p_img" src="../../../static/img/bofng.png"/>
      	   	   	        <a class="tabs_title_titles_p_a">8.8万</a>
      	   	   	    </p>
      	   	   	     
      	   	   	     <div @click="go_det" class="tabs_title_titles_btn">去学习</div>
      	   	   </div>
      	   </div>
      </div>
      
      <div style="width:100%;height:0.906666rem;background:#F0F0F0;text-align:center;line-height:0.906rem;font-size:0.32rem;color:#999999">
      	 已经是最底部了~
      </div>
      
      
      
  </div>
</template>

<script>
import store from '../../vuex/store.js'
import router from '../../router/index.js'
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';

export default {
	
  data () {
  	
    return {
    	  
    }
  },
  computed:{
  	
  },
  methods:{
  	to_click(){
  		 router.push({
  	   	     path:'./Course_details',
  	   	}) 
  	},
  	go_det(){
  		  router.push({
  	   	     path:'./Course_details',
  	   	}) 
  	},
  	
  	to_see_more(){
  		  router.push({
  	   	     path:'./see_more',
  	   	})
  	},
  	
  	
  	tab_click(index,title){//顶部导航栏 任一项被点击点击
  		  console.log(index,title)
  	},
  	
  	git_swiper(){//初始化swiper
  		   var mySwiper = new Swiper('.swiper-container',{
            effect :'coverflow',
              slidesPerView: 1.2,
              centeredSlides: true,
              coverflowEffect:{
                rotate: 5,
                stretch:-10,
                depth: 40,
                modifier: 3,
                slideShadows : false
            },
        })
  	},
  	
  
  },
  
  mounted(){
  	  store.state.btn_show = true;
  	  store.state.bottom = 'Elective course'
//	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
  	  this.git_swiper()
  }
}
</script>
    
<style scoped>
	.tabs_title_titles_p_a{
		  color: #C5B2AB;
		  font-size: 0.293333rem;
		  margin-left: 0.15rem;
	}
	.tabs_title_titles_p_img{
		 width: 0.373333rem;
		 height: 0.373333rem;
		 float: left;
	}
	.tabs_title_titles_btn{
		 width: 1.586666rem;
		 height: 0.746666rem;
		 background: #FEE045;
		 font-size: 0.32rem;
		 color: #6E4C45;
		 line-height: 0.746666rem;
		 text-align: center;
		 border-radius: 0.373333rem;
		 position: absolute;
		 right: 0rem;
		 bottom: 0;
	}
	.tabs_title_titles_p2{
		 color: #C5B2AB;
		 font-size: 0.32rem;
		 width: 100%;
		 margin-top: 0.186666rem;
      overflow: hidden;
       text-overflow:ellipsis;
       white-space: nowrap;		 
	}
	.tabs_title_titles_p1{
		  font-size: 0.373333rem;
		  color: #6E4C45;
		  width: 100%;
		 margin-top: 0.186666rem;
      overflow: hidden;
       text-overflow:ellipsis;
       white-space: nowrap;
	}
	.tabs_title_titles{
		 height: 100%;
		 width: 6.586666rem;
		 /*background:lightgoldenrodyellow;*/
		 float: right;
		 position: relative;
	}
	.tabs_title_img{
		   width: 2.133333rem;
		   height: 2.133333rem;
		   background:lightskyblue;
		   border-radius: 0.066666rem;
		   overflow: hidden;
		   float: left;
	}
	.tabs_title{
		 width: 100%;
		 height: 2.133333rem;
		 margin-top: 0.32rem;
		 padding: 0 0.4rem;
	}
	
	.tabs_top_p_right{
		  font-size: 0.32rem;
		  color: #C5B2AB;
		  float: right;
	}
	.tabs_top_img_right{
		   width: 0.16rem;
		   height: 0.266666rem;
		   float: right;
		   margin-top: 0.4rem;
		   margin-left: 0.213333rem;
	}
	.tabs_top_p_left{
		   font-size: 0.426666rem;
		   color: #6E4C45;
		   font-family:PingFang SC;
		   float: left;
	}
	.tabs_top{
		  width:100%;
		  height: 1.133333rem;
		  line-height: 1.133333rem;
		  border-bottom:0.013333rem solid #F0F0F0;
		  padding: 0 0.4rem;
	}
	.tabs_box{
		  width: 100%;
		  height: 8.653333rem;
		  margin-bottom:0.533333rem;
		  /*background:lightskyblue;*/
	}
	.swiper-slide{
		background:#007AFF;
		border-radius:0.066666rem;height: 4.23rem;
		   -moz-box-shadow:0em 1em 1em #BDBDBD; -webkit-box-shadow:0em 1em 1em #BDBDBD; box-shadow:0em 0.4em 1em #BDBDBD;
	}
	.swiper-container {
    width: 100%;
    height:100%;
}  
	 #titles{
	 	  width:95%;
	 	  height: 1.333333rem;
	 	  margin: 0 auto;
	 	  margin-top: 0.1333rem;
	 	  /*background:honeydew;*/
	 	  padding:0.13333rem 0;
	 }
	
	
 .demo-button {
     
  }

</style>
