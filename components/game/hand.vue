<template lang="pug">
.game-hand-component
  div hand
</template>

<script>
export default {
  name: 'game-hand-component'
}
</script>

<style lang="scss" scoped>
.game-hand-component {
  position: fixed;
  bottom: 2vh;
  left: 50%;
  z-index: 20;
  width: 60%;
  height: 160px;
  transform: translate(-50%, 0);
  background: #eeeef4;
}
</style>
