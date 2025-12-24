
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { shareAll } = require('@angular-architects/module-federation/webpack');
const { output } = require('@angular/core');
const { library, experiments } = require('webpack');

module.exports = {
  output: {
    uniqueName: 'my-products-mfe',
    publicPath: 'auto',
  },
  optimization: {
    runtimeChunk: false,
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: 'module'},
      name: 'my-products-mfe',
      filename: 'remoteEntry.js',
      exposes: {
        './routes': './src/app/app.routes.ts',
        './StandaloneComponent': './src/app/standalone-component/standalone-component.ts',
      },
      shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      },
    })
  ],


};
