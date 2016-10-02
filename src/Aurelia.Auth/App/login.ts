import { AuthService } from 'aurelia-authentication';
import { autoinject, computedFrom } from 'aurelia-framework';

@autoinject
export class Login {
    providers: any = [];

    constructor(private authService: AuthService) {
        this.authService = authService;
    };

    heading = 'Login';

    email = '';
    password = '';

    // make a getter to get the authentication status.
    // use computedFrom to avoid dirty checking
    @computedFrom('authService.authenticated')
    get authenticated() {
        return this.authService.authenticated;
    }

    login() {
        return this.authService.login(this.email, this.password)
            .then(response => {
                console.log("success logged " + response);
            })
            .catch(err => {
                console.log("login failure");
            });
    };

    // use authService.logout to delete stored tokens
    // if you are using JWTs, authService.logout() will be called automatically,
    // when the token expires. The expiredRedirect setting in your authConfig
    // will determine the redirection option
    logout() {
        return this.authService.logout();
    }

    // use authenticate(providerName) to get third-party authentication
    authenticate(name) {
        return this.authService.authenticate(name)
            .then(response => {
                this.providers[name] = true;
                console.log("auth response " + response);
            });
    }
}