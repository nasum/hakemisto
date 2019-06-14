const path = require('path')

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [
          path.resolve(__dirname, 'src/renderer'),
          path.resolve(__dirname, 'node_modules'),
        ],
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
}