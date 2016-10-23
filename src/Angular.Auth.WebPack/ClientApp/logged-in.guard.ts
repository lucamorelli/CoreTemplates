// logged-in.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private user: UserService, private router: Router) { }

    canActivate() {
        if (this.user.isLoggedIn())
            return this.user.isLoggedIn();
        else
            this.router.navigate(['/login']);
    }
}