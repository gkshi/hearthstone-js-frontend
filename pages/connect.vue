<template lang="pug">
  .page.connect
    .wrapper
      h1 connect page

      section
        div finding a game...
        div {{ timer.value }} sec
</template>

<script>
export default {
  data () {
    return {
      timer: {
        interval: null,
        value: 0
      }
    }
  },
  mounted () {
    // this.connect()
    this.$store.dispatch('findGame')
    this.startTimer()
  },
  beforeDestroy () {
    clearInterval(this.timer.interval)
  },
  methods: {
    // connect () {
    //   this.startTimer()
    //   this.$store.dispatch('findGame')
    //   // this.$store.dispatch('connect')
    // },
    startTimer () {
      this.timer.interval = setInterval(() => {
        this.timer.value++
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>
.page.connect {
  //
}
</style>
