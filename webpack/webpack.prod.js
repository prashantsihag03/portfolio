const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
// const BundleAnalyzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Prashant'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'public/font/',
          to: 'font',
        },
        {
          from: 'public/images/',
          to: 'images',
        },
      ],
    }),
    // new BundleAnalyzerPlugin(),
  ],
}
