module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Mockingbird',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Mockingbird is a front-end framework for responsive layouts and easy web development' },
			{ name: 'theme-color', content: '#FFFFFF' }
    ],
    link: []
  },

	css: [
		{ src: '~assets/style.scss', lang: 'scss' }
	],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1a7dff' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },

		vendor: ['axios']
  }
}
