import { AuthService } from 'aurelia-authentication';
import { autoinject } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';
import { Router } from 'aurelia-router';

@autoinject
export class Login {
    username: string;
    password: string;
    heading: string = 'Login';

    constructor(private auth: AuthService, private eventAggregator: EventAggregator, private router: Router) {
    };

    login() {
        let loginOptions = {
            username: this.username,
            password: this.password,
            grant_type: 'password',
            scope: 'openid profile email roles'
        };
        return this.auth.login(loginOptions)
            .then(response => {
                console.log("success logged " + response);
                //                this.eventAggregator.publish('authChanged');
                this.router.navigate('/');
            })
            .catch(err => {
                err.json().then(function (e) {
                    alert(e.message);
                    console.log("login failure : " + e.message);
                });

            });
    };

    authenticate(name) {
        return this.auth.authenticate(name, false, null)
            .then((response) => {
            });

    }
}
