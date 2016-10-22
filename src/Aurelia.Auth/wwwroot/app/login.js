var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-authentication', 'aurelia-dependency-injection', 'aurelia-event-aggregator', 'aurelia-router'], function (require, exports, aurelia_authentication_1, aurelia_dependency_injection_1, aurelia_event_aggregator_1, aurelia_router_1) {
    "use strict";
    var Login = (function () {
        function Login(auth, eventAggregator, router) {
            this.auth = auth;
            this.eventAggregator = eventAggregator;
            this.router = router;
            this.heading = 'Login';
        }
        ;
        Login.prototype.login = function () {
            var _this = this;
            var loginOptions = {
                username: this.username,
                password: this.password,
                grant_type: 'password',
                scope: 'openid profile email roles'
            };
            return this.auth.login(loginOptions)
                .then(function (response) {
                console.log("success logged " + response);
                _this.router.navigate('/');
            })
                .catch(function (err) {
                err.json().then(function (e) {
                    alert(e.message);
                    console.log("login failure : " + e.message);
                });
            });
        };
        ;
        Login.prototype.authenticate = function (name) {
            return this.auth.authenticate(name)
                .then(function (response) {
            });
        };
        Login = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_authentication_1.AuthService, aurelia_event_aggregator_1.EventAggregator, aurelia_router_1.Router])
        ], Login);
        return Login;
    }());
    exports.Login = Login;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFNQTtRQUtJLGVBQW9CLElBQWlCLEVBQVUsZUFBZ0MsRUFBVSxNQUFjO1lBQW5GLFNBQUksR0FBSixJQUFJLENBQWE7WUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBRnZHLFlBQU8sR0FBVyxPQUFPLENBQUM7UUFHMUIsQ0FBQzs7UUFFRCxxQkFBSyxHQUFMO1lBQUEsaUJBb0JDO1lBbkJHLElBQUksWUFBWSxHQUFHO2dCQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsS0FBSyxFQUFFLDRCQUE0QjthQUN0QyxDQUFDO1lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztpQkFDL0IsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxDQUFDO2dCQUUxQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztnQkFDTixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDdkIsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hELENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDOztRQUVELDRCQUFZLEdBQVosVUFBYSxJQUFJO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztpQkFDOUIsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNmLENBQUMsQ0FBQyxDQUFDO1FBRVgsQ0FBQztRQXBDTDtZQUFDLHlDQUFVOztpQkFBQTtRQXFDWCxZQUFDO0lBQUQsQ0FBQyxBQXBDRCxJQW9DQztJQXBDWSxhQUFLLFFBb0NqQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdhdXJlbGlhLWF1dGhlbnRpY2F0aW9uJztcbmltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbkBhdXRvaW5qZWN0XG5leHBvcnQgY2xhc3MgTG9naW4ge1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICBoZWFkaW5nOiBzdHJpbmcgPSAnTG9naW4nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIH07XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgbGV0IGxvZ2luT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICBncmFudF90eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgc2NvcGU6ICdvcGVuaWQgcHJvZmlsZSBlbWFpbCByb2xlcydcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aC5sb2dpbihsb2dpbk9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzIGxvZ2dlZCBcIiArIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdhdXRoQ2hhbmdlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKCcvJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgZXJyLmpzb24oKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gZmFpbHVyZSA6IFwiICsgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGF1dGhlbnRpY2F0ZShuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGguYXV0aGVudGljYXRlKG5hbWUpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxufVxuIl19