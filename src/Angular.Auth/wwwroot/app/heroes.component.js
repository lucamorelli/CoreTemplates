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
var HeroesComponent = (function () {
    function HeroesComponent(router, heroService, http) {
        this.router = router;
        this.heroService = heroService;
        this.http = http;
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
        var authHeader = new http_1.Headers();
        var token = localStorage.getItem('access_token');
        authHeader.append('Authorization', 'Bearer ' + token);
        var jwtOptions = new http_1.RequestOptions({ headers: authHeader });
        this.http.get('api/message', jwtOptions)
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
        __metadata('design:paramtypes', [router_1.Router, hero_service_1.HeroService, http_1.Http])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Tb3JnZW50aS9JbnRlcm5vL0NvcmVUZW1wbGF0ZXMvc3JjL0FuZ3VsYXIuQXV0aC9hcHAvIiwic291cmNlcyI6WyJBcHAvaGVyb2VzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTBCLGVBQWUsQ0FBQyxDQUFBO0FBRzFDLDZCQUE0QixnQkFBZ0IsQ0FBQyxDQUFBO0FBRTdDLHVCQUF1QixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3pDLHFCQUE4QyxlQUFlLENBQUMsQ0FBQTtBQU85RDtJQVNJLHlCQUNZLE1BQWMsRUFDZCxXQUF3QixFQUN6QixJQUFVO1FBRlQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQU07UUFOckIsVUFBSyxHQUFHLGdCQUFnQixDQUFDO0lBTUEsQ0FBQztJQUUxQixrQ0FBUSxHQUFSLFVBQVMsSUFBVTtRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFwQixDQUFvQixDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFBQSxpQkFtQkM7UUFsQkcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWpCLElBQUksVUFBVSxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDL0IsSUFBSSxLQUFLLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqRCxVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDdEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxxQkFBYyxDQUFDLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7UUFHN0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsQ0FBQzthQUNuQyxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLFNBQVMsQ0FDVixVQUFBLElBQUk7WUFDQSxPQUFBLEtBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSTtRQUFoQixDQUFnQixFQUNwQixVQUFBLEdBQUc7WUFDQyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQWhCLENBQWdCLEVBQ3BCO1lBQ0ksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDO1FBQS9CLENBQStCLENBQ2xDLENBQUM7SUFDVixDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBbERMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7U0FDOUMsQ0FBQzs7dUJBQUE7SUErQ0Ysc0JBQUM7QUFBRCxDQUFDLEFBOUNELElBOENDO0FBOUNZLHVCQUFlLGtCQThDM0IsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi9oZXJvJztcclxuaW1wb3J0IHsgSGVyb0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaGVyby1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSBmcm9tICcuL2hlcm8uc2VydmljZSc7XHJcbmltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwLCBSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ215LWhlcm9lcycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdmlld3MvaGVyb2VzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3ZpZXdzL2hlcm9lcy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEhlcm9lc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgc2VsZWN0ZWRIZXJvOiBIZXJvO1xyXG5cclxuICAgIGhlcm9lcyA6IEhlcm9bXTtcclxuXHJcbiAgICB0aXRsZSA9ICdUb3VyIG9mIEhlcm9lcyc7XHJcbiAgICBkYXRhOiBhbnk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGhlcm9TZXJ2aWNlOiBIZXJvU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cCkgeyB9XHJcblxyXG4gICAgb25TZWxlY3QoaGVybzogSGVybyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRIZXJvID0gaGVybztcclxuICAgIH1cclxuXHJcbiAgICBnZXRIZXJvZXMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5oZXJvU2VydmljZS5nZXRIZXJvZXMoKS50aGVuKGhlcm9lcyA9PiB0aGlzLmhlcm9lcyA9IGhlcm9lcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5nZXRIZXJvZXMoKTtcclxuXHJcbiAgICAgICAgdmFyIGF1dGhIZWFkZXIgPSBuZXcgSGVhZGVycygpO1xyXG4gICAgICAgIHZhciB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY2Nlc3NfdG9rZW4nKTtcclxuICAgICAgICBhdXRoSGVhZGVyLmFwcGVuZCgnQXV0aG9yaXphdGlvbicsICdCZWFyZXIgJyArIHRva2VuKTsgXHJcbiAgICAgICAgdmFyIGp3dE9wdGlvbnMgPSBuZXcgUmVxdWVzdE9wdGlvbnMoeyBoZWFkZXJzOiBhdXRoSGVhZGVyIH0pO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5odHRwLmdldCgnYXBpL21lc3NhZ2UnLCBqd3RPcHRpb25zKVxyXG4gICAgICAgICAgICAubWFwKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICBkYXRhID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBkYXRhLFxyXG4gICAgICAgICAgICBlcnIgPT5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyciksXHJcbiAgICAgICAgICAgICgpID0+XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVxdWVzdCBDb21wbGV0ZScpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdvdG9EZXRhaWwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGV0YWlsJywgdGhpcy5zZWxlY3RlZEhlcm8uaWRdKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19