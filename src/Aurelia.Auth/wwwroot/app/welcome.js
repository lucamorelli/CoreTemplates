var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-authentication', 'aurelia-framework', 'aurelia-fetch-client'], function (require, exports, aurelia_authentication_1, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var Welcome = (function () {
        function Welcome(authService, httpClient, fetchConfig) {
            this.authService = authService;
            this.httpClient = httpClient;
            this.fetchConfig = fetchConfig;
            this.heading = 'Welcome to the Aurelia Navigation App!';
            this.firstName = 'John';
            this.lastName = 'Doe';
            this.previousValue = this.fullName;
            if (authService.authenticated) {
                var client = this.fetchConfig.configure(new aurelia_fetch_client_1.HttpClient());
                client.fetch('/api/message', {
                    method: 'get',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                })
                    .then(function (response) {
                    if (response.ok) {
                        response.text().then(function (testo) {
                            alert(testo);
                        });
                    }
                });
            }
        }
        ;
        Object.defineProperty(Welcome.prototype, "fullName", {
            get: function () {
                return this.firstName + " " + this.lastName;
            },
            enumerable: true,
            configurable: true
        });
        Welcome.prototype.submit = function () {
            this.previousValue = this.fullName;
            alert("Welcome, " + this.fullName + "!");
        };
        Welcome.prototype.canDeactivate = function () {
            if (this.fullName !== this.previousValue) {
                return confirm('Are you sure you want to leave?');
            }
        };
        Welcome = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_authentication_1.AuthService, aurelia_fetch_client_1.HttpClient, aurelia_authentication_1.FetchConfig])
        ], Welcome);
        return Welcome;
    }());
    exports.Welcome = Welcome;
    var UpperValueConverter = (function () {
        function UpperValueConverter() {
        }
        UpperValueConverter.prototype.toView = function (value) {
            return value && value.toUpperCase();
        };
        return UpperValueConverter;
    }());
    exports.UpperValueConverter = UpperValueConverter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC93ZWxjb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBUUE7UUFNRSxpQkFBb0IsV0FBd0IsRUFBVSxVQUFzQixFQUFVLFdBQXdCO1lBQTFGLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtZQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBTHZHLFlBQU8sR0FBRyx3Q0FBd0MsQ0FBQztZQUNuRCxjQUFTLEdBQUcsTUFBTSxDQUFDO1lBQ25CLGFBQVEsR0FBRyxLQUFLLENBQUM7WUFDaEIsa0JBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBSWxDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixJQUFJLE1BQU0sR0FBUSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxJQUFJLGlDQUFVLEVBQUUsQ0FBQyxDQUFDO2dCQUUvRCxNQUFNLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFBRTtvQkFDekIsTUFBTSxFQUFFLEtBQUs7b0JBRWIsT0FBTyxFQUFFO3dCQUNMLGNBQWMsRUFBRSxrQkFBa0I7d0JBQ2xDLFFBQVEsRUFBRSxrQkFBa0I7cUJBQy9CO2lCQUNKLENBQUM7cUJBQ0QsSUFBSSxDQUFDLFVBQUMsUUFBa0I7b0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3dCQUNkLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLOzRCQUN0QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ2pCLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDTixDQUFDO1FBYU4sQ0FBQzs7UUFPRCxzQkFBSSw2QkFBUTtpQkFBWjtnQkFDRSxNQUFNLENBQUksSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBVSxDQUFDO1lBQzlDLENBQUM7OztXQUFBO1FBRU0sd0JBQU0sR0FBYjtZQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxLQUFLLENBQUMsY0FBWSxJQUFJLENBQUMsUUFBUSxNQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRU0sK0JBQWEsR0FBcEI7WUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDcEQsQ0FBQztRQUNILENBQUM7UUE1REg7WUFBQyw4QkFBVTs7bUJBQUE7UUE2RFgsY0FBQztJQUFELENBQUMsQUE1REQsSUE0REM7SUE1RFksZUFBTyxVQTREbkIsQ0FBQTtJQUVEO1FBQUE7UUFJQSxDQUFDO1FBSFEsb0NBQU0sR0FBYixVQUFjLEtBQUs7WUFDakIsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsQ0FBQztRQUNILDBCQUFDO0lBQUQsQ0FBQyxBQUpELElBSUM7SUFKWSwyQkFBbUIsc0JBSS9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wdXRlZEZyb20gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBGZXRjaENvbmZpZyB9IGZyb20gJ2F1cmVsaWEtYXV0aGVudGljYXRpb24nO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xyXG5pbXBvcnQgeyBFbmRwb2ludCB9IGZyb20gJ2F1cmVsaWEtYXBpJztcclxuXHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgV2VsY29tZSB7XHJcbiAgcHVibGljIGhlYWRpbmcgPSAnV2VsY29tZSB0byB0aGUgQXVyZWxpYSBOYXZpZ2F0aW9uIEFwcCEnO1xyXG4gIHB1YmxpYyBmaXJzdE5hbWUgPSAnSm9obic7XHJcbiAgcHVibGljIGxhc3ROYW1lID0gJ0RvZSc7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlID0gdGhpcy5mdWxsTmFtZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCwgcHJpdmF0ZSBmZXRjaENvbmZpZzogRmV0Y2hDb25maWcpIHtcclxuXHJcbiAgICAgIGlmIChhdXRoU2VydmljZS5hdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICB2YXIgY2xpZW50OiBhbnkgPSB0aGlzLmZldGNoQ29uZmlnLmNvbmZpZ3VyZShuZXcgSHR0cENsaWVudCgpKTtcclxuXHJcbiAgICAgICAgICBjbGllbnQuZmV0Y2goJy9hcGkvbWVzc2FnZScsIHtcclxuICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgICAgICAgIC8vYm9keTogSlNPTi5zdHJpbmdpZnkoYXV0aCksXHJcbiAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZTogUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpLnRoZW4odGVzdG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxlcnQodGVzdG8pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgIH1cclxuICAgICAgLy9pZiAoYXV0aFNlcnZpY2UuYXV0aGVudGljYXRlZCkge1xyXG4gICAgICAvLyAgICBhcGlFbmRQb2ludC5maW5kKCcvbWVzc2FnZScpXHJcbiAgICAgIC8vICAgIC50aGVuKChyZXNwb25zZTogUmVzcG9uc2UpID0+e1xyXG4gICAgICAvLyAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgIC8vICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpLnRoZW4odGVzdG8gPT4ge1xyXG4gICAgICAvLyAgICAgICAgICAgICAgICBhbGVydCh0ZXN0byk7XHJcbiAgICAgIC8vICAgICAgICAgICAgfSk7XHJcbiAgICAgIC8vICAgICAgfVxyXG4gICAgICAvLyAgICAgICAgfSlcclxuICAgICAgLy8gICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuXHJcbiAgICAgIC8vfVxyXG4gIH07XHJcblxyXG4gIC8vIEdldHRlcnMgY2FuJ3QgYmUgZGlyZWN0bHkgb2JzZXJ2ZWQsIHNvIHRoZXkgbXVzdCBiZSBkaXJ0eSBjaGVja2VkLlxyXG4gIC8vIEhvd2V2ZXIsIGlmIHlvdSB0ZWxsIEF1cmVsaWEgdGhlIGRlcGVuZGVuY2llcywgaXQgbm8gbG9uZ2VyIG5lZWRzIHRvIGRpcnR5IGNoZWNrIHRoZSBwcm9wZXJ0eS5cclxuICAvLyBUbyBvcHRpbWl6ZSBieSBkZWNsYXJpbmcgdGhlIHByb3BlcnRpZXMgdGhhdCB0aGlzIGdldHRlciBpcyBjb21wdXRlZCBmcm9tLCB1bmNvbW1lbnQgdGhlIGxpbmUgYmVsb3dcclxuICAvLyBhcyB3ZWxsIGFzIHRoZSBjb3JyZXNwb25kaW5nIGltcG9ydCBhYm92ZS5cclxuICAvLyBAY29tcHV0ZWRGcm9tKCdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnKVxyXG4gIGdldCBmdWxsTmFtZSgpIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3VibWl0KCkge1xyXG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5mdWxsTmFtZTtcclxuICAgIGFsZXJ0KGBXZWxjb21lLCAke3RoaXMuZnVsbE5hbWV9IWApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbkRlYWN0aXZhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5mdWxsTmFtZSAhPT0gdGhpcy5wcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmU/Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBwZXJWYWx1ZUNvbnZlcnRlciB7XHJcbiAgcHVibGljIHRvVmlldyh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==