<template>
  <!--课程详情-->
  <div  id="hello" style="width:100%;float:left;padding-bottom:1.3367rem;">
  	
  	 <!--<mu-fade-transition>
          <div id="mengs" v-show="true">
          	 <div>
          	   <img src="../../../static/img/gif/0147d85b320ba0a80120b959abcc40.gif" alt="" />
              </div>
          	</div>
    </mu-fade-transition>-->
  	 
     <div v-if="loading" class="top_title">{{'标题'}}</div>

<!--腾讯视频播放器-------------------------------------------------------------------------------------------------------------------------->   
    <div id="video_box" style="position: relative;">
    	 <!-- <img v-if="loading" id="tv_background" style="position: absolute;top: 0;left:0;z-index:-1;width:100%;height:100%;" :src="'http://img4.imgtn.bdimg.com/it/u=1290818963,1280501057&fm=26&gp=0.jpg'" alt="" /> -->
     <!--腾讯播放器-------------------------------------------------------------------> 
    	 <!--<div id="videoCon" class="video"></div>-->
     <!--七牛云播放器------------------------------------------------------------------> 	 
    	 <!-- <video autoplay="autoplay" id="demo_video" onended="document.getElementById('video_ss').style.display='block'" class="video-js vjs-big-play-centered"></video> -->
          
		<video class="video_s" ref="video" controls="controls" src="http://demo-videos.qnsdk.com/movies/qiniu.mp4" webkit-playsinline='true' playsinline='true'></video> 
		  
       <!-- <div v-if="loading" id="video_ss">
       	  <div  v-if="chak_to">
       	    <p style="color:#FFFFFF;font-size:0.373333rem;">本课程你已经看完了，是否需要查看其它课程？</p>  
       	    <div @click="go_home" class="video_btn_c">返回首页</div>
       	  </div>
       	  <div v-else>
       	   <p style="color:#FFFFFF;font-size:0.373333rem;">本节课已经观看完毕，是否观看下一节课？</p>  
    	 	   <div @click="next_set" class="video_btn_c">下一集</div>
          </div>
        </div> -->
       
     <!--视频播放器---------------------------------------------------------------------------------------------------------------------------->    	 
     <!--<div id="tv_box">
     	<div style="width: 100%;height: 100%;">
     		<video-player  style='' class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions">
     		</video-player>  
     	</div>
     </div>-->
     
    	 <!-- <div v-show="vid==''" id="video_btn">
    	 	 <div v-if="loading">
    	 	  <p v-if="actives.node[0].status==1" style="color:#FFFFFF;font-size:0.373333rem;">该课程需要付费，如需观看请购买课程</p> 
    	 	  <p v-else style="color:#FFFFFF;font-size:0.373333rem;">该课节需要付费，如需观看请购买完整课程</p> 
    	 	  <div @click="to_buy" class="video_btn_c">去购买</div>
    	 	 </div> 
    	 </div> -->
    </div>
<!---->    
    <div v-if="loading">
