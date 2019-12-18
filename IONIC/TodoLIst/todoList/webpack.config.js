const webpack = require('webpack');
console.log('Config custom runing!!');
module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      'window.SQL': 'sql.js/js/sql.js'
    }),
    new webpack.NormalModuleReplacementPlugin(/typeorm$/, function(result) {
      result.request = result.request.replace(/typeorm/, 'typeorm/brwoser');
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  optimization: {
    minimize: false
  }
};
