// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import MuseUI from 'muse-ui';
// import 'muse-ui/dist/muse-ui.css';
// Vue.use(MuseUI);

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI)

import Message from 'muse-ui';
Vue.use(Message);

import Toast from 'muse-ui-toast';
import config from 'muse-ui-toast/src/config'
Vue.use(Toast,config);


import { Icon } from 'vant';
Vue.use(Icon);

import { Rate } from 'vant';
Vue.use(Rate);

import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
import Loading from 'muse-ui-loading/dist/muse-ui-loading.js';
Vue.use(Loading);


import 'vant/lib/index.css';
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

import { Uploader} from 'vant';
Vue.use(Uploader);

// import VueTouch from 'vue-touch'
// Vue.use(VueTouch, {name: 'v-touch'})

import axios from 'axios'
Vue.prototype.axios = axios;
axios.defaults.baseURL='/api'; 

//import Swiper from 'swiper'; 
//import 'swiper/dist/css/swiper.min.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

//import VideoPlayer from 'vue-video-player'
//require('vue-video-player/node_modules/video.js/dist/video-js.css')
//require('vue-video-player/src/custom-theme.css')
//Vue.use(VideoPlayer)


//import 'babel-polyfill'


import $ from 'jquery'

import Vuex from 'vuex'
Vue.use(Vuex)

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
