import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')]
})
export class AppComponent {
    title = 'Tour of Heroes';
    

    constructor(
        private userService: UserService) { }
}