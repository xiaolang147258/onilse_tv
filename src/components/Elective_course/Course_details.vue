<template>
  <!--课程详情-->
  <div id="hello" style="width:100%;float: left;padding-bottom: 1.606666rem;">
  	 
     <div class="top_title">冲向太空游乐园，和星星月亮一起玩耍</div>
<!--视频播放器---------------------------------------------------------------------------------------------------------------------------->    	 
     <div v-show='false' id="tv_box">
     	<div style="width: 100%;height: 100%;">
     		<video-player  style='' class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions">
     		</video-player>  
     	</div>
     </div>
    
    <div  style="position: relative;">
    	 <img id="tv_background" style="position: absolute;top: 0;left:0;z-index:-1;" src="../../../dist/static/img/b_bb.png" alt="" />
    	 <div style=""  id="videoCon" class="video"></div>
    </div>
<!------------------------------------------------------------------------------------------------------------------------------------->
     <div @click="to_tv" class="tv_box_bto1">
     	  <p class="tv_box_bto1_p1">¥208.00</p>
     	  <div class="tv_box_bto2"> 
     	  	   
     	  	   <div class="tv_box_bto2_img"></div>
     	  	   <div style="z-index:2;right:2.786666rem;" class="tv_box_bto2_img"></div>
     	  	   <div style="z-index:1;right:2.333333rem;" class="tv_box_bto2_img"></div>
     	  	   <p class="tv_box_bto2_p">39<a style="color: #C5B2AB;">人已购买</a></p>
     	  	   
     	  </div>
     </div>
     
     <div class="to_tv_numder">
     	    <p class="to_tv_numder_p">15课节 | 6～12岁</p>
     	    <div class="to_tv_numder_btn"><van-icon class='dou' name="info-o"/>&nbsp;服务说明</div>
     </div>
     
    <div class="tv_box_tab">
    	   <div @click="tvboxclick(1)" class="tv_box_tab_tit" :class="{tv_box_tab_tits:true}">课程详情<div  class="tv_box_tab_tit_box"></div></div>
    	   <div @click="tvboxclick(2)" style="margin-left:1.386666rem;" class="tv_box_tab_tit">课程目录</div>
    	   <div @click="tvboxclick(3)" style="float:right;" class="tv_box_tab_tit">用户评价</div>
    </div>
     
<!--课程详情------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
    <div id="aws1">
    	   <p>百科全书就像一所没有围墙的学校，它传承着人类的文明。翻开这《中国儿童成长知识必读:宇宙太空大百科(彩图学生版)》，精彩的
    	   	世界将向你敞开心扉。来吧，让我们一起在这套《中国儿童成长知识必读》中探知世界，开启科学之门。这是送给青少年的一份最珍贵的礼
    	   	物。希望在《中国儿童成长知识必读》的陪伴下，孩子们的世界会更加宽广。</p>
    	   	<img src="../../../dist/static/img/b_bb.png" alt="" />
    	   	<img src="../../../dist/static/img/b_bb.png" alt="" />
    	   	<img src="../../../dist/static/img/b_bb.png" alt="" />
    </div>
    
<!--课程目录------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->     
    <div id="aws2">
    	   <div class="aws2_title">
    	   	     课程目录<div class="aws2_title_div"></div>
    	   </div>
    	   <div class="aws2_title_2"></div>
    	<!----------------------------------------------------------------------------------------->   
    	   <div v-for="(i,index) in 5" @click="aws_tabsclick(index)" class="aws_tabs">
    	   	     <p class="aws_tabs_p1" :class="{tv_box_tab_tits:aws2_index==index}">【录播】第一节 英语课理论</p>
    	   	     <div v-if="aws2_index==index"  class="aws_tabs_btn">正在播放&nbsp;<van-icon name="play" /></div>
    	   	     <p v-else class="aws_tabs_p2">50：53</p>
    	   </div>
    	   
    </div>
     
