<template>
  <div class="store-coupon">
    <div class="coupon" v-for="item of storeCouponList" :key="item.id">
      <img class="picture" src="/static/storeCoupon/store.png">
      <div class="content">
        <p>{{item.brand}}</p>
        <p>{{item.title}}</p>
        <div class="discount">
          <div v-if="item.discountValue">
            <span>{{item.discountValue}}</span>
            {{item.discountUnit}}
          </div>
          <img class="discountImg" v-else-if="item.discountImg" :src="item.discountImg">
        </div>
        <div class="limit">
          {{item.limit}}
          <span v-if="item.decoLimit">{{item.decoLimit}}</span>
        </div>
        <router-link tag="button" class="button" to="/use">使用优惠</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CouponFour',
  props: ['storeCouponList']
}
</script>

<style lang="stylus" scoped>
.store-coupon
  display: flex
  justify-content : space-around
  flex-wrap: wrap
  margin: 0rem 0.3rem 1.2rem 0.3rem
  .coupon
    position: relative
    width: 3.39rem
    height: auto
    .picture
      width: 100%
    .content
      position: absolute
      top: 0.4rem
      width: 100%
      display: flex
      flex-direction :column
      align-items :center
      font-family: PingFangSC-Medium
      text-align: center
      p
        font-size: 0.3rem
        margin: 0.05rem
      .discount
        width: 2.5rem
        height: 0.8rem
        margin-top: 0.3rem
        color: #F15451
        span
          font-family: Helvetica
          font-size: 0.8rem
        .discountImg
          height: 100%
      .limit
        margin-top: 0.1rem
        color: #F15451
        font-family: PingFangSC-Regular
        span:nth-child(1)
          text-decoration : line-through
      .button
        margin-top: 0.6rem
        width: 1.5rem
        height: 0.6rem
        border-radius: 0.1rem
        background: #F15451
        color: #fff
        font-family: PingFangSC-Regular
</style>
