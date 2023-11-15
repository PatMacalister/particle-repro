export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'particle-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [
        "@babel/plugin-transform-classes",
        "@babel/plugin-transform-nullish-coalescing-operator",
        "@babel/plugin-transform-logical-assignment-operators",
      ]
    }
  }

  // the following doesn't work, because only plugins already included in the preset-env (for which the babel-preset-app is a wrapper) can be added to the include property:
  // build: {
  //   babel: {
  //     presets() {
  //       return [
  //         [
  //           "@nuxt/babel-preset-app",
  //           {
  //             include: [
  //               '@babel/plugin-transform-logical-assignment-operators'
  //             ]
  //           }
  //         ]
  //       ]
  //     }
  //   }
  // },
}
