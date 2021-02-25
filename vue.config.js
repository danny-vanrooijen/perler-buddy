var path = require("path");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/perler-buddy" : "/",
  outputDir: "perler-buddy",
  configureWebpack: {
    optimization: {
      splitChunks: {
        name: "vendor",
        chunks: "all"
      }
    },
    output: {
      filename: "perler-buddy-[name].js",
      // chunkFilename: "[id].js",
      path: path.resolve(__dirname, "perler-buddy")
    }
  }
};