<!--用户评价------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->     
    <div id="aws3">
    	  <div class="aws2_title" style="margin-bottom:0.453333rem;">
    	   	  <p class="aws2_title_p1">课程评价</p><div class="aws2_title_div"></div>
    	   	  <p class="aws2_title_p">(累计<a>7121</a>条)</p>
    	   </div>
    	  
    	   <div v-for="(i,index) in 5" class="aws_pin_tab">
    	   	    <div class="aws_pin_tab_a">
    	   	    	   <p class="aws_pin_tab_a_name">孙菲菲</p><p class="aws_pin_tab_a_date">2018-11-25 21:23:43</p>
    	   	    	   <a class="aws_pin_tab_a_a"><van-rate v-model="value" :size='15' disabled disabled-color='#FEE045' /></a>
    	   	    </div> 
    	   	    <div class="aws_pin_values">
    	   	    	   老师课程讲得非常好，老师很专业老师课程讲得非常好，老师很
                                              专业老师课程讲得非常好，老师很专业。。
    	   	    </div> 
    	   </div>
    </div>
    <div class="logins">查看更多评论…</div>    
<!--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------->  

<img @click="to_top" class="ding" src="../../../static/img/zhiding.png" alt="" />


<!--底部购买||评论栏----------------------------------------------------------------------------------------------------->     
  <!--用户购买后展示--> 
   <div v-show="false" @touchmove.prevent class="pin_btn">
    	   <div class="pin_btn_zi">
    	   	   <img src="../../../static/img/xixun.png" alt="" />
    	   	   <p>咨询</p>
    	   </div>
    	   <div class="pin_btn_zi">
    	   	   <img src="../../../static/img/shoucahng.png" alt="" />
    	   	   <p>收藏</p>
    	   </div>	   
    	   <div @click="show1=true" class="right_btn">发表评论</div>
    </div>
  <!--用户未购买时展示-->  
    <div v-show="true" @touchmove.prevent class="pin_btn">
    	   <div class="pin_btn_zi">
    	   	   <img src="../../../static/img/xixun.png" alt="" />
    	   	   <p>咨询</p>
    	   </div>
    	   <div class="pin_btn_zi">
    	   	   <img src="../../../static/img/shoucahng.png" alt="" />
    	   	   <p>收藏</p>
    	   </div>	  
    	   <div @click="to_buy" class="right_btn">立即购买</div>
    	   <p class="right_btn_rmb">¥288.00</p>
    </div>
<!------------------------------------------------------------------------------------------------------------------>    
      
    
<!--弹出评论组件-------------------------------------------------------------------------------------------------------->
    <mu-fade-transition>
        <div class="meng" v-show="show1" @click="show1=false">
        	<div style="width:8.466666rem;height:100%;margin: 0 auto;position: relative;">
        	  <mu-slide-bottom-transition>
              <div @click.stop class="meng_pin" v-show="show1">
              	  <div class="meng_pin_top">
              	  	   <a class="meng_pin_top_xing"><van-rate v-model="values1" /></a><p class="meng_pin_top_p">满意</p>
              	  </div>
              	 <div style="width:6.866666rem;margin: 0 auto;">
              	     <textarea v-show="show1" placeholder="想说点什么呢！,200字以内" class="texts" v-model="text_val" onkeydown="if(event.keyCode==32||event.keyCode==13){return false;}" maxlength="200" rows="" cols=""></textarea> 
              	 </div>
              	 
              	 <div class="meng_pin_bto">
              	 	     <div @click="show1=false" class="meng_pin_bto_btn1">取消</div>
              	 	     <div class="meng_pin_bto_btn2">发布</div>
              	 </div>
              	 
              </div>
            </mu-slide-bottom-transition>
           </div>
        </div>
    </mu-fade-transition>
  
  
  
  
  </div>
</template>

