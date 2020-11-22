import random from '@/helpers/random'

import Hero from '@/models/hero'
import Group from '@/models/group'
import cleanGroupSet from '@/config/groups'
import cleanHeroSet from '@/config/heroes'
import cleanGameConfig from '@/config/game'

export const state = () => ({
  status: 'not-ready', // not-ready, ready, hero-pick, preparing, tavern, battle, finished
  config: {},
  groups: [],
  heroes: {
    pick: [],
    all: []
  },
  cards: [],
  turn: 0
})

export const actions = {
  init ({ dispatch, getters }) {
    dispatch('changeStatus', 'loading')

    dispatch('updateConfig', cleanGameConfig)
    dispatch('createGroupSet')
    dispatch('changeStatus', 'ready')

    console.log('availableGroups', getters.availableGroups.map(i => i.alias))
    console.log('unavailableGroups', getters.unavailableGroups.map(i => i.alias))
  },

  reset ({ dispatch }) {
    dispatch('changeStatus', 'not-ready')
    dispatch('init')
  },

  updateConfig ({ commit }, config) {
    commit('CONFIG_UPDATE', config)
  },

  createGroupSet ({ commit, state }) {
    console.log('createGroupSet')
    const set = []
    // Генерим массив с группами длиной, взятой из конфига
    const groups = random(cleanGroupSet, state.config.groups.number)
    for (const config of groups) {
      const group = new Group(config)
      set.push(group)
    }
    commit('GROUPS_UPDATE', set)
  },

  pickHero ({ commit, dispatch }) {
    dispatch('changeStatus', 'preparing')
    dispatch('createHeroSet')
    commit('TURN_NEXT')
    // dispatch('')
  },

  createHeroSet ({ commit, state }) {
    const set = []
    // Генерим массив с героями длиной, взятой из конфига

    const heroes = random(cleanHeroSet, state.config.heroes.number)
    for (const config of heroes) {
      const hero = new Hero(config)
      set.push(hero)
    }
    commit('HEROES_UPDATE', {
      all: set
    })
  },

  createPickSet ({ commit, state, getters }) {
    const set = []
    // Генерим массив с героями длиной, взятой из конфига
    console.log('all heroes', cleanHeroSet.map(i => i.name))
    const availableHeroes = getters.availableHeroes
    console.log('availableHeroes', availableHeroes.map(i => i.name))
    const heroes = random(cleanHeroSet, state.config.heroes.pick)
    console.log('chosenHeroes', heroes.map(i => i.name))
    for (const config of heroes) {
      const hero = new Hero(config)
      set.push(hero)
    }
    commit('HEROES_UPDATE', {
      pick: set
    })
  },

  prepareGame ({ dispatch }) {
    dispatch('changeStatus', 'hero-pick')
    dispatch('createPickSet')
  },

  changeStatus ({ commit }, status) {
    commit('STATUS_UPDATE', status)
  }
}

export const mutations = {
  CONFIG_UPDATE (state, config) {
    state.config = { ...state.config, ...config }
  },
  GROUPS_UPDATE (state, groups) {
    state.groups = groups
  },
  HEROES_UPDATE (state, heroes) {
    state.heroes = { ...state.heroes, ...heroes }
  },
  STATUS_UPDATE (state, status) {
    state.status = status
  },
  TURN_NEXT (state) {
    state.turn++
  }
}

export const getters = {
  availableGroups: state => {
    return state.groups
  },
  unavailableGroups: (state, getters) => {
    const available = getters.availableGroups.map(i => i.alias)
    const all = [...cleanGroupSet]
    const unavailable = []
    all.forEach(group => {
      if (!available.includes(group.alias)) {
        unavailable.push(new Group(group))
      }
    })
    return unavailable
  },
  availableHeroes: (state, getters) => {
    let arr = [...cleanHeroSet]
    const stopList = getters.unavailableGroups.map(i => i.alias)
    arr = arr.filter(i => {
      return !stopList.includes(i?.group)
    })
    return arr
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
