module.exports = {
  /*
  ** アプリケーションのモード - SSRしない場合に指定する
  ** ref: https://nuxtjs.org/api/configuration-mode#the-mode-property
  */
  // mode: 'spa',

  /*
  ** 共通のCSSファイルを読み込む場合はここで指定
  ** Tips: ~または@ = ソースディレクトリ
  */
  // css: ['~/assets/css/app.scss'],

  // モジュールを追加
  modules: [
    // '@nuxtjs/google-analytics'
    // オプションを渡す
    ['@nuxtjs/google-analytics', { ua: 'X1234567' }],
  ],
  // アナリティクス情報を追加
  // 'google-analytics': {
  //   id: 'UA-00000-0' // トラッキングID
  // },

  /*
  ** Headers of the page
  */
  head: {
    title: 'sample',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'keyword 1, keyword 2'},
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'fb:admins', content: 'admin id' },
      { name: 'og:site_name', content: 'og site name' },
      { name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'url' },
      { hid: 'og:title', name: 'og:title', content: 'og page title' },
      { hid: 'og:description', name: 'og:description', content: 'og description' },
      { hid: 'og:image', name: 'og:image', content: 'og image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,900'
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  // loading: '~components/loading.vue',

  /*
  ** 静的ファイルとしてビルド時の書き出し先（この場合は`/dist/app/`以下に書き出される）
  */
  generate: {
    dir: 'dist/app'
  },

  /*
  ** ルーティングのベースとなるパス
  ** ルート以外のURL（下層ページなど）の場合に指定
  */
  // router: {
  //   base: '/app/'
  // },

  /*
  ** ソースファイルのディレクトリ
  ** デフォルトからディレクトリ構成を変える場合は指定
  */
  // srcDir: 'src/',

  /*
  ** Build configuration
  */
  build: {
    analyze: true,

    /*
    ** postcss
    */
    postcss: {
      plugins: {
        'postcss-nested': {},
        'postcss-responsive-type': {},
        'autoprefixer': {
          browsers: [
            'last 2 versions',
            'ie >= 11',
            'android >= 5.0',
            'ios >= 9'
          ]
        }
      }
    },

    /*
    ** 何回も使用するライブラリ・モジュールは重複しないようにバンドルする
    */
    vendor: [
      'three'
    ],

    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

