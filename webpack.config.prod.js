var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
var sassLoader = 'style!css!sass?sourceMap=true&sourceMapContents=true';
var BomPlugin = require('webpack-utf8-bom');//中文乱码

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
var APP_FILE = path.resolve(APP_PATH, 'app'); //根目录文件app.jsx地址
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist'); //发布文件所存放的目录/dist/前面加/报错？

module.exports = {
    entry: [
        APP_FILE,
    ],
    output: {
        path: BUILD_PATH+'/src/app/',
        filename: 'bundle.js',
        chunkFilename: "[name].[chunkhash:5].min.js",
        publicPath: '',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            include: [
                path.resolve(__dirname, 'css'),
            ],
            loader: 'style-loader!css-loader'
        }, {
            test: /\.less$/,
            exclude: /^node_modules$/,
            loader: "style!css!less",
            //loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'less'])
        }, {
            test: /\.scss$/,
            exclude: /^node_modules$/,
            loader: ExtractTextPlugin.extract('style', ['css', 'autoprefixer', 'sass'])
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=fonts/[name].[ext]'
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
        }, {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loaders: ['jsx', 'babel']
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css', '.less', '.png', '.jpg'],
    },
    plugins: [
        new BomPlugin(true, /\.(js|jsx|cshtml)$/),//解决中文乱码的问题
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production') //定义生产环境
            }
        }),
        new ExtractTextPlugin('[name].css'),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false, // remove all comments
            },
            compress: {
                warnings: false
            }
        }),

    ],
};
