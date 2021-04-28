<template>
  <div v-if="special">
    <pop-window-1 v-show="showRate" @getNext="handleShowRate"></pop-window-1>
    <pop-window-2 v-show="showGeneral" @getMore="handleShowGeneral"></pop-window-2>
  </div>
</template>

<script>
import PopWindow1 from './PopWindow1'
import PopWindow2 from './PopWindow2'

export default {
  name: 'PopWindow',
  components: {
    PopWindow1,
    PopWindow2
  },
  data () {
    return {
      getRate: false,
      getGeneral: false
    }
  },
  methods: {
    handleShowRate () {
      this.getRate = true
    },
    handleShowGeneral () {
      this.getGeneral = true
    }
  },
  computed: {
    special () {
      return !this.getRate || !this.getGeneral
    },
    showRate () {
      return !this.getRate
    },
    showGeneral () {
      return !this.getGeneral && this.getRate
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
