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
        }
        Users.prototype.activate = function () {
            var _this = this;
            return this.http.fetch('https://api.github.com/users')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvdXNlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFLQTtRQUlFLGVBQW9CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFIN0IsWUFBTyxHQUFHLGNBQWMsQ0FBQztZQUN6QixVQUFLLEdBQUcsRUFBRSxDQUFDO1FBUWxCLENBQUM7UUFFTSx3QkFBUSxHQUFmO1lBQUEsaUJBS0M7WUFKRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsOEJBQThCLENBQUM7aUJBRXJELElBQUksQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUM7aUJBQ2pDLElBQUksQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUM7UUFDdkMsQ0FBQztRQWxCSDtZQUFDLDhCQUFVOztpQkFBQTtRQW1CWCxZQUFDO0lBQUQsQ0FBQyxBQWxCRCxJQWtCQztJQWxCWSxhQUFLLFFBa0JqQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthdXRvaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcbmltcG9ydCAnZmV0Y2gnO1xuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIFVzZXJzIHtcbiAgcHVibGljIGhlYWRpbmcgPSAnR2l0aHViIFVzZXJzJztcbiAgcHVibGljIHVzZXJzID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7XG4gICAgLy9odHRwLmNvbmZpZ3VyZShjb25maWcgPT4ge1xuICAgIC8vICBjb25maWdcbiAgICAvLyAgICAudXNlU3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAvLyAgICAud2l0aEJhc2VVcmwoJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vJyk7XG4gICAgLy99KTtcbiAgfVxuXG4gIHB1YmxpYyBhY3RpdmF0ZSgpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMnKVxuICAgIC8vcmV0dXJuIHRoaXMuaHR0cC5mZXRjaCgndXNlcnMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4odXNlcnMgPT4gdGhpcy51c2VycyA9IHVzZXJzKTtcbiAgfVxufVxuIl19