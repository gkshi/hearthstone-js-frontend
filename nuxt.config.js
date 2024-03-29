require('dotenv').config({
  path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env'
})

export default {
  // Server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Server config
  server: {
    port: process.env.NUXT_ENV_PORT || '3000',
    host: process.env.NUXT_ENV_HOST || 'localhost',
    timing: false
  },

  // router
  router: {
    middleware: ['socket']
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'nuxt-clean-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Customize the progress-bar color
  loading: { color: 'blue' },

  // Global resources for components
  styleResources: {
    scss: [
      '@/assets/scss/variables/_index.scss',
      '@/assets/scss/_mixins.scss',
      '@/assets/scss/_extends.scss'
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/index.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    'node_modules/vue-common-components',
    '@/directives/outside',
    '@/plugins/session-id'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: [
    '~/components', // shortcut to { path: '~/components' }
    { path: '~/components/card/', prefix: 'card' },
    { path: '~/components/game/', prefix: 'game' },
    { path: '~/components/hero/', prefix: 'hero' },
    { path: '~/components/icons/', prefix: 'icon' },
    { path: '~/components/modals/', prefix: 'modal' },
    { path: '~/components/notification/', prefix: 'notification' }
  ],

  commonComponents: {
    components: ['button']
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend (config, ctx) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}
