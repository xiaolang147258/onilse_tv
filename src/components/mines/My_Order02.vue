<template>
  <!--我的订单-->
  <div id="hello" style="width:100%;background:white;padding-top: 1.306666rem;">
       <div class="top_tab">
       	   <div @click="tab_click(0,'nonPayment')" class="top_tab_c" :class="{top_tab_color:tab_show==0}">待支付<div v-show="tab_show==0" class="top_tab_c_box"></div></div>
       	   <div @click="tab_click(1,'payment')" class="top_tab_c" :class="{top_tab_color:tab_show==1}" style="margin-left:1.64rem;">已支付<div v-show="tab_show==1" class="top_tab_c_box"></div></div>
       	   <div @click="tab_click(2,'nonEvalua')" class="top_tab_c" :class="{top_tab_color:tab_show==2}" style="margin-left:1.64rem;">待评价<div v-show="tab_show==2" class="top_tab_c_box"></div></div>
       </div>
    <!--没有订单时展示-->
       <div v-if="true" class="mei_box">
       	   <img src="../../../static/img/wodedindan.png" alt="" />
       	   <div class="p_boxa">暂时没发现订单哦~去首页看看有什么课程吧</div>
           <div @click="go_home" class="btn">去看看</div>                 
       </div>
    <!--有订单时展示-->   
      <div v-else v-for="(i,index) in actives" class="aws_tab_box">
       	    <div class="aws_tab_box_t1">
       	    	
       	    	<div id="img_box">
       	    		 <!--<img v-if="img_show==false" style="width:50%;height:50%;margin-top:0.433333rem;" src="../../../static/img/gif/5-121204193R5-50.gif" alt="" />-->
       	    		 <img  @load="img_show=true" :src="i.pic" alt="" />
       	    	</div>
       	    	 
       	    	 <div class="aws_tab_box_t1_c">
       	    	 	<div class="aws_tab_box_t1_c1"><p>{{i.title}}</p><a>¥{{i.amount}}</a></div>
       	    	 	<p class="go_dan">下单日期：{{i.created_at}}</p>	     
       	    	 	<p v-show="tab_show!=0" style="margin-top:0.16rem;" class="go_dan">支付日期：{{i.updated_at}}</p>	
       	    	 </div>
       	    </div>
       	    <div class="aws_tab_box_t2">
       	    	<p>订单编号：{{i.uid}}</p>
       	    	<div @click="go_act(i)" v-if="tab_show==2" class="btn_3">去评价</div>
       	    	<div @click="go_act(i)" v-else-if="tab_show==1" class="btn_3">查看课程</div>
       	    	 <div v-else-if="tab_show==0">
       	    		  <div @click="go_detalis(i)" class="btn_3">去支付</div><div @click="qu_deta(i,index)" style="margin-right:0.4rem;background:#EAEAEA;" class="btn_3">取消支付</div>
       	    	 </div>
       	    </div>
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
    return {
    	tab_show:0,
    	actives:'',//数据
      act_show:false,
    	img_show:false,
    }
  },
  methods:{
  	qu_deta(i,index){
  		  Message.confirm('确定取消该订单吗？','提示',{
          type: 'warning',
          icon:''
        }).then(({ result }) => {
         if(result){
           this.clickdeta(i,index) 
         } else {}
        });
  	},
  	
  	 clickdeta(i,index){
  	 	  axios({
            method:"post",
            url:"order/delOrder",
            contentType:"application/json;charset=UTF-8",
            dataType:"json",
            data:{
                 id:i.id,
                 token:localStorage.api_token1
             }
            }).then(res=>{
                      console.log(res.data,'取消订单');
                      if(res.data.msg=='删除成功'){
                      	  this.actives.splice(index,1);
                      	  this.$toast.info({
		   	                      message:'订单已取消',
		   	                    	time:'1000'
		   	                  })
                      	  this.act_show = this.actives.length==0?true:false;
                      }
             }).catch(err=>{
                      console.log(err);
             });
  	 },
  	 go_act(i){//跳转作品详情
  	 	 localStorage.video_show='true';
  	 	 localStorage.video_id = i.group_id;
  		 router.push({
  	   	     path:'./Course_details',
  	   })
  	 },
  	 
  	 go_detalis(i){
	 	  localStorage.group_id =  i.group_id
	 	  router.push({
		 	   path:'/details_Confirm_Order'
		    })
  	 },
  	 
  	 tab_click(index,val){
  	 	  this.tab_show = index;
  	 	  
  	 	  axios.get(store.state.urls+'api/order/'+val+'?token='+localStorage.api_token1
        	      ).then(res=>{
        	      	 if(res.data.code==200){
        	      	 	  console.log(res.data.data,'订单数据');
        	      	 	  this.actives = res.data.data
        	      	 	  this.act_show = this.actives.length==0?true:false;
	  	    	          
        	      	 }else{
        	      	 	  this.$toast.error('网络错误')
  	  	            
        	      	 }
               }).catch(err=>{
               	    
  	  	              
                      console.log(err)
              }); 
  	 },
  	 
  	 go_home(){
  	 	 router.push({
  	   	     path:'./Course_selection',
  	   	}) 
  	 },
  	 
  	 
  },
  mounted(){
  	  this.tab_click(0,'nonPayment');
  	  $("html, body").animate({scrollTop:0});//回顶部
  	  store.state.btn_show = false;
  	  store.state.bottom = 'mine';
  	  localStorage.video_show='true'
  }
}
</script>

<style scoped>
	.btn_3{
		float: right;
		width: 2.16rem;
		height: 0.746666rem;
		background:#FEE045;
		font-size: 0.346666rem;
		color: #6E4C45;
		text-align: center;
		line-height: 0.776666rem;
		border-radius: 0.133333rem;
	}
	.aws_tab_box_t2 p{
		 width: 100%;
		 float: left;
		 font-size: 0.32rem;
		 color: #C5B2AB;
		 margin-top: 0.16rem;
		 margin-bottom: 0.36rem;
	}
	.aws_tab_box_t2{
		width: 100%;
	}
	.go_dan{
		font-size: 0.32rem;
		color: #C5B2AB;
	}
	.aws_tab_box_t1_c1 a{
		 float: right;
		color: #F55656;
	}
	.aws_tab_box_t1_c1 p{
		 float: left;
		 color: #6E4C45;
		 font-weight: bold;
		 width: 4.6rem;
		 overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
	}
	.aws_tab_box_t1_c1{
		 width: 100%;
		 height: 0.8rem;
		 font-size: 0.426666rem;
	}
	.aws_tab_box_t1_c{
		width:6.933333rem;
		height: 1.866666rem;
		float:right;
		/*background:#E0E0E0;*/
		margin-top: 0.32rem;
	}
	.aws_tab_box_t1 #img_box{
		width: 1.866666rem;
		height: 1.866666rem;
		float: left;
		/*margin-right: 0.4rem;*/
		margin-top: 0.32rem;
		background:#EEEEEE;
		text-align:center;
	}
	#img_box img{
		 width: 100%;
		 height: 100%;
	}
	.aws_tab_box_t1{
		 width: 100%;
		 height: 2.506666rem;
		 
	}
	.aws_tab_box{
		width: 100%;
		height:4.666666rem;
		border-bottom: 0.013333rem solid #F0F0F0;
		padding: 0 0.4rem;
		/*padding-top: 0.386666rem;*/
		margin-bottom: 0.4rem;
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
