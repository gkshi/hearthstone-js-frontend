<template lang="pug">
.game-player-component.flex.center(:class="`-position-${position}`")
  div {{ hero.name || 'player' }}
</template>

<script>
export default {
  name: 'game-player-component',
  props: {
    position: {
      type: String,
      default: 'bottom'
    }
  },
  data () {
    return {
      hero: {}
    }
  },
  mounted () {
    window.socket.on('game-start', players => {
      const player = players.find(i => i.socket === window.socket.id) || {}
      this.hero = player.hero
    })
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
