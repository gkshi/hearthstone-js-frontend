<template lang="pug">
.game-table-component.flex.column.center
  // game-player(position="top")
  game-tavern()
  game-player(position="bottom")

  game-player-cards(position="top")
  game-player-cards(position="bottom")
  game-coins()
</template>

<script>
export default {
  name: 'game-table-component'
}
</script>

<style lang="scss" scoped>
.game-table-component {
  position: absolute;
  top: 5vh;
  left: 0;
  z-index: 20;
  width: 100%;
  height: 90vh;
  background: #f8f8f8;
}
</style>
