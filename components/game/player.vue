<template lang="pug">
.game-player-component.flex.center(:class="`-position-${position}`")
  div {{ name }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'game-player-component',

  props: {
    position: {
      type: String,
      default: 'bottom'
    }
  },

  computed: {
    ...mapGetters([
      'socket'
    ]),

    player () {
      return this.$store.getters['game/player']
    },

    name () {
      return this.player?.hero.name || 'Player'
    }
  }
}
</script>

<style lang="scss" scoped>
.game-player-component {
  position: absolute;
  z-index: 50;
  width: 200px;
  height: 20vh;
  background: #e4e4e8;

  &.-position {
    &-top {
      top: 0;
    }
    &-bottom {
      bottom: 0;
    }
  }
}
</style>
