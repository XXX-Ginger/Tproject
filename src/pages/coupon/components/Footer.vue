<template>
  <div class="footer">
    <div class="coupon-choice">
      <img class="icon" :src="iconUrl">
      <p>{{title}}生效中</p>
      <span class="iconfont">&#xe66e;</span>
    </div>
    <router-link type="button" to="/payment" id="payment"></router-link>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      iconList: ['/static/footer/footerIcon1.png', '/static/footer/footerIcon2.png'],
      titleList: ['专享超优汇率', '专享境外通用'],
      title: '专享超优汇率',
      iconUrl: '/static/footer/footerIcon1.png'
    }
  },
  mounted () {
    console.log('do')
    this.bus.$on('clickCoupon', (msg) => {
      if (msg === 0 || msg === 1) {
        this.title = this.titleList[msg]
        this.iconUrl = this.iconList[msg]
      } else {
        this.title = msg
        this.iconUrl = this.iconList[1]
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.footer
  position: fixed
  bottom: 0
  z-index: 999
  display : flex
  align-items : center
  justify-content :space-around
  width: 100%
  height: 1.6rem
  background : #fff
  .coupon-choice
    display :flex
    align-items :center
    height: 0.8rem
    width: 4rem
    margin-left: 0.3rem
    .icon
      width: 0.5rem
      height: 0.45rem
    p
      margin-left: 0.2rem
      opacity: 0.5
    span
      font-size: 0.35rem
      opacity: 0.5
  #payment
    background-image: url("/static/footer/paymentButton.png")
    background-size :100%
    width: 2.5rem
    height: 0.8rem
    border-radius: 0.1rem
</style>
