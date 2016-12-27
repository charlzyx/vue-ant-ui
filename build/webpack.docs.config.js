var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: './test/main'
    },
    output: {
        path: path.resolve(__dirname, '../docs'),
        // publicPath: '/docs/',
        filename: 'antui.js',
        // library: 'antui',
        // libraryTarget: 'umd',
        // umdNamedDefine: true
    },
    // externals: {
    //     vue: {
    //         root: 'Vue',
    //         commonjs: 'vue',
    //         commonjs2: 'vue',
    //         amd: 'vue'
    //     }
    // },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue'
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css!autoprefixer')
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract('css!less')
        }, { 
            test: /\.(scss|sass)$/, loader: 'css!sass?sourceMap'
        },{
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url?limit=8192'
        }, {
            test: /\.(html|tpl)$/,
            loader: 'vue-html'
        },{ 
            test: /\.md/, loader: 'vue-markdown-loader' 
        }]
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
            css: ExtractTextPlugin.extract(
                "vue-style-loader",
                "css-loader?sourceMap"
            ),
            less: ExtractTextPlugin.extract(
                'vue-style-loader',
                'css-loader!less-loader'
            ),
            js: 'babel'
        }
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue', 'less'],
        alias: {
            antui: '../../src/index',
            components: '../../src/components',
            abscomp: path.resolve(__dirname, '../src/components'),
            src: path.resolve(__dirname, '../src')
        }
    },
    plugins: [
        new ExtractTextPlugin("[name].css",{ allChunks : true,resolve : ['modules'] }),             // 提取CSS
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
        new HtmlwebpackPlugin({
            template: 'test/index.html',
            filename: 'index.html',
            inject: true
        })
    ]
}
