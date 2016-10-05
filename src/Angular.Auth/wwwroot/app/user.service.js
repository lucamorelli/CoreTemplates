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
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt/angular2-jwt');
require('rxjs/Rx');
var UserService = (function () {
    function UserService(http, authHttp) {
        this.http = http;
        this.authHttp = authHttp;
        this.loggedIn = false;
        this.jsonHeaders = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.jsonOptions = new http_1.RequestOptions({ headers: this.jsonHeaders });
        this.formHeaders = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        this.formOptions = new http_1.RequestOptions({ headers: this.formHeaders });
        this.loggedIn = !!localStorage.getItem('auth_token');
    }
    UserService.prototype.login = function (email, password) {
        var _this = this;
        var jsonData = "grant_type=password&scope=openid profile email roles&username=" + email + "&password=" + password;
        return this.http
            .post('connect/token', jsonData, this.formOptions)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res != undefined) {
                //                    localStorage.setItem('auth_token', res.auth_token);
                localStorage.setItem('id_token', res.id_token /*res.auth_token*/);
                _this.loggedIn = true;
            }
            return res;
        });
    };
    UserService.prototype.logout = function () {
        //  this.authHttp.post('connect/logout');
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService.prototype.signup = function (username, email, password) {
        var model = {
            email: email,
            userName: username,
            password: password,
            scope: "openid profile email roles"
        };
        var jsonData = JSON.stringify(model);
        return this.http
            .post('register/signup', jsonData, this.jsonOptions)
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, angular2_jwt_1.AuthHttp])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkQ6L1NvcmdlbnRpL0ludGVybm8vQ29yZVRlbXBsYXRlcy9zcmMvQW5ndWxhci5BdXRoL2FwcC8iLCJzb3VyY2VzIjpbIkFwcC91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBOEMsZUFBZSxDQUFDLENBQUE7QUFDOUQsNkJBQXlCLDJCQUEyQixDQUFDLENBQUE7QUFDckQsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUdqQjtJQVFJLHFCQUFvQixJQUFVLEVBQVUsUUFBa0I7UUFBdEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFQbEQsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixnQkFBVyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQztRQUNsRSxnQkFBVyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUVoRSxnQkFBVyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUUsY0FBYyxFQUFFLG1DQUFtQyxFQUFFLENBQUMsQ0FBQztRQUNuRixnQkFBVyxHQUFHLElBQUkscUJBQWMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUdwRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sS0FBYSxFQUFHLFFBQWdCO1FBQXRDLGlCQWdCQztRQWRHLElBQUksUUFBUSxHQUFHLGdFQUFnRSxHQUFHLEtBQUssR0FBRyxZQUFZLEdBQUcsUUFBUSxDQUFDO1FBRWxILE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBQyxlQUFlLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUM7YUFDakQsR0FBRyxDQUFFLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBRTthQUN4QixHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ0osRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLHlFQUF5RTtnQkFDckQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNsRSxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN6QixDQUFDO1lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUdELDRCQUFNLEdBQU47UUFDRSx5Q0FBeUM7UUFDdkMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sUUFBZ0IsRUFBRSxLQUFhLEVBQUUsUUFBZ0I7UUFDcEQsSUFBSSxLQUFLLEdBQUc7WUFDUixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEtBQUssRUFBRSw0QkFBNEI7U0FDdEMsQ0FBQztRQUVGLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ25ELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBdkRMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUF3RGIsa0JBQUM7QUFBRCxDQUFDLEFBdkRELElBdURDO0FBdkRZLG1CQUFXLGNBdUR2QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBBdXRoSHR0cCB9IGZyb20gJ2FuZ3VsYXIyLWp3dC9hbmd1bGFyMi1qd3QnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBsb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBqc29uSGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgIHByaXZhdGUganNvbk9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiB0aGlzLmpzb25IZWFkZXJzIH0pO1xyXG5cclxuICAgIHByaXZhdGUgZm9ybUhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9KTtcclxuICAgIHByaXZhdGUgZm9ybU9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiB0aGlzLmZvcm1IZWFkZXJzIH0pO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCwgcHJpdmF0ZSBhdXRoSHR0cDogQXV0aEh0dHApIHtcclxuICAgICAgICB0aGlzLmxvZ2dlZEluID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aF90b2tlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKGVtYWlsOiBzdHJpbmcgLCBwYXNzd29yZDogc3RyaW5nKSB7IFxyXG5cclxuICAgICAgICB2YXIganNvbkRhdGEgPSBcImdyYW50X3R5cGU9cGFzc3dvcmQmc2NvcGU9b3BlbmlkIHByb2ZpbGUgZW1haWwgcm9sZXMmdXNlcm5hbWU9XCIgKyBlbWFpbCArIFwiJnBhc3N3b3JkPVwiICsgcGFzc3dvcmQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3QoJ2Nvbm5lY3QvdG9rZW4nLCBqc29uRGF0YSwgdGhpcy5mb3JtT3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCggcmVzID0+IHJlcy5qc29uKCkgKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICE9IHVuZGVmaW5lZCkge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhfdG9rZW4nLCByZXMuYXV0aF90b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkX3Rva2VuJywgcmVzLmlkX3Rva2VuIC8qcmVzLmF1dGhfdG9rZW4qLyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgLy8gIHRoaXMuYXV0aEh0dHAucG9zdCgnY29ubmVjdC9sb2dvdXQnKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYXV0aF90b2tlbicpO1xyXG4gICAgICAgIHRoaXMubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0xvZ2dlZEluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2dlZEluO1xyXG4gICAgfVxyXG5cclxuICAgIHNpZ251cCh1c2VybmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdmFyIG1vZGVsID0ge1xyXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiB1c2VybmFtZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICBzY29wZTogXCJvcGVuaWQgcHJvZmlsZSBlbWFpbCByb2xlc1wiXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGpzb25EYXRhID0gSlNPTi5zdHJpbmdpZnkobW9kZWwpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwXHJcbiAgICAgICAgICAgIC5wb3N0KCdyZWdpc3Rlci9zaWdudXAnLCBqc29uRGF0YSwgdGhpcy5qc29uT3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIH1cclxufSJdfQ==