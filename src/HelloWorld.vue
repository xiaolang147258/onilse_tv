<template>
  <div class="hello" style="width:100%;background:honeydew;">
    <!--<h1>{{ msg }}</h1>-->
    <h2>Essential Links</h2>
    
    <h2>Ecosystem</h2>
    
    <!--<button @click="btn" style="width: 2.666666rem;height: 0.666666rem;font-size: 0.4rem;">点我</button>-->
     <h2>{{tltle}}</h2>
     <!--<h1 @click="login">niha</h1>-->
    
<mu-button class="demo-button" @click='btns'  color="primary">你好呀</mu-button>
<mu-button class="demo-button" @click='fullscreen' color="success">success</mu-button>
<mu-button class="demo-button" @click='fullscreen2'  color="warning">warning</mu-button>
<mu-button class="demo-button" @click="$toast.success('Hello World')" color="info">info</mu-button>
<mu-button class="demo-button" @click="$toast.error('Hello World')" color="error">error</mu-button>

 <mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value6" label="" container="bottomSheet" label-float full-width></mu-date-input>
 </mu-col>
  
<mu-col span="12" lg="4" sm="6">
      <mu-date-input  icon="today" v-model="value4" label="popover 显示" label-float full-width></mu-date-input>
</mu-col>


<mu-button color="primary" style="margin-left: 16px" @click="open = !open"> toggle侧滑</mu-button>
     
    
<!--侧滑出来板块--------------------------------------------------------------------->
 <mu-drawer :open.sync="open" :docked="docked" :right="position === 'right'">
    <mu-list>
      <mu-list-item button>
        <mu-list-item-title>Menu Item 1</mu-list-item-title>
      </mu-list-item>
      <mu-list-item button>
        <mu-list-item-title>Menu Item 2</mu-list-item-title>
      </mu-list-item>
      <mu-list-item  @click="open = false" button>
        <mu-list-item-title>Close</mu-list-item-title>
      </mu-list-item>
    </mu-list>
  </mu-drawer>
<!-------------------------------------------------------------------------------->

  </div>
</template>

<script>
	
	
	
	
import store from '../vuex/store.js'
import router from '../router/index.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value6: undefined,
      value4: undefined,
       open: false,
        docked: false,
        position: 'left',
    }
  },
  computed:{
  	 tltle(){
  	 	  return store.state.cesi
  	 },
  	 
  },
  methods:{
  	btn(){
  	   router.push({
  	   	path:'./hellos',
  	   	 query: {
            id:'music'
          }
  	   	});
  	},
  	btn1(){
  		  router.push({
  	   	path:'./hellos',
  	   	 query: {
            id:'music'
          }
  	   	});
  	},
  	
  	
  	
  	login(){
  		const loading = this.$loading();
      setTimeout(() => {
        loading.close();
      }, 2000)
  	},
  	
  	fullscreen () {//单确认框
       this.$alert('Hello World', '提示', {
        okLabel: '知道了'
       }).then(() => {
           
      });
    },
  	fullscreen2(){
  		 this.$confirm('确定要删除？', '提示', {
        type: 'warning'
      }).then(({ result }) => {
        if (result) {
        // '点击了确定'
        } else {
        // '点击了取消'
        }
      });
  	},
  	
  	btns(){
  		 store.commit('del')
  	},
  	
  },
  mounted(){
  	  store.state.bottom = 'movies'
  	 
//	 console.log(store.state.cesi)  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	
	.demo-button {
     margin: 6px 8px;
  }

</style>
