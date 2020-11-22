<template lang="pug">
.game-tavern-component.flex.center
  div tavern
</template>

<script>
export default {
  name: 'game-tavern-component'
}
</script>

<style lang="scss" scoped>
.game-tavern-component {
  position: absolute;
  top: 0;
  z-index: 50;
  width: 200px;
  height: 20vh;
  background: #e4e4e8;
}
</style>
