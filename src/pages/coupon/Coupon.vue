<template>
  <div>
    <coupon-header :dist="dist" :brand="brand"></coupon-header>
    <div class="container">
      <module-title :title="moduleTitle1"></module-title>
      <coupon-one></coupon-one>
      <coupon-two></coupon-two>
      <coupon-three v-for="item of paymentCouponList" :key="item.id" :item="item"></coupon-three>
      <module-title :title="moduleTitle2"></module-title>
      <coupon-four></coupon-four>
      <bottom></bottom>
    </div>
    <Footer></Footer>
    <pop-window></pop-window>
  </div>
</template>

<script>
import CouponHeader from './components/Header'
import ModuleTitle from './components/ModuleTitle'
import CouponOne from './components/CouponOne'
import CouponTwo from './components/CouponTwo'
import CouponThree from './components/CouponThree'
import CouponFour from './components/CouponFour'
import Bottom from './components/Bottom'
import Footer from './components/Footer'
import PopWindow from './components/PopWindow'
import Vue from 'vue'

Vue.prototype.bus = new Vue()

export default {
  name: 'Coupon',
  components: {
    CouponHeader,
    ModuleTitle,
    CouponOne,
    CouponTwo,
    CouponThree,
    CouponFour,
    Bottom,
    Footer,
    PopWindow
  },
  data () {
    return {
      moduleTitle1: '微信支付优惠券',
      moduleTitle2: '商户优惠券',
      dist: {
        dist: '香港',
        distPicUrl: '../../../../static/img/picture.png'
      },
      brand: {
        brandName: '屈臣氏',
        brandUrl: '../../../../static/img/brand.png'
      },
      paymentCouponList: [{
        id: '0001',
        title: '屈臣氏专享券',
        value: '20',
        limit: '满300元可用',
        validity: '21天内有效',
        range: '香港地区屈臣氏线下门店可用'
      }, {
        id: '0002',
        title: '香港药妆立减券',
        value: '50',
        limit: '满300元可用',
        validity: '21天内有效',
        range: '香港地区的药妆种类商户中均可使用'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position: relative
  top: 0.1rem
  background: #F7F7F7
  display: flex
  border-radius: 0.4rem 0.4rem 0rem 0rem
  flex-direction: column
  align-items :center
</style>
