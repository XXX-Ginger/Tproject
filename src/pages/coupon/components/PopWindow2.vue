<template>
    <div class="container">
      <div class="filter"></div>
      <div class="main">
        <p>恭喜你获得：</p>
        <div class="coupon">
          <img class="coupon-bg" src="../../../../static/img/通用bg.png">
          <div class="content">
            <div class="scroll">
              <div class="discount">
                <span :coupon-value="generalCoupon.couponValue" :value-after="valueAfter">{{valueBefore}}</span>
              </div>
              <div class="unit">
              元
              </div>
            </div>
            <img class="icon" :src="iconUrl">
          </div>
        </div>
        <button @click="getMore">领取更多</button>
      </div>
    </div>
</template>

<script>
export default {
  name: 'PopWindow2',
  props: ['generalCoupon'],
  data () {
    return {
      show: true,
      imgList: ['../../../../static/img/icon1.png', '../../../../static/img/icon2.png', '../../../../static/img/icon3.png', '../../../../static/img/icon4.png', '../../../../static/img/icon5.png']
    }
  },
  methods: {
    getMore () {
      this.$emit('getMore')
    }
  },
  computed: {
    iconUrl () {
      let idx = 4 - this.generalCoupon.waitingNum
      return this.imgList[idx]
    },
    valueBefore () {
      return this.generalCoupon.couponValue + 1
    },
    valueAfter () {
      return this.generalCoupon.couponValue + 2
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
          top: 3.6rem
          width: 4.1rem
          height: 1.94rem
          display :flex
          flex-direction :column
          .scroll
            display :flex
            justify-content :center
            align-items :center
            .discount
              width: 1.2rem
              height: 1.8rem
              background : #1E8F4C
              text-align:center
              overflow: hidden
              margin-left: 0.8rem
              span
                display: block
                margin-top:0.3rem
                color: #fff
                font-family: PingFangSC-Meduim, PingFang SC
                font-size: 1.4rem
                height : 1.5rem
                animation: transNum 2s ease-out
              span::before
                content: attr(coupon-value)
                display: block
              span::after
                content: attr(value-after)
                display: block
            .unit
              color: #fff
              font-family: PingFangSC-Semibold, PingFang SC
              font-size: 0.4rem
              margin: 0.5rem 0 0 0.3rem
          .icon
            width: 4.1rem
            height: 0.94rem
            margin-top: 0.2rem
      button
        margin-top:0.8rem
        width: 4.76rem
        height: 0.86rem
        background : #00C250
        border-radius: 0.1rem
        color: #fff
        font-family : PingFangSC-regular, PingFang SC
        font-size: 0.3rem
        animation: showButton 2s steps(1,end)
  @keyframes transNum
    from{
      transform: translateY(-3.6rem)
    }
    to{
      transform: translateY(0rem)
    }
  @keyframes showButton
    from{
      opacity: 0
    }
    to{
      opacity: 1
    }
</style>
