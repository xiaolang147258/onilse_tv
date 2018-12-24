<template>
  <div id="hello" style="width:100%;background:white;">
      <div class="Avatar">
      	 <p>头像</p>
      	 <div class="Avatar_box">
      	 	<img :src="git_img" alt="" /> 
      	 	<van-uploader class='inp' :after-read="onRead">
                <van-icon name="photograph"/>
            </van-uploader>
      	 </div>
      </div>
      
      <div @click="prompt(1)" class="name_box"> 
      	  <p>昵称</p> 
      	  <van-icon size='0.4rem' color='#6E4C45' name="arrow" />
      	  <p id="names">{{usernames}}</p>
      </div>
      
      <div @click="prompt(2)" class="name_box"> 
      	  <p>地区</p> 
      	  <van-icon size='0.4rem' color='#6E4C45' name="arrow" />
      	  <p id="names">{{areas_s}}</p>
      </div>
      
      <div @click="prompt(3)" class="name_box"> 
      	  <p>性别</p> 
      	  <van-icon size='0.4rem' color='#6E4C45' name="arrow" />
      	  <p id="names">{{sex_s}}</p>
      </div>
      
      <div @click="prompt(4)" class="name_box"> 
      	  <p>年龄</p> 
      	  <van-icon size='0.4rem' color='#6E4C45' name="arrow" />
      	  <p id="names">{{ages_s}}</p>
      </div>
      
 
 
<!--昵称修改--> 
    <mu-fade-transition>
       <div @touchmove.prevent @click='show=false' class="meng" v-show="show">
       	  <mu-scale-transition>
              <div @click.stop class="meng_box" v-show="show">
              	 <div v-if="inp_lei!=3" class="meng_box_c">
              	   <p v-if="inp_lei==1">名字</p> 
              	   <p v-else-if="inp_lei==2">城市</p>
              	   <p v-else-if="inp_lei==4">年龄</p>
              	 <!--昵称输入框-->
              	   <input v-if="inp_lei==1" @blur="inp_show" v-model="username" class="inps" type="text" placeholder="请输入2～8个字"/>
              	 <!--城市输入框-->
              	   <input v-else-if="inp_lei==2" @blur="inp_show" v-model="areas" class="inps" type="text" placeholder="请输入2～8个字"/>
              	 <!--年龄输入框-->
              	   <input v-else-if="inp_lei==4" @blur="inp_show" maxlength="2" v-model="ages" class="inps" type="number" placeholder="请输入两位数字"/>
              	     
              	   <button @click="beforeClose" v-if="username||areas||ages" style="background:#FEE045;" class="btn">保存</button>
              	   <button v-else class="btn">保存</button>
                 </div>
                 
                 <div v-else class="meng_box_c" style="padding:1.46666rem 0 0 0.866666rem;" >
                 	   <mu-button @click='sex_click("女")' class='sex_btn' color="secondary">女</mu-button>
              	     <mu-button @click='sex_click("男")'  class='sex_btn' color="primary">男</mu-button>
                 </div>
                 
                 
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
    	inp_lei:1,
    	
    	git_img:'../../../static/img/b_bb.png',
    	show:false,
    	username:'',//输入框的昵称
    	usernames:'萌叔',//展示的昵称
    	
    	areas:'',//地区
    	areas_s:'广州',//展示的地区
     
    	sex_s:'男',//展示性别
    	
    	ages:'',//年龄
    	ages_s:'18',//展示的年龄
    	
    }
  },
  computed:{
  	
  },
  methods:{
  	inp_show(){
  		$("html, body").animate({scrollTop:0});  
  	},
  	sex_click(sex){//性别选择后
  		this.sex_s = sex;
  		this.show = false;
  	},
  	beforeClose(){//修改昵称
  		if(this.inp_lei==1){
  			 if(this.username.length>8){
      		 this.$toast.error({message:'昵称长度不能超过8个字',time:1500})   
      	 }else{
      		 this.show = false;
      	 	 this.usernames = this.username 
      	 }
  		}else if(this.inp_lei==2){
  			 if(this.areas.length>8){
      		 this.$toast.error({message:'地区名称长度不能超过8个字',time:1500})   
      	 }else{
      		 this.show = false;
      	 	 this.areas_s = this.areas 
      	 }
  		 }else if(this.inp_lei==4){
  			 if(this.ages.length>2){
      		 this.$toast.error({message:'年龄只能输入两位数',time:1500})   
      	 }else{
      		 this.show = false;
      	 	 this.ages_s = this.ages 
      	 }
  		 }
      },
  	 prompt (num) {//点击昵称==》弹出修改昵称输入框
        this.show = true;
        this.inp_lei = num
        
    },
  	onRead(file) {//上传头像
      console.log(file)
      this.git_img = file.content;
   },
  },
  mounted(){
  	  store.state.btn_show = false;
  	  store.state.bottom = 'mine'
//	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
  }
}
</script>

<style scoped>
	.sex_btn{
		 width: 40%;
		 height: 60%;
		 float: left;
		 margin-right:4%;
	}
	.btn{
		 width: 100%;
		 height: 1.173333rem;
		 background: #EAEAEA;
		 border-radius: 0.586666rem;
		 border: none;
		 font-size: 0.48rem;
		 color: #6E4C45;
	}
	.meng_box_c{
		 width: 80%;
		 padding-top: 0.583333rem;
		 height: 100%;
		 margin: 0 auto;
	}
	.inps{
		 width: 100%;
		 height:1.013333rem;
		 background: #F0F0F0;
		 border-radius: 0.133333rem;
		 margin-bottom: 0.5rem;
		 font-size: 0.373333rem;
		 padding-left: 0.266666rem;
		 border: none;
	}
	.meng_box p{
		 font-size: 0.426666rem;
		 color: #6E4C45;
		 margin-bottom: 0.366666rem;
	}
	.meng_box{
		 width: 8.4rem;
		 height: 5rem;
		 background: white;
		 margin:5rem auto;
		 border-radius: 0.133333rem;
	}
	.meng{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index:200;
		background: rgba(0,0,0,.6);
	}
	#names{
		float: right;
		margin-right: 0.4rem;
		color: #C5B2AB;
	}
	.name_box i{
		 float: right;
		 margin-top: 0.4rem;
	}
	.name_box p{
		font-size: 0.426666rem;
		color: #6E4C45;
		float: left;
	}
	.name_box{
   	 width: 100%;
   	 height:1.306666rem;
   	 line-height:1.306666rem;
   	 border-bottom: 1px solid #F0F0F0;
   	 padding:0 0.4rem;
   	 
   
	}
	.inp{
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0; 
	}
	.Avatar_box img{
		 width:100%;
		 height:100%;
	}
	.Avatar_box{
		 width: 1.373333rem;
		 height: 1.373333rem;
		 float: right;
		 margin-top: 0.4rem;
		 position: relative;
		 border-radius: 50%;
		 overflow: hidden;
		 border:0.046666rem solid yellow;
	}
	.Avatar p{
		font-size: 0.426666rem;
		color: #6E4C45;
		float: left;
	}
   .Avatar{
   	 width: 100%;
   	 height: 2.173333rem;
   	 line-height:2.173333rem;
   	 border-bottom: 1px solid #F0F0F0;
   	 padding:0 0.4rem;
   	 
   }

</style>
