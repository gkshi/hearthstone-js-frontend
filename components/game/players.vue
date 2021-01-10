<template lang="pug">
.game-layers-component.flex.column.center
  hero-in-bar(v-for="player in heroes" :data="player.hero" :key="player.hero.id")
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'game-layers-component',
  data () {
    return {
      players: []
    }
  },
  computed: {
    ...mapState({
      heroes: state => state.game.server.players
    }),
    ...mapGetters([
      'socket'
    ])
  },
  mounted () {
    this.registerEvents()
  },
  methods: {
    registerEvents () {
      if (!this.socket) {
        return
      }

      this.socket.on('game-start', players => {
        this.players = players
      })
    }
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
