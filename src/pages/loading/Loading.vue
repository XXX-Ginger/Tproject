<template>
  <div class="loading">
    <div class="icon"></div>
    <div class="title">境外游礼包</div>
    <div class="container">
      <div class="dot" style="--i:0;"></div>
      <div class="dot" style="--i:1;"></div>
      <div class="dot" style="--i:2;"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style lang="stylus" scoped>
  .loading
    margin-top: 0.6rem
    width: 7.5rem
    display : flex
    flex-direction :column
    .icon
      width: 0.8rem
      height: 0.8rem
      border-radius: 50%
      background : #EF5350
      margin: auto
    .title
      margin: 0.2rem 0 0.2rem 0
      font-family : PingFangSC-Medium, PingFang SC
      text-align: center
    .container
      margin: auto
      display :flex
      justify-content :space-between
      width: 0.7rem
      .dot
        width: 0.15rem
        height: 0.15rem
        border-radius: 50%
        background : #000
        animation: loadDot 2.1s infinite steps(1,end)
        animation-delay : calc(0.7s * var(--i))
  @keyframes loadDot
    0%,100%{
      opacity : 50%
    }
    33%{
      opacity : 20%
    }
</style>
