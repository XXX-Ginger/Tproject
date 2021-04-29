<template>
  <div>
    <loading v-if="!showMain"></loading>
    <div v-else>
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
                  :getGeneral="getGeneral"
                  v-if="special"
                  @getRate="changeGetRate"
                  @getGeneral="changeGetGeneral">
      </pop-window>
    </div>
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
import Loading from './components/Loading'
import Vue from 'vue'
import axios from 'axios'

Vue.prototype.bus = new Vue()

var root = process.env.ROOT_API

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
    PopWindow,
    Loading
  },
  data () {
    return {
      showMain: false,
      moduleTitle1: '',
      moduleTitle2: '',
      getRate: true,
      getGeneral: true,
      dist: {},
      brand: {},
      exchangeCoupon: {},
      generalCoupon: {},
      paymentCouponList: [],
      storeCouponList: []
    }
  },
  methods: {
    getInfo () {
      let url = process.env.NODE_ENV === 'development' ? '/static/mock/coupon.json' : root + '/static/mock/coupon.json'
      axios.get(url)
        .then(this.getInfoSucc)
    },
    getInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.moduleTitle1 = data.moduleTitle1
        this.moduleTitle2 = data.moduleTitle2
        this.getRate = data.getRate
        this.getGeneral = data.getGeneral
        this.dist = data.dist
        this.brand = data.brand
        this.exchangeCoupon = data.exchangeCoupon
        this.generalCoupon = data.generalCoupon
        this.paymentCouponList = data.paymentCouponList
        this.storeCouponList = data.storeCouponList
        setTimeout(() => { this.showMain = true }, 2000)
      }
    },
    changeGetRate (msg) {
      this.getRate = msg
    },
    changeGetGeneral (msg) {
      this.getGeneral = msg
    }
  },
  computed: {
    special () {
      return !this.getRate || !this.getGeneral
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
