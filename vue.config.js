const path = "/sbosa/";

function resolveSrc(_path) {
  return _path;
}
// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ?
  '/sbosa/' : '/',
  lintOnSave: true,
  configureWebpack: {
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        assets: resolveSrc('src/assets')
      }
    }
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
