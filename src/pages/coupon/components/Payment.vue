<template>
  <div class="payment">
    <div class="title">
      <div class="title-left">
        <div class="rec"></div>
        <div class="title1">微信支付优惠券</div>
      </div>
      <div class="title2">微信支付自动抵扣</div>
    </div>
    <img class="coupon1" src="../../../../static/paymentCoupon/超优汇率.png">
    <img class="coupon1" src="../../../../static/paymentCoupon/境外通用.png">
    <img class="coupon2" src="../../../../static/paymentCoupon/屈臣氏专享.png">
    <img class="coupon2" src="../../../../static/paymentCoupon/药妆立减.png">
  </div>
</template>

<script>
export default {
  name: 'PaymentCoupon'
}
</script>

<style lang="stylus" scoped>
  .payment
    position: relative
    top: 0.1rem
    background: #F7F7F7
    display: flex
    border-radius: 0.4rem 0.4rem 0rem 0rem
    flex-direction: column
    .title
      height: 1.3rem
      margin: 0rem 0.38rem 0rem 0.38rem
      display: flex
      flex-direction: row
      align-items : center
      justify-content : space-between
      .title-left
        width: 3.33rem
        display: flex
        flex-direction: row
        .rec
          width: 0.1rem
          height: 0.4rem
          background: #E54A30
        .title1
          color: #252525
          line-height:0.4rem
          font-family: PingFangSC-Medium, PingFang SC
          margin-left: 0.16rem
          font-size: 0.3rem
      .title2
        line-height:0.4rem
        font-family: PingFangSC-Regular, PingFang SC
        font-size: 0.25rem
        opacity: 0.7
    .coupon1
      height: 3.35rem
      margin: 0rem 0.3rem 0.2rem 0.3rem
      width: auto
    .coupon2
      height: 2.8rem
      margin: 0rem 0.3rem 0.2rem 0.3rem
      width: auto
</style>
