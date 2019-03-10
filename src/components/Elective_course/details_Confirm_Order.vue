<template>
	<!--订单支付前的页面-->
  <div id="hello" v-if="logins" style="width:100%;background:white;">
    
    <div class="kevalue">
    	 <img :src="active_s.pic" alt="" />
    	 <div class="p_box">
    	 	 <p class="p_box_p1">{{active_s.title}}</p>
    	 	 <p class="p_box_p2"><a style="color:#C5B2AB;font-size:0.32rem;">¥{{parseFloat(active_s.price)+200}}</a>&nbsp;&nbsp;&nbsp;¥{{active_s.price}}</p>
    	 </div>
    </div>
    
    <div class="Payment_option_box">
    	 <van-icon name="wechat" size='0.606666rem' color='#1CB14E' /><p>微信支付</p> 
    	 <a><van-icon name="checked" size='0.606666rem' color='#F55656' /></a>
    </div>
    <!--<p class="you_p">优惠券</p>-->
    
    <!--<div @click.stop class="you_det">
    	<p>{{you_title}}元优惠券</p>
    	<div @click="you_show=!you_show" class="you_det_btn"><van-icon size='0.333333rem' name="arrow-down"/></div>
    	<div class="you_det_tab" :class="{you_det_tab_1:you_show==false,you_det_tab_2:you_show==true}">
    		 <div v-show="you_show" v-for="(i,index) in you_act" @click="you_click(i,index)" class="you_det_tab_c">{{i.amount}}元优惠券</div>  
    	</div>
    </div>-->
  
    <div class="bto_box">
  	  <p class="bto_box_p">实付金额：&nbsp;<a style="color:#F55656;font-weight:400;">¥{{active_s.price}}</a></p>
  	  <div @click="pay_click" class="bto_box_btn">立即支付</div>
    </div>
    
    
<!--弹出是否确认退出----------------------------------------------------------------------------------------------->
    <mu-fade-transition>
           <div class="meng" v-show="show1">
           	    <mu-scale-transition>
           	      <div v-show="show1" class="meng_box">
           	      	  <div class="meng_box_tit">取消支付</div>
           	      	  <div class="meng_box_val">是否放弃支付？</div>
           	      	  <div class="meng_box_btn">
           	      	  	  <div @click="give_up" class="meng_box_btn_c1">确认放弃</div>    
           	      	  	  <div @click="show1=false" style="color:#F55656;border:none;font-weight:bold;" class="meng_box_btn_c1">继续支付</div> 
           	      	  </div>
           	      </div>  
           	    </mu-scale-transition>
           </div>
    </mu-fade-transition>    
   
<!---猜你喜欢--------------------------------------------------------------------------------------------------------->   
   <mu-fade-transition>
   <div class="meng" v-show="show4"> 
   <mu-scale-transition>
           <div class="ymal_box" v-show="show4">
           	      <p class="ymal_box_title">猜你喜欢</p> 	
           	      <div v-for="i in cai_active" @click="go_cai(i)" class="val_box">
           	      	  <img :src="i.pic" alt="" />  
           	      	   <p class="val_box_p">{{i.title}}</p> 
           	      	    <p class="val_box_p2">¥{{i.price}}</p>
           	      </div>
           	      <img @click="to_home" class="ymal_box_img" src="static/img/guanbi.png" alt="" />	
           </div>
    </mu-scale-transition>
    </div>
  </mu-fade-transition> 
    
  </div>
</template>

