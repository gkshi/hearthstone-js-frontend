<template lang="pug">
.notification-list-component
  notification-item(v-for="(item, i) in list" :data="item" :key="i")
</template>

<script>
export default {
  computed: {
    list () {
      return this.$store.state.notifications.list
    }
  }
}
</script>

<style lang="scss" scoped>
  .notification-list-component {
    position: fixed;
    bottom: 20px;
    left: 20px;
    z-index: 1000;

    & > * {
      &:not(:last-child) {
        margin-bottom: 10px;
      }
    }
  }
</style>
