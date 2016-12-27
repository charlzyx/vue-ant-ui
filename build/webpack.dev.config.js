/**
 * 本地预览
 */

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口
    entry: {
        main: './test/main'
    },
    // 输出
    output: {
        path: path.join(__dirname, '../test/dist'),
        filename: '[name].js'
    },
    // 加载器
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer'},
            { test: /\.less$/, loader: 'style!css!less' },
            { test: /\.(scss|sass)$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
            { test: /\.md/, loader: 'vue-markdown-loader' }
        ]
    },
    vueMarkdown: {
        // markdown-it config
        preset: 'default',
        breaks: true,

        preprocess: function(markdownIt, source) {
        // do any thing
        return source
        }
    },
    'vue': {
        loaders: {
            css: 'vue-style!css?sourceMap',
            less: 'vue-style!css!less',
            js: 'babel'
        }
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue', '.less'],
        alias: {
            antui: '../../src/index',
            components: '../../src/components',
            abscomp: path.resolve(__dirname, '../src/components'),
            src: path.resolve(__dirname, '../src')
        }
    },
    plugins: [
        // new ExtractTextPlugin("[name].css",{ allChunks : true,resolve : ['modules'] }),             // 提取CSS
        // new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),                           // 提取第三方库
        new HtmlwebpackPlugin({
            template: 'test/index.html',
            filename: 'index.html',
            inject: true
        })
    ]
};
