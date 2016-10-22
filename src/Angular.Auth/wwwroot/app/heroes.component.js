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
var http_1 = require('@angular/http');
var request_options_services_1 = require('./request-options.services');
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService, http, requestOptions) {
        this.router = router;
        this.heroService = heroService;
        this.http = http;
        this.requestOptions = requestOptions;
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
        this.http.get('api/message', this.requestOptions.jwt)
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
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService, http_1.Http, request_options_services_1.RequestOptionsServices])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Tb3JnZW50aS9JbnRlcm5vL0NvcmVUZW1wbGF0ZXMvc3JjL0FuZ3VsYXIuQXV0aC9hcHAvIiwic291cmNlcyI6WyJBcHAvaGVyb2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRzFDLDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTdDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHFCQUE4QyxlQUFlLENBQUMsQ0FBQTtBQUM5RCx5Q0FBdUMsNEJBQTRCLENBQUMsQ0FBQTtBQU9wRTtJQVNJLHlCQUNZLE1BQWMsRUFDZCxXQUF3QixFQUN6QixJQUFVLEVBQ1QsY0FBc0M7UUFIdEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVCxtQkFBYyxHQUFkLGNBQWMsQ0FBd0I7UUFQbEQsVUFBSyxHQUFHLGdCQUFnQixDQUFDO0lBTzZCLENBQUM7SUFFdkQsa0NBQVEsR0FBUixVQUFTLElBQVU7UUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztJQUM3QixDQUFDO0lBRUQsbUNBQVMsR0FBVDtRQUFBLGlCQUVDO1FBREcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFHakIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO2FBQ2hELEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdEIsU0FBUyxDQUNWLFVBQUEsSUFBSTtZQUNBLE9BQUEsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQWhCLENBQWdCLEVBQ3BCLFVBQUEsR0FBRztZQUNDLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFBaEIsQ0FBZ0IsRUFDcEI7WUFDSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7UUFBL0IsQ0FBK0IsQ0FDbEMsQ0FBQztJQUNWLENBQUM7SUFFRCxvQ0FBVSxHQUFWO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUE5Q0w7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLCtCQUErQjtZQUM1QyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQztTQUM5QyxDQUFDOzt1QkFBQTtJQTJDRixzQkFBQztBQUFELENBQUMsQUExQ0QsSUEwQ0M7QUExQ1ksdUJBQWUsa0JBMEMzQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEhlcm8gfSBmcm9tICcuL2hlcm8nO1xyXG5pbXBvcnQgeyBIZXJvRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9oZXJvLWRldGFpbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIZXJvU2VydmljZSB9IGZyb20gJy4vaGVyby5zZXJ2aWNlJztcclxuaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEhlYWRlcnMsIEh0dHAsIFJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XHJcbmltcG9ydCB7IFJlcXVlc3RPcHRpb25zU2VydmljZXMgfSBmcm9tICcuL3JlcXVlc3Qtb3B0aW9ucy5zZXJ2aWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbXktaGVyb2VzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi92aWV3cy9oZXJvZXMuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdmlld3MvaGVyb2VzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVyb2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBzZWxlY3RlZEhlcm86IEhlcm87XHJcblxyXG4gICAgaGVyb2VzIDogSGVyb1tdO1xyXG5cclxuICAgIHRpdGxlID0gJ1RvdXIgb2YgSGVyb2VzJztcclxuICAgIGRhdGE6IGFueTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwLFxyXG4gICAgICAgIHByaXZhdGUgcmVxdWVzdE9wdGlvbnM6IFJlcXVlc3RPcHRpb25zU2VydmljZXMpIHsgfVxyXG5cclxuICAgIG9uU2VsZWN0KGhlcm86IEhlcm8pOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSGVybyA9IGhlcm87XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGVyb2VzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaGVyb1NlcnZpY2UuZ2V0SGVyb2VzKCkudGhlbihoZXJvZXMgPT4gdGhpcy5oZXJvZXMgPSBoZXJvZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZ2V0SGVyb2VzKCk7XHJcblxyXG5cclxuICAgICAgICB0aGlzLmh0dHAuZ2V0KCdhcGkvbWVzc2FnZScsIHRoaXMucmVxdWVzdE9wdGlvbnMuand0KVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLFxyXG4gICAgICAgICAgICBlcnIgPT5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciksXHJcbiAgICAgICAgICAgICgpID0+XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVxdWVzdCBDb21wbGV0ZScpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdvdG9EZXRhaWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGV0YWlsJywgdGhpcy5zZWxlY3RlZEhlcm8uaWRdKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19