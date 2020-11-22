<template lang="pug">
.game-admin-component
  // div
    div status: {{ game.status }}
    div turn: {{ game.turn }}
  // div
    a(href="#" @click.prevent="init") init
  // div
    a(href="#" @click.prevent="reset") reset
  div
    a(href="/") disconnect
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      game: state => state.game
    })
  },
  methods: {
    init () {
      this.$store.dispatch('game/init')
    },
    reset () {
      this.$store.dispatch('game/reset')
    }
  }
}
</script>

<style lang="scss" scoped>
.game-admin-component {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  background: darken($color-bg, 4%);
  padding: 20px;
}
</style>
