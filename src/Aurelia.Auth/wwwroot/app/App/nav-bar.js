var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'aurelia-framework', 'aurelia-authentication', 'aurelia-router', 'aurelia-event-aggregator', 'aurelia-api'], function (require, exports, aurelia_framework_1, aurelia_authentication_1, aurelia_router_1, aurelia_event_aggregator_1, aurelia_api_1) {
    "use strict";
    var NavBar = (function () {
        function NavBar(auth, ea, config) {
            var _this = this;
            this.auth = auth;
            this.ea = ea;
            this.config = config;
            this.displayName = "";
            this.router = null;
            this.authChangedListener = function () {
                _this.updateDisplayName();
            };
            this.updateDisplayName();
            this.subscription = this.ea.subscribe('authChanged', this.authChangedListener);
        }
        Object.defineProperty(NavBar.prototype, "isAuthenticated", {
            get: function () {
                return this.auth.authenticated;
            },
            enumerable: true,
            configurable: true
        });
        NavBar.prototype.updateDisplayName = function () {
            var _this = this;
            if (this.auth.authenticated) {
                this.auth.getMe().then(function (response) {
                    return _this.displayName = response.preferred_username;
                });
            }
            else {
                this.displayName = "";
            }
            ;
        };
        __decorate([
            aurelia_framework_1.bindable, 
            __metadata('design:type', aurelia_router_1.Router)
        ], NavBar.prototype, "router", void 0);
        __decorate([
            aurelia_framework_1.computedFrom('auth.authenticated'), 
            __metadata('design:type', Boolean)
        ], NavBar.prototype, "isAuthenticated", null);
        NavBar = __decorate([
            aurelia_framework_1.autoinject, 
            __metadata('design:paramtypes', [aurelia_authentication_1.AuthService, aurelia_event_aggregator_1.EventAggregator, aurelia_api_1.Config])
        ], NavBar);
        return NavBar;
    }());
    exports.NavBar = NavBar;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2LWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0FwcC9uYXYtYmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBUUE7UUFLSSxnQkFBb0IsSUFBaUIsRUFBVSxFQUFtQixFQUFVLE1BQWM7WUFMOUYsaUJBNkJDO1lBeEJ1QixTQUFJLEdBQUosSUFBSSxDQUFhO1lBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBaUI7WUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1lBSjFGLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1lBQ2YsV0FBTSxHQUFXLElBQUksQ0FBQztZQVNoQyx3QkFBbUIsR0FBRztnQkFDbEIsS0FBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDN0IsQ0FBQyxDQUFBO1lBUEcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFFekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDbkYsQ0FBQztRQU9ELHNCQUFJLG1DQUFlO2lCQUFuQjtnQkFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDbkMsQ0FBQzs7O1dBQUE7UUFFTyxrQ0FBaUIsR0FBekI7WUFBQSxpQkFRQztZQVBHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO29CQUMzQixNQUFNLENBQUMsS0FBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsa0JBQWtCLENBQUM7Z0JBQzFELENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQzFCLENBQUM7WUFBQSxDQUFDO1FBQ04sQ0FBQztRQTFCRDtZQUFDLDRCQUFROzs4Q0FBQTtRQWFUO1lBQUMsZ0NBQVksQ0FBQyxvQkFBb0IsQ0FBQzs7cURBQUE7UUFoQnZDO1lBQUMsOEJBQVU7O2tCQUFBO1FBOEJYLGFBQUM7SUFBRCxDQUFDLEFBN0JELElBNkJDO0lBN0JZLGNBQU0sU0E2QmxCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgYXV0b2luamVjdCwgY29tcHV0ZWRGcm9tIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ2F1cmVsaWEtYXV0aGVudGljYXRpb24nO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcclxuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnYXVyZWxpYS1hcGknO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnYXVyZWxpYS1mZXRjaC1jbGllbnQnO1xyXG5cclxuQGF1dG9pbmplY3RcclxuZXhwb3J0IGNsYXNzIE5hdkJhciB7XHJcbiAgICBkaXNwbGF5TmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIEBiaW5kYWJsZSByb3V0ZXI6IFJvdXRlciA9IG51bGw7XHJcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGF1dGg6IEF1dGhTZXJ2aWNlLCBwcml2YXRlIGVhOiBFdmVudEFnZ3JlZ2F0b3IsIHByaXZhdGUgY29uZmlnOiBDb25maWcpIHsgXHJcbiAgICAgICAgdGhpcy51cGRhdGVEaXNwbGF5TmFtZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuZWEuc3Vic2NyaWJlKCdhdXRoQ2hhbmdlZCcsIHRoaXMuYXV0aENoYW5nZWRMaXN0ZW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgYXV0aENoYW5nZWRMaXN0ZW5lciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZURpc3BsYXlOYW1lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQGNvbXB1dGVkRnJvbSgnYXV0aC5hdXRoZW50aWNhdGVkJylcclxuICAgIGdldCBpc0F1dGhlbnRpY2F0ZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXV0aC5hdXRoZW50aWNhdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlRGlzcGxheU5hbWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXV0aC5hdXRoZW50aWNhdGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0aC5nZXRNZSgpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGxheU5hbWUgPSByZXNwb25zZS5wcmVmZXJyZWRfdXNlcm5hbWU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheU5hbWUgPSBcIlwiO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbn0iXX0=