<script>
import store from '../../vuex/store.js'
import router from '../../router/index.js'
import axios from 'axios'
export default {
  
  data () {
    return {
       logins:true,
       show4:false,
       show1:false,
       you_show:false,
       you_act:[],
       you_title:'',
       active_s:{},//商品数据
       
       cai_active:'',//猜你喜欢数据
    }
  },
 
  methods:{
  	go_cai(i){
  		  localStorage.videosa = 2;
  		  localStorage.video_id = i.id;
	 	    router.push({
	   	     path:'./Course_details'
	   	  }) 
	   	  location.reload();
  	},
  	
  	git_cai_act(id){//获取猜你喜欢数据
  		
  		 axios.get(store.state.urls+'api/order/guesslike?type='+id
        	      ).then(res=>{
        	      	 console.log(res.data,'猜你喜欢数据')
                  if(res.data.code==200){
                  	  
                  	  this.cai_active = res.data.data
                  	     
                  }
                }).catch(err=>{
                         
              }); 
  	},
  	
  	
  	git_act(){//获取数据
  		 const loading = this.$loading({
  	  	   color:'#FEE045',
  	  	   text:'加载中...'
  	     });
  	    axios({
            method:"post",
            url:"order/showOrder",
            contentType:"application/json;charset=UTF-8",
            dataType:"json",
            data:{
                 group:localStorage.group_id,
                 token:localStorage.api_token1
             }
           }).then(res=>{
           	   console.log(res.data)
                  if(res.data.code==200){
//      	      		 this.you_act = res.data.data.coupons.long.concat(res.data.data.coupons.sort);//优惠券数据
//      	      		 this.you_title = this.you_act[0].amount;
        	      		 this.active_s = res.data.data.group;
//      	      		 console.log(this.you_act,'优惠券');
        	      		 console.log( this.active_s,'商品数据');
        	      		 
        	      		 loading.close();
        	      		 this.git_cai_act(this.active_s.type_id);//获取猜你喜欢数据
        	      }   
        	      
             }).catch(err=>{
                     
             });
  	},
  	
  	to_home(){
  		 router.push({
  		 	   path:'/Course_selection'
  		 }) 
  		 location.reload()
  	},
     give_up(){//确认放弃订单弹出，猜你喜欢
     	this.show1 = false;
     	this.show4 = true;
     },

  	pay_click(){//用户点击确认支付
		
       axios.get(store.state.urls+'api/order/pay-stra?token='+localStorage.api_token1+'&out_trade_no='+this.active_s.uid
        	     ).then(res=>{
                  if(res.data.code==200){
                  	  
                  	 console.log(res.data.data.jsApiParameters,'数据')
                  	 const pay_params = res.data.data.jsApiParameters;
                  	 
                     if(typeof WeixinJSBridge == "undefined"){
                     	if( document.addEventListener ){
                            document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
                        }else if (document.attachEvent){
                            document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
                            document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
                        }
                     }else{
                     	this.onBridgeReady(pay_params);
                     }
                  	     
                  }else{
                  	 this.$toast.error('发生了错误')
                  }
                }).catch(err=>{
                         
              });      	      
              	  
  	},
  	onBridgeReady(params){
            const pay_params = JSON.parse(params);
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest',pay_params,
                function(res){
                    if(res.err_msg == "get_brand_wcpay_request:ok" ){
                        router.push({
		 	                path:'/details_Pcompleted'
		                 })  
                } 
            }); 
        },
  	
  	   you_click(i,index){
  	      this.you_title = i.amount 	
  	      this.you_show = false
  	   },
  	   
  },
  
  created(){
  	    
  },
  
  mounted(){
  	        this.git_act();
  	        pushHistory();  
            var bool=false;  
            setTimeout(function(){  
                  bool=true;  
            },1500);  
            window.addEventListener("popstate", (e)=> {  
              if(bool){ //做自己想做的事情
              	    this.show1 = true
                }  
                pushHistory();  
            }, false);  
           function pushHistory(){  
            var state = {  
                title: "title", 
                url: "#"  
            };  
            window.history.pushState(state, "title", "#/details_Confirm_Order");  
           }	
  	       store.state.btn_show = false;
  	     
  	    localStorage.video_show='true'
//	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
       
  }
}
</script>

