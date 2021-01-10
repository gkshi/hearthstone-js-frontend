export default ({ store }, inject) => {
  inject('sessionId', sessionStorage.getItem('session-id') || '')
}
