module.exports = {
  runtimeCompiler: true,
  productionSourceMap: false,
  configureWebpack: (config) => {
    config.output.filename = "js/[name].js";
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
    config
      .plugin('extract-css')
      .tap(options => {
        return [
          {
            filename: 'css/[name].css',
            chunkFilename: 'css/[name].css'
          }
        ];
      });
  }
}