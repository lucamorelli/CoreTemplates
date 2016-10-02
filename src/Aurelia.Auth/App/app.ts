import { Router, RouterConfiguration } from 'aurelia-router';
import { autoinject } from "aurelia-framework";
import { AuthenticateStep } from 'aurelia-authentication';

@autoinject
export class App {
  public router: Router;

  public configureRouter(config: RouterConfiguration, router: Router) {

    // switch from hash (#) to slash (/) navigation
    config.options.pushState = true;

    config.title = 'Aurelia';
    config.addPipelineStep('authorize', AuthenticateStep); // Add a route filter so only authenticated uses are authorized to access some routes


    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
      { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users', auth: true },
      { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
      { route: 'login', moduleId: './login', nav: false, title: 'Login', name: 'login' },
      { route: 'logout', moduleId: './logout', nav: false, title: 'Logout', name: 'logout' },
      { route: 'signup', moduleId: './signup', nav: false, title: 'Signup', name: 'signup' }
    ]);

    this.router = router;
  }
}
