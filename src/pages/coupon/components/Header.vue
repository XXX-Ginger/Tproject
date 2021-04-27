<template>
  <div>
    <div class="header">
      <div class="header-top">
        9:41
        <div class="header-top-right">
          <span class="iconfont">&#xe62f;</span>
          <span class="iconfont" style="padding-left: 0.1rem; font-size: 0.4rem">&#xe614;</span>
          <span class="iconfont" style="padding-left: 0.1rem; font-size: 0.4rem">&#xe63e;</span>
        </div>
      </div>
      <div class="header-top" style="top: 0.8rem">
        <router-link to="/">
          <span class="iconfont header-top-left">&#xe674;</span>
        </router-link>
        <div class="header-top-middle">境外游礼包</div>
        <span class="iconfont header-top-right" style="font-size: 0.5rem">&#xe6b1;</span>
      </div>
    </div>
    <div class="brand-dist">
      <div class="brand">
        <img class="brand-pic" :src="brand.brandUrl">
      </div>
      <div class="dist">
        <img :src="dist.distPicUrl" style="width:100%; height:auto">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TicketsHeader',
  data: function () {
    return {
      dist: {
        dist: '香港',
        distPicUrl: '../../../../static/img/picture.png'
      },
      brand: {
        brandName: '屈臣氏',
        brandUrl: '../../../../static/img/brand.png'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    height: 1.6rem
    position: fixed
    z-index : 999
    width: 100%
    background-image: linear-gradient(#E0442C 100%, #E74833 0%)
    color: #fff
    display: flex
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
        color: #fff
      .header-top-middle
        display:flex
        justify-content : center
        width:2.5rem
      .header-top-right
        display:flex
        justify-content : flex-end
        width:2.5rem
  .brand-dist
    height: 3.73rem
    position: relative
    top: 1.6rem
    background-image: linear-gradient(#E0442C 100%, #E74833 0%)
    color: #fff
    display: flex
    justify-content : space-between
    .brand
      width: 3rem
      margin-left: 0.6rem
      margin-top: 0.7rem
      .brand-pic
        height:auto
        width: 100%
    .dist
      width: 4.5rem
      margin-left: 0.2rem
      margin-right: 0.2rem
      margin-top: 0.1rem
      opacity: 0.5
</style>
