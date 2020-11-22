// import groupSet from '@/config/groups'

export class Group {
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
    this.id = mergedOptions.id || ''
    this.alias = mergedOptions.alias || ''
    this.name = mergedOptions.name || ''
  }
}

export default Group
