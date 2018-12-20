<template>
  <div id="hello" style="width:100%;background:honeydew;">
   
        
   
  </div>
</template>

<script>
import store from '../vuex/store.js'
import router from '../router/index.js'
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
  	  store.state.bottom = 'movies'
  	  document.getElementById('hello').style.height = document.documentElement.clientHeight+'px';
  }
}
</script>

<style scoped>
 .demo-button {
     
  }

</style>
