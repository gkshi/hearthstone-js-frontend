<template lang="pug">
  .page.game
    .wrapper
      game-admin()
      game-players()
      game-table()
      // game-hand()

    modal-hero-pick
</template>

<script>
export default {
  computed: {
    socket () {
      return this.$store.getters.socket
    }
  },

  mounted () {
    // console.log('this.$socket', this.$socket)
    console.log('------')
    console.log('this.socket', this.socket)
    console.log('window.socket', window.socket)
    if (!window.socket) {
      this.$router.push('/connect')
    }
    // console.log('window.socket', window.socket)

    if (this.$store.state.game.heroesToPick.length) {
      // this.openModal('hero_pick')
      // this.$modals.open('hero_pick')
      this.$store.dispatch('modals/open', 'hero_pick')
    }

    // this.openModal('hero_pick')
  }
}
</script>

<style lang="scss" scoped>
.page.game {
  height: 100vh;
  overflow: hidden;

  .wrapper {
    position: relative;
    height: 100%;
  }
}
</style>
