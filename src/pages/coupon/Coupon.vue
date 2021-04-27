<template>
    <div>
      <home-header></home-header>
      <payment-coupon></payment-coupon>
      <store-coupon></store-coupon>
      <Footer></Footer>
      <pop-window-2></pop-window-2>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import PaymentCoupon from './components/Payment'
import StoreCoupon from './components/Store'
import PopWindow1 from './components/PopWindow1'
import PopWindow2 from './components/PopWindow2'
import Footer from './components/Footer'
import axios from 'axios'

export default {
  name: 'Coupon',
  components: {
    HomeHeader,
    PaymentCoupon,
    StoreCoupon,
    PopWindow1,
    PopWindow2,
    Footer
  },
  methods: {
    getTicketsInfo () {
      axios.get('api/index.json')
        .then(this.getTicketsInfoSucc)
    },
    getTicketsInfoSucc (res) {
      console.log(res)
    }
  },
  mounted () {
    this.getTicketsInfo()
  }
}
</script>

<style>

</style>
