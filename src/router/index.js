import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Coupon from '@/pages/coupon/Coupon'
import Loading from '@/pages/loading/Loading'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/coupon',
      name: 'Coupon',
      component: Coupon
    }, {
      path: '/loading',
      name: 'Loading',
      component: Loading
    }
  ]
})
