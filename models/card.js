import Power from '@/models/power'
import Group from '@/models/group'

export class Card {
  constructor (options = {}) {
    this.id = options.id || 0
    this.name = options.name || ''
    this.group = new Group(options.group || '')
    this.power = new Power(options.power || {})
  }
}

export default Card
