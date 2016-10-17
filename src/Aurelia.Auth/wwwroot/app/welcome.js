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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2VsY29tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL0FwcC93ZWxjb21lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBTUE7UUFNRSxpQkFBb0IsV0FBd0IsRUFBVSxVQUFzQjtZQUF4RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7WUFMckUsWUFBTyxHQUFHLHdDQUF3QyxDQUFDO1lBQ25ELGNBQVMsR0FBRyxNQUFNLENBQUM7WUFDbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztZQUNoQixrQkFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFJbEMsVUFBVSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUU7Z0JBQzdCLE1BQU0sRUFBRSxLQUFLO2dCQUViLE9BQU8sRUFBRTtvQkFDTCxjQUFjLEVBQUUsa0JBQWtCO29CQUNsQyxRQUFRLEVBQUUsa0JBQWtCO2lCQUMvQjthQUNKLENBQUM7aUJBQ0csSUFBSSxDQUFDLFVBQUMsUUFBa0I7Z0JBQ3JCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNkLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxLQUFLO3dCQUN0QixLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2pCLENBQUMsQ0FBQyxDQUFDO2dCQUNULENBQUM7WUFDSCxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUM7O1FBT0Qsc0JBQUksNkJBQVE7aUJBQVo7Z0JBQ0UsTUFBTSxDQUFJLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVUsQ0FBQztZQUM5QyxDQUFDOzs7V0FBQTtRQUVNLHdCQUFNLEdBQWI7WUFDRSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbkMsS0FBSyxDQUFDLGNBQVksSUFBSSxDQUFDLFFBQVEsTUFBRyxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVNLCtCQUFhLEdBQXBCO1lBQ0UsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1lBQ3BELENBQUM7UUFDSCxDQUFDO1FBNUNIO1lBQUMsOEJBQVU7O21CQUFBO1FBNkNYLGNBQUM7SUFBRCxDQUFDLEFBNUNELElBNENDO0lBNUNZLGVBQU8sVUE0Q25CLENBQUE7SUFFRDtRQUFBO1FBSUEsQ0FBQztRQUhRLG9DQUFNLEdBQWIsVUFBYyxLQUFLO1lBQ2pCLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RDLENBQUM7UUFDSCwwQkFBQztJQUFELENBQUMsQUFKRCxJQUlDO0lBSlksMkJBQW1CLHNCQUkvQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb21wdXRlZEZyb219IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdhdXJlbGlhLWF1dGhlbnRpY2F0aW9uJztcclxuaW1wb3J0IHsgYXV0b2luamVjdCwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgV2VsY29tZSB7XHJcbiAgcHVibGljIGhlYWRpbmcgPSAnV2VsY29tZSB0byB0aGUgQXVyZWxpYSBOYXZpZ2F0aW9uIEFwcCEnO1xyXG4gIHB1YmxpYyBmaXJzdE5hbWUgPSAnSm9obic7XHJcbiAgcHVibGljIGxhc3ROYW1lID0gJ0RvZSc7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlID0gdGhpcy5mdWxsTmFtZTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHByaXZhdGUgaHR0cENsaWVudDogSHR0cENsaWVudCkge1xyXG5cclxuICAgICAgaHR0cENsaWVudC5mZXRjaCgnL2FwaS9tZXNzYWdlJywge1xyXG4gICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICAgIC8vYm9keTogSlNPTi5zdHJpbmdpZnkoYXV0aCksXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICAgICAgICAudGhlbigocmVzcG9uc2U6IFJlc3BvbnNlKSA9PntcclxuICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgcmVzcG9uc2UudGV4dCgpLnRoZW4odGVzdG8gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWxlcnQodGVzdG8pO1xyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gR2V0dGVycyBjYW4ndCBiZSBkaXJlY3RseSBvYnNlcnZlZCwgc28gdGhleSBtdXN0IGJlIGRpcnR5IGNoZWNrZWQuXHJcbiAgLy8gSG93ZXZlciwgaWYgeW91IHRlbGwgQXVyZWxpYSB0aGUgZGVwZW5kZW5jaWVzLCBpdCBubyBsb25nZXIgbmVlZHMgdG8gZGlydHkgY2hlY2sgdGhlIHByb3BlcnR5LlxyXG4gIC8vIFRvIG9wdGltaXplIGJ5IGRlY2xhcmluZyB0aGUgcHJvcGVydGllcyB0aGF0IHRoaXMgZ2V0dGVyIGlzIGNvbXB1dGVkIGZyb20sIHVuY29tbWVudCB0aGUgbGluZSBiZWxvd1xyXG4gIC8vIGFzIHdlbGwgYXMgdGhlIGNvcnJlc3BvbmRpbmcgaW1wb3J0IGFib3ZlLlxyXG4gIC8vIEBjb21wdXRlZEZyb20oJ2ZpcnN0TmFtZScsICdsYXN0TmFtZScpXHJcbiAgZ2V0IGZ1bGxOYW1lKCkge1xyXG4gICAgcmV0dXJuIGAke3RoaXMuZmlyc3ROYW1lfSAke3RoaXMubGFzdE5hbWV9YDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdWJtaXQoKSB7XHJcbiAgICB0aGlzLnByZXZpb3VzVmFsdWUgPSB0aGlzLmZ1bGxOYW1lO1xyXG4gICAgYWxlcnQoYFdlbGNvbWUsICR7dGhpcy5mdWxsTmFtZX0hYCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2FuRGVhY3RpdmF0ZSgpIHtcclxuICAgIGlmICh0aGlzLmZ1bGxOYW1lICE9PSB0aGlzLnByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsZWF2ZT8nKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcHBlclZhbHVlQ29udmVydGVyIHtcclxuICBwdWJsaWMgdG9WaWV3KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgJiYgdmFsdWUudG9VcHBlckNhc2UoKTtcclxuICB9XHJcbn1cclxuIl19