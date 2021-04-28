<template>
  <div style="width:100%">
    <div class="more">
      <div class="icon">
        <img style="width: 0.7rem; height: 0.7re; float: right" src="../../../../static/img/icon.png">
      </div>
      <p>更多商家优惠</p>
      <span class="iconfont">&#xe66e;</span>
    </div>
    <div class="info">
      <button>活动规则</button>
        <div></div>
      <button>联系客服</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Bottom'
}
</script>

<style lang="stylus" scoped>
.more
  width: 100%
  height: 1.3rem
  background: #fff
  display: flex
  align-items :center
  justify-content : space-around
  font-family: PingFangSC-Medium
  color: #252525
  .icon
    flex: 2
  p
    flex: 7
    margin-left: 0.3rem
    line-height: 1.3rem
  span
    flex: 1
    opacity: 0.3
    font-size: 0.4rem
.info
  display :flex
  justify-content :center
  align-items :center
  margin-top: 0.8rem
  margin-bottom: 1.6rem
  opacity: 0.5
  button
    padding: 0.15rem
    background :none
    font-family: PingFangSC-Light
  div
    width: 0.02rem
    height: 0.3rem
    background :#000
    opacity:0.3
</style>
