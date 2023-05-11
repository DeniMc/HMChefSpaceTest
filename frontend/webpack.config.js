// webpack.config.js
const path = require('path');

module.exports = {
    mode: 'production',  // Set the mode to 'production'
  entry: './src/scripts/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      // Rule for handling CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};