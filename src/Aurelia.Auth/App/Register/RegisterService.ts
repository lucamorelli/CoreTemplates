import { RegisterViewModel } from './RegisterViewModel';
import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@autoinject
export class RegisterService {
    private url: string = "Signup";

    constructor(public http: HttpClient) {
        //http.configure(config => {
        //    config
        //        .useStandardConfiguration()
        //        .withBaseUrl('http://localhost:5000/Register/');
        //});
    }

    public signup(username: string, password: string, repeatPassword: string): Promise<boolean> {
        var model: RegisterViewModel = {
            userId: username,
            password: password,
            repeatPassword: repeatPassword
        };
        return this.http.fetch('http://localhost:5000/Register/' + this.url, {
        //return this.http.fetch(this.url, {
            method: 'post',
            body: JSON.stringify(model),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                //this.apiKey = response.APIKey;
                console.log(response);
                return true;
            });
    }
}