/* eslint-disable no-undef */
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = {
  mode: "development",
  cache: false,
  entry: "./src/index.tsx",
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 100,
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".webmanifest"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      extensions: [".js", ".ts", ".jsx"],
      exclude: ["node_modules"],
      emitWarning: true,
      failOnError: false,
      failOnWarning: false,
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.ico",
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "public/font/",
          to: "font",
        },
        {
          from: "public/images/",
          to: "images",
        },
      ],
    }),
  ],
};
