export default function (context) {
  console.log('middleware', context)
  context.store.dispatch('connect')
}
