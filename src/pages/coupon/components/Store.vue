<template>
  <div class="payment">
    <div class="title">
      <div class="title-left">
        <div class="rec"></div>
        <div class="title1">商户优惠券</div>
      </div>
      <div class="title2">微信支付自动抵扣</div>
    </div>
    <div class="store-coupon">
      <img class="picture" src="../../../../static/storeCoupon/store1.png">
      <img class="picture" src="../../../../static/storeCoupon/store2.png">
      <img class="picture" src="../../../../static/storeCoupon/store3.png">
      <img class="picture" src="../../../../static/storeCoupon/store4.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoreCoupon'
}
</script>

<style lang="stylus" scoped>
  .payment
    position: relative
    top: -1.5rem
    background: #F7F7F7
    display: flex
    flex-direction: column
    .title
      height: 1.3rem
      margin: 0.5rem 0.38rem 0rem 0.38rem
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
    .store-coupon
      display: flex
      flex-direction : space-between
      flex-wrap: wrap
      margin: 0rem 0.3rem 0rem 0.3rem
      .picture
        width: 3.39rem
        height: auto
</style>
