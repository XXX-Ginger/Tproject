<template>
  <div class="coupon1" @click="clickGeneral">
    <img class="bg2" src="/static/paymentCoupon/境外通用.png">
    <div class="content2">
      <p>{{generalCoupon.couponValue}}</p>
      <span>{{generalCoupon.waitingNum}}张待解锁</span>
      <span>使用后扫不同码可解锁下一张</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CouponTwo',
  props: ['generalCoupon'],
  methods: {
    clickGeneral () {
      this.bus.$emit('clickCoupon', 1)
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
  .bg2
    width: 100%
  .content2
    position: absolute
    bottom:0
    width: 6.8rem
    height: 3rem
    p
      margin: 0.2rem 0 0 1.2rem
      font-family: Helvetica
      font-size: 0.8rem
      color: #fff
    span:nth-child(2)
      position: absolute
      bottom:0.5rem
      opacity: 0.6
      margin-left: 0.4rem
      padding: 0.08rem
      border: 0.03rem solid #E9E9E9
      border-radius: 0.25rem
      font-size: 0.25rem
    span:nth-child(3)
      position: absolute
      bottom:0.5rem
      opacity: 0.3
      margin-left: 1.8rem
      padding: 0.08rem
</style>
