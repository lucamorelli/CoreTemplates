import 'bootstrap';
import { Aurelia } from 'aurelia-framework';
import authConfig from './authConfig';

export function configure(aurelia: Aurelia) {
  aurelia.use
      .standardConfiguration()
      .developmentLogging()
      /* setup the api endpoints first (if desired) */
      .plugin('aurelia-api', configure => {
          configure
              .registerEndpoint('auth', 'https://myapi.org/auth')
              .registerEndpoint('protected-api', 'https://myapi.org/protected-api')
              .registerEndpoint('public-api', 'http://myapi.org/public-api')
              .setDefaultEndpoint('auth');
      })
      /* configure aurelia-authentication */
      .plugin('aurelia-authentication', baseConfig => {
          baseConfig.configure(authConfig);
          alert('eccolo');
      });

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  aurelia.start().then(() => aurelia.setRoot());
}
