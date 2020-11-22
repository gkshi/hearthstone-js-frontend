<template lang="pug">
.hero-in-bar-component
  .name {{ data.name }}
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-in-bar-component {
  width: 10vh;
  height: 10vh;
  background: #bbb;

  .name {
    font-size: 12px;
    line-height: 17px;
    font-weight: $font-weight-semibold;
  }
}
</style>
