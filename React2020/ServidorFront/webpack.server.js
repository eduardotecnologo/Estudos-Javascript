const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle_server.js'
  },
  target: 'node',
  mudule: {
    rules: [{
      test: /.js/,
      use: 'babel-loader'
    }]
  },
  externals: [nodeExternals()]
}