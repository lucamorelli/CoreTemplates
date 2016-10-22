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
require('rxjs/Rx');
var request_options_services_1 = require('./request-options.services');
var UserService = (function () {
    //private jsonHeaders = new Headers({ 'Content-Type': 'application/json' });
    //private jsonOptions = new RequestOptions({ headers: this.jsonHeaders });
    //private formHeaders = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    //private formOptions = new RequestOptions({ headers: this.formHeaders });
    function UserService(http, requestOptions) {
        this.http = http;
        this.requestOptions = requestOptions;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('access_token');
    }
    UserService.prototype.login = function (email, password) {
        var _this = this;
        var jsonData = "grant_type=password&scope=openid profile email roles&username=" + email + "&password=" + password;
        return this.http
            .post('connect/token', jsonData, this.requestOptions.form)
            .map(function (res) { return res.json(); })
            .map(function (res) {
            if (res != undefined) {
                localStorage.setItem('access_token', res.access_token);
                _this.loggedIn = true;
            }
            return res;
        });
    };
    UserService.prototype.logout = function () {
        localStorage.removeItem('access_token');
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
            .post('connect/signup', jsonData, this.requestOptions.json)
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, request_options_services_1.RequestOptionsServices])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkQ6L1NvcmdlbnRpL0ludGVybm8vQ29yZVRlbXBsYXRlcy9zcmMvQW5ndWxhci5BdXRoL2FwcC8iLCJzb3VyY2VzIjpbIkFwcC91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBOEMsZUFBZSxDQUFDLENBQUE7QUFDOUQsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUNqQix5Q0FBdUMsNEJBQTRCLENBQUMsQ0FBQTtBQUlwRTtJQUVJLDRFQUE0RTtJQUM1RSwwRUFBMEU7SUFFMUUsNkZBQTZGO0lBQzdGLDBFQUEwRTtJQUUxRSxxQkFBb0IsSUFBVSxFQUFVLGNBQXNDO1FBQTFELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7UUFQdEUsYUFBUSxHQUFHLEtBQUssQ0FBQztRQVFyQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRCwyQkFBSyxHQUFMLFVBQU0sS0FBYSxFQUFHLFFBQWdCO1FBQXRDLGlCQWVDO1FBYkcsSUFBSSxRQUFRLEdBQUcsZ0VBQWdFLEdBQUcsS0FBSyxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUM7UUFFbEgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7YUFDekQsR0FBRyxDQUFFLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBRTthQUN4QixHQUFHLENBQUMsVUFBQSxHQUFHO1lBQ0osRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQ25CLFlBQVksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdkQsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDekIsQ0FBQztZQUVELE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDZixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFHRCw0QkFBTSxHQUFOO1FBQ0ksWUFBWSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0NBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sUUFBZ0IsRUFBRSxLQUFhLEVBQUUsUUFBZ0I7UUFDcEQsSUFBSSxLQUFLLEdBQUc7WUFDUixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLEtBQUssRUFBRSw0QkFBNEI7U0FDdEMsQ0FBQztRQUVGLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFckMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQzthQUMxRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQXJETDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBc0RiLGtCQUFDO0FBQUQsQ0FBQyxBQXJERCxJQXFEQztBQXJEWSxtQkFBVyxjQXFEdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0IHsgUmVxdWVzdE9wdGlvbnNTZXJ2aWNlcyB9IGZyb20gJy4vcmVxdWVzdC1vcHRpb25zLnNlcnZpY2VzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICAvL3ByaXZhdGUganNvbkhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICAvL3ByaXZhdGUganNvbk9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiB0aGlzLmpzb25IZWFkZXJzIH0pO1xyXG5cclxuICAgIC8vcHJpdmF0ZSBmb3JtSGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnIH0pO1xyXG4gICAgLy9wcml2YXRlIGZvcm1PcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogdGhpcy5mb3JtSGVhZGVycyB9KTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgcmVxdWVzdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zU2VydmljZXMpIHtcclxuICAgICAgICB0aGlzLmxvZ2dlZEluID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWNjZXNzX3Rva2VuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oZW1haWw6IHN0cmluZyAsIHBhc3N3b3JkOiBzdHJpbmcpIHsgXHJcblxyXG4gICAgICAgIHZhciBqc29uRGF0YSA9IFwiZ3JhbnRfdHlwZT1wYXNzd29yZCZzY29wZT1vcGVuaWQgcHJvZmlsZSBlbWFpbCByb2xlcyZ1c2VybmFtZT1cIiArIGVtYWlsICsgXCImcGFzc3dvcmQ9XCIgKyBwYXNzd29yZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdCgnY29ubmVjdC90b2tlbicsIGpzb25EYXRhLCB0aGlzLnJlcXVlc3RPcHRpb25zLmZvcm0pXHJcbiAgICAgICAgICAgIC5tYXAoIHJlcyA9PiByZXMuanNvbigpIClcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcyAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWNjZXNzX3Rva2VuJywgcmVzLmFjY2Vzc190b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGxvZ291dCgpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYWNjZXNzX3Rva2VuJyk7XHJcbiAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VkSW47XHJcbiAgICB9XHJcblxyXG4gICAgc2lnbnVwKHVzZXJuYW1lOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgICAgICB2YXIgbW9kZWwgPSB7XHJcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcclxuICAgICAgICAgICAgdXNlck5hbWU6IHVzZXJuYW1lLFxyXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIHNjb3BlOiBcIm9wZW5pZCBwcm9maWxlIGVtYWlsIHJvbGVzXCJcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIganNvbkRhdGEgPSBKU09OLnN0cmluZ2lmeShtb2RlbCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3QoJ2Nvbm5lY3Qvc2lnbnVwJywganNvbkRhdGEsIHRoaXMucmVxdWVzdE9wdGlvbnMuanNvbilcclxuICAgICAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIH1cclxufSJdfQ==