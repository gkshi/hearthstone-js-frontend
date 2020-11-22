<template lang="pug">
.game-coins-component.flex.center
  div coins
</template>

<script>
export default {
  name: 'game-coins-component'
}
</script>

<style lang="scss" scoped>
.game-coins-component {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 30;
  width: 250px;
  height: 40px;
  background: #eeeef5;
}
</style>
