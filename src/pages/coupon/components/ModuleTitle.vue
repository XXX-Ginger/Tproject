<template>
  <div class="title">
    <div class="title-left">
      <div class="rec"></div>
      <div class="title1">{{title}}</div>
    </div>
    <div class="title2">微信支付自动抵扣</div>
  </div>
</template>

<script>
export default {
  name: 'ModuleTitle',
  props: ['title']
}
</script>

<style lang="stylus" scoped>
.title
  width: 6.6rem
  height: 1.3rem
  margin: 0rem 0.3rem
  display: flex
  flex-direction: row
  align-items : center
  justify-content : space-between
  .title-left
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
</style>
