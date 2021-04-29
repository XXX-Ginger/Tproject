<template>
  <div style="width:100%">
    <router-link type="div" class="more" to="/more">
      <div class="icon">
        <img style="width: 0.7rem; height: 0.7re; float: right" src="../../../../static/img/icon.png">
      </div>
      <p>更多商家优惠</p>
      <span class="iconfont">&#xe66e;</span>
    </router-link>
    <div class="info">
      <router-link type="button" class="button" to="/rule">活动规则</router-link>
        <div></div>
      <router-link type="button" class="button" to="/service">联系客服</router-link>
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
  .button
    color: #000
    padding: 0.15rem
    background :none
    font-family: PingFangSC-Light
  div
    width: 0.02rem
    height: 0.3rem
    background :#000
    opacity:0.3
</style>
