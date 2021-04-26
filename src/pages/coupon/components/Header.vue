<template>
    <div>
      <div class="header">
        <div class="header-top">
          <div>9:41</div>
          <div class="header-top-right">
            <span class="iconfont">&#xe62f;</span>
            <span class="iconfont" style="padding-left: 0.1rem; font-size: 0.4rem">&#xe614;</span>
            <span class="iconfont" style="padding-left: 0.1rem; font-size: 0.4rem">&#xe63e;</span>
          </div>
        </div>
        <div class="header-top">
          <span class="iconfont header-top-left">&#xe674;</span>
          <div class="header-top-middle">境外游礼包</div>
          <div class="iconfont header-top-right" style="font-size: 0.5rem">
            &#xe6b1;
          </div>
        </div>
        <div class="header-bottom">
          <div class="brand">
            <img class="brand-pic" src="../../../../static/img/brand.png">
          </div>
          <div class="picture">
            <img src="../../../../static/img/picture.png" style="width:100%; height:auto">
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TicketsHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    display: flex
    height: 5.33rem
    width: 7.5rem
    background-image: linear-gradient(#E0442C 100%, #E74833 0%)
    color: #fff
    flex-direction: column
    .header-top
      margin: 0rem 0.2rem 0rem 0.2rem
      height: 0.8rem
      line-height: 0.8rem
      text-align: center
      font-size: 0.35rem
      display: flex
      flex-direction: row
      justify-content : space-between
      .header-top-left
        display:flex
        justify-content : flex-start
        width:2.5rem
      .header-top-middle
        display:flex
        justify-content : center
        width:2.5rem
      .header-top-right
        display:flex
        justify-content : flex-end
        width:2.5rem
    .header-bottom
      display: flex
      flex-direction: row
      justify-content : space-between
      .brand
        width: 3rem
        margin-left: 0.6rem
        margin-top: 0.7rem
        .brand-pic
          height:auto
          width: 100%
      .picture
        width: 4.5rem
        margin-left: 0.2rem
        margin-right: 0.2rem
        margin-top: 0.1rem
        opacity: 0.5
</style>
