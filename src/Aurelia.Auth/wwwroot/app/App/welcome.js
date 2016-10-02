var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-authentication', 'aurelia-framework'], function (require, exports, aurelia_authentication_1, aurelia_framework_1) {
    "use strict";
    var Welcome = (function () {
        function Welcome(authService) {
            this.authService = authService;
            this.heading = 'Welcome to the Aurelia Navigation App!';
            this.firstName = 'John';
            this.lastName = 'Doe';
            this.previousValue = this.fullName;
            this.authService = authService;
            alert(this.authService.authenticated);
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
            __metadata('design:paramtypes', [aurelia_authentication_1.AuthService])
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC93ZWxjb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBS0E7UUFNRSxpQkFBb0IsV0FBd0I7WUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7WUFMckMsWUFBTyxHQUFHLHdDQUF3QyxDQUFDO1lBQ25ELGNBQVMsR0FBRyxNQUFNLENBQUM7WUFDbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztZQUNoQixrQkFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFHbEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFFL0IsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDMUMsQ0FBQzs7UUFPRCxzQkFBSSw2QkFBUTtpQkFBWjtnQkFDRSxNQUFNLENBQUksSUFBSSxDQUFDLFNBQVMsU0FBSSxJQUFJLENBQUMsUUFBVSxDQUFDO1lBQzlDLENBQUM7OztXQUFBO1FBRU0sd0JBQU0sR0FBYjtZQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUNuQyxLQUFLLENBQUMsY0FBWSxJQUFJLENBQUMsUUFBUSxNQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBRU0sK0JBQWEsR0FBcEI7WUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7WUFDcEQsQ0FBQztRQUNILENBQUM7UUEvQkg7WUFBQyw4QkFBVTs7bUJBQUE7UUFnQ1gsY0FBQztJQUFELENBQUMsQUEvQkQsSUErQkM7SUEvQlksZUFBTyxVQStCbkIsQ0FBQTtJQUVEO1FBQUE7UUFJQSxDQUFDO1FBSFEsb0NBQU0sR0FBYixVQUFjLEtBQUs7WUFDakIsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDdEMsQ0FBQztRQUNILDBCQUFDO0lBQUQsQ0FBQyxBQUpELElBSUM7SUFKWSwyQkFBbUIsc0JBSS9CLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge2NvbXB1dGVkRnJvbX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdhdXJlbGlhLWF1dGhlbnRpY2F0aW9uJztcbmltcG9ydCB7IGF1dG9pbmplY3QsIGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBXZWxjb21lIHtcbiAgcHVibGljIGhlYWRpbmcgPSAnV2VsY29tZSB0byB0aGUgQXVyZWxpYSBOYXZpZ2F0aW9uIEFwcCEnO1xuICBwdWJsaWMgZmlyc3ROYW1lID0gJ0pvaG4nO1xuICBwdWJsaWMgbGFzdE5hbWUgPSAnRG9lJztcbiAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlID0gdGhpcy5mdWxsTmFtZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xyXG4gICAgICB0aGlzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XHJcblxyXG4gICAgICBhbGVydCh0aGlzLmF1dGhTZXJ2aWNlLmF1dGhlbnRpY2F0ZWQpO1xyXG4gIH07XHJcblxuICAvLyBHZXR0ZXJzIGNhbid0IGJlIGRpcmVjdGx5IG9ic2VydmVkLCBzbyB0aGV5IG11c3QgYmUgZGlydHkgY2hlY2tlZC5cbiAgLy8gSG93ZXZlciwgaWYgeW91IHRlbGwgQXVyZWxpYSB0aGUgZGVwZW5kZW5jaWVzLCBpdCBubyBsb25nZXIgbmVlZHMgdG8gZGlydHkgY2hlY2sgdGhlIHByb3BlcnR5LlxuICAvLyBUbyBvcHRpbWl6ZSBieSBkZWNsYXJpbmcgdGhlIHByb3BlcnRpZXMgdGhhdCB0aGlzIGdldHRlciBpcyBjb21wdXRlZCBmcm9tLCB1bmNvbW1lbnQgdGhlIGxpbmUgYmVsb3dcbiAgLy8gYXMgd2VsbCBhcyB0aGUgY29ycmVzcG9uZGluZyBpbXBvcnQgYWJvdmUuXG4gIC8vIEBjb21wdXRlZEZyb20oJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScpXG4gIGdldCBmdWxsTmFtZSgpIHtcbiAgICByZXR1cm4gYCR7dGhpcy5maXJzdE5hbWV9ICR7dGhpcy5sYXN0TmFtZX1gO1xuICB9XG5cbiAgcHVibGljIHN1Ym1pdCgpIHtcbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB0aGlzLmZ1bGxOYW1lO1xuICAgIGFsZXJ0KGBXZWxjb21lLCAke3RoaXMuZnVsbE5hbWV9IWApO1xuICB9XG5cbiAgcHVibGljIGNhbkRlYWN0aXZhdGUoKSB7XG4gICAgaWYgKHRoaXMuZnVsbE5hbWUgIT09IHRoaXMucHJldmlvdXNWYWx1ZSkge1xuICAgICAgcmV0dXJuIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsZWF2ZT8nKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFVwcGVyVmFsdWVDb252ZXJ0ZXIge1xuICBwdWJsaWMgdG9WaWV3KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gIH1cbn1cbiJdfQ==