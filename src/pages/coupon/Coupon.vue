<template>
    <div>
      <home-header></home-header>
      <payment-coupon></payment-coupon>
      <store-coupon></store-coupon>
    </div>
</template>>

<script>
import HomeHeader from './components/Header'
import PaymentCoupon from './components/Payment'
import StoreCoupon from './components/Store'
import axios from 'axios'
export default {
  name: 'Coupon',
  components: {
    HomeHeader,
    PaymentCoupon,
    StoreCoupon
  },
  methods: {
    getTicketsInfo: function () {
      axios.get('api/index.json')
        .then(this.getTicketsInfoSucc)
    },
    getTicketsInfoSucc: function (res) {
      console.log(res)
    }
  },
  mounted: function () {
    this.getTicketsInfo()
  }
}
</script>

<style>

</style>
