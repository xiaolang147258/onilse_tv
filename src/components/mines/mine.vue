<template>
  <div id="hello" style="width:100%;background:greenyellow;">
                  我的
        
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
  computed:{
  	
  },
  methods:{
  	
  },
  mounted(){
  	  store.state.btn_show = true;
  	  store.state.bottom = 'mine'
  	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
  }
}
</script>

<style scoped>/
 .demo-button {
     
  }

</style>
