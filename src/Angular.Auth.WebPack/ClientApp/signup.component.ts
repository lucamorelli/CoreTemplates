import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-cmp',
    template: require('./signup.component.html')
})
export class LoginComponent {
    title = 'Tour of Heroes';
    displayName: string;

    username: string;
    email: string;
    password: string;

    constructor(
        private router: Router, 
        private userService: UserService) { }

    get isAuthenticated(): boolean {
        return this.userService.isLoggedIn();
    }

    login() {
        this.userService.signup(this.username, this.email , this.password).subscribe(
            (data) => {
                if (data != undefined) { 
                    alert('Signup effettuato');
                    this.router.navigate(['']);
                }
            },
            err => alert(err)
        );
;
    }
}