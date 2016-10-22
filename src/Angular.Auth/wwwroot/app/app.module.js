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
var request_options_services_1 = require('./request-options.services');
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
                request_options_services_1.RequestOptionsServices,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9Tb3JnZW50aS9JbnRlcm5vL0NvcmVUZW1wbGF0ZXMvc3JjL0FuZ3VsYXIuQXV0aC9hcHAvIiwic291cmNlcyI6WyJBcHAvYXBwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLGlDQUE4QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQzFELHNCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLHFCQUEyQixlQUFlLENBQUMsQ0FBQTtBQUMzQyxxQkFBcUIsZUFBZSxDQUFDLENBQUE7QUFFckMsNEJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBRXhDLDhCQUE2QixpQkFBaUIsQ0FBQyxDQUFBO0FBQy9DLHNDQUFvQyx5QkFBeUIsQ0FBQyxDQUFBO0FBQzlELGlDQUFnQyxvQkFBb0IsQ0FBQyxDQUFBO0FBQ3JELG9DQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELGdDQUErQixtQkFBbUIsQ0FBQyxDQUFBO0FBQ25ELGtDQUFnQyxxQkFBcUIsQ0FBQyxDQUFBO0FBRXRELGdDQUE4QixtQkFBbUIsQ0FBQyxDQUFBO0FBRWxELDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBQzdDLDZCQUF5QiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3JELDZCQUEyQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3ZELHlDQUF1Qyw0QkFBNEIsQ0FBQyxDQUFBO0FBR3BFLHFCQUE0QixJQUFJO0lBQzVCLE1BQU0sQ0FBQyxJQUFJLHVCQUFRLENBQUMsSUFBSSx5QkFBVSxDQUFDO1FBQy9CLFVBQVUsRUFBRSxJQUFJO0tBQ25CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNkLENBQUM7QUFKZSxtQkFBVyxjQUkxQixDQUFBO0FBOEJEO0lBQUE7SUFBeUIsQ0FBQztJQTVCMUI7UUFBQyxlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsZ0NBQWE7Z0JBQ2IsbUJBQVc7Z0JBQ1gsaUJBQVU7Z0JBQ1YscUJBQU87YUFDVjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWiwyQ0FBbUI7Z0JBQ25CLGtDQUFlO2dCQUNmLHdDQUFrQjtnQkFDbEIsZ0NBQWM7Z0JBQ2QsbUNBQWU7YUFDbEI7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsMEJBQVc7Z0JBQ1gsMEJBQVc7Z0JBQ1gsaURBQXNCO2dCQUN0QiwrQkFBYTtnQkFDYjtvQkFDSSxPQUFPLEVBQUUsdUJBQVE7b0JBQ2pCLFVBQVUsRUFBRSxXQUFXO29CQUN2QixJQUFJLEVBQUUsQ0FBQyxXQUFJLENBQUM7aUJBQ2Y7YUFDSjtZQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDNUIsQ0FBQzs7aUJBQUE7SUFDdUIsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsaUJBQVMsWUFBSSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBIdHRwIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcblxyXG5pbXBvcnQgeyByb3V0aW5nIH0gZnJvbSAnLi9hcHAucm91dGluZyc7XHJcblxyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZXJvRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9oZXJvLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZXJvZXNDb21wb25lbnQgfSBmcm9tICcuL2hlcm9lcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb21wb25lbnQgfSBmcm9tICcuL2Rhc2hib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTmF2QmFyQ29tcG9uZW50IH0gZnJvbSAnLi9uYXYtYmFyLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBMb2dnZWRJbkd1YXJkIH0gZnJvbSAnLi9sb2dnZWQtaW4uZ3VhcmQnO1xyXG5cclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEhlcm9TZXJ2aWNlIH0gZnJvbSAnLi9oZXJvLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBdXRoSHR0cCB9IGZyb20gJ2FuZ3VsYXIyLWp3dC9hbmd1bGFyMi1qd3QnO1xyXG5pbXBvcnQgeyBBdXRoQ29uZmlnIH0gZnJvbSAnYW5ndWxhcjItand0L2FuZ3VsYXIyLWp3dCc7XHJcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zU2VydmljZXMgfSBmcm9tICcuL3JlcXVlc3Qtb3B0aW9ucy5zZXJ2aWNlcyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEF1dGhIdHRwKGh0dHApIHtcclxuICAgIHJldHVybiBuZXcgQXV0aEh0dHAobmV3IEF1dGhDb25maWcoe1xyXG4gICAgICAgIG5vSnd0RXJyb3I6IHRydWVcclxuICAgIH0pLCBodHRwKTtcclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBCcm93c2VyTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIEh0dHBNb2R1bGUsXHJcbiAgICAgICAgcm91dGluZ1xyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIEFwcENvbXBvbmVudCxcclxuICAgICAgICBIZXJvRGV0YWlsQ29tcG9uZW50LFxyXG4gICAgICAgIEhlcm9lc0NvbXBvbmVudCxcclxuICAgICAgICBEYXNoYm9hcmRDb21wb25lbnQsXHJcbiAgICAgICAgTG9naW5Db21wb25lbnQsXHJcbiAgICAgICAgTmF2QmFyQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgSGVyb1NlcnZpY2UsXHJcbiAgICAgICAgVXNlclNlcnZpY2UsXHJcbiAgICAgICAgUmVxdWVzdE9wdGlvbnNTZXJ2aWNlcyxcclxuICAgICAgICBMb2dnZWRJbkd1YXJkLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcHJvdmlkZTogQXV0aEh0dHAsXHJcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IGdldEF1dGhIdHRwLFxyXG4gICAgICAgICAgICBkZXBzOiBbSHR0cF1cclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfSJdfQ==