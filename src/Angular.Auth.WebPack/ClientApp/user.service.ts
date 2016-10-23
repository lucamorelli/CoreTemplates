import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { RequestOptionsServices } from './request-options.services';


@Injectable()
export class UserService {
    private loggedIn = false;
    //private jsonHeaders = new Headers({ 'Content-Type': 'application/json' });
    //private jsonOptions = new RequestOptions({ headers: this.jsonHeaders });

    //private formHeaders = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //private formOptions = new RequestOptions({ headers: this.formHeaders });

    constructor(private http: Http, private requestOptions: RequestOptionsServices) {
        this.loggedIn = !!localStorage.getItem('access_token');
    }

    login(email: string , password: string) { 

        var jsonData = "grant_type=password&scope=openid profile email roles&username=" + email + "&password=" + password;

        return this.http
            .post('connect/token', jsonData, this.requestOptions.form)
            .map( res => res.json() )
            .map(res => {
                if (res != undefined) {
                    localStorage.setItem('access_token', res.access_token);
                    this.loggedIn = true;
                }

                return res;
            });
    }


    logout() {
        localStorage.removeItem('access_token');
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
            .post('connect/signup', jsonData, this.requestOptions.json)
            .map(res => res.json())
    }
}