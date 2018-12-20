<template>
  <div id="hello" style="width:100%;background: white;">
   
       <div class="titles">
      	  <img class="titles_img" src="../../../static/img/b_bb.png" alt="" />
      	  <div class="titles_val_box">
      	  	 <img src="../../../static/img/b_bb.png" alt="" />  
      	  	 <div class="titles_val_box_box">
      	  	 	 <p>冲向太空游乐园，和星星月亮一起玩耍</p>
      	  	 </div>
      	  </div>
      </div>
      <p class="zp">首次购买需绑定手机信息</p>
      
      <p class="ipone_name">手机号码</p>
      <div class="iphone_box">
      	    <input v-model="iphone_value" type="tel" id="iphone" placeholder="请输入手机号码" />
      	    <button @click="hqyan" v-if="btn_show" class="iphone_btn">获取验证码</button>
      	    <button style="background:#EAEAEA;color:#C5B2AB;" v-else class="iphone_btn">获取验证码</button>
      </div> 
      <p class="yan_p">验证码</p>
      <div class="iphone_box">
      	    <input style="width: 2.773333rem;"  v-model="yan_value" type="tel" id="iphone" placeholder="请输入验证码" />
      	    <button @click="tj_click" style="float:left;margin-left:0.266666rem;" v-if="yan_value&&iphone_value" class="iphone_btn">提交</button>
      	    <button style="background:#EAEAEA;color:#C5B2AB;float:left;margin-left:0.266666rem;" v-else class="iphone_btn">提交</button>
      </div>
      
  </div>
</template>

<script>
import store from '../../vuex/store.js'
import router from '../../router/index.js'
export default {
  
  data () {
    return {
    	btn_show2:false,//提交按钮的状态
    	btn_show:true,//获取验证码按钮的状态
    	iphone_value:'',//手机号码
    	yan_value:'',//验证码
    }
  },
  computed:{
  	
  },
  methods:{
  	tj_click(){//提交按钮被点击
  		 
  		router.push({
  		 	   path:'/details_Confirm_Order'
  		 }) 
  		 
  	},
  	
  	
  	hqyan(){//获取验证码
  	   if(!(/^1[3456789]\d{9}$/.test(this.iphone_value))){
  	   	      this.$toast.error({message:'手机号码格式有误',time:1500}) 
  	   }else{
  	   	      this.$toast.success({message:'验证码发送成功，十分钟内有效',time:3000})
  	   	      this.btn_show = false;//使获取验证码按钮变为禁用
  	   	      window.setTimeout(()=>{
  	   	      	 this.btn_show = true;//60秒后恢复可用状态
  	   	      },60000)
  	   }
  	},
  	
  	
  	
  },
  mounted(){
  	  
  	  store.state.btn_show = false;
	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
  }
}
</script>

<style scoped>
	
	.yan_p{
		 font-size: 0.426666rem;
		 color: #6E4C45;
		 margin: 0.366666rem 0 0.4rem 0.4rem;
	}
	.iphone_btn{
		  width: 2.613333rem;
		  height: 100%;
		  float: right;
		  margin-right: 0.4rem;
		  border: none;
		  background: #FEE045;
		  border-radius:0.133333rem;
		  font-size: 0.373333rem;
		  color: #6E4C45;
	}
	#iphone{
		width: 6.32rem;
		height: 100%;
		border: none;
		background: #F0F0F0;
		float: left;
		border-radius:0.133333rem;
		padding-left: 0.266666rem;
	}
	.iphone_box{
		 width: 100%;
		 height: 1.013333rem;
		 line-height: 1.013333rem;
		 font-size: 0.373333rem;
		 padding-left: 0.4rem;
		 margin-top: 0.266666rem;
	}
	.ipone_name{
		  font-size: 0.426666rem;
		  color: #6E4C45;
		  margin: 0.4rem  0 0 0.4rem;
	}
	.zp{
	   font-size: 0.426666rem;
	   color: #6E4C45;
	   margin: 0;
	   margin-top: 1.066666rem;
	   margin-left: 0.4rem;
	   font-weight: bold;
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
