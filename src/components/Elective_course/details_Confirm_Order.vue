<template>
  <div id="hello"  style="width:100%;background:white;">
    
    <div class="kevalue">
    	 <img src="../../../static/img/b_bb.png" alt="" />
    	 <div class="p_box">
    	 	 <p class="p_box_p1">冲向太空游乐园，和星星月亮一…</p>
    	 	 <p class="p_box_p2"><a style="color:#C5B2AB;font-size:0.32rem;">¥578</a>&nbsp;&nbsp;&nbsp;¥178</p>
    	 </div>
    </div>
    
    <div class="Payment_option_box">
    	 <van-icon name="wechat" size='0.606666rem' color='#1CB14E' /><p>微信支付</p> 
    	 <a><van-icon name="checked" size='0.606666rem' color='#F55656' /></a>
    </div>
    <p class="you_p">优惠券</p>
    
    <div @click.stop class="you_det">
    	<p>{{you_title}}</p>
    	<div @click="you_show=!you_show" class="you_det_btn"><van-icon size='0.333333rem' name="arrow-down"/></div>
    	<div class="you_det_tab" :class="{you_det_tab_1:you_show==false,you_det_tab_2:you_show==true}">
    		 <div v-show="you_show" v-for="(i,index) in you_act" @click="you_click(i,index)" class="you_det_tab_c">{{i}}</div>  
    	</div>
    </div>
  
    <div class="bto_box">
  	  <p class="bto_box_p">实付金额：&nbsp;<a style="color:#F55656;font-weight:400;">¥168.00</a></p>
  	  <div @click="pay_click" class="bto_box_btn">立即支付</div>
    </div>
    
    
<!--弹出是否确认退出----------------------------------------------------------------------------------------------->
     <mu-fade-transition>
           <div class="meng" v-show="show1">
           	    <mu-scale-transition>
           	      <div v-show="show1" class="meng_box">
           	      	  <div class="meng_box_tit">取消订单</div>
           	      	  <div class="meng_box_val">是否放弃该订单？</div>
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
           	      <div v-for="i in 4" class="val_box">
           	      	  <img src="../../../dist/static/img/b_bb.860082c.png" alt="" />  
           	      	   <p class="val_box_p">冲向太空游乐园，和…</p> 
           	      	    <p class="val_box_p2">¥231.00</p>
           	      </div>
           	      <img @click="to_home" class="ymal_box_img" src="../../../static/img/guanbi.png" alt="" />	
           </div>
    </mu-scale-transition>
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
    	show4:false,
    	show1:false,
    	
       you_show:false,
       you_act:['20元优惠券','30元优惠券','40元优惠券'],
       you_title:'20元优惠券',
       
    }
  },
 
  methods:{
  	to_home(){
  		 router.push({
  		 	   path:'/Course_selection'
  		 }) 
  	},
     give_up(){//确认放弃订单弹出，猜你喜欢
     	this.show1 = false;
     	this.show4 = true;
     },

  	pay_click(){
  		router.push({
  		 	   path:'/details_Pcompleted'
  		 }) 
  	},
  	   you_click(i,index){
  	      this.you_title = i 	
  	      this.you_show = false
  	   },
  	   
  },
  mounted(){
  	  
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
           function pushHistory() {  
            var state = {  
                title: "title", 
                url: "#"  
            };  
            window.history.pushState(state, "title", "#");  
        }	
            
  	   store.state.btn_show = false;
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
	}
     .kevalue{
     	 width: 100%;
     	 height: 2.506666rem;
     	 border-bottom: 0.013333rem solid #F0F0F0;
     	 padding: 0.32rem 0.4rem;
     }

</style>
