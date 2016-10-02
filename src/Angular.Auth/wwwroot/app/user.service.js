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
                localStorage.setItem('auth_token', res.auth_token);
                _this.loggedIn = true;
            }
            return res;
        });
    };
    /*
grant_type:password
password:61Palla.
scope:openid profile email roles
username:luca@lucamorelli.it
        */
    UserService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IkQ6L1NvcmdlbnRpL0ludGVybm8vQ29yZVRlbXBsYXRlcy9zcmMvQW5ndWxhci5BdXRoL2FwcC8iLCJzb3VyY2VzIjpbInVzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLHFCQUE4QyxlQUFlLENBQUMsQ0FBQTtBQUM5RCxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBR2pCO0lBUUkscUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBUHRCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUM7UUFDbEUsZ0JBQVcsR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFaEUsZ0JBQVcsR0FBRyxJQUFJLGNBQU8sQ0FBQyxFQUFFLGNBQWMsRUFBRSxtQ0FBbUMsRUFBRSxDQUFDLENBQUM7UUFDbkYsZ0JBQVcsR0FBRyxJQUFJLHFCQUFjLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFHcEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLEtBQUssRUFBRSxRQUFRO1FBQXJCLGlCQWVDO1FBYkcsSUFBSSxRQUFRLEdBQUcsZ0VBQWdFLEdBQUcsS0FBSyxHQUFHLFlBQVksR0FBRyxRQUFRLENBQUM7UUFFbEgsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJO2FBQ1gsSUFBSSxDQUFDLGVBQWUsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQzthQUNqRCxHQUFHLENBQUUsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFFO2FBQ3hCLEdBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDSixFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNuRCxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUN6QixDQUFDO1lBRUQsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVEOzs7OztVQUtNO0lBRU4sNEJBQU0sR0FBTjtRQUNJLFlBQVksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN6QixDQUFDO0lBNUNMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUE2Q2Isa0JBQUM7QUFBRCxDQUFDLEFBNUNELElBNENDO0FBNUNZLG1CQUFXLGNBNEN2QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgJ3J4anMvUngnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBsb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBqc29uSGVhZGVycyA9IG5ldyBIZWFkZXJzKHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9KTtcclxuICAgIHByaXZhdGUganNvbk9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiB0aGlzLmpzb25IZWFkZXJzIH0pO1xyXG5cclxuICAgIHByaXZhdGUgZm9ybUhlYWRlcnMgPSBuZXcgSGVhZGVycyh7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyB9KTtcclxuICAgIHByaXZhdGUgZm9ybU9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiB0aGlzLmZvcm1IZWFkZXJzIH0pO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xyXG4gICAgICAgIHRoaXMubG9nZ2VkSW4gPSAhIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhdXRoX3Rva2VuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oZW1haWwsIHBhc3N3b3JkKSB7XHJcblxyXG4gICAgICAgIHZhciBqc29uRGF0YSA9IFwiZ3JhbnRfdHlwZT1wYXNzd29yZCZzY29wZT1vcGVuaWQgcHJvZmlsZSBlbWFpbCByb2xlcyZ1c2VybmFtZT1cIiArIGVtYWlsICsgXCImcGFzc3dvcmQ9XCIgKyBwYXNzd29yZDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFxyXG4gICAgICAgICAgICAucG9zdCgnY29ubmVjdC90b2tlbicsIGpzb25EYXRhLCB0aGlzLmZvcm1PcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKCByZXMgPT4gcmVzLmpzb24oKSApXHJcbiAgICAgICAgICAgIC5tYXAocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2F1dGhfdG9rZW4nLCByZXMuYXV0aF90b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dnZWRJbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogXHJcbmdyYW50X3R5cGU6cGFzc3dvcmRcclxucGFzc3dvcmQ6NjFQYWxsYS5cclxuc2NvcGU6b3BlbmlkIHByb2ZpbGUgZW1haWwgcm9sZXNcclxudXNlcm5hbWU6bHVjYUBsdWNhbW9yZWxsaS5pdFxyXG4gICAgICAgICovXHJcblxyXG4gICAgbG9nb3V0KCkge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhdXRoX3Rva2VuJyk7XHJcbiAgICAgICAgdGhpcy5sb2dnZWRJbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTG9nZ2VkSW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nZ2VkSW47XHJcbiAgICB9XHJcbn0iXX0=