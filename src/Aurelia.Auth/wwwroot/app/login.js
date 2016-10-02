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
    var Login = (function () {
        function Login(authService) {
            this.authService = authService;
            this.heading = 'Login';
            this.email = '';
            this.password = '';
            this.authService = authService;
        }
        ;
        Object.defineProperty(Login.prototype, "authenticated", {
            get: function () {
                return this.authService.authenticated;
            },
            enumerable: true,
            configurable: true
        });
        Login.prototype.login = function () {
            return this.authService.login(this.email, this.password)
                .then(function (response) {
                console.log("success logged " + response);
            })
                .catch(function (err) {
                console.log("login failure");
            });
        };
        ;
        Login.prototype.authenticate = function (name) {
            return this.authService.authenticate(name)
                .then(function (response) {
                console.log("auth response " + response);
            });
        };
        __decorate([
            aurelia_framework_1.computedFrom('authService.authenticated'), 
            __metadata('design:type', Object)
        ], Login.prototype, "authenticated", null);
        Login = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_authentication_1.AuthService])
        ], Login);
        return Login;
    }());
    exports.Login = Login;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9BcHAvbG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFJQTtRQUNJLGVBQW9CLFdBQXdCO1lBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBSTVDLFlBQU8sR0FBRyxPQUFPLENBQUM7WUFFbEIsVUFBSyxHQUFHLEVBQUUsQ0FBQztZQUNYLGFBQVEsR0FBRyxFQUFFLENBQUM7WUFOVixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxDQUFDOztRQVVELHNCQUFJLGdDQUFhO2lCQUFqQjtnQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7WUFDMUMsQ0FBQzs7O1dBQUE7UUFFRCxxQkFBSyxHQUFMO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztpQkFDbkQsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxHQUFHO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDOztRQUVELDRCQUFZLEdBQVosVUFBYSxJQUFJO1lBQ2IsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztpQkFDckMsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQzdDLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQXBCRDtZQUFDLGdDQUFZLENBQUMsMkJBQTJCLENBQUM7O2tEQUFBO1FBYjlDO1lBQUMsOEJBQVU7O2lCQUFBO1FBa0NYLFlBQUM7SUFBRCxDQUFDLEFBakNELElBaUNDO0lBakNZLGFBQUssUUFpQ2pCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ2F1cmVsaWEtYXV0aGVudGljYXRpb24nO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0LCBjb21wdXRlZEZyb20gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgTG9naW4ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlID0gYXV0aFNlcnZpY2U7XHJcbiAgICB9O1xyXG5cclxuICAgIGhlYWRpbmcgPSAnTG9naW4nO1xyXG5cclxuICAgIGVtYWlsID0gJyc7XHJcbiAgICBwYXNzd29yZCA9ICcnO1xyXG5cclxuICAgIC8vIG1ha2UgYSBnZXR0ZXIgdG8gZ2V0IHRoZSBhdXRoZW50aWNhdGlvbiBzdGF0dXMuXHJcbiAgICAvLyB1c2UgY29tcHV0ZWRGcm9tIHRvIGF2b2lkIGRpcnR5IGNoZWNraW5nXHJcbiAgICBAY29tcHV0ZWRGcm9tKCdhdXRoU2VydmljZS5hdXRoZW50aWNhdGVkJylcclxuICAgIGdldCBhdXRoZW50aWNhdGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhlbnRpY2F0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UubG9naW4odGhpcy5lbWFpbCwgdGhpcy5wYXNzd29yZClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzIGxvZ2dlZCBcIiArIHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luIGZhaWx1cmVcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBhdXRoZW50aWNhdGUobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmF1dGhlbnRpY2F0ZShuYW1lKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImF1dGggcmVzcG9uc2UgXCIgKyByZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il19