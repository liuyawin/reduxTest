var path = require('path');
var webpack = require('webpack');
var sassLoader = 'style!css!sass?sourceMap=true&sourceMapContents=true';

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch', //added after upgrade
    'webpack-hot-middleware/client',
    './src/app.js',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    chunkFilename: "[name].js",
    publicPath: '/static/',
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: [
        path.resolve(__dirname, 'src'),
      ],
      loader: 'babel-loader', //added after upgrade
    },
    {
      test: /\.css$/,
      include: [
        path.resolve(__dirname, 'css'),
      ],
      loader: sassLoader
    },
    {
      test: /\.scss$/,
      include: [
        path.resolve(__dirname, 'css'),
      ],
      loader: sassLoader
    },
    {
      test: /\.less$/,
      //exclude: /node_modules/,
      loader: "style!css!less",
      //loader: ExtractTextPlugin.extract('style', 'css!less')
    }, {
      test: /\.(png|jpg|jpeg|gif)$/,
      exclude: /node_modules/,
      loader: 'url-loader?limit=10000&name=images/[name].[hash].[ext]'
    }, {
      test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
      exclude: /node_modules/,
      loader: 'url?prefix=font/&limit=10000&name=font/[name].[ext]'
    }],
  },
  resolve: {
    alias: {
      'react': path.join(__dirname, 'node_modules', 'react'),
    },
    extensions: ['', '.js', '.jsx', '.scss', '.css', '.less', '.png', '.jpg'],
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
};
