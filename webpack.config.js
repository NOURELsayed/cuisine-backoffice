rules: [
    // Whatever other rules you have here...
    {
      test: /\.less$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: true,
            modules: true,
            localIdentName: "[local]___[hash:base64:5]"
          }
        },
        {
          loader: "less-loader"
        }
      ]
    }
  ]

const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
    devtool: "cheap-module-source-map",
    mode: 'development',
});
