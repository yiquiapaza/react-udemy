const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { HotModuleReplacementPlugin } = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "bundle.[contenthash].js",
    publicPath: "/",
  },
  mode: "development",
  module: {
    rules: [
      //Allows use javascript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //don't test node_modules folder
        use: {
          loader: "babel-loader",
        },
        resolve: {
          extensions: [".js", ".jsx"],
        },
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    port: 8000,
  },
  plugins:[
    //Allows remove/clean the build folder
    new CleanWebpackPlugin(),
    //Allows update react components in real time
    new HotModuleReplacementPlugin(),
    //Allows to create an index.html in our build folder
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"), //we put the file that we created in public folder
    }),
  ]
}
