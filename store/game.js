export const state = () => ({
  server: {},
  heroesToPick: []
})

export const actions = {
  updateConfig ({ commit }, config) {
    commit('CONFIG_UPDATE', config)
  },

  reconnect ({ commit }, gameState) {
    commit('SERVER_UPDATE', gameState)
  },

  pickHero ({ rootGetters }, heroId) {
    rootGetters.socket.emit('game-player-picked-hero', heroId)
  },

  setHeroesToPick ({ commit }, set) {
    commit('HEROES_TO_PICK_UPDATE', set)
  }
}

export const mutations = {
  HEROES_TO_PICK_UPDATE (state, set) {
    state.heroesToPick = set
  },

  SERVER_UPDATE (state, server) {
    state.server = server
  }
}

export const getters = {
  player: state => {
    if (!state.server.players) {
      return undefined
    }

    const sessionId = sessionStorage.getItem('session-id') || ''
    return state.server.players.find(i => i.sessionId === +sessionId)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
