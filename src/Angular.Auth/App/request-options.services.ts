import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";


@Injectable()
export class RequestOptionsServices {

    public get json(): RequestOptions {
        var headers: Headers = new Headers({ 'Content-Type': 'application/json' });
        return new RequestOptions({ headers: headers });
    }

    public get jwt(): RequestOptions {
        var authHeader = new Headers();
        var token = localStorage.getItem('access_token');
        authHeader.append('Authorization', 'Bearer ' + token);
        authHeader.append('Content-Type', 'application/json');
        return new RequestOptions({ headers: authHeader });
    }

    public get form(): RequestOptions {
        var formHeaders: Headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return new RequestOptions({ headers: formHeaders });

    }
}