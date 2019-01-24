var path = require('path');
var fs = require('fs');
const lessToJs = require("less-vars-to-js");
const themeVariables = lessToJs(
    fs.readFileSync(path.join(__dirname, "./theme.less"), "utf8")
);

module.exports = {
    entry: {
        vendor: ['babel-polyfill', 'react', 'react-dom', 'redux', 'react-redux'],
        common: './src/index.js'
    },
    watch: true,
    output: {
        filename: '[name].min.js',
        chunkFilename: '[name].min.js',
        umdNamedDefine: true,
        publicPath: "js/dist/",
        path: path.resolve(__dirname, 'www/js/dist')
    },
    node: {
      fs: 'empty'
    },
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader"
              }
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ["babel-loader"]
            },
            {
              test: /antd.*\.less$/,
              use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                {
                  loader: "less-loader",
                  options: {
                    javascriptEnabled: true,
                    // modifyVars: themeVariables
                    modifyVars: {
                     'primary-color': '#fe534c'
                   },
                  }
                }
              ]
            },
            {
              test: /\.less$/,
              exclude: /(node_modules|bower_components)/,
              use: [
                { loader: "style-loader" },
                {
                  loader: "css-loader",
                  options: {
                    modules: true
                  }
                },
                {
                  loader: "less-loader",
                  options: {
                    javascriptEnabled: true
                  }
                }
              ]
            },
            { 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            },
            {
              test: /\.css$/,
              use: [{ loader: "style-loader" }, { loader: "css-loader" }]
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: "html-loader"
                }
              ]
            }
          ]      
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    name: 'vendor',
                    test: '/node_modules/'
                },
            }
        }
    }
}
