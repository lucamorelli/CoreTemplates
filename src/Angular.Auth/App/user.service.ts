import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import 'rxjs/Rx';

@Injectable()
export class UserService {
    private loggedIn = false;
    private jsonHeaders = new Headers({ 'Content-Type': 'application/json' });
    private jsonOptions = new RequestOptions({ headers: this.jsonHeaders });

    private formHeaders = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    private formOptions = new RequestOptions({ headers: this.formHeaders });

    constructor(private http: Http, private authHttp: AuthHttp) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    login(email: string , password: string) { 

        var jsonData = "grant_type=password&scope=openid profile email roles&username=" + email + "&password=" + password;

        return this.http
            .post('connect/token', jsonData, this.formOptions)
            .map( res => res.json() )
            .map(res => {
                if (res != undefined) {
//                    localStorage.setItem('auth_token', res.auth_token);
                    localStorage.setItem('id_token', res.id_token /*res.auth_token*/);
                    this.loggedIn = true;
                }

                return res;
            });
    }


    logout() {
      //  this.authHttp.post('connect/logout');
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }

    signup(username: string, email: string, password: string) {
        var model = {
            email: email,
            userName: username,
            password: password,
            scope: "openid profile email roles"
        };

        var jsonData = JSON.stringify(model);

        return this.http
            .post('register/signup', jsonData, this.jsonOptions)
            .map(res => res.json())
    }
}