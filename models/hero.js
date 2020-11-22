import Power from '@/models/power'
import Group from '@/models/group'

export class Hero {
  constructor (options = {}) {
    let mergedOptions = {}
    switch (typeof options) {
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
    this.group = new Group(mergedOptions.group || null)
    this.power = new Power(mergedOptions.power || null)
  }
}

export default Hero
