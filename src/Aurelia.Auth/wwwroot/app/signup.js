var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", './register/RegisterService', 'aurelia-dependency-injection', 'aurelia-event-aggregator'], function (require, exports, RegisterService_1, aurelia_dependency_injection_1, aurelia_event_aggregator_1) {
    "use strict";
    var Signup = (function () {
        function Signup(auth, eventAggregator) {
            this.auth = auth;
            this.eventAggregator = eventAggregator;
            this.heading = 'Sign Up';
        }
        ;
        Signup.prototype.signup = function () {
            var _this = this;
            if (this.username == '') {
                alert('inserire la mail');
                return;
            }
            if (this.password == '') {
                alert('inserire la password');
                return;
            }
            if (this.repeatPassword == '') {
                alert('inserire la password di conferma');
                return;
            }
            if (this.password != this.repeatPassword) {
                alert('le password non corrispondono');
                return;
            }
            return this.auth.signup(this.username, this.password, this.repeatPassword)
                .then(function (response) {
                console.log("success logged " + response);
                _this.eventAggregator.publish('authChanged');
            })
                .catch(function (err) {
                alert(err);
            });
        };
        ;
        Signup = __decorate([
            aurelia_dependency_injection_1.autoinject, 
            __metadata('design:paramtypes', [RegisterService_1.RegisterService, aurelia_event_aggregator_1.EventAggregator])
        ], Signup);
        return Signup;
    }());
    exports.Signup = Signup;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL3NpZ251cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUtBO1FBTUksZ0JBQW9CLElBQXFCLEVBQVUsZUFBZ0M7WUFBL0QsU0FBSSxHQUFKLElBQUksQ0FBaUI7WUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7WUFGbkYsWUFBTyxHQUFXLFNBQVMsQ0FBQztRQUc1QixDQUFDOztRQUVELHVCQUFNLEdBQU47WUFBQSxpQkE0QkM7WUEzQkcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Z0JBQzlCLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO2dCQUMxQyxNQUFNLENBQUM7WUFDWCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDdkMsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUM7aUJBQ3JFLElBQUksQ0FBQyxVQUFBLFFBQVE7Z0JBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUMsQ0FBQztnQkFDMUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDaEQsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBR2YsQ0FBQyxDQUFDLENBQUM7UUFDWCxDQUFDOztRQXRDTDtZQUFDLHlDQUFVOztrQkFBQTtRQXVDWCxhQUFDO0lBQUQsQ0FBQyxBQXRDRCxJQXNDQztJQXRDWSxjQUFNLFNBc0NsQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaXN0ZXJTZXJ2aWNlIH0gZnJvbSAnLi9yZWdpc3Rlci9SZWdpc3RlclNlcnZpY2UnO1xuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBTaWdudXAge1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICByZXBlYXRQYXNzd29yZDogc3RyaW5nO1xuICAgIGhlYWRpbmc6IHN0cmluZyA9ICdTaWduIFVwJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXV0aDogUmVnaXN0ZXJTZXJ2aWNlLCBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7XG4gICAgfTtcblxuICAgIHNpZ251cCgpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlcm5hbWUgPT0gJycpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdpbnNlcmlyZSBsYSBtYWlsJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFzc3dvcmQgPT0gJycpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdpbnNlcmlyZSBsYSBwYXNzd29yZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnJlcGVhdFBhc3N3b3JkID09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgnaW5zZXJpcmUgbGEgcGFzc3dvcmQgZGkgY29uZmVybWEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wYXNzd29yZCAhPSB0aGlzLnJlcGVhdFBhc3N3b3JkKSB7XG4gICAgICAgICAgICBhbGVydCgnbGUgcGFzc3dvcmQgbm9uIGNvcnJpc3BvbmRvbm8nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmF1dGguc2lnbnVwKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQsIHRoaXMucmVwZWF0UGFzc3dvcmQpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzIGxvZ2dlZCBcIiArIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKCdhdXRoQ2hhbmdlZCcpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycik7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImxvZ2luIGZhaWx1cmUgOiBcIiArIGUubWVzc2FnZSk7XG5cbiAgICAgICAgICAgIH0pO1xuICAgIH07XG59XG4iXX0=