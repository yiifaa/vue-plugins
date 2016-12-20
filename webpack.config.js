var path = require('path')
var webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main : ['./src/main.js'],
    'sti-plugins' : ['./src/plugins.js']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename : '[id].[name].js',
    //  umd包含了对amd、commonjs、var等多种规范的支持
    libraryTarget : 'amd'
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  resolve : {
    //  除了这些类型的文件，其他类型的文件必须加上后缀名
    extensions : ['', '.js', '.vue'],
    alias : {
      'validation' : 'jquery-validation/dist'
    }
  },
  externals: {
    'vue'    : 'vue',
    'jquery': 'jquery',
    'plugins' : 'sti-plugins'
  },
  devtool: '#eval-source-map',
  plugins: [
        new HtmlWebpackPlugin({
            title : 'Webpack Hot Reload Template',
            filename : 'index.html',
            inject : 'body',
            template: 'template.ejs',
            links: [{
                href : 'node_modules/bootstrap/dist/css/bootstrap.css',
                rel : 'stylesheet'
            }],
            scripts: [
                'node_modules/vue/dist/vue.js'
            ]
        }),
    ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ])
}
