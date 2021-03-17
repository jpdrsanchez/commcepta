const path = require('path');

module.exports = {
  entry: ['@babel/polyfill', './assets/js/main.js'],
  output: {
    path: path.resolve(__dirname, './assets/'),
    filename: 'script.js',
  },
  mode: 'production',
};
