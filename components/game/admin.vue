<template lang="pug">
.game-admin-component
  // div
    div status: {{ game.status }}
    div turn: {{ game.turn }}
  div
    a(href="/") disconnect
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      game: state => state.game.server
    })
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
