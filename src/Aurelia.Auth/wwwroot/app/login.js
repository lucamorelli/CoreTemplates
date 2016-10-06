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
            return this.auth.authenticate(name, false, null)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFNQTtRQUtJLGVBQW9CLElBQWlCLEVBQVUsZUFBZ0MsRUFBVSxNQUFjO1lBQW5GLFNBQUksR0FBSixJQUFJLENBQWE7WUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBRnZHLFlBQU8sR0FBVyxPQUFPLENBQUM7UUFHMUIsQ0FBQzs7UUFFRCxxQkFBSyxHQUFMO1lBQUEsaUJBb0JDO1lBbkJHLElBQUksWUFBWSxHQUFHO2dCQUNmLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtnQkFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixVQUFVLEVBQUUsVUFBVTtnQkFDdEIsS0FBSyxFQUFFLDRCQUE0QjthQUN0QyxDQUFDO1lBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQztpQkFDL0IsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxDQUFDO2dCQUUxQyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztnQkFDTixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztvQkFDdkIsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hELENBQUMsQ0FBQyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDOztRQUVELDRCQUFZLEdBQVosVUFBYSxJQUFJO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDO2lCQUMzQyxJQUFJLENBQUMsVUFBQyxRQUFRO1lBQ2YsQ0FBQyxDQUFDLENBQUM7UUFFWCxDQUFDO1FBcENMO1lBQUMseUNBQVU7O2lCQUFBO1FBcUNYLFlBQUM7SUFBRCxDQUFDLEFBcENELElBb0NDO0lBcENZLGFBQUssUUFvQ2pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ2F1cmVsaWEtYXV0aGVudGljYXRpb24nO1xuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBMb2dpbiB7XG4gICAgdXNlcm5hbWU6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIGhlYWRpbmc6IHN0cmluZyA9ICdMb2dpbic7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yLCBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgfTtcblxuICAgIGxvZ2luKCkge1xuICAgICAgICBsZXQgbG9naW5PcHRpb25zID0ge1xuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgIGdyYW50X3R5cGU6ICdwYXNzd29yZCcsXG4gICAgICAgICAgICBzY29wZTogJ29wZW5pZCBwcm9maWxlIGVtYWlsIHJvbGVzJ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5hdXRoLmxvZ2luKGxvZ2luT3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MgbG9nZ2VkIFwiICsgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ2F1dGhDaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoJy8nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBlcnIuanNvbigpLnRoZW4oZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiBmYWlsdXJlIDogXCIgKyBlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgYXV0aGVudGljYXRlKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aC5hdXRoZW50aWNhdGUobmFtZSwgZmFsc2UsIG51bGwpXG4gICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgfVxufVxuIl19