// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MuseUI from '_muse-ui@3.0.1@muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI)

import Message from 'muse-ui-message';
Vue.use(Message);

import Toast from 'muse-ui-toast';
import config from 'muse-ui-toast/src/config'
Vue.use(Toast,config);

import { Icon } from 'vant';
Vue.use(Icon);

import { Rate } from 'vant';
Vue.use(Rate);

import 'muse-ui-loading/dist/muse-ui-loading.css'; // load css
import Loading from 'muse-ui-loading';
Vue.use(Loading);


import 'vant/lib/index.css';
import { Tab, Tabs } from 'vant';
Vue.use(Tab).use(Tabs);

import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';

import VideoPlayer from 'vue-video-player'
require('vue-video-player/node_modules/video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

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
