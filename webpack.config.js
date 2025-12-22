const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'my-products-mfe',

  exposes: {
    './routes': './src/app/app.routes.ts',
    './StandaloneComponent': './src/app/standalone-component/standalone-component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },
});
