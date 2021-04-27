<template>
  <div class="footer">
    <div class="coupon-choice"></div>
    <button id="payment"></button>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="stylus" scoped>
  .footer
    position: fixed
    z-index: 999
    display : flex
    align-items : center
    justify-content : space-around
    bottom: 0
    width: 100%
    height: 1.6rem
    background : #fff
    .coupon-choice
      width: 2.8rem
      height: 0.5rem
      background : #000
    #payment
      background-image: url("../../../../static/img/paymentButton.png")
      background-size :100%
      width: 2.5rem
      height: 0.8rem
      border-radius: 0.1rem
</style>
