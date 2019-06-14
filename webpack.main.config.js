const path = require('path')

module.exports = {
  mode: "development",
  entry: "src/main/app.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        include: [
          path.resolve(__dirname, 'src/main'),
          path.resolve(__dirname, 'node_modules'),
        ],
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js"]
  }
}