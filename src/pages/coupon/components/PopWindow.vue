<template>
  <div>
    <pop-window-1 :exchangeCoupon="exchangeCoupon" v-show="showRate" @getNext="handleShowRate"></pop-window-1>
    <pop-window-2 :generalCoupon="generalCoupon" v-show="showGeneral" @getMore="handleShowGeneral"></pop-window-2>
  </div>
</template>

<script>
import PopWindow1 from './PopWindow1'
import PopWindow2 from './PopWindow2'

export default {
  name: 'PopWindow',
  props: ['exchangeCoupon', 'generalCoupon', 'getRate', 'getGeneral'],
  components: {
    PopWindow1,
    PopWindow2
  },
  data () {
    return {
      changeGetRate: this.getRate,
      changeGetGeneral: this.getGeneral
    }
  },
  methods: {
    handleShowRate () {
      this.changeGetRate = true
      this.$emit('getRate', this.changeGetRate)
    },
    handleShowGeneral () {
      this.changeGetGeneral = true
      this.$emit('getGeneral', this.changeGetGeneral)
    }
  },
  computed: {
    showRate () {
      return !this.changeGetRate
    },
    showGeneral () {
      return !this.changeGetGeneral && this.changeGetRate
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
