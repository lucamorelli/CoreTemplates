var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework"], function (require, exports, aurelia_framework_1) {
    "use strict";
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            config.options.pushState = true;
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
                { route: 'users', name: 'users', moduleId: 'users', nav: true, title: 'Github Users' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vQXBwL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQUlBO1FBQUE7UUFpQkEsQ0FBQztRQWRRLDZCQUFlLEdBQXRCLFVBQXVCLE1BQTJCLEVBQUUsTUFBYztZQUdoRSxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7WUFFaEMsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7WUFDekIsTUFBTSxDQUFDLEdBQUcsQ0FBQztnQkFDVCxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFPLFFBQVEsRUFBRSxTQUFTLEVBQU8sR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO2dCQUN2RyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQVUsSUFBSSxFQUFFLE9BQU8sRUFBUyxRQUFRLEVBQUUsT0FBTyxFQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRTtnQkFDNUcsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUU7YUFDNUcsQ0FBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQztRQWpCSDtZQUFDLDhCQUFVOztlQUFBO1FBa0JYLFVBQUM7SUFBRCxDQUFDLEFBakJELElBaUJDO0lBakJZLFdBQUcsTUFpQmYsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciwgUm91dGVyQ29uZmlndXJhdGlvbiB9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7IGF1dG9pbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcblxuQGF1dG9pbmplY3RcbmV4cG9ydCBjbGFzcyBBcHAge1xuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XG5cbiAgcHVibGljIGNvbmZpZ3VyZVJvdXRlcihjb25maWc6IFJvdXRlckNvbmZpZ3VyYXRpb24sIHJvdXRlcjogUm91dGVyKSB7XG5cbiAgICAvLyBzd2l0Y2ggZnJvbSBoYXNoICgjKSB0byBzbGFzaCAoLykgbmF2aWdhdGlvblxuICAgIGNvbmZpZy5vcHRpb25zLnB1c2hTdGF0ZSA9IHRydWU7XG5cbiAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSc7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiBbJycsICd3ZWxjb21lJ10sIG5hbWU6ICd3ZWxjb21lJywgICAgICBtb2R1bGVJZDogJ3dlbGNvbWUnLCAgICAgIG5hdjogdHJ1ZSwgdGl0bGU6ICdXZWxjb21lJyB9LFxuICAgICAgeyByb3V0ZTogJ3VzZXJzJywgICAgICAgICBuYW1lOiAndXNlcnMnLCAgICAgICAgbW9kdWxlSWQ6ICd1c2VycycsICAgICAgICBuYXY6IHRydWUsIHRpdGxlOiAnR2l0aHViIFVzZXJzJyB9LFxuICAgICAgeyByb3V0ZTogJ2NoaWxkLXJvdXRlcicsIG5hbWU6ICdjaGlsZC1yb3V0ZXInLCBtb2R1bGVJZDogJ2NoaWxkLXJvdXRlcicsIG5hdjogdHJ1ZSwgdGl0bGU6ICdDaGlsZCBSb3V0ZXInIH0sXG4gICAgXSk7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxufVxuIl19