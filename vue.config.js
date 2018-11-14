
module.exports = {
  devServer: {
    port: 9000,
    open: true
  },
  css: {
    modules: true
  },
  pages: {
    index: {
      // page 的入口
      entry: 'src/index/index.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    about: {
      // page 的入口
      entry: 'src/about/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'about.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index about',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'about', 'product']
    },
    product: {
      // page 的入口
      entry: 'src/product/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'product.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index product',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'product']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    subpage: 'src/index/index.js'
  },
  configureWebpack: config => {
    config.resolve = {
      extensions: ['.js', '.vue', '.json', ".css"],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
      }
    }
  },
  chainWebpack: config => {
    // GraphQL Loader
    config.module
      .rule('layout')
      .test(/\.vue$/)
      .use('layout')
        .loader('./public/js/loader.js')
        .end()
  }
}