<!---->
     <div @click="to_tv" class="tv_box_bto1">
     	  <p class="tv_box_bto1_p1">¥{{500}}</p>
     	  <div class="tv_box_bto2"> 
     	  	   
     	  	   <!-- <div v-show="actives.group.buynum!=0&&actives.group.buynum>=1" class="tv_box_bto2_img"><img :src="actives.group.buyusers?actives.group.buyusers[0]:''" alt="" /></div>
     	  	   <div v-show="actives.group.buynum!=0&&actives.group.buynum>=2" style="z-index:2;right:2.786666rem;" class="tv_box_bto2_img"><img  :src="actives.group.buyusers?actives.group.buyusers[1]:''" alt="" /></div>
     	  	   <div v-show="actives.group.buynum!=0&&actives.group.buynum>=3" style="z-index:1;right:2.333333rem;" class="tv_box_bto2_img"><img  :src="actives.group.buyusers?actives.group.buyusers[2]:''" alt="" /></div>
     	  	   -->
     	  	   <p class="tv_box_bto2_p">{{'0'}}<a style="color: #C5B2AB;">人已购买</a></p>
     	  	   
     	  </div>
     </div>
     
     <div class="to_tv_numder">
     	    <p class="to_tv_numder_p">{{10}}课节 | {{10}}岁</p>
     	    <div class="to_tv_numder_btn"><van-icon class='dou' name="info-o"/>&nbsp;服务说明</div>
     </div>
     
    <div class="tv_box_tab">
    	   <div @click="tvboxclick(1)" class="tv_box_tab_tit" :class="{tv_box_tab_tits:true}">课程详情<div  class="tv_box_tab_tit_box"></div></div>
    	   <div @click="tvboxclick(2)" style="margin-left:1.386666rem;" class="tv_box_tab_tit">课程目录</div>
    	   <div @click="tvboxclick(3)" style="float:right;" class="tv_box_tab_tit">用户评价</div>
    </div>
     
<!--课程详情-->
    
    <div id="aws1" class="awsaa">
		课程详情
		课程详情
	</div>
    	   
<!--课程目录-->     
    <div id="aws2">
    	   <div class="aws2_title">
			   
    	   	     课程目录<div class="aws2_title_div"></div>
    	   </div>
    	   <div class="aws2_title_2"></div>
    	<!---->   
   	   <div v-for="(i,index) in 10" @click="aws_tabsclick(i,index)" class="aws_tabs">
    	   	     <!-- <p class="aws_tabs_p1" class="tv_box_tab_tits">【{{'免费'}}】{{'标题'}}</p> -->
				 <p class="aws_tabs_p1">【{{'免费'}}】{{'标题'}}</p>
    	   	     <div v-if="adl==index"  class="aws_tabs_btn">正在播放&nbsp;<van-icon name="play" /></div>
    	   	     <p v-else class="aws_tabs_p2">50：53</p>
    	   </div>
    </div>
     
<!--用户评价-->     
    <!-- <div id="aws3">
    	  <div class="aws2_title" style="margin-bottom:0.453333rem;">
    	   	  <p class="aws2_title_p1">课程评价</p><div class="aws2_title_div"></div>
    	   	  <p class="aws2_title_p">(累计<a>{{actives.group.count}}</a>条)</p>
    	  </div>
    	   <div v-for="(i,index) in 5" class="aws_pin_tab">
    	   	    <div class="aws_pin_tab_a">
    	   	    	   <p class="aws_pin_tab_a_name">用户</p><p class="aws_pin_tab_a_date">内容</p>
    	   	    	   <a class="aws_pin_tab_a_a"><van-rate v-model="i.score" :size='15' disabled disabled-color='#FEE045' /></a>
    	   	    </div> 
    	   	    <div class="aws_pin_values">
    	   	    	   {{i.content}}
    	   	    </div>
    	   </div>
    </div> -->
    <!-- <div style="width: 100%;display:inline-block;">
        <div @click="git_commit" class="logins">{{'暂时没有评论'}}</div>  
    </div> -->
<!---->  
<mu-scale-transition> -->
  <img v-show="to_top_show" @click="to_top" class="ding" src="static/img/zhiding.png" alt="" />
</mu-scale-transition>

