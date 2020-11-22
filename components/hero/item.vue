<template lang="pug">
.hero-component(v-outside="close")
  .flex.column.center(@click="open")
    .image
    .name {{ data.name }}

  .button(v-show="isOpened")
    common-button(@click="$emit('pick', data)") pick
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    pickable: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    open () {
      this.isOpened = true
    },
    close () {
      this.isOpened = false
    }
  }
}
</script>

<style lang="scss" scoped>
.hero-component {
  .image {
    width: 30vh;
    height: 40vh;
    max-width: 160px;
    max-height: 200px;
    border-radius: 100px 100px 120px 120px;
    background: $color-bg;
  }
  .name {
    margin-top: 4vh;
    color: $color-text-light;
  }
}
</style>
