// Modules
import io from 'socket.io-client'
import game from './game'

export const modules = {
  game
}

export const state = () => ({
  socket: null
})

export const actions = {
  connect ({ commit, dispatch }) {
    if (window.socket) {
      return
    }

    const sessionId = sessionStorage.getItem('session-id') || ''
    console.log('--- connect ---')
    console.log('sessionId', sessionId)
    const socket = io(
      `//${process.env.NUXT_ENV_BACKEND_HOST}:${process.env.NUXT_ENV_BACKEND_PORT}/`,
      { query: { sessionId } })

    setTimeout(() => {
      if (!socket.connected) {
        dispatch('notifications/show', {
          title: 'Server error',
          message: 'Server doesn\'t response at the moment',
          type: 'error'
        }, { root: true })
      }
    }, 1000)

    // console.log('!socket', socket)
    commit('SOCKET_UPDATE', socket)
    // window.socket = socket

    socket.on('connect', () => {
      console.log('connect: socket id', socket.id)
    })

    socket.on('disconnect', () => {
      console.log('disconnect: socket id')
      dispatch('notifications/show', {
        title: 'Disconnect',
        message: 'No more response from the server',
        type: 'error'
      }, { root: true })
    })

    socket.on('reconnect', async gameState => {
      console.log('reconnect:', gameState)
      await this.dispatch('game/reconnect', gameState)
      this.app.router.push('/game')
    })

    socket.on('session-id', sessionId => {
      console.log('session-id:', sessionId)
      sessionStorage.setItem('session-id', sessionId)
    })

    socket.on('reconnect', player => {
      console.log('reconnected: socket id', socket.id)
    })

    socket.on('game-start', async players => {
      console.log('game-start', players)
      await this.dispatch('game/onGameStart', players)
    })

    socket.on('event', payload => {
      console.log('event', payload)
    })

    socket.on('game-init', () => {
      console.log('game-init')
    })

    socket.on('game-status', status => {
      switch (status) {
      case 'preparing':
        this.app.router.push('/game')
        break
      default:
        break
      }
    })

    socket.on('game-hero-pick', async set => {
      console.log('game-hero-pick', set)
      await this.dispatch('game/setHeroesToPick', set)
      this.app.router.push('/game')
    })
  },

  findGame () {
    window.socket.emit('find-game')
  }
}

export const mutations = {
  SOCKET_UPDATE (state, socket) {
    // state.socket = socket
    window.socket = socket
  }
}

export const getters = {
  socket: () => window.socket
}
