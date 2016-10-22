var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", 'aurelia-authentication', 'aurelia-fetch-client'], function (require, exports, aurelia_framework_1, aurelia_authentication_1, aurelia_fetch_client_1) {
    "use strict";
    var App = (function () {
        function App(fetchConfig) {
            this.fetchConfig = fetchConfig;
            this.fetchConfig = fetchConfig;
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
        App.prototype.activate = function () {
            this.fetchConfig.configure(new aurelia_fetch_client_1.HttpClient());
        };
        App = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_authentication_1.FetchConfig])
        ], App);
        return App;
    }());
    exports.App = App;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU1BO1FBR0UsYUFBb0IsV0FBd0I7WUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7WUFDeEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDbkMsQ0FBQztRQUVNLDZCQUFlLEdBQXRCLFVBQXVCLE1BQTJCLEVBQUUsTUFBYztZQUdoRSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFFaEMsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDekIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUseUNBQWdCLENBQUMsQ0FBQztZQUd0RCxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNULEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7Z0JBQzdGLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7Z0JBQ2xHLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFO2dCQUMzRyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtnQkFDbEYsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUU7Z0JBQ3RGLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO2FBQ3ZGLENBQUMsQ0FBQztZQUVILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7UUFFRCxzQkFBUSxHQUFSO1lBRUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxpQ0FBVSxFQUFFLENBQUMsQ0FBQztRQUNqRCxDQUFDO1FBaENIO1lBQUMsOEJBQVU7O2VBQUE7UUFpQ1gsVUFBQztJQUFELENBQUMsQUFoQ0QsSUFnQ0M7SUFoQ1ksV0FBRyxNQWdDZixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xyXG5pbXBvcnQgeyBhdXRvaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEF1dGhlbnRpY2F0ZVN0ZXAsIEZldGNoQ29uZmlnIH0gZnJvbSAnYXVyZWxpYS1hdXRoZW50aWNhdGlvbic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdhdXJlbGlhLWZldGNoLWNsaWVudCc7XHJcblxyXG5AYXV0b2luamVjdFxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmV0Y2hDb25maWc6IEZldGNoQ29uZmlnKSB7XHJcbiAgICAgIHRoaXMuZmV0Y2hDb25maWcgPSBmZXRjaENvbmZpZztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcikge1xyXG5cclxuICAgIC8vIHN3aXRjaCBmcm9tIGhhc2ggKCMpIHRvIHNsYXNoICgvKSBuYXZpZ2F0aW9uXHJcbiAgICBjb25maWcub3B0aW9ucy5wdXNoU3RhdGUgPSB0cnVlO1xyXG5cclxuICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcclxuICAgIGNvbmZpZy5hZGRQaXBlbGluZVN0ZXAoJ2F1dGhvcml6ZScsIEF1dGhlbnRpY2F0ZVN0ZXApOyAvLyBBZGQgYSByb3V0ZSBmaWx0ZXIgc28gb25seSBhdXRoZW50aWNhdGVkIHVzZXMgYXJlIGF1dGhvcml6ZWQgdG8gYWNjZXNzIHNvbWUgcm91dGVzXHJcblxyXG5cclxuICAgIGNvbmZpZy5tYXAoW1xyXG4gICAgICB7IHJvdXRlOiBbJycsICd3ZWxjb21lJ10sIG5hbWU6ICd3ZWxjb21lJywgbW9kdWxlSWQ6ICd3ZWxjb21lJywgbmF2OiB0cnVlLCB0aXRsZTogJ1dlbGNvbWUnIH0sXHJcbiAgICAgIHsgcm91dGU6ICd1c2VycycsIG5hbWU6ICd1c2VycycsIG1vZHVsZUlkOiAndXNlcnMnLCBuYXY6IHRydWUsIHRpdGxlOiAnR2l0aHViIFVzZXJzJywgYXV0aDogdHJ1ZSB9LFxyXG4gICAgICB7IHJvdXRlOiAnY2hpbGQtcm91dGVyJywgbmFtZTogJ2NoaWxkLXJvdXRlcicsIG1vZHVsZUlkOiAnY2hpbGQtcm91dGVyJywgbmF2OiB0cnVlLCB0aXRsZTogJ0NoaWxkIFJvdXRlcicgfSxcclxuICAgICAgeyByb3V0ZTogJ2xvZ2luJywgbW9kdWxlSWQ6ICcuL2xvZ2luJywgbmF2OiBmYWxzZSwgdGl0bGU6ICdMb2dpbicsIG5hbWU6ICdsb2dpbicgfSxcclxuICAgICAgeyByb3V0ZTogJ2xvZ291dCcsIG1vZHVsZUlkOiAnLi9sb2dvdXQnLCBuYXY6IGZhbHNlLCB0aXRsZTogJ0xvZ291dCcsIG5hbWU6ICdsb2dvdXQnIH0sXHJcbiAgICAgIHsgcm91dGU6ICdzaWdudXAnLCBtb2R1bGVJZDogJy4vc2lnbnVwJywgbmF2OiBmYWxzZSwgdGl0bGU6ICdTaWdudXAnLCBuYW1lOiAnc2lnbnVwJyB9XHJcbiAgICBdKTtcclxuXHJcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcclxuICB9XHJcblxyXG4gIGFjdGl2YXRlKCkge1xyXG4gICAgICAvLyB0aGlzIHdpbGwgYWRkIHRoZSBpbnRlcmNlcHRvciBmb3IgdGhlIEF1dGhvcml6YXRpb24gaGVhZGVyIHRvIHRoZSBIdHRwQ2xpZW50IHNpbmdsZXRvblxyXG4gICAgICB0aGlzLmZldGNoQ29uZmlnLmNvbmZpZ3VyZShuZXcgSHR0cENsaWVudCgpKTtcclxuICB9XHJcbn1cclxuIl19