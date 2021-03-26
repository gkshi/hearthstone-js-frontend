<template lang="pug">
  .page.game
    .wrapper
      div deck
      .cards
        .card(v-for="(card, i) in cards" :key="i")
          div {{ card }}
</template>

<script>
export default {
  data () {
    return {
      cards: []
    }
  },
  computed: {
    socket () {
      return this.$store.getters.socket
    }
  },

  async mounted () {
    this.cards = await this.$axios.get('http://localhost:3002/game/deck', {})
      .then(res => res.data).catch(() => [])
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
