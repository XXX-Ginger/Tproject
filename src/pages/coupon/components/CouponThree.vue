<template>
  <div class="coupon2" @click="clickOthers">
    <img class="bg2" src="/static/paymentCoupon/普通.png">
    <div class="content3">
      <div class="info1">
        <span>{{item.value}}</span>
        <span>元</span>
        <span>{{item.title}}</span>
      </div>
      <div class="info2">{{item.limit}} &nbsp;&nbsp;&nbsp;&nbsp;{{item.validity}}</div>
      <div class="info3">{{item.range}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CouponThree',
  props: ['item'],
  data () {
    return {
      title: this.item.title
    }
  },
  methods: {
    clickOthers () {
      this.bus.$emit('clickCoupon', this.title)
    }
  }
}
</script>

<style lang="stylus" scoped>
.coupon2
  position: relative
  margin: 0rem 0.3rem 0.2rem 0.3rem
  height: 2.8rem
  width: auto
  .bg2
    height: 100%
  .content3
    position: absolute
    top: 0
    .info1
      margin: 0.3rem 0 0 0.8rem
      font-family: PingFangSC-Medium
      font-size: 0rem
      span:nth-child(1)
        font-family : Helvetica
        font-size: 0.8rem
        color: #F15451
        margin: 0.2rem 0 0 0
      span:nth-child(2)
        color: #F15451
        padding-right: 0.4rem
        font-size: 0.3rem
      span:nth-child(3)
        font-size: 0.3rem
    .info2
      margin: 0.2rem 0 0 0.6rem
      font-size: 0.25rem
      opacity: 0.6
    .info3
      margin: 0.6rem 0 0 0.6rem
      opacity: 0.3
</style>
