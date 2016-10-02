var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-fetch-client'], function (require, exports, aurelia_framework_1, aurelia_fetch_client_1) {
    "use strict";
    var RegisterService = (function () {
        function RegisterService(http) {
            this.http = http;
            this.url = "Signup";
        }
        RegisterService.prototype.signup = function (username, password, repeatPassword) {
            var model = {
                userId: username,
                password: password,
                repeatPassword: repeatPassword
            };
            return this.http.fetch('http://localhost:5000/Register/' + this.url, {
                method: 'post',
                body: JSON.stringify(model),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(function (response) { return response.json(); })
                .then(function (response) {
                console.log(response);
                return true;
            });
        };
        RegisterService = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_fetch_client_1.HttpClient])
        ], RegisterService);
        return RegisterService;
    }());
    exports.RegisterService = RegisterService;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVnaXN0ZXJTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vQXBwL1JlZ2lzdGVyL1JlZ2lzdGVyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUtBO1FBR0kseUJBQW1CLElBQWdCO1lBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7WUFGM0IsUUFBRyxHQUFXLFFBQVEsQ0FBQztRQVEvQixDQUFDO1FBRU0sZ0NBQU0sR0FBYixVQUFjLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxjQUFzQjtZQUNwRSxJQUFJLEtBQUssR0FBc0I7Z0JBQzNCLE1BQU0sRUFBRSxRQUFRO2dCQUNoQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsY0FBYyxFQUFFLGNBQWM7YUFDakMsQ0FBQztZQUNGLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUVqRSxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7Z0JBQzNCLE9BQU8sRUFBRTtvQkFDTCxjQUFjLEVBQUUsa0JBQWtCO29CQUNsQyxRQUFRLEVBQUUsa0JBQWtCO2lCQUMvQjthQUNKLENBQUM7aUJBQ0csSUFBSSxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQztpQkFDakMsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFFVixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN0QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztRQWpDTDtZQUFDLDhCQUFVOzsyQkFBQTtRQWtDWCxzQkFBQztJQUFELENBQUMsQUFqQ0QsSUFpQ0M7SUFqQ1ksdUJBQWUsa0JBaUMzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVnaXN0ZXJWaWV3TW9kZWwgfSBmcm9tICcuL1JlZ2lzdGVyVmlld01vZGVsJztcclxuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ2F1cmVsaWEtZmV0Y2gtY2xpZW50JztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBSZWdpc3RlclNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSB1cmw6IHN0cmluZyA9IFwiU2lnbnVwXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHVibGljIGh0dHA6IEh0dHBDbGllbnQpIHtcclxuICAgICAgICAvL2h0dHAuY29uZmlndXJlKGNvbmZpZyA9PiB7XHJcbiAgICAgICAgLy8gICAgY29uZmlnXHJcbiAgICAgICAgLy8gICAgICAgIC51c2VTdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxyXG4gICAgICAgIC8vICAgICAgICAud2l0aEJhc2VVcmwoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9SZWdpc3Rlci8nKTtcclxuICAgICAgICAvL30pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzaWdudXAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgcmVwZWF0UGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgICAgIHZhciBtb2RlbDogUmVnaXN0ZXJWaWV3TW9kZWwgPSB7XHJcbiAgICAgICAgICAgIHVzZXJJZDogdXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgcmVwZWF0UGFzc3dvcmQ6IHJlcGVhdFBhc3N3b3JkXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmZldGNoKCdodHRwOi8vbG9jYWxob3N0OjUwMDAvUmVnaXN0ZXIvJyArIHRoaXMudXJsLCB7XHJcbiAgICAgICAgLy9yZXR1cm4gdGhpcy5odHRwLmZldGNoKHRoaXMudXJsLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtb2RlbCksXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIC8vdGhpcy5hcGlLZXkgPSByZXNwb25zZS5BUElLZXk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=