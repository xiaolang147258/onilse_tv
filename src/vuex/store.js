import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	url:'',//全局请求头
	
	data:{//全局存储当前登录用登录信息
		
	},
	
	cesi:'vuex内部执行方法',
	
	bottom:'',
	
	btn_show:true,//低部导航栏显示隐藏控制
};

//修改状态
const mutations = {
	 del(state){
	 	 state.cesi == '这个可以，执行完成'?state.cesi='vuex内部执行方法':state.cesi='这个可以，执行完成'
	 },
	
	
};

export default new Vuex.Store({
	state,
	mutations
});
