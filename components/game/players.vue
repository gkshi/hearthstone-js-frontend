<template lang="pug">
.game-layers-component.flex.column.center
  hero-in-bar(v-for="player in players" :data="player.hero" :key="player.hero.id")
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'game-layers-component',
  computed: {
    ...mapState({
      players: state => state.game.players
    })
  }
}
</script>

<style lang="scss" scoped>
.game-layers-component {
  position: absolute;
  top: 5vh;
  left: -10px;
  width: 100px;
  height: 90vh;
  background: #f3f3f7;
  z-index: 20;
  transform: translate(-100%, 0);

  & > * {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
</style>
