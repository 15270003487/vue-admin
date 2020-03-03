module.exports = {
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true, //注释css热更新生效
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/main.scss";`
      }
    }
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false
  },
  // 第三方插件配置
  pluginOptions: {}
};