<script>
import store from '../../vuex/store.js'
import router from '../../router/index.js'
export default {
  
  data () {
    return {
    	text_val:'',//评论框内容
    	
    	show1:false,
    	value:3,//禁用评分的评分数
    	values1:1,//可以评分的评分数
    	 tit_index:1,
    	 aws2_index:0,
    	 
    	 playerOptions : {//初始化ios适配良好的视频播放器
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', //将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "",
          src: "static/tv/ce872b3b8be8ac09d7c879f92ae74219.mp4" //url地址
        }],
        poster:"static/img/b_bb.png", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    },
    
    vid:'q0011iyvdam',//m0532apqki0
    
   }
  },
  computed:{
  	
  },
  methods:{
  	to_buy(){//点击购买btn ==> 判断用户是否绑定有手机号码，
  		 
  		 router.push({
  		 	   path:'/details_Verify_phone'
  		 })
  		 
  	},
  	
  aws_tabsclick(index){
  	this.aws2_index = index 
  },
  
// destroyed (){//移除页面监听--跳转其他页面务必调用该事件
//         window.removeEventListener('scroll', this.handleScroll)
//},
//
//handleScroll(){//监测滑动
//  var a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
//  var offsetTop = document.querySelector('.tv_box_tab').offsetTop
//  if(a<offsetTop){
//  	  this.tit_index = 1
//  }
//},
  
  to_top(){//回顶部
  	$("html, body").animate({scrollTop:0});  
  },
  
  tvboxclick(index){//控制页面滑动到指定位置
  	 this.tit_index = index  
  	 if(index==2){
  	 	 let height_s = $('#videoCon').height()+$('.tv_box_bto1').height()+$('.to_tv_numder').height()+$('.tv_box_tab').height()+$('#aws1').height()
       $("html, body").animate({scrollTop: height_s});  
  	 }else if(index==3){
  	 	 let height_s = $('#videoCon').height()+$('.tv_box_bto1').height()+$('.to_tv_numder').height()+$('.tv_box_tab').height()+$('#aws1').height()+$('#aws2').height()
       $("html, body").animate({scrollTop: height_s});  
  	 }
  	 
  },
  
  to_tv(){//更换视频，需要重新初始化播放器
  		  this.vid = this.vid=='m0532apqki0'?'q0011iyvdam':'m0532apqki0'
  		  this.tv_git()
  },
  tv_git(){//初始化安卓适配良好的 腾讯视频播放器
  	var a = document.documentElement.clientWidth;
  	let heghts = document.documentElement.clientHeight*0.3
  	$('#tv_background').css('width',a).css('height',heghts)
  	var video = new tvp.VideoInfo();
    video.setVid(this.vid);//视频vid
    var player = new tvp.Player(a,heghts);//视频高宽
    player.setCurVideo(video);
    player.addParam("autoplay","0");//是否自动播放，1为自动播放，0为不自动播放
	  player.addParam("wmode","opaque");
	  player.addParam("showend",0);
	  player.addParam("adplay",0);  
	  player.addParam("wmode","transparent");
    player.addParam("pic","");//默认图片地址
    player.addParam("flashskin", "http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf");//是否调用精简皮肤，不使用则删掉此行代码
    player.write("videoCon");
    $('video').attr("webkit-playsinline",'true');//限制ios下自动全屏播放
  	$('video').attr("playsinline",'true');
  },
  	  
  },
  mounted(){
  	  this.tv_git()
  	  store.state.btn_show = false;
//	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
//    window.addEventListener('scroll',this.handleScroll);
      $("html, body").animate({scrollTop:0});  
  }
}
</script>

