import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'my-app',
    templateUrl: './views/app.component.html',
    styleUrls: ['./views/app.component.css']
})
export class AppComponent {
    title = 'Tour of Heroes';
    displayName: string;

    constructor(
        private userService: UserService) { }

    get isAuthenticated(): boolean {
        return this.userService.isLoggedIn();
    }
}