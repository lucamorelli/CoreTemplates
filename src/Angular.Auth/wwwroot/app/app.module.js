"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var http_2 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var app_component_1 = require('./app.component');
var hero_detail_component_1 = require('./hero-detail.component');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var login_component_1 = require('./login.component');
var nav_bar_component_1 = require('./nav-bar.component');
var logged_in_guard_1 = require('./logged-in.guard');
var user_service_1 = require('./user.service');
var hero_service_1 = require('./hero.service');
var angular2_jwt_1 = require('angular2-jwt/angular2-jwt');
var angular2_jwt_2 = require('angular2-jwt/angular2-jwt');
function getAuthHttp(http) {
    return new angular2_jwt_1.AuthHttp(new angular2_jwt_2.AuthConfig({
        noJwtError: true
    }), http);
}
exports.getAuthHttp = getAuthHttp;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                hero_detail_component_1.HeroDetailComponent,
                heroes_component_1.HeroesComponent,
                dashboard_component_1.DashboardComponent,
                login_component_1.LoginComponent,
                nav_bar_component_1.NavBarComponent
            ],
            providers: [
                hero_service_1.HeroService,
                user_service_1.UserService,
                logged_in_guard_1.LoggedInGuard,
                {
                    provide: angular2_jwt_1.AuthHttp,
                    useFactory: getAuthHttp,
                    deps: [http_2.Http]
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9Tb3JnZW50aS9JbnRlcm5vL0NvcmVUZW1wbGF0ZXMvc3JjL0FuZ3VsYXIuQXV0aC9hcHAvIiwic291cmNlcyI6WyJBcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBcUIsZUFBZSxDQUFDLENBQUE7QUFFckMsNEJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNDQUFvQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzlELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELGtDQUFnQyxxQkFBcUIsQ0FBQyxDQUFBO0FBRXRELGdDQUE4QixtQkFBbUIsQ0FBQyxDQUFBO0FBRWxELDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLDZCQUF5QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3JELDZCQUEyQiwyQkFBMkIsQ0FBQyxDQUFBO0FBR3ZELHFCQUE0QixJQUFJO0lBQzVCLE1BQU0sQ0FBQyxJQUFJLHVCQUFRLENBQUMsSUFBSSx5QkFBVSxDQUFDO1FBQy9CLFVBQVUsRUFBRSxJQUFJO0tBQ25CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNkLENBQUM7QUFKZSxtQkFBVyxjQUkxQixDQUFBO0FBNkJEO0lBQUE7SUFBeUIsQ0FBQztJQTNCMUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWE7Z0JBQ2IsbUJBQVc7Z0JBQ1gsaUJBQVU7Z0JBQ1YscUJBQU87YUFDVjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiwyQ0FBbUI7Z0JBQ25CLGtDQUFlO2dCQUNmLHdDQUFrQjtnQkFDbEIsZ0NBQWM7Z0JBQ2QsbUNBQWU7YUFDbEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsMEJBQVc7Z0JBQ1gsK0JBQWE7Z0JBQ2I7b0JBQ0ksT0FBTyxFQUFFLHVCQUFRO29CQUNqQixVQUFVLEVBQUUsV0FBVztvQkFDdkIsSUFBSSxFQUFFLENBQUMsV0FBSSxDQUFDO2lCQUNmO2FBQ0o7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzVCLENBQUM7O2lCQUFBO0lBQ3VCLGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgSHR0cCB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuaW1wb3J0IHsgcm91dGluZyB9IGZyb20gJy4vYXBwLnJvdXRpbmcnO1xyXG5cclxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9hcHAuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVyb0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaGVyby1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVyb2VzQ29tcG9uZW50IH0gZnJvbSAnLi9oZXJvZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9kYXNoYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2xvZ2luLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5hdkJhckNvbXBvbmVudCB9IGZyb20gJy4vbmF2LWJhci5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgTG9nZ2VkSW5HdWFyZCB9IGZyb20gJy4vbG9nZ2VkLWluLmd1YXJkJztcclxuXHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIZXJvU2VydmljZSB9IGZyb20gJy4vaGVyby5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXV0aEh0dHAgfSBmcm9tICdhbmd1bGFyMi1qd3QvYW5ndWxhcjItand0JztcclxuaW1wb3J0IHsgQXV0aENvbmZpZyB9IGZyb20gJ2FuZ3VsYXIyLWp3dC9hbmd1bGFyMi1qd3QnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBdXRoSHR0cChodHRwKSB7XHJcbiAgICByZXR1cm4gbmV3IEF1dGhIdHRwKG5ldyBBdXRoQ29uZmlnKHtcclxuICAgICAgICBub0p3dEVycm9yOiB0cnVlXHJcbiAgICB9KSwgaHR0cCk7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgQnJvd3Nlck1vZHVsZSxcclxuICAgICAgICBGb3Jtc01vZHVsZSxcclxuICAgICAgICBIdHRwTW9kdWxlLFxyXG4gICAgICAgIHJvdXRpbmdcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBBcHBDb21wb25lbnQsXHJcbiAgICAgICAgSGVyb0RldGFpbENvbXBvbmVudCxcclxuICAgICAgICBIZXJvZXNDb21wb25lbnQsXHJcbiAgICAgICAgRGFzaGJvYXJkQ29tcG9uZW50LFxyXG4gICAgICAgIExvZ2luQ29tcG9uZW50LFxyXG4gICAgICAgIE5hdkJhckNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEhlcm9TZXJ2aWNlLFxyXG4gICAgICAgIFVzZXJTZXJ2aWNlLFxyXG4gICAgICAgIExvZ2dlZEluR3VhcmQsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBBdXRoSHR0cCxcclxuICAgICAgICAgICAgdXNlRmFjdG9yeTogZ2V0QXV0aEh0dHAsXHJcbiAgICAgICAgICAgIGRlcHM6IFtIdHRwXVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9Il19