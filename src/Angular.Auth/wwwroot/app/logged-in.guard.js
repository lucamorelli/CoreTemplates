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
var user_service_1 = require('./user.service');
var LoggedInGuard = (function () {
    function LoggedInGuard(user) {
        this.user = user;
    }
    LoggedInGuard.prototype.canActivate = function () {
        return this.user.isLoggedIn();
    };
    LoggedInGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], LoggedInGuard);
    return LoggedInGuard;
}());
exports.LoggedInGuard = LoggedInGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nZ2VkLWluLmd1YXJkLmpzIiwic291cmNlUm9vdCI6IkQ6L1NvcmdlbnRpL0ludGVybm8vQ29yZVRlbXBsYXRlcy9zcmMvQW5ndWxhci5BdXRoL2FwcC8iLCJzb3VyY2VzIjpbImxvZ2dlZC1pbi5ndWFyZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXFCO0FBQ3JCLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUUzQyw2QkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUc3QztJQUNJLHVCQUFvQixJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO0lBQUksQ0FBQztJQUUxQyxtQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQU5MO1FBQUMsaUJBQVUsRUFBRTs7cUJBQUE7SUFPYixvQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTlkscUJBQWEsZ0JBTXpCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dnZWQtaW4uZ3VhcmQudHNcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIsIENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2dnZWRJbkd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyOiBVc2VyU2VydmljZSkgeyB9XHJcblxyXG4gICAgY2FuQWN0aXZhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlci5pc0xvZ2dlZEluKCk7XHJcbiAgICB9XHJcbn0iXX0=