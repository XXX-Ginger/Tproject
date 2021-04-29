<template>
  <div class="container">
    <div class="filter"></div>
    <div class="main">
      <p>恭喜你获得：</p>
      <div class="coupon">
        <img class="coupon-bg" src="../../../../static/img/汇率bg.png">
        <div class="content">
          <div class="discount">
            <span>100{{exchangeCoupon.currency}}=</span>
            <span>{{exchangeCoupon.discount}}人民币</span>
          </div>
          <div class="reference">
            <span>市场参考价
            </span>
            <span>{{exchangeCoupon.rate}}人民币</span>
          </div>
        </div>
      </div>
      <button @click="getNext">领取下一张</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopWindow1',
  props: ['exchangeCoupon'],
  methods: {
    getNext () {
      console.log('sss')
      this.$emit('getNext')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position: fixed
  top: 0
  z-index : 1000
  width: 100%
  height: 100%
  .filter
    height: 100%
    background :#000
    opacity : 0.5
  .main
    position: absolute
    top: 3.55rem
    display :flex
    width: 100%
    flex-direction :column
    justify-content :center
    align-items :center
    p
      font-family: PingFangSC-Medium, PingFang SC
      margin: 0 2.4rem 0.8rem 0
      font-size: 0.42rem
      color: #fff
    .coupon
      width: 100%
      display: flex
      flex-direction :column
      align-items :center
      justify-content :center
      .coupon-bg
        width: 6.12rem
        height: 7.6rem
      .content
        position: absolute
        width: 4.1rem
        height: 1.94rem
        background : #fff
        display :flex
        flex-direction :column
        align-items: center
        .discount
          text-align :center
          line-height :1.04rem
          width: 3.64rem
          height: 1.04rem
          border-bottom: 0.01rem solid #DCDCDC
          span:nth-child(1)
            font-family : PingFangSC-Medium, PingFang SC
            font-size: 0.25rem
          span:nth-child(2)
            font-family : PingFangSC-Semibold, PingFang SC
            font-size: 0.35rem
            color: #F15451
        .reference
          text-align :center
          line-height :0.6rem
          width: 3.64rem
          height: 0.6rem
          margin-left: 0.46rem
          opacity: 0.7
          span:nth-child(1)
            font-family : PingFangSC-Regular, PingFang SC
            font-size: 0.15rem
          span:nth-child(2)
            font-family : PingFangSC-Regular, PingFang SC
            font-size: 0.15rem
            text-decoration:line-through
    button
      margin-top:0.8rem
      width: 4.76rem
      height: 0.86rem
      background : #00C250
      border-radius: 0.1rem
      color: #fff
      font-family : PingFangSC-regular, PingFang SC
      font-size: 0.3rem
</style>
