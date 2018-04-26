let webpack = require('webpack'),
    path = require('path');


let commonjs = require('rollup-plugin-commonjs');
// npm = require('rollup-plugin-npm'),
// json = require('rollup-plugin-json');

module.exports = {
    cache: false,
    target: 'web',
    entry: {
        theme: __dirname + '/assets/js/app.js'
    },
    output: {
        path: __dirname + '/js',
        filename: '[name].min.js',
        publicPath: 'dist/'
    },
    //devtool: 'cheap-module-source-map',
    resolve: {
        modules: [

            './assets/js',
            'node_modules',

        ],
    },
    module: {
        loaders: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ],
    },
    externals: {
        'jquery': 'jQuery',
        '$': 'jQuery',

        underscore: '_'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'jquery': 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            underscore: "_",
            Popper: ['popper.js', 'default']
        })
    ]
};