<style scoped>
	.ding{
		  width:1.626666rem;
		  height: 1.626666rem;
		  position: fixed;
		  right: 0.2rem;
		  bottom: 4rem;
	}
	.right_btn_rmb{
		 color: #F55656;
		 font-size: 0.48rem;
		 float: right;
		 margin-right: 0.666666rem;
		 line-height: 1.306666rem;
	}
	.meng_pin_bto_btn2{
		  text-align: center;
		  color: #6E4C45;
		  width: 50%;
		  height: 100%;
		  float: right;
	}
	.meng_pin_bto_btn1{
		  text-align: center;
		  color: #C5B2AB;
		  width: 49%;
		  height: 100%;
		  border-right: 0.013333rem solid #DEDEDE;
		  float: left;
	}
	.meng_pin_bto{
		   width: 100%;
		   height: 1.213333rem;
		   line-height: 1.213333rem;
		   font-size: 0.48rem;
		   border-top: 0.013333rem solid #DEDEDE;
	}
	.texts{
		  width:100%;
		  height: 4.18rem;
		  border: none;
		  margin: 0 auto;
		  font-size: 0.403333rem;
	}
	.meng_pin_top_p{
		  font-size: 0.48rem;
		  color: #6E4C45;
		  float: right;
	}
	.meng_pin_top_xing{
		 float: left;
		 margin-top: 0.053333rem;
	}
	.meng_pin_top{
		   width: 100%;
		   height:1.48rem;
		   border-bottom: 0.013333rem solid #DEDEDE;
		   line-height: 1.48rem;
		   font-size: 0.48rem;
		   color: #6E4C45;
		   padding:  0 0.8rem;
	}
	.meng_pin{
		  width:100%;
		  height:7.073333rem;
		  background: white;
		  border-radius:0.266666rem;
		  position:absolute;
		  left: 0;
		  bottom: 3rem;
	}
	
	.meng{
		  width: 100%;
		  height: 100%;
		  position: fixed;
		  top: 0;
		  left: 0;
		  z-index: 501;
		  background: rgba(0,0,0,.5);
	}
	.right_btn{
		  width: 3.12rem;
		  height:100%;
		  background: #FEE045;
		  line-height: 1.306666rem;
		  text-align: center;
		  font-size: 0.40rem;
		  font-weight: 600;
		  color: #6E4C45;
		  float: right;
	}
	.pin_btn_zi img{
		 width: 100%;
		 height: 0.493333rem;
		 margin-top: 0.16rem;
	}
	.pin_btn_zi{
		  width: 0.566666rem;
		  height: 100%;
		  float: left;
		  /*background: red;*/
		  margin-right: 0.906666rem;
		  font-size: 0.273333rem;
		  text-align: center;
		  color: #6E4C45;
	}
	.pin_btn{
		 width: 100%;
		 height: 1.306666rem;
		 background:white;
		 border-top:0.013333rem solid #6E4C45;
		 position: fixed;
		 bottom: 0;
		 left: 0;
		 z-index: 500;
		 padding-left: 0.453333rem;
	}
	.logins{
		  width: 3.36rem;
		  height: 0.973333rem;
		  line-height: 0.973333rem;
		  color: #6E4C45;
		  font-size: 0.373333rem;
		  text-align: center;
		  background: #EAEAEA;
		  margin-bottom: 0.426666rem;
		  margin:auto;
		  border-radius:0.133333rem;
	}
	.aws_pin_values{
		  width: 100%;
		  font-size: 0.32rem;
		  color: #6E4C45;
		  text-align:justify;
		  word-break:break-all;
		  white-space:normal;
		  margin-bottom: 0.266666rem;
	}
	.aws_pin_tab_a_a{
		float: right;
		margin-right: 0.266666rem;
	}
	.aws_pin_tab_a_date{
		  font-size: 0.32rem;
		  color: #C5B2AB;
		  float: left;
	}
	.aws_pin_tab_a_name{
		font-size: 0.373333rem;
		float: left;
		color: #47ACF9;
		margin-right: 0.88rem;
	}
	.aws_pin_tab_a{
		   width: 100%;
		   height: 0.533333rem;
		   margin-bottom: 0.266666rem;
		   line-height: 0.533333rem;
	}
	.aws_pin_tab{
		   width: 100%;
		   border-bottom: 0.013333rem solid #F0F0F0;
		   margin-bottom:0.266666rem;
		   /*background: #E8E8E8;*/
	}
	.aws2_title_p1{
		float: left;
		margin-right: 0.133333rem;
	}
	.aws2_title_p a{
		  color: #6E4C45;
	}
	.aws2_title_p{
		  float: left;
		  font-size: 0.32rem;
		  color: #C5B2AB;
	}
	#aws3{
		  width:9.08rem;
		  
	 	  margin: 0 auto;
	}
	.aws_tabs_btn i{
		  position: absolute;
		  right: 0.306666rem;
		  top: 0.1706666rem;
	}
	.aws_tabs_btn{
		  width: 2.64rem;
		  height: 0.746666rem;
		  text-align: center;
		  line-height: 0.786666rem;
		  font-size: 0.373333rem;
		  color: #6E4C45;
		  float: right;
		  background: #FEE045;
		  border-radius: 0.373333rem;
		  margin-top:0.28rem;
		  position: relative;
		  padding-right: 0.44rem;
		  /*padding-top: 0.07rem;*/
	}
	.aws_tabs_p2{
		float: right;
	}
	.aws_tabs_p1{
		float: left;
	}
	.aws_tabs{
		  width: 100%;
		  height: 1.266666rem;
		  line-height: 1.266666rem;
		  border-bottom: 0.013333rem solid #F0F0F0;
		  color: #C5B2AB;
	}
	.aws2_title_2{
		  width: 100%;
		  height: 2.053333rem;
	    background:url('../../../static/img/sa.png');
	    background-size:100% 100%;background-repeat:no-repeat;
	}
	.aws2_title_div{
		   height: 100%;
		   width: 0.32rem;
		   background: #FEE045;
		   border-radius:0.053333rem;
		   position: absolute;
		   left: 0;
		   top: 0;
		   z-index: -1;
	}
	.aws2_title{
		  width: 100%;
		  height: 0.666666rem;
		  line-height:0.666666rem;
		  font-size: 0.48rem;
		  color: #6E4C45;
		  padding-left: 0.08rem;
		  position: relative;
		  margin-bottom: 0.4rem;
	}
	#aws2{
		  width:9.08rem;
		  /*height: 2.666666rem;*/
		  /*background:#E6E6E6;*/
	 	  margin: 0.8rem auto;
	}
	#aws1 img{
		  width: 100%;
	}
	 #aws1{
	 	   width:9.08rem;
	 	   margin: 0 auto;
	 	   font-size: 0.373333rem;
	 	   color: #C5B2AB;
	 	   line-height: 0.586666rem;
	 	   text-align:justify;
	 }
	.tv_box_tab_tit_box{
		  width: 100%;
		  height: 0.16rem;
		  background: #FEE045;
		  border-radius: 6rem;
		  position: absolute;
		  bottom: 0.066666rem;
		  left: 0;
		  z-index: -1;
	}
	.tv_box_tab_tits{
	 	 color: #6E4C45;
	 }
	.tv_box_tab_tit{
		  width: 1.92rem;
		  height: 100%;
		  /*background: red;*/
		  float:left;
		  text-align: center;
		  position: relative;
	}
	 
	.tv_box_tab{
		 width: 100%;
		 height: 0.666666rem;
		 line-height: 0.666666rem;
		 font-size: 0.46rem;
		 margin-top: 0.786666rem;
		 padding:  0 0.733333rem;
		 margin-bottom:0.4rem;
		  color:#C5B2AB;
	}
	.to_tv_numder_btn i{
		   margin-top: 0.213333rem;
	}
	
	
	.to_tv_numder_btn{
		  width: 2.233333rem;
		  height: 0.746666rem;
		  line-height: 0.806666rem;
		  text-align: center;
		  background: #FEE045;
		  border-radius: 0.373333rem;
		  float: right;
		  font-size: 0.32rem;
		  color: #6E4C45;
		  margin-top: 0.146666rem;
		  /*padding-top: 0.06666rem;*/
	}
	.to_tv_numder_p{
		  font-size: 0.373333rem;
		  color: #6E4C45;
		  float: left;
	}
	.to_tv_numder{
		  width: 100%;
		  height: 1.053333rem;
		  line-height: 1.053333rem;
		  border-top: 0.013333rem solid #F0F0F0;
		  border-bottom: 0.013333rem solid #F0F0F0;
		  padding: 0 0.4rem;
	}
	.tv_box_bto2_p{
		 font-size: 0.32rem;
		 color: #6E4C45;
		 float: right;
		 margin-right:0.3rem;
	}
	.tv_box_bto2_img{
		 width: 0.666666rem;
		 height: 0.666666rem;
		 border-radius: 50%;
		 border:0.025333rem solid white;
		 background: deepskyblue;
		 position: absolute;
		 top: 0.25rem;
		 right: 3.24rem;
		 z-index: 3;
	}
	.tv_box_bto2{
		 width: 3.8rem;
		 height: 100%;
		 float: right;
		 /*background:#BDBDBD;*/
		 position: relative;
	}
	.video video{
		width: 100%;
		height: 5rem;
		
	}
	
	.tv_box_bto1_p1{
		 color: #F55656;
		 font-size:0.426666rem;
		 float: left;
	}
	.tv_box_bto1{
		  width: 100%;
		  height: 1.213333rem;
		  line-height: 1.213333rem;
		  padding: 0 0.4rem;
	}
	.video-js .vjs-big-play-button{
		    
	}
	#tv_box{
		 width:100%;
		 height: 5.633333rem;
		 position: relative;
		 background: black;
		 position: relative;
	}
    .top_title{
    	 width: 100%;
    	 height: 1.066666rem;
    	 text-align: center;
    	 line-height: 1.066rem;
    	 font-size: 0.373333rem;
    	 color: #47ACF9;
    	 background: url('../../../static/img/bac.png');
    	 background-size:100% 100%;background-repeat:no-repeat;
    }

</style>
