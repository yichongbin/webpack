var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool:"eval-source-map",
    entry:__dirname +  '/app/main.js',
    output:{
        path:__dirname + "/build" ,
        filename: "[name]-[hash].js"
    },
    module:{
        loaders:[
            {
                test:/\.json$/,
                loader:"json-loader"
            },
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loader:"babel-loader"
            },
            {
                test:/\.css$/,
                loader:ExtractTextPlugin.extract({fallback:'style-loader', use:'css-loader?modules!postcss-loader'})//"style-loader!css-loader?modules!postcss-loader"
            }


        ]
    },
    plugins: [
        new webpack.BannerPlugin("Copyright Flying Unicorns inc."),
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin("[name]-[hash].css")
    ],
    devServer:{
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot:true

    }
};/**
 * Created by Administrator on 2017/7/14.
 */
