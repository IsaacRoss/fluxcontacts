var webpack = require('webpack');

module.exports = function(config){
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: [
            'tests.webpack.js'
        ],

        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-sourcemap-loader',
            'karma-webpack'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    { test: /\.js$/, exclude: /node_modules/, loaders: ["babel-loader?plugins=rewire"] } // loaders can take parameters as a querystring
                ]
            }
        },
        webpackServer: {
            noInfo: true
        }
    });
};