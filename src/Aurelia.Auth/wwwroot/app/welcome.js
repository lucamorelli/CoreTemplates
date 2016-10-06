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
        function Welcome(authService, httpClient) {
            this.authService = authService;
            this.httpClient = httpClient;
            this.heading = 'Welcome to the Aurelia Navigation App!';
            this.firstName = 'John';
            this.lastName = 'Doe';
            this.previousValue = this.fullName;
            httpClient.fetch('/api/message', {
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
            __metadata('design:paramtypes', [aurelia_authentication_1.AuthService, aurelia_fetch_client_1.HttpClient])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC93ZWxjb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBTUE7UUFNRSxpQkFBb0IsV0FBd0IsRUFBVSxVQUFzQjtZQUF4RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7WUFMckUsWUFBTyxHQUFHLHdDQUF3QyxDQUFDO1lBQ25ELGNBQVMsR0FBRyxNQUFNLENBQUM7WUFDbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztZQUNoQixrQkFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFJbEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUE7Z0JBQzNCLE1BQU0sRUFBRSxLQUFLO2dCQUViLE9BQU8sRUFBRTtvQkFDTCxjQUFjLEVBQUUsa0JBQWtCO29CQUNsQyxRQUFRLEVBQUUsa0JBQWtCO2lCQUMvQjthQUNKLENBQUM7aUJBQ0csSUFBSSxDQUFDLFVBQUMsUUFBa0I7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNkLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLO3dCQUN0QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pCLENBQUMsQ0FBQyxDQUFDO2dCQUNULENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7O1FBT0Qsc0JBQUksNkJBQVE7aUJBQVo7Z0JBQ0UsTUFBTSxDQUFJLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVUsQ0FBQztZQUM5QyxDQUFDOzs7V0FBQTtRQUVNLHdCQUFNLEdBQWI7WUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbkMsS0FBSyxDQUFDLGNBQVksSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVNLCtCQUFhLEdBQXBCO1lBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQ3BELENBQUM7UUFDSCxDQUFDO1FBNUNIO1lBQUMsOEJBQVU7O21CQUFBO1FBNkNYLGNBQUM7SUFBRCxDQUFDLEFBNUNELElBNENDO0lBNUNZLGVBQU8sVUE0Q25CLENBQUE7SUFFRDtRQUFBO1FBSUEsQ0FBQztRQUhRLG9DQUFNLEdBQWIsVUFBYyxLQUFLO1lBQ2pCLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLENBQUM7UUFDSCwwQkFBQztJQUFELENBQUMsQUFKRCxJQUlDO0lBSlksMkJBQW1CLHNCQUkvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtjb21wdXRlZEZyb219IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdhdXJlbGlhLWF1dGhlbnRpY2F0aW9uJztcclxuaW1wb3J0IHsgYXV0b2luamVjdCwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgV2VsY29tZSB7XHJcbiAgcHVibGljIGhlYWRpbmcgPSAnV2VsY29tZSB0byB0aGUgQXVyZWxpYSBOYXZpZ2F0aW9uIEFwcCEnO1xyXG4gIHB1YmxpYyBmaXJzdE5hbWUgPSAnSm9obic7XHJcbiAgcHVibGljIGxhc3ROYW1lID0gJ0RvZSc7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlID0gdGhpcy5mdWxsTmFtZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkge1xyXG5cclxuICAgICAgaHR0cENsaWVudC5mZXRjaCgnL2FwaS9tZXNzYWdlJ3tcclxuICAgICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgICAvL2JvZHk6IEpTT04uc3RyaW5naWZ5KGF1dGgpLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlOiBSZXNwb25zZSkgPT57XHJcbiAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnRleHQoKS50aGVuKHRlc3RvID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KHRlc3RvKTtcclxuICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEdldHRlcnMgY2FuJ3QgYmUgZGlyZWN0bHkgb2JzZXJ2ZWQsIHNvIHRoZXkgbXVzdCBiZSBkaXJ0eSBjaGVja2VkLlxyXG4gIC8vIEhvd2V2ZXIsIGlmIHlvdSB0ZWxsIEF1cmVsaWEgdGhlIGRlcGVuZGVuY2llcywgaXQgbm8gbG9uZ2VyIG5lZWRzIHRvIGRpcnR5IGNoZWNrIHRoZSBwcm9wZXJ0eS5cclxuICAvLyBUbyBvcHRpbWl6ZSBieSBkZWNsYXJpbmcgdGhlIHByb3BlcnRpZXMgdGhhdCB0aGlzIGdldHRlciBpcyBjb21wdXRlZCBmcm9tLCB1bmNvbW1lbnQgdGhlIGxpbmUgYmVsb3dcclxuICAvLyBhcyB3ZWxsIGFzIHRoZSBjb3JyZXNwb25kaW5nIGltcG9ydCBhYm92ZS5cclxuICAvLyBAY29tcHV0ZWRGcm9tKCdmaXJzdE5hbWUnLCAnbGFzdE5hbWUnKVxyXG4gIGdldCBmdWxsTmFtZSgpIHtcclxuICAgIHJldHVybiBgJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfWA7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3VibWl0KCkge1xyXG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5mdWxsTmFtZTtcclxuICAgIGFsZXJ0KGBXZWxjb21lLCAke3RoaXMuZnVsbE5hbWV9IWApO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNhbkRlYWN0aXZhdGUoKSB7XHJcbiAgICBpZiAodGhpcy5mdWxsTmFtZSAhPT0gdGhpcy5wcmV2aW91c1ZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbGVhdmU/Jyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVXBwZXJWYWx1ZUNvbnZlcnRlciB7XHJcbiAgcHVibGljIHRvVmlldyh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==