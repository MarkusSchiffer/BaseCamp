export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'pastyme',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/createCommunity.js',
    '~/plugins/getAllUsers.js',
    '~/plugins/firebase.js',
    '~/plugins/getGroupsInCommunity.js',
    '~/plugins/getCommunityInfo.js',
    '~/plugins/createGroup.js',
    '~/plugins/updateGroupLists.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/firebase',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/content'
  ],
   firebase: {
       config: {
       apiKey: "AIzaSyBXLnV1fHMqdBmzCs1kuwwhu4bmPW8lFLI",
       authDomain: "basecamp-70de0.firebaseapp.com",
       databaseURL: "https://basecamp-70de0.firebaseio.com",
       projectId: "basecamp-70de0",
       storageBucket: "basecamp-70de0.appspot.com",
       messagingSenderId: "890594893991",
       appId: "1:890594893991:web:0fde4595dcb3f29df23b82",
       measurementId: "G-7WS9W9ZF0W"
     },
     services: {
      auth: true,
      firestore: true,
      functions: true,
      storage: true,
      realtimeDb: true,
      messaging: true,
      performance: true,
      analytics: true,
      remoteConfig: true
     }
   },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
