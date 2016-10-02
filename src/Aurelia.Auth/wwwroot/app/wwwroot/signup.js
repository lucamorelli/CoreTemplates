var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'register/RegisterService', 'aurelia-dependency-injection', 'aurelia-event-aggregator'], function (require, exports, RegisterService_1, aurelia_dependency_injection_1, aurelia_event_aggregator_1) {
    "use strict";
    var Signup = (function () {
        function Signup(auth, eventAggregator) {
            this.heading = 'Sign Up';
            this.auth = auth;
            this.eventAggregator = eventAggregator;
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
            aurelia_dependency_injection_1.inject(RegisterService_1.RegisterService, aurelia_event_aggregator_1.EventAggregator), 
            __metadata('design:paramtypes', [(typeof (_a = typeof RegisterService_1.RegisterService !== 'undefined' && RegisterService_1.RegisterService) === 'function' && _a) || Object, aurelia_event_aggregator_1.EventAggregator])
        ], Signup);
        return Signup;
        var _a;
    }());
    exports.Signup = Signup;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2lnbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBS0E7UUFRSSxnQkFBWSxJQUFxQixFQUFFLGVBQWdDO1lBSG5FLFlBQU8sR0FBVyxTQUFTLENBQUM7WUFJeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDM0MsQ0FBQzs7UUFFRCx1QkFBTSxHQUFOO1lBQUEsaUJBNEJDO1lBM0JHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDdEIsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQzFCLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFDRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO2dCQUM5QixNQUFNLENBQUM7WUFDWCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QixLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztnQkFDMUMsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO2dCQUN2QyxNQUFNLENBQUM7WUFDWCxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDO2lCQUNyRSxJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLENBQUM7Z0JBQzFDLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2hELENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxHQUFHO2dCQUNOLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUdmLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQzs7UUExQ0w7WUFBQyxxQ0FBTSxDQUFDLGlDQUFlLEVBQUUsMENBQWUsQ0FBQzs7a0JBQUE7UUEyQ3pDLGFBQUM7O0lBQUQsQ0FBQyxBQTFDRCxJQTBDQztJQTFDWSxjQUFNLFNBMENsQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaXN0ZXJTZXJ2aWNlIH0gZnJvbSAncmVnaXN0ZXIvUmVnaXN0ZXJTZXJ2aWNlJztcbmltcG9ydCB7IGluamVjdCB9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcblxuQGluamVjdChSZWdpc3RlclNlcnZpY2UsIEV2ZW50QWdncmVnYXRvcilcbmV4cG9ydCBjbGFzcyBTaWdudXAge1xuICAgIGF1dGg6IFJlZ2lzdGVyU2VydmljZTtcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgcmVwZWF0UGFzc3dvcmQ6IHN0cmluZztcbiAgICBoZWFkaW5nOiBzdHJpbmcgPSAnU2lnbiBVcCc7XG4gICAgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3I7XG5cbiAgICBjb25zdHJ1Y3RvcihhdXRoOiBSZWdpc3RlclNlcnZpY2UsIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yKSB7XG4gICAgICAgIHRoaXMuYXV0aCA9IGF1dGg7XG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xuICAgIH07XG5cbiAgICBzaWdudXAoKSB7XG4gICAgICAgIGlmICh0aGlzLnVzZXJuYW1lID09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgnaW5zZXJpcmUgbGEgbWFpbCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhc3N3b3JkID09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgnaW5zZXJpcmUgbGEgcGFzc3dvcmQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5yZXBlYXRQYXNzd29yZCA9PSAnJykge1xuICAgICAgICAgICAgYWxlcnQoJ2luc2VyaXJlIGxhIHBhc3N3b3JkIGRpIGNvbmZlcm1hJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFzc3dvcmQgIT0gdGhpcy5yZXBlYXRQYXNzd29yZCkge1xuICAgICAgICAgICAgYWxlcnQoJ2xlIHBhc3N3b3JkIG5vbiBjb3JyaXNwb25kb25vJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hdXRoLnNpZ251cCh0aGlzLnVzZXJuYW1lLCB0aGlzLnBhc3N3b3JkLCB0aGlzLnJlcGVhdFBhc3N3b3JkKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3VjY2VzcyBsb2dnZWQgXCIgKyByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnYXV0aENoYW5nZWQnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBhbGVydChlcnIpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJsb2dpbiBmYWlsdXJlIDogXCIgKyBlLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgICB9KTtcbiAgICB9O1xufVxuIl19