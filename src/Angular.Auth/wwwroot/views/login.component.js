var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-authentication', 'aurelia-dependency-injection', 'aurelia-event-aggregator'], function (require, exports, aurelia_authentication_1, aurelia_dependency_injection_1, aurelia_event_aggregator_1) {
    "use strict";
    var Login = (function () {
        function Login(auth, eventAggregator) {
            this.auth = auth;
            this.eventAggregator = eventAggregator;
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
                _this.eventAggregator.publish('authChanged');
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
            return this.auth.authenticate(name, false, null)
                .then(function (response) {
            });
        };
        Login = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_authentication_1.AuthService, aurelia_event_aggregator_1.EventAggregator])
        ], Login);
        return Login;
    }());
    exports.Login = Login;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFLQTtRQUtJLGVBQW9CLElBQWlCLEVBQVUsZUFBZ0M7WUFBM0QsU0FBSSxHQUFKLElBQUksQ0FBYTtZQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQUYvRSxZQUFPLEdBQVcsT0FBTyxDQUFDO1FBRzFCLENBQUM7O1FBRUQscUJBQUssR0FBTDtZQUFBLGlCQW1CQztZQWxCRyxJQUFJLFlBQVksR0FBRztnQkFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLEtBQUssRUFBRSw0QkFBNEI7YUFDdEMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7aUJBQy9CLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxDQUFDLENBQUMsQ0FBQztZQUVQLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQzs7UUFFRCw0QkFBWSxHQUFaLFVBQWEsSUFBSTtZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQztpQkFDM0MsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNmLENBQUMsQ0FBQyxDQUFDO1FBRVgsQ0FBQztRQW5DTDtZQUFDLHlDQUFVOztpQkFBQTtRQW9DWCxZQUFDO0lBQUQsQ0FBQyxBQW5DRCxJQW1DQztJQW5DWSxhQUFLLFFBbUNqQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdhdXJlbGlhLWF1dGhlbnRpY2F0aW9uJztcbmltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5cbkBhdXRvaW5qZWN0XG5leHBvcnQgY2xhc3MgTG9naW4ge1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICBoZWFkaW5nOiBzdHJpbmcgPSAnTG9naW4nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoOiBBdXRoU2VydmljZSwgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcikge1xuICAgIH07XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgbGV0IGxvZ2luT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICBncmFudF90eXBlOiAncGFzc3dvcmQnLFxuICAgICAgICAgICAgc2NvcGU6ICdvcGVuaWQgcHJvZmlsZSBlbWFpbCByb2xlcydcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aC5sb2dpbihsb2dpbk9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzIGxvZ2dlZCBcIiArIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdhdXRoQ2hhbmdlZCcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGVyci5qc29uKCkudGhlbihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luIGZhaWx1cmUgOiBcIiArIGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBhdXRoZW50aWNhdGUobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoLmF1dGhlbnRpY2F0ZShuYW1lLCBmYWxzZSwgbnVsbClcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9XG59XG4iXX0=