const webpack = require("webpack");
const path = require("path");

require("dotenv").config();

module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:5000",
    "webpack/hot/dev-server",
    "./app/index"
  ],
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/static/"
  },
  resolve: {
    extensions: ["", ".js"]
  },
  devtool: "eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ["babel"],
        include: path.join(__dirname, "app")
      }
    ]
  }
};
