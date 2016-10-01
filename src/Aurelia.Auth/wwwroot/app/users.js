var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client', 'fetch'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var Users = (function () {
        function Users(http) {
            this.http = http;
            this.heading = 'Github Users';
            this.users = [];
            http.configure(function (config) {
                config
                    .useStandardConfiguration()
                    .withBaseUrl('https://api.github.com/');
            });
        }
        Users.prototype.activate = function () {
            var _this = this;
            return this.http.fetch('users')
                .then(function (response) { return response.json(); })
                .then(function (users) { return _this.users = users; });
        };
        Users = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], Users);
        return Users;
    }());
    exports.Users = Users;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFLQTtRQUlFLGVBQW9CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFIN0IsWUFBTyxHQUFHLGNBQWMsQ0FBQztZQUN6QixVQUFLLEdBQUcsRUFBRSxDQUFDO1lBR2hCLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO2dCQUNuQixNQUFNO3FCQUNILHdCQUF3QixFQUFFO3FCQUMxQixXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUM1QyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFTSx3QkFBUSxHQUFmO1lBQUEsaUJBSUM7WUFIQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2lCQUM1QixJQUFJLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQWYsQ0FBZSxDQUFDO2lCQUNqQyxJQUFJLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7UUFqQkg7WUFBQyw4QkFBVTs7aUJBQUE7UUFrQlgsWUFBQztJQUFELENBQUMsQUFqQkQsSUFpQkM7SUFqQlksYUFBSyxRQWlCakIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXV0b2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XG5pbXBvcnQgJ2ZldGNoJztcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBVc2VycyB7XG4gIHB1YmxpYyBoZWFkaW5nID0gJ0dpdGh1YiBVc2Vycyc7XG4gIHB1YmxpYyB1c2VycyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkge1xuICAgIGh0dHAuY29uZmlndXJlKGNvbmZpZyA9PiB7XG4gICAgICBjb25maWdcbiAgICAgICAgLnVzZVN0YW5kYXJkQ29uZmlndXJhdGlvbigpXG4gICAgICAgIC53aXRoQmFzZVVybCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS8nKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhY3RpdmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmZldGNoKCd1c2VycycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbih1c2VycyA9PiB0aGlzLnVzZXJzID0gdXNlcnMpO1xuICB9XG59XG4iXX0=