<!--底部购买||评论栏     
  <!--用户购买后展示--> 
   <div v-if="true" @touchmove.prevent class="pin_btn">
    	   <a href="tel:18924319390">
    	   <div class="pin_btn_zi">
    	   	   <img src="static/img/xixun.png" alt="" />
    	   	   <p>咨询</p> 
    	   </div>
    	  </a>
    	   <div class="pin_btn_zi">
    	   	   <img @click="cherk_click" :src="check?'static/img/yishoucahng.png':'static/img/shoucahng.png'" alt="" />
    	   	   <p>收藏</p>
    	   </div>	   
    	   <div @click="pinss" class="right_btn">发表评论</div>
    </div>
	
  <!--用户未购买时展示-->  
    <!-- <div v-else @touchmove.prevent class="pin_btn">
    	  <a href="tel:18924319390">
    	   <div class="pin_btn_zi">
    	   	   <img src="static/img/xixun.png" alt="" />
    	   	 <p>咨询</p> 
    	   </div>
    	  </a>
    	   <div class="pin_btn_zi">
    	   	   <img @click="cherk_click" :src="check?'static/img/yishoucahng.png':'static/img/shoucahng.png'" alt="" />
    	   	   <p>收藏</p>
    	   </div>	  
    	   <div @click="to_buy" class="right_btn">立即购买</div>
    	   <p class="right_btn_rmb">¥{{actives.group.price}}</p>
    </div> -->
<!---->    
      
<!--弹出评论组件-->
    <mu-fade-transition>
        <div class="meng" v-show="show1" @click="show1=false">
        	<div style="width:8.466666rem;height:100%;margin: 0 auto;position: relative;">
        	  <mu-slide-bottom-transition>
              <div @click.stop class="meng_pin" v-show="show1">
              	  <div @click="text_jiao" class="meng_pin_top">
              	  	  <a class="meng_pin_top_xing"><van-rate v-model="values1" /></a><p class="meng_pin_top_p">满意</p>
              	  </div>
              	 <div style="width:6.866666rem;margin: 0 auto;">
              	     <textarea  @blur="inp_show" v-show="show1" placeholder="想说点什么呢！,200字以内" class="texts" v-model="text_val" onkeydown="if(event.keyCode==32||event.keyCode==13){return false;}" maxlength="200" rows="" cols=""></textarea> 
              	 </div>
              	 
              	 <div class="meng_pin_bto">
              	 	     <div @click="show1=false" class="meng_pin_bto_btn1">取消</div>
              	 	     <div @click="add_commit_s" class="meng_pin_bto_btn2">发布</div>
              	 </div>
              </div>
            </mu-slide-bottom-transition>
           </div>
        </div>
     </mu-fade-transition>
    </div>
    
  </div>
</template>

<script>
	
	
import store from '../../vuex/store.js'
import router from '../../router/index.js'
import axios from 'axios'
import Message from 'muse-ui-message';


