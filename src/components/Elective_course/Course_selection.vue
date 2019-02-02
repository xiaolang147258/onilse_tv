<template>
	<!--
    	作者：2443611475@qq.com
    	时间：2019-01-23
    	描述：首页
    -->
  <div id="hello" style="width:100%;background:#FFFFFF;border-top: 0.013333rem solid #DEDEDE;padding-bottom: 1.306rem;padding-top: 1.633333rem;">
    
    
    
    <div v-show="showss_s" style="position:fixed; width:100%; height:100%;top: 0;left: 0;z-index:500;"></div>
    
<!--顶部导航滑动区---------------------------------------------------------------------------------------------------> 
    <div id="tit_box">
      <div id="titles">
      	 <van-tabs @click='tab_click' style=''>
                <van-tab v-for='(i,index) in tab_act' :key="index"  :title="i.title" ></van-tab>
         </van-tabs>
      </div>
    </div>   
  <div v-if="tab_lei">    
<!--轮播区域---------------------------------------------------------------------------------------------------->  
    <mu-scale-transition> 
     <div v-show="showss" style="width:100%;height:5.066666rem;position: relative;">
      	  <div class="swiper-container">
          	  <div class="swiper-wrapper">
              	  <div v-for="(i,index) in swiper_act" @click="to_click(i)" style="width:7.866666rem;height: 4.53rem;overflow:hidden;" class="swiper-slide">
              	  	 
              	  	 <div v-show="img_shows==false" id="login_box">
      	 	               <img src="../../../static/img/gif/5-121204193R5-50.gif" alt="" />
      	             </div>
              	  	 
              	  	 <mu-scale-transition> 
              	  	   <div v-show="img_shows" style="width: 100%;height: 100%;">
              	  	   	   <img @load="img_shows=true" :src="i.pic" alt="" />
              	  	   </div>
              	      </mu-scale-transition>
              	  </div>
              	  
           	</div>
      	  </div>
      	  <div style="margin: auto;" v-show="tab_lei">
      	      <a><div class="swiper-pagination"></div></a>
         </div>
      	  </div>
     </mu-scale-transition> 	  
<!------------------------------------------------------------------------------------------------------>       

    <v-touch v-on:swipeleft="leftChangeImg('左')" v-on:swiperight="leftChangeImg('右')"> 
      <div class="tabs_box" id="tabs_boxs">
      	   <div class="tabs_top">
      	   	   <p class="tabs_top_p_left">精选内容</p>
      	   	   <img class="tabs_top_img_right" src="static/img/xueshngxinxi_xuanz.png"/>
      	   	   <p @click="to_see_more" class="tabs_top_p_right">查看更多</p>
      	   </div>
        <mu-scale-transition>    
          
          、           
      	   <div  class="tabs_title" v-for="(i,index) in jin_act">
      	   	     <div  class="tabs_title_img" >
      	   	     	
      	   	     	 <div v-show="img_shows==false" id="login_box" style="margin:0.5rem auto;">
      	 	               <img src="../../../static/img/gif/5-121204193R5-50.gif" alt="" />
      	             </div>
      	   	     	
      	   	     	<mu-scale-transition>
      	   	     	  <div v-show="img_shows" style="width: 100%;height: 100%;">
      	   	     		  <img  :src="i.pic" alt="" />
      	   	     	  </div>
      	   	     	</mu-scale-transition>  
      	   	     </div>
      	   	  
      	   	   <div class="tabs_title_titles">
      	   	   	     <p class="tabs_title_titles_p1">{{i.title}}</p>
      	   	   	     <p class="tabs_title_titles_p2">{{i.synopsis}}</p>
      	   	   	    <p style="margin-top:0.4rem;height:0.4rem;line-height:0.43rem;"><img class="tabs_title_titles_p_img" src="static/img/bofng.png"/>
      	   	   	        <a class="tabs_title_titles_p_a">{{i.seenum}}</a>
      	   	   	    </p>
      	   	   	    <div @click="go_det(i)" class="tabs_title_titles_btn">去学习</div>
      	   	   </div>
      	   </div>
      	 
      	</mu-scale-transition> 
      </div>
     </v-touch>    
    </div>
  
    <div v-else>
       <v-touch v-on:swipeleft="leftChangeImg('左')" v-on:swiperight="leftChangeImg('右')">   
       <div id="tuch_boxss">
        <div v-show="lan_show" class="tabs_title" v-for="(i,index) in jin_act">
      	   	   <div class="tabs_title_img">
      	   	   	 <div v-show="img_shows2==false" id="login_box" style="margin:0.5rem auto;">
      	 	               <img src="../../../static/img/gif/5-121204193R5-50.gif" alt="" />
      	         </div>
      	   	   	<mu-scale-transition>
      	   	   	  <div v-show="img_shows2" style="width: 100%;height: 100%;">
      	   	     		  <img @load="img_shows2=true" :src="i.pic" alt="" />
      	   	     	</div>
      	   	    </mu-scale-transition>   	  
      	   	   </div>
      	   	   <div class="tabs_title_titles">
      	   	   	     <p class="tabs_title_titles_p1">{{i.title}}</p>
      	   	   	     <p class="tabs_title_titles_p2">{{i.synopsis}}</p>
      	   	   	     <p style="margin-top:0.4rem;height:0.4rem;line-height:0.43rem;"><img class="tabs_title_titles_p_img" src="static/img/bofng.png"/>
      	   	   	        <a class="tabs_title_titles_p_a">{{i.seenum}}</a>
      	   	   	     </p>
      	   	   	    <div @click="go_det(i)" class="tabs_title_titles_btn">去学习</div>
      	   	   </div>
        </div>
      
      
          <!--导航栏筛选没有数据-->
         
          <div v-show="lan_show==false" class='b_box_box' >
          	   <img class="b_img" src="static/img/ganxiezhichi.png" alt="" />
          	   <p>暂时没有课程，非常感谢您的关注和支持！</p>
          </div>
        </div>
        </v-touch>    
    </div>
   
   
    <div v-show="jin_act.length>5" style="width:100%;height:0.906666rem;background:#F0F0F0;text-align:center;line-height:0.906rem;font-size:0.32rem;color:#999999;margin-top: 0.466666rem;">
      	 已经是最底部了~
    </div>
      
   <!--全屏加载-->   
  
   
  </div>