<style scoped>
	.ymal_box_img{
		 width: 1.466666rem;
		 height: 1.466666rem;
		 position: absolute;
		 bottom: -0.7rem;
		 left: 3.866666rem;
	}
	.val_box_p2{
		 font-size: 0.373333rem;
		 color: #F55656;
		 margin-top: 0.133333rem;
		 
	}
	.val_box_p{
		 font-size: 0.373333rem;
		 color: #6E4C45;
		 width:95%;
		 margin-top: 0.086666rem;
		  overflow: hidden;
         text-overflow:ellipsis;
         white-space: nowrap;
         font-weight: bold;
	}
	.val_box img{
		 width: 100%;
		 height: 4rem;
	}
	.val_box{
		 width:4rem;
		 height:5.52rem;
		 /*background: #E0E0E0;*/
		 margin-top: 0.4rem;
		 float: left;
		 margin-left: 0.4rem;
	}
	.ymal_box_title{
		 font-size: 0.48rem;
		 color: #6E4C45;
		 line-height: 0.693333rem;
		 text-align: center;
		 margin-top: 0.266666rem;
	}
	.ymal_box{
		width: 9.2rem;
		height: 13.613333rem;
		background: white; 
		box-shadow:0px 7px 10px rgba(0,0,0,0.06);
        opacity:1; 
        border-radius:0.266666rem;
        position: fixed;
        top:0.4rem;
        left: 0.4rem;
        z-index: 20;
        /*text-align: center;*/
	}
	.meng_box_btn_c1{
		 width: 49.5%;
		 height: 100%;
		 border-right: 0.013333rem solid #DEDEDE;
		 font-size: 0.48rem;
		 color: #C5B2AB;
		 text-align: center;
		 float: left;
		 line-height: 1.213333rem;
	}
	.meng_box_btn{
		 width: 100%;
		 height: 1.213333rem;
		 border-top: 0.013333rem solid #DEDEDE;
	}
	.meng_box_val{
		 width: 100%;
		 height: 2.266666rem;
		 font-size: 0.48rem;
		 color: #C5B2AB;
		 line-height: 2.266666rem;
	}
	.meng_box_tit{
		 width: 100%;
		 height:1.48rem;
		 line-height: 1.48rem;
		 font-size: 0.48rem;
		 color: #6E4C45;
		 font-weight: bold;
		 border-bottom: 0.013333rem solid #DEDEDE;
	}
	 .meng_box{
	 	 width: 8.466666rem;
	 	 height: 4.96rem;
	 	 background: white;
	 	 border-radius: 0.266666rem;
	 	 margin: 55% auto;
	 	 overflow: hidden;
	 	 text-align: center;
	 }
	 .meng{
	 	 width: 100%;
	 	 height: 100%;
	 	 background: rgba(0,0,0,.6);
	 	 position: fixed;
	 	 top: 0;
	 	 left: 0;
	 	 z-index: 500;
	 }
	.you_det_tab_c{
		 width: 100%;
		 height: 0.986666rem;
		 /*border-top: 0.006666rem solid #6E4C45;*/
		line-height: 0.986666rem;
		padding-left: 0.266666rem;
		font-size: 0.373333rem;
		color: #6E4C45;
	}
	.you_det_tab{
		  background: #F0F0F0;
		  position: absolute;
		  top:0.96rem;
		  left: 0;
		  border-radius: 0 0 0.133333rem 0.133333rem;
		  
	}
	.you_det_tab_1{
		  height: 0px;
		  width: 100%;
		  
	}
	.you_det_tab_2{
		  width: 100%;
		  
	}
	
	
	.bto_box_btn{
		 width: 3.12rem;
		 height: 100%;
		 float: right;
		 background: #FEE045;
		 font-size: 0.48rem;
		 color: #6E4C45;
		 text-align: center;
		 font-weight:bold;
		 
	}
	.bto_box_p{
		 font-size: 0.48rem;
		 color: #6E4C45;
		 float: left;
		 font-weight: bold;
	}
	.bto_box{
		 width: 100%;
		 height: 1.306666rem;
		 background: white;
		 line-height: 1.306666rem;
		 border-top: 0.013333rem solid #6E4C45;
		 position: fixed;
         bottom: 0;
         left: 0;
         padding-left:0.4rem;
	}
	.you_det_btn i{
		margin-top: 0.333333rem;
	}
	.you_det_btn{
		 width: 1.013333rem;
		 height: 1.013333rem;
		 /*float: right;*/
		position: absolute;
		right: 0;
		top: 0;
		z-index: 2;
		 background: #FEE045;
		 text-align: center;
		 border-radius: 0 0.133333rem  0.133333rem 0;
	}
	.you_det p{
		 float: left;
	}
	.you_det{
		 width: 9.2rem;
		 height: 1.013333rem;
		 margin: 0.266666rem auto 0 auto;
		 background: #F0F0F0;
		 border-radius:0.133333rem;
		 /*overflow: hidden;*/
		 line-height:1.013333rem;
		 padding-left: 0.266666rem;
		 font-size: 0.373333rem;
		 color: #6E4C45;
		 position: relative;
	}
	.you_p{
		 font-size: 0.426666rem;
		 color: #6E4C45;
		 margin-left: 0.4rem;
		 margin-top: 0.533333rem;
	}
	.Payment_option_box a{
		 float: right;
	}
	.Payment_option_box p{
		 font-size: 0.373333rem;
		 float: left;
	}
	.Payment_option_box i{
		   line-height: 1.9rem;
		   float: left;
		   margin-right: 0.226666rem;
	}
	.Payment_option_box{
		  width: 100%;
		  height: 1.92rem;
		  border-bottom: 0.013333rem solid #F0F0F0;
		  line-height:1.92rem;
		  padding: 0 0.933333rem;
	}
	.p_box_p2 a{
		 text-decoration:line-through;
		 
	}
	.p_box_p2{
		color: #F55656;
		font-size: 0.426666rem;
	}
	
	.p_box_p1{
		font-size: 0.426666rem;
		color: #6E4C45;
		width: 6.4rem;
		margin-bottom: 0.4rem;
		overflow: hidden;
       text-overflow:ellipsis;
          white-space: nowrap;
	}
	.p_box{
		 width:6.933333rem;
		 height:1.866666rem;
		 float: right;
		 /*background: #EBEDF0;*/
	}
	.kevalue img{
		  width: 1.866666rem;
		  height: 1.866666rem;
		  float: left;
		  background: #C0C0C0;
	}
     .kevalue{
     	 width: 100%;
     	 height: 2.506666rem;
     	 border-bottom: 0.013333rem solid #F0F0F0;
     	 padding: 0.32rem 0.4rem;
     }

</style>
