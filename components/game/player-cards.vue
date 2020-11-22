<template lang="pug">
.game-player-cards-component(:class="`-position-${position}`")
  .list.flex.center(ref="list")
    card-item(v-for="card in cards" :data="card" :key="card.id")
</template>

<script>
import { Sortable, AutoScroll } from 'sortablejs/modular/sortable.core.esm.js'

Sortable.mount(new AutoScroll())

export default {
  name: 'game-player-cards-component',
  props: {
    position: {
      type: String,
      default: 'bottom'
    }
  },
  data () {
    return {
      cards: [
        {
          id: 1,
          name: 'card1'
        },
        {
          id: 2,
          name: 'card2'
        },
        {
          id: 3,
          name: 'card3'
        },
        {
          id: 4,
          name: 'card4'
        }
      ],
      sortable: null
    }
  },
  mounted () {
    this.sortable = new Sortable(this.$refs.list, {
      //
    })
  }
}
</script>

<style lang="scss" scoped>
.game-player-cards-component {
  position: absolute;
  width: 90%;
  height: 20vh;
  background: rgba(#e4e4e8, .4);

  &.-position {
    &-top {
      top: 23vh;
    }
    &-bottom {
      bottom: 23vh;
    }
  }
}
</style>
