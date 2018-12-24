<template>
  <!--我的课程-->
  <div id="hello" style="width:100%;background:white;">
       
                我的课程
       

  </div>
</template>

<script>
import store from '../../vuex/store.js'
import router from '../../router/index.js'
export default {
  
  data () {
    return {
    	
    }
  },
  methods:{
  	
  },
  mounted(){
  	  store.state.btn_show = false;
  	  store.state.bottom = 'mine'
//	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
  }
}
</script>

<style scoped>
	
</style>
