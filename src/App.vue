<template>
  <div id="app">
   
    <router-view/>


<!--底部导航栏-->
 <div class="btn" v-show="$store.state.btn_show" style="">
 	   <div style="width:5.64rem;height:100%;margin: 0 auto;color:#6E4C45;">
 	   	
    	  <div @click="btn1" class="bos" style="float: left;">
    	  	  <img :src="($store.state.bottom=='Elective course')?'../static/img/xuanke_xuanzhong.png':'../static/img/xuanke.png'"/> 
    	  	  <p :class="{colors:btn_show=='Elective course',colora:btn_show!='Elective course'}">选课</p>
    	  </div>
    	  
    	  <div @click="btn2" class="bos" style="float: right;">
    	  	  <img :src="($store.state.bottom=='mine')?'../static/img/wode_xuanzhong.png':'../static/img/wode.png'"/> 
    	  	  <p :class="{colors:btn_show=='mine',colora:btn_show!='mine'}">我的</p>
    	  </div>
    	  
    </div>
 </div>
  

  </div>
</template>

<script>
import router from './router/index.js'
import store from './vuex/store.js'
export default {
	store,
  name: 'App',
  data(){
  	 return{
  	 	   
  	 }
  },
  computed:{
  	 btn_show(){
  	 	  return this.$store.state.bottom 
  	 },
  },
  methods:{
  	btn1(){
  	  router.push({
  	   	 path:'./Course_selection',
  	   	 
  	   	})
  	    
  	},
  	btn2(){
  	    router.push({
  	   	 path:'./mine',
  	   	 
  	   	}) 
  	  
  	},
  	
  },
  mounted(){
//	  this.btn1()
//    let self = this;
//document.addEventListener('touchstart', (e) => {
//self.moveY = e.targetTouches[0].pageY;
//})
//document.addEventListener('touchmove', (e) => {
//e.preventDefault();
//let moveWidth = self.moveY - e.targetTouches[0].pageY;
//if (moveWidth !== 0) {
//  document.body.scrollTop += moveWidth;
//}
//})

  }
  
}

</script>

<style scoped="scoped">
	.colora{
		  color: #C5B2AB;
	}
	.colors{
		 color: #6E4C45;
		/*color: red;*/
	}
	
	.bos img{
		  width: 0.64rem;
		  height: 0.64rem;
	}
	.bos p{
		  font-size: 0.286666rem;
		  /*color: #C5B2AB;*/
	}
	.btn{
		 position:fixed;bottom:0;left:0;
		 z-index:200;
		 width: 100%;
		 height:1.306666rem;
		 background: #FFFFFF;
		 border-top: 0.013333rem solid #6E4C45;
	}
	.bos{
		  width:0.666666rem;
		  height: 100%;
		  /*background: yellow;*/		 
		  padding-top: 0.12rem;
		  text-align: center;
	}
#app{
	
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
}
</style>
