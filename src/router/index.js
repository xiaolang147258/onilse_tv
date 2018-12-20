import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Course_selection from '@/components/Elective_course/Course_selection.vue'
import see_more from '@/components/Elective_course/see_more.vue'
import Course_details from '@/components/Elective_course/Course_details.vue'
import details_Verify_phone from '@/components/Elective_course/details_Verify_phone.vue'
import details_Confirm_Order from '@/components/Elective_course/details_Confirm_Order.vue'

import details_Payment_completed from '@/components/Elective_course/details_Payment_completed.vue'

import mine from '../components/mines/mine.vue'
//import hello4 from '../components/hello4'



Vue.use(Router)

export default new Router({
  routes:[
    
    {path: '/Course_selection',meta:{title:'素质教育课程中心'},component:Course_selection},
    {path: '/see_more',meta:{title:'热门精选'},component:see_more},
    {path: '/mine',meta:{title:'个人中心'},component:mine},
    {path: '/Course_details',meta:{title:'课程详情'},component:Course_details},
    {path: '/details_Verify_phone',meta:{title:'完善信息'},component:details_Verify_phone},
    {path: '/details_Confirm_Order',meta:{title:'确认订单信息'},component:details_Confirm_Order}, 
    {path: '/details_Pcompleted',meta:{title:'支付完成'},component:details_Payment_completed},
    
    
    {path: '/*',meta:{title:'素质教育课程中心'},component: Course_selection},
       
     
  ]
})
