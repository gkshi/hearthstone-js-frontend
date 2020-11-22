<template lang="pug">
  .page.list
    .wrapper
      h1 list page
      div
        a(href="#" @click.prevent="init") init

      div
        div Heroes:
        div(v-for="hero in heroes" :key="hero.id")
          div {{ hero.name }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      heroes: state => state.game.heroes
    })
  },
  methods: {
    init () {
      this.$store.dispatch('game/init')
    }
  }
}
</script>

<style lang="scss" scoped>
.page.list {
  //
}
</style>