</template>

<script>
import store from '../../vuex/store.js'
import router from '../../router/index.js'
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
import axios from 'axios'

export default{
	
  data () {
    return {
    	   tab_lei:true,
    	   jin_act:[],//精选数据列表
    	   
    	   tab_act:[],//导航栏数据
    	   
    	   swiper_act:[],//首页轮播数据
    	   lan_show:false,
    	   showss:false,
    	   show_ss:false,
    	   showss_s:true,
    	   
    	   img_shows:false,
    	   img_shows2:false,
    	    
    }
  },
  computed:{
  	
  },
  methods:{
  	
  	leftChangeImg(i){
  		  if(i=='左'){
  		  	router.push({path:'./mine'})
  		  }
  	},
  	
  	git_act_top1(){//获取导航栏数据
		   axios.get(store.state.urls+'api/videos/type'
        	      ).then(res=>{
                  if(res.data.code==200){
                  	     this.tab_act = res.data.data
                  	     console.log(this.tab_act,'导航栏数据')
                  	     
                  }
                }).catch(err=>{
                         
              }); 
             
  	},
  	git_act_2(){//获取视频列表数据
  		 
		   axios.get(store.state.urls+'api/videos/index'
        	      ).then(res=>{
        	      	 if(res.data.code==200){
        	      	 	   this.jin_act = res.data.data.data;
        	      	 	   console.log(this.jin_act,'视频列表数据')
        	      	 	   window.setTimeout(()=>{
//	  	    	              this.show_ss = true
	  	                 },1500)
        	      	 	   
        	      	 }
        	      	 
                }).catch(err=>{
                      
                      console.log(err)
                      
              }); 
  	},
  	git_act_3(){//获取轮播数据
  		 
		   axios.get(store.state.urls+'api/slides/index'
        	      ).then(res=>{
        	      	 if(res.data.code==200){
                        
                       this.swiper_act = res.data.data
                       console.log(this.swiper_act,'首页轮播数据')
                       window.setTimeout(()=>{
//	  	    	              this.showss = true
	  	                 },1500)
                       
        	      	 }
        	      	 
                }).catch(err=>{
                      
                      console.log(err)
              }); 
  	},
  	
  	
  	to_click(i){
  		 localStorage.video_id = i.id
  		 router.push({
  	   	     path:'./Course_details',
  	   	})
  	},
  	go_det(i){
  		  localStorage.video_id = i.id
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
  		  
  		  this.img_shows2 = false;
  		  this.jin_act = [];
		    console.log(index,title)
  		  this.tab_lei = index!=0?false:true
  		  if(this.tab_lei){
  		  	
  		  	 router.push({
  	   	     path:'./shua_xin',
  	   	   })
  		  	
  		  }else{
  		  	const loading = this.$loading({
  	  	   color:'#FEE045',
  	  	   text:'加载中...'
  	      });
  		  	axios.get(store.state.urls+'api/videos/data?id='+this.tab_act[index].id
        	      ).then(res=>{
        	      	  console.log(res.data);
        	      	 if(res.data.code==200){
        	      	 	 if(res.data.msg=='success'){
        	      	 	 	   this.jin_act = res.data.data.data
        	      	 	     console.log(this.jin_act,'首页视频列表数据');
        	      	 	     this.lan_show = true;
        	      	 	     document.getElementById('tuch_boxss').style.minHeight = document.documentElement.clientHeight*0.8+'px';
        	      	 	 }else{
        	      	 	 	   this.lan_show = false 
        	      	 	 }
        	      	 }else{
        	      	 	   this.lan_show = false   
        	      	 }
        	      	 loading.close()
        	      	 
               }).catch(err=>{
                      console.log(err)
              });  
  		    }
  	},
  	
  	git_swiper(){//初始化swiper
  		   var mySwiper = new Swiper('.swiper-container',{
		   	 pagination: {
              el: '.swiper-pagination',
              bulletElement : 'li',
          },
		   	   autoplay:{//自动播放
       	   delay: 2500,
       	   stopOnLastSlide: false,
       	   disableOnInteraction: true,
       	  },
  		   	  loop:true,
            effect :'coverflow',
              slidesPerView:1.2,
              centeredSlides:true,
              coverflowEffect:{
                rotate:5,
                stretch:-10,
                depth:40,
                modifier:3,
                slideShadows:false
            },
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
       })
  	},
  	
  	
  	login_ae(){//微信授权登录
　            　      var $chars='ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';/****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
　　               var maxPos = $chars.length;
　　                 var pwd = '';
　                for(var i = 0; i < 32; i++){
　　　　                 pwd += $chars.charAt(Math.floor(Math.random()*maxPos));
　　                  }
        	localStorage.api_token1=(localStorage.api_token1)?localStorage.api_token1:pwd;
		    
		     console.log(localStorage.api_token1)
		     
		 axios({
           method:"GET",
           url:store.state.urls+'api/weixin/checkLogin',
           params:{
             token:localStorage.api_token1,
             url:location.href
           }
         }).then(res=>{
        	      	 console.log(res.data,'是否登录');
        	      	 if(res.data.code==200){
//      	      	 	   localStorage.api = res.data.data
        	      	 	   console.log(res.data.data.api_token,'用户api_token');
        	      	 	   this.git_ins(res.data.data.api_token)
//      	      	 	   this.$toast.success({
//		   	     	          message:'登录成功',
//		   	     	          time:'1000'
//		   	              })
        	      	 }else if(res.data.code==300){//http://video.cieo.com.cn/dist/index.html
        	      	 	  location.href='http://video.cieo.com.cn/api/weixin/login?url=http://video.cieo.com.cn/dist/index.html&token='+localStorage.api_token1
        	      	 }
               }).catch(err=>{
                      console.log(err)
              });
  	  },
  	  
  	  git_ins(token){//获取用户信息数据
  	  	  axios.get(store.state.urls+'api/user/index?token='+token
        	      ).then(res=>{
        	      	 if(res.data.code==200){
        	      	 	  console.log(res.data.data,'用户数据信息')
//      	      	 	  this.Avatar = res.data.data
	  	                  localStorage.vip_id = res.data.data.is_videos_vip_status;
	  	                  store.state.tou_url = res.data.data.pic
        	      	 }else{
        	      	 	 this.$toast.error('网络错误')
  	  	                 
        	      	 }
               }).catch(err=>{
                      console.log(err); 
              }); 
  	  },
  	
  	
  	
  },
  
  created(){
  	  this.git_act_2();
	  this.git_act_top1();
  	  this.git_act_3();
  },
  
 
  mounted(){
  	  

  	   
//	  localStorage.api = 'asdadasdasdas'
	  localStorage.api_token1='sZGzrnY4mRDmX83KjPw6djD3Zhei3NSr'
//	  localStorage.api_token1 = ''
//    if(localStorage.api){
//    	  console.log(localStorage);
//    }else{
      	  this.login_ae()	
//    }
      
      
      this.showss_s = true;
   
  	  if(this.tab_act&&this.jin_act&&this.swiper_act){
         this.showss=true
    	   this.show_ss=true
    	   this.showss_s=false
  	  }else{
  	  	 this.$toast.warning({
  		   	     	     message:'网络错误',
  		   	     	     time:'1500'
  		   	         })
  	  }
  	  
  	  store.state.btn_show = true;
  	  store.state.bottom = 'Elective course';
//	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
  	  this.git_swiper();
  	  
	  localStorage.video_show='true';
	  localStorage.video_show2='true';
	  
//	  if(localStorage.api_token1!=''){
      	
//    }else{
      	  
//    	  console.log(1111)
//    }tabs_boxs
	  
	  	  document.getElementById('tabs_boxs').style.minHeight = document.documentElement.clientHeight*0.45+'px';
	       
  }
}
</script>
    
<style scoped>
	
	#tuch_boxss{
		 width: 100%;
		 /*background: red;*/
	}
	
	#login_box{
		 width: 1.066666rem;
		 height: 1.066666rem;
		 margin: 1.8rem auto;
	}
	#login_box img{
		  width: 100%;
		  height: 100%;
	}
	
	.b_box_box p{
		 font-size: 0.373333rem;
		 color: #C5B2AB;
		 margin-top: 0.613333rem;
	}
	.b_box_box{
		padding-top:1rem;width:6.066666rem;margin: 0 auto;text-align:center;
	}
	.b_img{
		  width: 100%;
		  height: 4rem;
		  
	}
	
	.swiper-slide{
		/*overflow: hidden;*/
		border-radius: 0.166666rem;
		background:#F5F5F5;
	}
	.swiper-slide img{
		 width: 100%;
		 height: 100%;
		 border-radius: 0.166666rem;
	}
	.swiper-pagination{
		 /*left: 47%;*/
		 bottom: -0.266666rem;
		 display: inline-block;
		 width: 100%;
	}
	.tabs_title_titles_p_a{
		  color: #C5B2AB;
		  font-size: 0.3rem;
		  margin-left: 0.15rem;
	}
	.tabs_title_titles_p_img{
		 width: 0.373333rem;
		 height: 0.4rem;
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
       font-weight: bold;
	}
	.tabs_title_titles{
		 height: 100%;
		 width: 6.586666rem;
		 /*background:lightgoldenrodyellow;*/
		 float: right;
		 position: relative;
	}
	.tabs_title_img img{
		 min-width: 100%;
		 min-height: 100%;
		 max-width: 110%;
		 max-height: 110%;
	}
	.tabs_title_img{
		   width: 2.133333rem;
		   height: 2.133333rem;
		   background:#F5F5F5;
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
		   font-weight: bold;
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
		  margin-bottom:0.533333rem;
		  /*background:lightskyblue;*/
		 /*float: left;*/
		 /*background:red;*/
		 
		
	}
	.swiper-slide{
		/*background:#007AFF;*/
		border-radius:0.166666rem;height: 4.53rem;
		-moz-box-shadow:0em 1em 1em #BDBDBD; -webkit-box-shadow:0em 1em 1em #BDBDBD; box-shadow:0em 0.4em 1em #BDBDBD;
	}
	.swiper-container {
    width: 100%;
    height:100%;
}  
	 #titles{
	 	  width:95%;
	 	  height: 1.233333rem;
	 	  margin: 0 auto;
	 	  margin-top: 0.1333rem;
	 	  /*background:honeydew;*/
	 	  padding:0.13333rem 0;
	 	  
	 }
	 #tit_box{
	 	  width: 100%;
	 	  position:fixed;
	 	  top: 0;
	 	  left: 0;
	 	  background: white;
	 	  z-index: 500;
	 	  border-bottom:0.013333rem solid #F0F0F0;
	 }
</style>
