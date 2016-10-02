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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUtBO1FBQUE7UUFvQkEsQ0FBQztRQWpCUSw2QkFBZSxHQUF0QixVQUF1QixNQUEyQixFQUFFLE1BQWM7WUFHaEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBRWhDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLHlDQUFnQixDQUFDLENBQUM7WUFHdEQsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2dCQUM3RixFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO2dCQUNsRyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTthQUM1RyxDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDO1FBcEJIO1lBQUMsOEJBQVU7O2VBQUE7UUFxQlgsVUFBQztJQUFELENBQUMsQUFwQkQsSUFvQkM7SUFwQlksV0FBRyxNQW9CZixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHsgYXV0b2luamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRlU3RlcCB9IGZyb20gJ2F1cmVsaWEtYXV0aGVudGljYXRpb24nO1xuXG5AYXV0b2luamVjdFxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHB1YmxpYyByb3V0ZXI6IFJvdXRlcjtcblxuICBwdWJsaWMgY29uZmlndXJlUm91dGVyKGNvbmZpZzogUm91dGVyQ29uZmlndXJhdGlvbiwgcm91dGVyOiBSb3V0ZXIpIHtcblxuICAgIC8vIHN3aXRjaCBmcm9tIGhhc2ggKCMpIHRvIHNsYXNoICgvKSBuYXZpZ2F0aW9uXG4gICAgY29uZmlnLm9wdGlvbnMucHVzaFN0YXRlID0gdHJ1ZTtcblxuICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcbiAgICBjb25maWcuYWRkUGlwZWxpbmVTdGVwKCdhdXRob3JpemUnLCBBdXRoZW50aWNhdGVTdGVwKTsgLy8gQWRkIGEgcm91dGUgZmlsdGVyIHNvIG9ubHkgYXV0aGVudGljYXRlZCB1c2VzIGFyZSBhdXRob3JpemVkIHRvIGFjY2VzcyBzb21lIHJvdXRlc1xyXG5cblxuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWycnLCAnd2VsY29tZSddLCBuYW1lOiAnd2VsY29tZScsIG1vZHVsZUlkOiAnd2VsY29tZScsIG5hdjogdHJ1ZSwgdGl0bGU6ICdXZWxjb21lJyB9LFxuICAgICAgeyByb3V0ZTogJ3VzZXJzJywgbmFtZTogJ3VzZXJzJywgbW9kdWxlSWQ6ICd1c2VycycsIG5hdjogdHJ1ZSwgdGl0bGU6ICdHaXRodWIgVXNlcnMnLCBhdXRoOiB0cnVlIH0sXG4gICAgICB7IHJvdXRlOiAnY2hpbGQtcm91dGVyJywgbmFtZTogJ2NoaWxkLXJvdXRlcicsIG1vZHVsZUlkOiAnY2hpbGQtcm91dGVyJywgbmF2OiB0cnVlLCB0aXRsZTogJ0NoaWxkIFJvdXRlcicgfSxcbiAgICBdKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXX0=