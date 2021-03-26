<template lang="pug">
  .page.index
    .wrapper
      h1 Index page
      div
        nuxt-link(to="/connect") Find a game

      div
        div online: {{ data.clients || 0 }}
</template>

<script>
export default {
  data () {
    return {
      data: {}
    }
  },

  mounted () {
    window.socket.emit('clients-status')
    window.socket.on('clients-status', data => {
      console.log('clients-status', data)
      this.data = data
    })
  }
}
</script>

<style lang="scss" scoped>
.page.index {
  //
}
</style>
