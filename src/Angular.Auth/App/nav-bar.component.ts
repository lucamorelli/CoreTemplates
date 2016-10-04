import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'nav-bar',
    templateUrl: './views/nav-bar.component.html'

})
export class NavBarComponent implements OnInit {
    title = 'Tour of Heroes';
    displayName: string;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userService: UserService) {
        
    }

    get isAuthenticated(): boolean {
        return this.userService.isLoggedIn();
    }

    logout() {
        this.userService.logout();
    }

    ngOnInit() {
        //if (this.userService.isLoggedIn())
        //    this.displayName = this.userService.
    }
}