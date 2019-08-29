const { override, fixBabelImports, addLessLoader,addDecoratorsLegacy,addWebpackAlias } = require('customize-cra');
const path = require("path")

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@brand-primary": "#f40" },
  }),
  addDecoratorsLegacy(),
  addWebpackAlias({
    '@': path.join(__dirname, "src")
  })
);