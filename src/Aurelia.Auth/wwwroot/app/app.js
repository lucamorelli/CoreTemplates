var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", 'aurelia-authentication'], function (require, exports, aurelia_framework_1, aurelia_authentication_1) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.options.pushState = true;
            config.title = 'Aurelia';
            config.addPipelineStep('authorize', aurelia_authentication_1.AuthenticateStep);
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
                { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users', auth: true },
                { route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
                { route: 'login', moduleId: './login', nav: false, title: 'Login', name: 'login' },
                { route: 'logout', moduleId: './logout', nav: false, title: 'Logout', name: 'logout' },
                { route: 'signup', moduleId: './signup', nav: false, title: 'Signup', name: 'signup' }
            ]);
            this.router = router;
        };
        App = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [])
        ], App);
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUtBO1FBQUE7UUF1QkEsQ0FBQztRQXBCUSw2QkFBZSxHQUF0QixVQUF1QixNQUEyQixFQUFFLE1BQWM7WUFHaEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBRWhDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLHlDQUFnQixDQUFDLENBQUM7WUFHdEQsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2dCQUM3RixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO2dCQUNsRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtnQkFDM0csRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUU7Z0JBQ2xGLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO2dCQUN0RixFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTthQUN2RixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBdkJIO1lBQUMsOEJBQVU7O2VBQUE7UUF3QlgsVUFBQztJQUFELENBQUMsQUF2QkQsSUF1QkM7SUF2QlksV0FBRyxNQXVCZixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0ZVN0ZXAgfSBmcm9tICdhdXJlbGlhLWF1dGhlbnRpY2F0aW9uJztcclxuXHJcbkBhdXRvaW5qZWN0XHJcbmV4cG9ydCBjbGFzcyBBcHAge1xyXG4gIHB1YmxpYyByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgcHVibGljIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XHJcblxyXG4gICAgLy8gc3dpdGNoIGZyb20gaGFzaCAoIykgdG8gc2xhc2ggKC8pIG5hdmlnYXRpb25cclxuICAgIGNvbmZpZy5vcHRpb25zLnB1c2hTdGF0ZSA9IHRydWU7XHJcblxyXG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEnO1xyXG4gICAgY29uZmlnLmFkZFBpcGVsaW5lU3RlcCgnYXV0aG9yaXplJywgQXV0aGVudGljYXRlU3RlcCk7IC8vIEFkZCBhIHJvdXRlIGZpbHRlciBzbyBvbmx5IGF1dGhlbnRpY2F0ZWQgdXNlcyBhcmUgYXV0aG9yaXplZCB0byBhY2Nlc3Mgc29tZSByb3V0ZXNcclxuXHJcblxyXG4gICAgY29uZmlnLm1hcChbXHJcbiAgICAgIHsgcm91dGU6IFsnJywgJ3dlbGNvbWUnXSwgbmFtZTogJ3dlbGNvbWUnLCBtb2R1bGVJZDogJ3dlbGNvbWUnLCBuYXY6IHRydWUsIHRpdGxlOiAnV2VsY29tZScgfSxcclxuICAgICAgeyByb3V0ZTogJ3VzZXJzJywgbmFtZTogJ3VzZXJzJywgbW9kdWxlSWQ6ICd1c2VycycsIG5hdjogdHJ1ZSwgdGl0bGU6ICdHaXRodWIgVXNlcnMnLCBhdXRoOiB0cnVlIH0sXHJcbiAgICAgIHsgcm91dGU6ICdjaGlsZC1yb3V0ZXInLCBuYW1lOiAnY2hpbGQtcm91dGVyJywgbW9kdWxlSWQ6ICdjaGlsZC1yb3V0ZXInLCBuYXY6IHRydWUsIHRpdGxlOiAnQ2hpbGQgUm91dGVyJyB9LFxyXG4gICAgICB7IHJvdXRlOiAnbG9naW4nLCBtb2R1bGVJZDogJy4vbG9naW4nLCBuYXY6IGZhbHNlLCB0aXRsZTogJ0xvZ2luJywgbmFtZTogJ2xvZ2luJyB9LFxyXG4gICAgICB7IHJvdXRlOiAnbG9nb3V0JywgbW9kdWxlSWQ6ICcuL2xvZ291dCcsIG5hdjogZmFsc2UsIHRpdGxlOiAnTG9nb3V0JywgbmFtZTogJ2xvZ291dCcgfSxcclxuICAgICAgeyByb3V0ZTogJ3NpZ251cCcsIG1vZHVsZUlkOiAnLi9zaWdudXAnLCBuYXY6IGZhbHNlLCB0aXRsZTogJ1NpZ251cCcsIG5hbWU6ICdzaWdudXAnIH1cclxuICAgIF0pO1xyXG5cclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gIH1cclxufVxyXG4iXX0=