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
var UserService = (function () {
    function UserService(http) {
        this.http = http;
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
                localStorage.setItem('id_token', res.id_token /*res.auth_token*/);
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
            .post('register/signup', jsonData, this.jsonOptions)
            .map(function (res) { return res.json(); });
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkQ6L1NvcmdlbnRpL0ludGVybm8vQ29yZVRlbXBsYXRlcy9zcmMvQW5ndWxhci5BdXRoL2FwcC8iLCJzb3VyY2VzIjpbIkFwcC91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBOEMsZUFBZSxDQUFDLENBQUE7QUFDOUQsUUFBTyxTQUFTLENBQUMsQ0FBQTtBQUdqQjtJQVFJLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVB0QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLGdCQUFXLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBRWhFLGdCQUFXLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBRSxjQUFjLEVBQUUsbUNBQW1DLEVBQUUsQ0FBQyxDQUFDO1FBQ25GLGdCQUFXLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBR3BFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxLQUFhLEVBQUcsUUFBZ0I7UUFBdEMsaUJBZ0JDO1FBZEcsSUFBSSxRQUFRLEdBQUcsZ0VBQWdFLEdBQUcsS0FBSyxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUM7UUFFbEgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNqRCxHQUFHLENBQUUsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFFO2FBQ3hCLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDSixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUNsRSxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3ZELEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLENBQUM7WUFFRCxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBR0QsNEJBQU0sR0FBTjtRQUNJLFlBQVksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLFFBQWdCLEVBQUUsS0FBYSxFQUFFLFFBQWdCO1FBQ3BELElBQUksS0FBSyxHQUFHO1lBQ1IsS0FBSyxFQUFFLEtBQUs7WUFDWixRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsUUFBUTtZQUNsQixLQUFLLEVBQUUsNEJBQTRCO1NBQ3RDLENBQUM7UUFFRixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXJDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSTthQUNYLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNuRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQXRETDtRQUFDLGlCQUFVLEVBQUU7O21CQUFBO0lBdURiLGtCQUFDO0FBQUQsQ0FBQyxBQXRERCxJQXNEQztBQXREWSxtQkFBVyxjQXNEdkIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgbG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUganNvbkhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSk7XHJcbiAgICBwcml2YXRlIGpzb25PcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogdGhpcy5qc29uSGVhZGVycyB9KTtcclxuXHJcbiAgICBwcml2YXRlIGZvcm1IZWFkZXJzID0gbmV3IEhlYWRlcnMoeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgfSk7XHJcbiAgICBwcml2YXRlIGZvcm1PcHRpb25zID0gbmV3IFJlcXVlc3RPcHRpb25zKHsgaGVhZGVyczogdGhpcy5mb3JtSGVhZGVycyB9KTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHtcclxuICAgICAgICB0aGlzLmxvZ2dlZEluID0gISFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXV0aF90b2tlbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2luKGVtYWlsOiBzdHJpbmcgLCBwYXNzd29yZDogc3RyaW5nKSB7IFxyXG5cclxuICAgICAgICB2YXIganNvbkRhdGEgPSBcImdyYW50X3R5cGU9cGFzc3dvcmQmc2NvcGU9b3BlbmlkIHByb2ZpbGUgZW1haWwgcm9sZXMmdXNlcm5hbWU9XCIgKyBlbWFpbCArIFwiJnBhc3N3b3JkPVwiICsgcGFzc3dvcmQ7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBcclxuICAgICAgICAgICAgLnBvc3QoJ2Nvbm5lY3QvdG9rZW4nLCBqc29uRGF0YSwgdGhpcy5mb3JtT3B0aW9ucylcclxuICAgICAgICAgICAgLm1hcCggcmVzID0+IHJlcy5qc29uKCkgKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzICE9IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZF90b2tlbicsIHJlcy5pZF90b2tlbiAvKnJlcy5hdXRoX3Rva2VuKi8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhY2Nlc3NfdG9rZW4nLCByZXMuYWNjZXNzX3Rva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2dlZEluID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcclxuICAgICAgICB0aGlzLmxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNMb2dnZWRJbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2dnZWRJbjtcclxuICAgIH1cclxuXHJcbiAgICBzaWdudXAodXNlcm5hbWU6IHN0cmluZywgZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgICAgIHZhciBtb2RlbCA9IHtcclxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxyXG4gICAgICAgICAgICB1c2VyTmFtZTogdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgc2NvcGU6IFwib3BlbmlkIHByb2ZpbGUgZW1haWwgcm9sZXNcIlxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBqc29uRGF0YSA9IEpTT04uc3RyaW5naWZ5KG1vZGVsKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdCgncmVnaXN0ZXIvc2lnbnVwJywganNvbkRhdGEsIHRoaXMuanNvbk9wdGlvbnMpXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICB9XHJcbn0iXX0=