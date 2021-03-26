const defaultNotification = () => ({
  id: Math.random().toFixed(7).slice(2),
  title: '',
  message: '',
  type: 'default'
})

export const state = () => ({
  list: []
})

export const actions = {
  show ({ commit, state }, payload) {
    if (!payload) {
      return
    }
    if (typeof payload === 'string') {
      payload = {
        ...defaultNotification(),
        message: payload
      }
    }
    commit('LIST_UPDATE', [...state.list, payload])
  },

  hide ({ commit, state, dispatch }, id) {
    if (!id) {
      return dispatch('hideAll')
    }
    commit('LIST_UPDATE', state.list.filter(i => i !== id))
  },

  hideLast ({ commit, state }) {
    commit('LIST_UPDATE', state.list.slice(0, -1))
  },

  hideAll ({ commit }) {
    commit('LIST_UPDATE', [])
  }
}

export const mutations = {
  LIST_UPDATE (state, list = []) {
    state.list = list
  }
}
