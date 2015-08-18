var path = require('path'),
    webpack = require('webpack'),
    fs = require('fs'),
    React = require('react');
    //RewirePlugin = require('rewire-webpack');


module.exports = {
    devtool: 'eval',
    entry: './public/js/app.js',
    output:{
        path: path.join(__dirname, "public"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    optional: ['runtime'],
                    stage: 2
                },
                plugins: [
                    require('babel-plugin-rewire')
                ]
            }
        ]
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin('shared.js')
        //new RewirePlugin()
    ]
};

