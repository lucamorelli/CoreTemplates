import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-cmp',
    templateUrl: './views/login.component.html'
})
export class LoginComponent {
    title = 'Tour of Heroes';
    displayName: string;

    username: string;
    password: string;

    constructor(
        private router: Router, 
        private userService: UserService) { }

    get isAuthenticated(): boolean {
        return this.userService.isLoggedIn();
    }

    login() {
        this.userService.login(this.username, this.password).subscribe(
            (data) => {
                if (data != undefined) { 
                    alert('login effettuato con success');
                    this.router.navigate(['']);
                }
            },
            err => alert(err)
        );
;
    }
}