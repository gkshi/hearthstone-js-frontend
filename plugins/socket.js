const socketProxy = target => {
  if (!target) {
    return null
  }

  return new Proxy(target, {
    get (target, prop) {
      if (!target) {
        return undefined
      }
    }
  })
}

export default ({ store }, inject) => {
  inject('socket', socketProxy(store.getters.socket))
}
