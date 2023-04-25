const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].js",
  },
  devServer: {
    port: 3000,
    static: path.join(__dirname, "src"),
    proxy: {
      "/": "http://catalog-backend-part108.wbx-ru.svc.k8s.wbxcat",
    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
  devtool: "inline-source-map",
});
