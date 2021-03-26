<template lang="pug">
.notification-item(v-if="data" :class="classList")
  .close(@click="hide")
    icon-cross

  .title {{ title }}
  .message {{ data.message }}
</template>

<script>
export default {
  props: {
    data: Object
  },

  computed: {
    classList () {
      return `-type-${this.data.type}`
    },

    title () {
      return this.data.title || this.data.type
    }
  },

  methods: {
    hide () {
      this.$store.dispatch('notifications/hide', this.id)
    }
  }
}
</script>

<style lang="scss" scoped>
  .notification-item {
    position: relative;
    z-index: 1;
    width: 240px;
    padding: 10px 10px;
    background: $color-content-bg;
    border-radius: $border-radius-small;

    .close {
      position: absolute;
      top: 6px;
      right: 4px;
      z-index: 1;
      cursor: pointer;

      svg {
        width: 8px;
        height: 8px;
      }
    }

    .title {
      margin-bottom: 5px;
    }

    .message {
      font-size: 13px;
      line-height: 15px;
      // font-weight: 500;
    }

    &.-type {
      &-error {}
    }
  }
</style>