export default {
  data () {
    return{
    	to_top_show:false,
    	text_val:'',//评论框内容
    	show1:false,
    	value:3,//禁用评分的评分数
    	values1:1,//可以评分的评分数
    	tit_index:1,
    	aws2_index:0,
    	vid:'',//q0011iyvdam 
    	actives:{},
    	
//  	 playerOptions : {//初始化ios适配良好的视频播放器
//      playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
//      autoplay: false, //如果true,浏览器准备好时开始回放。
//      muted: false, // 默认情况下将会消除任何音频。
//      loop: false, // 导致视频一结束就重新开始。
//      preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
//      language: 'zh-CN',
//      aspectRatio: '16:9', //将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
//      fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
//      sources: [{
//        type: "",
////        src:this.vid_rl //url地址
//        src:'http://videos.cieo.com.cn/测试节点1-video.mp4'
//      }],
//      poster:'', //你的封面地址
//      // width: document.documentElement.clientWidth,
//      notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
//      controlBar: {
//        timeDivider: true,
//        durationDisplay: true,
//        remainingTimeDisplay: false,
//        fullscreenToggle: true  //全屏按钮
//      }
//  },
    
  
    loading:true,
    
    Whether_to_buy:false,
    
    check:true,//收藏状态
    
    pages:0,//评论数据页数
    
    btn_val:'查看更多评论...',
    
    chak_to:false,
    
   
   }
  },
  
  methods:{
  	pinss(){
  		 this.show1=true;
  		 
  	},
  	
  	text_jiao(){
//		 $('.texts').focus();
//		 $("html, body").animate({scrollTop:-$("html, body").height()});  
  	},
  	go_home(){
  		   router.push({
  	   	     path:'/Course_selection',
  	   	}) 
  	},
  	next_set(){//下一节课
		    var a =  Number(localStorage.index)
		     a++
		     localStorage.index = a;
  		   location.reload()
  	},
  	
  	
  	add_commit_s(){
  		if(this.text_val!=''&&this.text_val.length>6){
  			  axios({
            method:"post",
            url:"videos/addComment",
            contentType:"application/json;charset=UTF-8",
            dataType:"json",
            data:{
                 group:this.actives.group.id,
                 score:this.values1,
                 content:this.text_val,
                 token:localStorage.api_token1,
                 titles:this.actives.group.title
             }
            }).then(res=>{
            	      console.log(res.data)
                    if(res.data.code==200){
                    	   this.$toast.success({
  		   	     	          message:'评论提交成功，审核通过后将会展示，非常感谢！',
  		   	     	          time:'4000'
  		   	              })
                    	  this.show1 = false;
//                  	  this.git_active()
                    	  this.text_val = ''
                    }
             }).catch(err=>{
                      console.log(err);
             });
  		}else{
  			      this.$toast.error({
  		   	     	 message:'内容不能为空,且内容长度大于6个字',
  		   	     	 time:'1500'
  		   	     })  
  		}
  		  
  	},
  	
  	qu_cherk(){//取消收藏
  		   axios({
            method:"post",
            url:"collect/del",
            contentType:"application/json;charset=UTF-8",
            dataType:"json",
            data:{
                 group:this.actives.group.id,
                 token:localStorage.api_token1
             }
            }).then(res=>{
            	        console.log(res.data);
                      if(res.data.code==200){
                      	  this.check = false; 
                          this.$toast.info('已取消收藏');
                      }
             }).catch(err=>{
                      console.log(err);
             });
  	},
  	
  	cherk_click(){ 	//点击收藏
  		if(this.check==false){
  		   axios({
            method:"post",
            url:"collect/add",
            contentType:"application/json;charset=UTF-8",
            dataType:"json",
            data:{
                 group:this.actives.group.id,
                 type:this.actives.group.type_id,
                 token:localStorage.api_token1
             }
            }).then(res=>{
            	        console.log(res.data);
                      if(res.data.code==200){
                      	  this.check = true; 
                          this.$toast.success('收藏成功');
                      }
             }).catch(err=>{
                      console.log(err);
             });
  		   }else{
  		   	   Message.confirm('确定取消收藏吗？','提示',{
          	   type: 'warning',
          	   icon:''
        	   }).then(({result}) => {
         	   if(result){
           	   this.qu_cherk() 
         	    }else{}
        	   });
  		   }
  	},
  	
  	git_commit(){//点击更多评论
  		  
  		  var loading = this.$loading({
  	  	      color:'#FEE045',
  	  	      text:'加载中...'
  	        }); 
  		  
  	    this.pages++
  	    var thit = this
  		  axios.get(store.state.urls+'api/videos/comment?group='+thit.actives.group.id+'&page='+thit.pages+'&token='+localStorage.api_token1
        	     ).then(res=>{
                  if(res.data.code==200){
                  	     if(res.data.data.length!=0){
                  	     	  var a = res.data.data.data;
                  	       for(var i=0;i<a.length;i++){
                  	     	   thit.actives.comment.push(a[i]);
                  	       }
                  	       console.log(thit.actives.comment,'合并后的评论数据');
                  	     }else{
                  	     	   this.btn_val = '暂时没有更多评论了'
                  	     }
                  	      loading.close()
                  }else{
                  	 this.$toast.error('网络错误')
  	  	             loading.close()
                  }
                }).catch(err=>{
                   console.log(err)
//                  this.$toast.warning({
//		   	     	     message:'网络错误',
//		   	     	     time:'1500'
//		   	         })
                    loading.close()
              }); 
  	},
  	
  	git_active(){
  		 this.actives = {}
  		 
  		 var loading = this.$loading({
  	  	      color:'#FEE045',
  	  	      text:'加载中...'
  	        });
  		 
  		  axios.get(store.state.urls+'api/videos/details?id='+localStorage.video_id+'&token='+localStorage.api_token1
        	      ).then(res=>{
                  if(res.data.code==200){
                  	
                  	     console.log(res.data);
                  	    
                  	     this.actives = res.data.data;
                  	     
                  	     this.actives.group.buyusers= this.actives.group.buyusers?this.actives.group.buyusers.reverse():this.actives.group.buyusers;
                  	     
                  	     console.log(this.actives,'视频详情数据');
                  	    
                  	     this.loading = true;
                  	     this.checkOrder(this.actives.group.id);
                  	     this.check_tr(this.actives.group.id);
                  	    
                  	    var ac = Number(localStorage.index);
                        ac++;
		                    this.chak_to = (ac==this.actives.node.length)?true:false;
                         loading.close()
                  }else{
                  	 this.$toast.warning({
  		   	     	     message:'网络错误',
  		   	     	     time:'1500'
  		   	         })
	  	              loading.close()
                  }
                }).catch(err=>{
//              	 this.$toast.warning({
//		   	     	     message:'网络错误',
//		   	     	     time:'1500'
//		   	         })
  	  	             loading.close()
                   console.log(err)   
              }); 
  	   },
  	
  	check_tr(id){//检测用户当前视频是否收藏
  		  axios.get(store.state.urls+'api/collect/check?group='+id+'&token='+localStorage.api_token1
        	      ).then(res=>{
        	      	console.log(res.data,'检测用户是否收藏')
                  if(res.data.code==200){
                  	     console.log(res.data.data,'视频详情数据');
                  	     this.check = res.data.data
                  }
                }).catch(err=>{
                   console.log(err)   
              }); 
  	},
  	
  	checkOrder(id){//检测用户当前视频是否已经购买
  		     axios({
            method:"post",
            url:"order/checkOrder",
            contentType:"application/json;charset=UTF-8",
            dataType:"json",
            data:{
                 group:id,
                 token:localStorage.api_token1
             }
            }).then(res=>{
                      console.log(res.data,'是否购买');
                      this.Whether_to_buy = res.data.data;
                      if(this.Whether_to_buy==true||localStorage.vip_id==1){//如果已经购买直接加载第一节课程
                      	 this.vid = this.actives.node[0].videos;
                      	 this.aws2_index = 0;
                      }else{//没有购买先判断第一节课是否免费-如果免费就加载第一节课，否则不加载课程页面展示需要付费
                      	 this.vid = this.actives.node[Number(localStorage.index)].status==2?this.actives.node[0].videos:'';
                      	 if(this.actives.node[Number(localStorage.index)].status==2){
                      	 	  this.aws2_index=0
                      	 }else{
                      	 	  this.aws2_index='o'
                      	 }
                       }
                      
                   window.setTimeout(()=>{
                   	   store.state.video_b_url = this.actives.group.pic;
                       store.state.dat.Initializationone(this.actives.node[Number(localStorage.index)].videos,'1');
                       this.tv_git();
                   },500)
                      
                      
             }).catch(err=>{
                      console.log(err);
             });
  	},
  	
  	
  	inp_show(){//监听输入框失去焦点
  		$("html, body").animate({scrollTop:$("html, body").height()});  
  	},
  	
  	to_buy(){//点击购买btn ==> 判断用户是否绑定有手机号码，
  		 this.destroyed()
  		 localStorage.group_id = this.actives.group.id;
  		 
  		 axios.get(store.state.urls+'api/user/checkPhone?token='+localStorage.api_token1
        	      ).then(res=>{
        	      	if(res.data.code==200){
        	      		
        	      		 if(res.data.data==true){//已绑定手机
		                      router.push({
		 	                      path:'/details_Confirm_Order'
		                      })
		                      location.reload()
        	      		 }else{//未绑定手机
		                      router.push({
		 	                      path:'/details_Verify_phone'
		                      })
        	      		 }
        	      	}else{
        	      		this.$toast.warning({
  		   	     	     message:'网络错误',
  		   	     	     time:'1500'
  		   	         })
  	  	             
        	      	}
                }).catch(err=>{
                   console.log(err)   
//                 this.$toast.warning({
//		   	     	     message:'网络错误',
//		   	     	     time:'1500'
//		   	         })
  	  	             
              }); 
  	},
  	
  aws_tabsclick(i,index){//用户点击课程目录
  	 if(i.status==1){//判断当前被点击的课程是否为收费项
  	 	 if(this.Whether_to_buy==true||localStorage.vip_id==1){//是收费项的话，再判断用户是否已经购买--如果已经购买，则加载视屏，自动滑动到顶部
  	 	 	  this.aws2_index = index;
  	 	 	  this.vid = i.videos;
  	 	 	  localStorage.index = index;
  	 	 	  localStorage.video_show=2;//控制播放器变成自动播放
  	 	    location.reload()
  	 	 	  this.tv_git() 
  	 	 	  $("html, body").animate({scrollTop:0});  
  	 	 }else{//如果没有购买则弹出提示框，让用户选择是否去购买
	 	 	  Message.confirm('该视频需要付费才能观看，是否立即购买？','提示', {
         type: 'warning',
         icon:''
        }).then(({ result }) => {
         if (result) {
//         this.$toast.message('点击了确定');
           this.to_buy() 
         } else {}
        });
  	 	 }
  	 }else{//判断为免费项则加载视频，自动滑动到顶部
  	 	  this.aws2_index = index;
  	 	  this.vid = i.videos;
  	 	  localStorage.index = index;
  	 	  localStorage.video_show=2;//控制播放器变成自动播放
  	 	  location.reload()
//      store.state.dat.Initializationadd(i.videos)
	 	    
  	 	  this.tv_git() 
  	 	  
  	 	 $("html, body").animate({scrollTop:0});  
  	 }
  },
  
   destroyed (){//移除页面监听--跳转其他页面务必调用该事件
    window.removeEventListener('scroll', this.handleScroll)	
},
handleScroll(){//监测滑动
    var a = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    var offsetTop = document.querySelector('.tv_box_tab').offsetTop
    if(a<offsetTop){
    	   this.to_top_show = false
    }else{
    	   this.to_top_show = true
    }
},
  
  to_top(){//回顶部
  	$("html, body").animate({scrollTop:0});  
//	this.to_top_show = false
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
//		  this.vid = this.vid=='m0532apqki0'?'q0011iyvdam':'m0532apqki0'
//		  this.tv_git()
  },
  tv_git(){//初始化安卓适配良好的 腾讯视频播放器
//	var a = document.documentElement.clientWidth;
//	let heghts = document.documentElement.clientHeight*0.3
////	$('#tv_background').css('width',a).css('height',heghts)
//	var video = new tvp.VideoInfo();
//  video.setVid(this.vid);//视频vid
//  var player = new tvp.Player(a,heghts);//视频高宽
//  player.setCurVideo(video);
//  player.addParam("autoplay","0");//是否自动播放，1为自动播放，0为不自动播放
//	  player.addParam("wmode","opaque");
//	  player.addParam("showend",0);
//	  player.addParam("adplay",0); 
//	  player.addParam("wmode","transparent");
//  player.addParam("pic","");//默认图片地址
//  player.addParam("flashskin","http://imgcache.qq.com/minivideo_v1/vd/res/skins/TencentPlayerMiniSkin.swf");//是否调用精简皮肤，不使用则删掉此行代码
//  player.write("videoCon");
    $('video').attr("webkit-playsinline",'true');//限制ios下自动全屏播放
	  $('video').attr("playsinline",'true');  
  },
  	  
  },
  
  created(){
  	 
  },
  
  mounted(){
  	  // this.git_active()//获取数据
  	  // this.tv_git()//初始化播放器
  	 
  	  store.state.btn_show = false;
//	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
      window.addEventListener('scroll',this.handleScroll);
      $("html, body").animate({scrollTop:0});
      
        this.aws2_index = Number(localStorage.index);
        console.log(this.aws2_index);

      if(localStorage.video_show=='true'){
      	   // location.reload();
      	   localStorage.index = 0;
      	   localStorage.video_show='false'
       }
      
      
      //控制用户点击返回键
        window.addEventListener("popstate",function(e){
            if(localStorage.videosa == 2){
            	router.push({
		 	           path:'/Course_selection'
		          });
            	localStorage.videosa=1;
            	loading.close();
            }
        });
      
      window.setTimeout(()=>{
      	  $("#aws1 img").css('width','100%');
      },100)
      
  },
  computed:{
  	  adl(){
  	  	 return Number(localStorage.index)
  	  },
  	 vip_id(){
  	 	  return localStorage.vip_id
  	 }
  	   
  },
  
}

