<template lang="pug">
common-modal.hero-pick-modal(:id="id" size="full")
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
import { mapState, mapGetters } from 'vuex'

export default {
  data () {
    return {
      id: 'hero_pick',
      picked: false
    }
  },
  computed: {
    ...mapState({
      heroes: state => state.game.heroesToPick
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

      // this.socket.on('game-hero-pick', async set => {
      //   console.log('game-hero-pick', set)
      //   await this.dispatch('game/setHeroesToPick', set)
      //   this.openModal(this.id)
      //   // await this.dispatch('game/setHeroesToPick', set)
      //   // this.app.router.push('/game')
      // })

      this.socket.on('game-start', () => {
        this.closeModal(this.id)
      })
    },

    onPick (hero) {
      console.log('onPick', hero.id)
      this.$store.dispatch('game/pickHero', hero.id)
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
