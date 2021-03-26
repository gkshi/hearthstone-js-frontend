export const state = () => ({
  server: {},
  heroesToPick: [],
  players: []
})

export const actions = {
  reconnect ({ commit }, gameState) {
    commit('SERVER_UPDATE', gameState)
    commit('PLAYERS_UPDATE', gameState.players)
  },

  setHeroesToPick ({ commit }, set) {
    commit('HEROES_TO_PICK_UPDATE', set)
  },

  pickHero ({ rootGetters }, heroId) {
    rootGetters.socket.emit('game-player-picked-hero', heroId)
  },

  onGameStart ({ commit }, players) {
    commit('PLAYERS_UPDATE', players)
  }
}

export const mutations = {
  HEROES_TO_PICK_UPDATE (state, set) {
    state.heroesToPick = set
  },

  SERVER_UPDATE (state, server) {
    state.server = server
  },

  PLAYERS_UPDATE (state, players) {
    state.players = players
  }
}

export const getters = {
  player: state => {
    if (!state.players) {
      return undefined
    }

    const sessionId = sessionStorage.getItem('session-id') || ''
    return state.players.find(i => i.sessionId === +sessionId)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
