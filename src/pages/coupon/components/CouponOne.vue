<template>
  <div class="coupon1" @click="clickRate">
    <img class="bg1" src="../../../../static/paymentCoupon/超优汇率.png">
    <div class="content1">
      <span>100{{exchangeCoupon.currency}}={{exchangeCoupon.discount}}人民币
      </span>
      <span>市场参考价
      </span>
      <span>{{exchangeCoupon.rate}}人民币</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CouponOne',
  data () {
    return {
      exchangeCoupon: {
        couponBg: '../../../../static/paymentCoupon/超优汇率.png',
        currency: '港币',
        discount: '85.51',
        rate: '85.80'
      }
    }
  },
  methods: {
    clickRate () {
      console.log('clickRate')
      this.bus.$emit('clickCoupon', 0)
    }
  }
}
</script>

<style lang="stylus" scoped>
.coupon1
  position: relative
  margin: 0rem 0.3rem 0.2rem 0.3rem
  width: 6.8rem
  height: auto
  .bg1
    width: 100%
  .content1
    position: absolute
    bottom: 0.4rem
    left: 0.3rem
    font-size: 0.27rem
    span:nth-child(1)
      opacity: 0.6
    span:nth-child(2)
      opacity: 0.3
    span:nth-child(3)
      opacity: 0.3
      text-decoration:line-through
</style>
