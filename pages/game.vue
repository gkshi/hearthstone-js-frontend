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
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      game: state => state.game
    })
  },
  watch: {
    'game.status' () {
      this.onGameStatusChange()
    }
  },
  mounted () {
    this.$store.dispatch('game/init')
  },
  methods: {
    onGameStatusChange () {
      console.log('onGameStatusChange', this.game.status)
      switch (this.game.status) {
      case 'ready':
        this.$store.dispatch('game/prepareGame')
        this.openModal('hero_pick')
        break
      case 'preparing':
        // this.closeModal('hero_pick')
        break
      default:
        break
      }
    }
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
