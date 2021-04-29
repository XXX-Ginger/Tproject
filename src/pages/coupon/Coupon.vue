<template>
  <div>
    <coupon-header :dist="dist" :brand="brand"></coupon-header>
    <div class="container">
      <module-title :title="moduleTitle1"></module-title>
      <coupon-one :exchangeCoupon="exchangeCoupon"></coupon-one>
      <coupon-two :generalCoupon="generalCoupon"></coupon-two>
      <coupon-three v-for="item of paymentCouponList" :key="item.id" :item="item"></coupon-three>
      <module-title :title="moduleTitle2"></module-title>
      <coupon-four :storeCouponList="storeCouponList"></coupon-four>
      <bottom></bottom>
    </div>
    <Footer></Footer>
    <pop-window :exchangeCoupon="exchangeCoupon"
                :generalCoupon="generalCoupon"
                :getRate="getRate"
                :getGeneral="getGeneral">
    </pop-window>
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
import axios from 'axios'

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
      getRate: false,
      getGeneral: false,
      dist: {
        dist: '香港',
        distPicUrl: '../../../../static/img/picture.png'
      },
      brand: {
        brandName: '屈臣氏',
        brandUrl: '../../../../static/img/brand.png'
      },
      exchangeCoupon: {
        couponBg: '../../../../static/paymentCoupon/超优汇率.png',
        currency: '港币',
        discount: '85.51',
        rate: '85.80'
      },
      generalCoupon: {
        couponBg: '../../../../static/paymentCoupon/境外通用.png',
        waitingNum: 4,
        couponValue: 3
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
      }],
      storeCouponList: [{
        id: '0001',
        brand: 'Hallmork Babies',
        title: '新品折扣券',
        discountValue: '9',
        discountUnit: '折',
        discountImg: '',
        limit: '满300港币可用',
        decoLimit: ''
      }, {
        id: '0002',
        brand: 'Designer Trend',
        title: '精美礼品券',
        discountValue: '',
        discountUnit: '',
        discountImg: '../../../../static/storeCoupon/discountImg.png',
        limit: '满300港币可得',
        decoLimit: ''
      }, {
        id: '0003',
        brand: 'Patit Bateau',
        title: '全场通用券',
        discountValue: '20',
        discountUnit: '港币',
        discountImg: '',
        limit: '满300港币可用',
        decoLimit: ''
      }, {
        id: '0004',
        brand: 'The Runabouts',
        title: '桌上吸尘器',
        discountValue: '80',
        discountUnit: '港币',
        discountImg: '',
        limit: '原价',
        decoLimit: '82.5港币'
      }]
    }
  },
  methods: {
    getInfo () {
      axios.get('/api/coupon.json')
        .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      console.log(res)
    }
  },
  mounted () {
    this.getInfo()
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
