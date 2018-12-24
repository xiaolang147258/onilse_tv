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
import Personal_information from '@/components/mines/Personal_information01.vue'
import My_Order02 from '@/components/mines/My_Order02.vue'
import My_courses03 from '@/components/mines/My_courses03.vue'
import my_collection05 from '@/components/mines/my_collection05.vue'
import Browse_record06 from '@/components/mines/Browse_record06.vue'
import coupon04 from '@/components/mines/coupon04.vue'
//import hello4 from '../components/hello4'



Vue.use(Router)

export default new Router({
  routes:[
    
    {path: '/Course_selection',meta:{title:'素质教育课程中心'},component:Course_selection},
    {path: '/see_more',meta:{title:'热门精选'},component:see_more},
    {path: '/Course_details',meta:{title:'课程详情'},component:Course_details},
    {path: '/details_Verify_phone',meta:{title:'完善信息'},component:details_Verify_phone},
    {path: '/details_Confirm_Order',meta:{title:'确认订单信息'},component:details_Confirm_Order}, 
    {path: '/details_Pcompleted',meta:{title:'支付完成'},component:details_Payment_completed},
    
    {path:'/mine',meta:{title:'个人中心'},component:mine},
    {path:'/Personal_information',meta:{title:'个人信息'},component:Personal_information},
    {path:'/My_Order02',meta:{title:'我的订单'},component:My_Order02},
    {path:'/My_courses03',meta:{title:'我的课程'},component:My_courses03},
    {path:'/my_collection05',meta:{title:'我的收藏'},component:my_collection05},
    {path:'/Browse_record06',meta:{title:'浏览记录'},component:Browse_record06},
    {path:'/coupon04',meta:{title:'优惠券'},component:coupon04},
    
    {path:'/*',meta:{title:'素质教育课程中心'},component: Course_selection},
       
     
  ]
})