</script>

<style scoped>
	.video_s{
		width: 100%;
		height: 100%;
		margin: auto;
		background:url('http://img0.imgtn.bdimg.com/it/u=3268705469,2646819851&fm=26&gp=0.jpg');
		background-size:100% 100%;background-repeat:no-repeat;
		/* border-radius: 0.266666rem; */
		overflow: hidden;
	}
	.MsoNormal,td{
		 width: 100%;
	}
	
	#mengs{
		 width: 100%;
		 height: 100%;
		 position: fixed;
		 top: 0;
		 left: 0;
		 z-index:500;
		 background:rgba(255,255,255,0.9);
		 text-align: center;
	}
   #video_ss{
   	   width: 100%;
   	   height: 100%;
   	   background: rgba(0,0,0,.9);
   	   position: absolute;
   	   top: 0;
   	   left: 0;
   	   z-index: 500;
   	   display: none;
   	   padding-top: 2rem;
   	   text-align: center;
   }
	.vjs-big-play-centered{	
		 width: 100%;
		 /*height: 2.666666rem;*/
		 position: relative;
		 
	}
	.video_btn_c{
		  width: 1.773333rem;
		  height: 0.746666rem;
		  line-height: 0.746666rem;
		  text-align: center;
		  background: #FEE045;
		  margin: 0.533333rem auto;
		  border-radius:0.586666rem;
	}
	#video_btn{
		 width:100%;
		 height:100%;
		 text-align: center;
		 font-size: 0.333333rem;
		 color: #6E4C45;
		 padding-top: 1.93333rem;
		 position: absolute;
		 top: 0;
		 left: 0;
	}
	#video_box{
		 width: 100%;
		 height:5.533333rem;
		 background:rgba(0,0,0,.6);
	}
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
		  
		  
		  padding: 0 0.373333rem;
		  height: 0.973333rem;
		  line-height: 0.973333rem;
		  color: #6E4C45;
		  font-size: 0.373333rem;
		  text-align: center;
		  background: #EAEAEA;
		  margin-bottom: 0.426666rem;
		  margin:auto;
		  /*border-radius:0.133333rem;*/
		 margin-top: -0.27rem;
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
	#aws1 p img{
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
	.tv_box_bto2_img img{
		 width: 100%;
		 height: 100%;
		 position: absolute;
		 top: 0;
		 left: 0;
	}
	.tv_box_bto2_img{
		 width: 0.666666rem;
		 height: 0.666666rem;
		 border-radius: 50%;
		 border:0.025333rem solid white;
		 /*background: deepskyblue;*/
		 position: absolute;
		 top: 0.25rem;
		 right: 3.24rem;
		 z-index: 3;
		 overflow: hidden;
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
