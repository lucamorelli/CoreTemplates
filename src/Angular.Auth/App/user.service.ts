import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    private loggedIn = false;
    private jsonHeaders = new Headers({ 'Content-Type': 'application/json' });
    private jsonOptions = new RequestOptions({ headers: this.jsonHeaders });

    private formHeaders = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    private formOptions = new RequestOptions({ headers: this.formHeaders });

    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    login(email, password) {

        var jsonData = "grant_type=password&scope=openid profile email roles&username=" + email + "&password=" + password;

        return this.http
            .post('connect/token', jsonData, this.formOptions)
            .map( res => res.json() )
            .map(res => {
                if (res != undefined) {
                    localStorage.setItem('auth_token', res.auth_token);
                    this.loggedIn = true;
                }

                return res;
            });
    }

    /* 
grant_type:password
password:61Palla.
scope:openid profile email roles
username:luca@lucamorelli.it
        */

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}