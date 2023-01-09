let path = require("path");
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let CopyWebpackPlugin = require("copy-webpack-plugin");
let CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
let TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    // includes common plugins like uglify if set to production (to minimize JS code)
    mode: 'development',
    // source JS file (entry / output are called keys)
    entry: "./src/main.js",
    // where all bundled JS/CSS will go (filename and path (made out of current directory/build))
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "build"),
        publicPath: '/'
    },
    // when errors occur in browser, it shows the error in the JS and not in the transpiled bundle.js
    devtool: 'nosources-source-map',
    // setup webpack-dev-server
    devServer: {
        static: {
            directory: path.join(__dirname, "build"),
        },
        devMiddleware: {
            // so the /build folder is actually added to the project folder when run
            writeToDisk: true
        },
        hot: false,
        port: 3000
    },
    // configuring webpack loaders - loaders let you run preprocessors on files as they are imported and bundled
    module: {
        // array of rules on handling certain files when bundling
        rules: [
            {
                // will transpile all JS to ES5 using Babel
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: [
                      ['@babel/preset-env', { targets: "defaults" }]
                    ]
                  }
                }
            },
            {
                // will bundle all CSS files that are imported via JS into single bundle.css
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                // will pre-process all scss files that are imported via JS into single bundle.css
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            sourceMap: false
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },

    // for minimizing all bundled CSS / JS
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin()
        ]
    },
    // plugins operate across all code
    plugins: [
        // writes CSS to the bundle.css
        new MiniCssExtractPlugin({
            filename: "bundle.css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                // copies all assets in the lib/ folder (images, etc) to /build (in case not imported manually via SCSS or CSS or JS). Any images referenced in SASS or CSS via url() or imported directly with js will already be copied over automatically to /build root and given distinct filename - a little redundant :(
                {from:'lib/', to:'', noErrorOnMissing: true},
                // copies HTML file to /build
                {from:'html/index.html', to:'index.html'},
            ]
        })
    ]
};