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
var hero_service_1 = require('./hero.service');
var router_1 = require('@angular/router');
var angular2_jwt_1 = require('angular2-jwt/angular2-jwt');
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService, authHttp) {
        this.router = router;
        this.heroService = heroService;
        this.authHttp = authHttp;
        this.title = 'Tour of Heroes';
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getHeroes();
        this.authHttp.get('Resource/GetMessage')
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            return _this.data = data;
        }, function (err) {
            return console.log(err);
        }, function () {
            return console.log('Request Complete');
        });
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            templateUrl: './views/heroes.component.html',
            styleUrls: ['./views/heroes.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService, angular2_jwt_1.AuthHttp])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Tb3JnZW50aS9JbnRlcm5vL0NvcmVUZW1wbGF0ZXMvc3JjL0FuZ3VsYXIuQXV0aC9hcHAvIiwic291cmNlcyI6WyJBcHAvaGVyb2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRzFDLDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTdDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLDZCQUF5QiwyQkFBMkIsQ0FBQyxDQUFBO0FBT3JEO0lBU0kseUJBQ1ksTUFBYyxFQUNkLFdBQXdCLEVBQ3pCLFFBQWtCO1FBRmpCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN6QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBTjdCLFVBQUssR0FBRyxnQkFBZ0IsQ0FBQztJQU1RLENBQUM7SUFFbEMsa0NBQVEsR0FBUixVQUFTLElBQVU7UUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBYUM7UUFaRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUM7YUFDbkMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixTQUFTLENBQ1YsVUFBQSxJQUFJO1lBQ0EsT0FBQSxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUk7UUFBaEIsQ0FBZ0IsRUFDcEIsVUFBQSxHQUFHO1lBQ0MsT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUFoQixDQUFnQixFQUNwQjtZQUNJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQztRQUEvQixDQUErQixDQUNsQyxDQUFDO0lBQ1YsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQTVDTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1NBQzlDLENBQUM7O3VCQUFBO0lBeUNGLHNCQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXhDWSx1QkFBZSxrQkF3QzNCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSGVybyB9IGZyb20gJy4vaGVybyc7XHJcbmltcG9ydCB7IEhlcm9EZXRhaWxDb21wb25lbnQgfSBmcm9tICcuL2hlcm8tZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhlcm9TZXJ2aWNlIH0gZnJvbSAnLi9oZXJvLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQXV0aEh0dHAgfSBmcm9tICdhbmd1bGFyMi1qd3QvYW5ndWxhcjItand0JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdteS1oZXJvZXMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3ZpZXdzL2hlcm9lcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi92aWV3cy9oZXJvZXMuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZXJvZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHNlbGVjdGVkSGVybzogSGVybztcclxuXHJcbiAgICBoZXJvZXMgOiBIZXJvW107XHJcblxyXG4gICAgdGl0bGUgPSAnVG91ciBvZiBIZXJvZXMnO1xyXG4gICAgZGF0YTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBoZXJvU2VydmljZTogSGVyb1NlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGF1dGhIdHRwOiBBdXRoSHR0cCkgeyB9XHJcblxyXG4gICAgb25TZWxlY3QoaGVybzogSGVybyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRIZXJvID0gaGVybztcclxuICAgIH1cclxuXHJcbiAgICBnZXRIZXJvZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvU2VydmljZS5nZXRIZXJvZXMoKS50aGVuKGhlcm9lcyA9PiB0aGlzLmhlcm9lcyA9IGhlcm9lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZXRIZXJvZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hdXRoSHR0cC5nZXQoJ1Jlc291cmNlL0dldE1lc3NhZ2UnKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLFxyXG4gICAgICAgICAgICBlcnIgPT5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciksXHJcbiAgICAgICAgICAgICgpID0+XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVxdWVzdCBDb21wbGV0ZScpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdvdG9EZXRhaWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGV0YWlsJywgdGhpcy5zZWxlY3RlZEhlcm8uaWRdKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19