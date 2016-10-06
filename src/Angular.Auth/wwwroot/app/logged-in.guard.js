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
// logged-in.guard.ts
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var user_service_1 = require('./user.service');
var LoggedInGuard = (function () {
    function LoggedInGuard(user, router) {
        this.user = user;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function () {
        if (this.user.isLoggedIn())
            return this.user.isLoggedIn();
        else
            this.router.navigate(['/login']);
    };
    LoggedInGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_1.Router])
    ], LoggedInGuard);
    return LoggedInGuard;
}());
exports.LoggedInGuard = LoggedInGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IkQ6L1NvcmdlbnRpL0ludGVybm8vQ29yZVRlbXBsYXRlcy9zcmMvQW5ndWxhci5BdXRoL2FwcC8iLCJzb3VyY2VzIjpbIkFwcC9sb2dnZWQtaW4uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFxQjtBQUNyQixxQkFBMkIsZUFBZSxDQUFDLENBQUE7QUFDM0MsdUJBQW9DLGlCQUFpQixDQUFDLENBQUE7QUFDdEQsNkJBQTRCLGdCQUFnQixDQUFDLENBQUE7QUFHN0M7SUFDSSx1QkFBb0IsSUFBaUIsRUFBVSxNQUFjO1FBQXpDLFNBQUksR0FBSixJQUFJLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUksQ0FBQztJQUVsRSxtQ0FBVyxHQUFYO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNsQyxJQUFJO1lBQ0EsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFUTDtRQUFDLGlCQUFVLEVBQUU7O3FCQUFBO0lBVWIsb0JBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQVRZLHFCQUFhLGdCQVN6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbG9nZ2VkLWluLmd1YXJkLnRzXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyLCBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9nZ2VkSW5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlcjogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxyXG5cclxuICAgIGNhbkFjdGl2YXRlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnVzZXIuaXNMb2dnZWRJbigpKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyLmlzTG9nZ2VkSW4oKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG4gICAgfVxyXG59Il19