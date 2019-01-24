const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const zopfli = require('@gfx/zopfli');
const CompressionPlugin = require("compression-webpack-plugin");



module.exports = merge(common, {
    mode: 'production',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    name: 'vendor',
                    test: '/node_modules/'
                },
            }
        },
        nodeEnv: 'production',
        mangleWasmImports: true,
        minimizer: [
            new UglifyJsPlugin({ /* your config */ })
        ]
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new CompressionPlugin({
            compressionOptions: {
                numiterations: 20
            },
            algorithm(input, compressionOptions, callback) {
                return zopfli.gzip(input, compressionOptions, callback);
            }
        })
    ]
});
