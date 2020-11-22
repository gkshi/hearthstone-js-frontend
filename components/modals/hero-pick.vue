<template lang="pug">
common-modal.hero-pick-modal(id="hero_pick" size="full")
  .text
    div(v-if="picked") Waiting for other players...
    div(v-else) Pick your hero:

  .heroes.flex.a-center
    hero-item(
      v-for="hero in heroes"
      :data="hero"
      :key="hero.id"
      pickable
      @pick="onPick")
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      picked: false
    }
  },
  computed: {
    ...mapState({
      heroes: state => state.game.heroes.pick
    })
  },
  mounted () {
    console.log('window.socket', window.socket)
    window.socket.on('game-start', players => {
      this.closeModal('hero_pick')
    })
  },
  methods: {
    onPick (hero) {
      console.log('onPick', hero.id)
      this.$store.dispatch('game/pickHero', hero.id)
      window.socket.emit('player-hero-pick', hero)
      this.picked = true
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-pick-modal {
  padding: 0;

  .text {
    position: absolute;
    top: 10vh;
    left: 50%;
    transform: translate(-50%, 0);
    color: #fff;
  }

  .heroes {
    position: absolute;
    top: calc(50% + 2vh);
    left: 50%;
    z-index: 1;
    transform: translate(-50%, -50%);

    & > * {
      width: 38vh;
      min-width: 180px;
    }
  }
}
</style>
