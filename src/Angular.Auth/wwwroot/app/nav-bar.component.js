"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_service_1 = require('./user.service');
var router_1 = require('@angular/router');
var NavBarComponent = (function () {
    function NavBarComponent(router, activatedRoute, userService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.title = 'Tour of Heroes';
    }
    Object.defineProperty(NavBarComponent.prototype, "isAuthenticated", {
        get: function () {
            return this.userService.isLoggedIn();
        },
        enumerable: true,
        configurable: true
    });
    NavBarComponent.prototype.logout = function () {
        this.userService.logout();
    };
    NavBarComponent.prototype.ngOnInit = function () {
        //if (this.userService.isLoggedIn())
        //    this.displayName = this.userService.
    };
    NavBarComponent = __decorate([
        core_1.Component({
            selector: 'nav-bar',
            templateUrl: './views/nav-bar.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, user_service_1.UserService])
    ], NavBarComponent);
    return NavBarComponent;
}());
exports.NavBarComponent = NavBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovU29yZ2VudGkvSW50ZXJuby9Db3JlVGVtcGxhdGVzL3NyYy9Bbmd1bGFyLkF1dGgvYXBwLyIsInNvdXJjZXMiOlsiQXBwL25hdi1iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0MsZUFBZSxDQUFDLENBQUE7QUFDbEQsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFDN0MsdUJBQXVDLGlCQUFpQixDQUFDLENBQUE7QUFPekQ7SUFJSSx5QkFDWSxNQUFjLEVBQ2QsY0FBOEIsRUFDOUIsV0FBd0I7UUFGeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQU5wQyxVQUFLLEdBQUcsZ0JBQWdCLENBQUM7SUFRekIsQ0FBQztJQUVELHNCQUFJLDRDQUFlO2FBQW5CO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDekMsQ0FBQzs7O09BQUE7SUFFRCxnQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLG9DQUFvQztRQUNwQywwQ0FBMEM7SUFDOUMsQ0FBQztJQTNCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1NBRWhELENBQUM7O3VCQUFBO0lBd0JGLHNCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSx1QkFBZSxrQkF1QjNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4vdXNlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyLCBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbmF2LWJhcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvbmF2LWJhci5jb21wb25lbnQuaHRtbCdcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOYXZCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgdGl0bGUgPSAnVG91ciBvZiBIZXJvZXMnO1xyXG4gICAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzQXV0aGVudGljYXRlZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy51c2VyU2VydmljZS5pc0xvZ2dlZEluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9nb3V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy9pZiAodGhpcy51c2VyU2VydmljZS5pc0xvZ2dlZEluKCkpXHJcbiAgICAgICAgLy8gICAgdGhpcy5kaXNwbGF5TmFtZSA9IHRoaXMudXNlclNlcnZpY2UuXHJcbiAgICB9XHJcbn0iXX0=