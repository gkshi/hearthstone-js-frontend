<template lang="pug">
  .page.connect
    .wrapper
      h1 connect page

      section
        div finding a game...
        div {{ timer.value }} sec
</template>

<script>
import io from 'socket.io-client'

export default {
  data () {
    return {
      timer: {
        interval: null,
        value: 0
      },
      user: ''
    }
  },
  mounted () {
    this.connect()
    this.startTimer()
  },
  methods: {
    connect () {
      // this.$store.dispatch('setSocket', null)
      const socket = io(`//${process.env.NUXT_ENV_BACKEND_HOST}:${process.env.NUXT_ENV_BACKEND_PORT}/`, { query: this.user })
      window.socket = socket

      socket.on('connect', () => {
        console.log('connect: socket id', socket.id)
      })

      socket.on('game-init', () => {
        console.log('game-init')
      })

      socket.on('game-preparing', () => {
        console.log('game-preparing')
        this.$router.push('/game')
      })

      socket.on('custom-server-event', payload => {
        console.log('custom-server-event', payload)
      })
    },
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
