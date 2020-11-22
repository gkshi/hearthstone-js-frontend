export class Power {
  constructor (options = {}) {
    let mergedOptions = {}
    switch (typeof options) {
    case 'string':
      mergedOptions.alias = options
      break
    case 'number':
      mergedOptions.id = options
      break
    case 'object':
      mergedOptions = { ...mergedOptions, ...options }
      break
    default:
      break
    }
    this.id = mergedOptions.id || 0
    this.name = mergedOptions.name || ''
    this.description = mergedOptions.description || ''
  }
}

export default Power
