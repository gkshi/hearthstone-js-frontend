export const state = () => ({
  list: []
})

export const actions = {
  open ({ commit, state }, id) {
    if (!id) {
      return
    }
    commit('LIST_UPDATE', [...state.list, id])
  },

  close ({ commit, state, dispatch }, id) {
    if (!id) {
      return dispatch('closeAll')
    }
    commit('LIST_UPDATE', state.list.filter(i => i !== id))
  },

  closeLast ({ commit, state }) {
    commit('LIST_UPDATE', state.list.slice(0, -1))
  },

  closeAll ({ commit }) {
    commit('LIST_UPDATE', [])
  }
}

export const mutations = {
  LIST_UPDATE (state, list = []) {
    state.list = list
  }
}
