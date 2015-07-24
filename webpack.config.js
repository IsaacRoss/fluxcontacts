var path = require('path'),
    webpack = require('webpack'),
    fs = require('fs'),
    React = require('react');


module.exports = {
    devtool: 'eval',
    entry: './public/js/app.js',
    output:{
        path: path.join(__dirname, "public"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: "jsx-loader?harmony"}
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('shared.js')
    ]
};

