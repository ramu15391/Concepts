var config = {
  entry: "./mobxTest.js",
  output: {
    path: "/",
    filename: "bundle.js"
  },
  devServer: {
    // inline: false,
    port: 8888,
    // historyApiFallback:true,
    proxy: {
      "/orchestrationservices": {
        target: "https://adidasapi.skavacommerce.com/",
        secure: false
      }
    }
  }
};
module.exports = config;
