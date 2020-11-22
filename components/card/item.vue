<template lang="pug">
.card-item-component.flex.center
  div card &#35;{{ data.id }}
</template>

<script>
export default {
  name: 'card-item-component',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
.card-item-component {
  width: 16vh;
  height: 20vh;
  margin: 0 1vh;
  border-radius: 100px 100px 120px 120px;
  background: #ccc;
}
</style>
