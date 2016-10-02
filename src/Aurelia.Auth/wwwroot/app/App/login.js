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
            this.heading = 'Login';
            this.auth = auth;
            this.eventAggregator = eventAggregator;
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
            aurelia_dependency_injection_1.inject(aurelia_authentication_1.AuthService, aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [aurelia_authentication_1.AuthService, aurelia_event_aggregator_1.EventAggregator])
        ], Login);
        return Login;
    }());
    exports.Login = Login;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9BcHAvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFLQTtRQU9JLGVBQVksSUFBaUIsRUFBRSxlQUFnQztZQUgvRCxZQUFPLEdBQVcsT0FBTyxDQUFDO1lBSXRCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO1FBQzNDLENBQUM7O1FBRUQscUJBQUssR0FBTDtZQUFBLGlCQW1CQztZQWxCRyxJQUFJLFlBQVksR0FBRztnQkFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLEtBQUssRUFBRSw0QkFBNEI7YUFDdEMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7aUJBQy9CLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQ3ZCLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoRCxDQUFDLENBQUMsQ0FBQztZQUVQLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQzs7UUFFRCw0QkFBWSxHQUFaLFVBQWEsSUFBSTtZQUNiLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQztpQkFDM0MsSUFBSSxDQUFDLFVBQUMsUUFBUTtZQUNmLENBQUMsQ0FBQyxDQUFDO1FBRVgsQ0FBQztRQXZDTDtZQUFDLHFDQUFNLENBQUMsb0NBQVcsRUFBRSwwQ0FBZSxDQUFDOztpQkFBQTtRQXdDckMsWUFBQztJQUFELENBQUMsQUF2Q0QsSUF1Q0M7SUF2Q1ksYUFBSyxRQXVDakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnYXVyZWxpYS1hdXRoZW50aWNhdGlvbic7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5cbkBpbmplY3QoQXV0aFNlcnZpY2UsIEV2ZW50QWdncmVnYXRvcilcbmV4cG9ydCBjbGFzcyBMb2dpbiB7XG4gICAgYXV0aDogQXV0aFNlcnZpY2U7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIGhlYWRpbmc6IHN0cmluZyA9ICdMb2dpbic7XG4gICAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XG5cbiAgICBjb25zdHJ1Y3RvcihhdXRoOiBBdXRoU2VydmljZSwgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IpIHtcbiAgICAgICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBldmVudEFnZ3JlZ2F0b3I7XG4gICAgfTtcblxuICAgIGxvZ2luKCkge1xuICAgICAgICBsZXQgbG9naW5PcHRpb25zID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgIGdyYW50X3R5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICBzY29wZTogJ29wZW5pZCBwcm9maWxlIGVtYWlsIHJvbGVzJ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoLmxvZ2luKGxvZ2luT3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgbG9nZ2VkIFwiICsgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ2F1dGhDaGFuZ2VkJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgZXJyLmpzb24oKS50aGVuKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGUubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gZmFpbHVyZSA6IFwiICsgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGF1dGhlbnRpY2F0ZShuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF1dGguYXV0aGVudGljYXRlKG5hbWUsIGZhbHNlLCBudWxsKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB9KTtcblxuICAgIH1cbn1cbiJdfQ==