import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Headers, Http, RequestOptions } from '@angular/http';
import { RequestOptionsServices } from './request-options.services';

@Component({
    selector: 'my-heroes',
    template: require('./heroes.component.html'),
    styles: [require('./heroes.component.css')]
})
export class HeroesComponent implements OnInit {

    selectedHero: Hero;

    heroes : Hero[];

    title = 'Tour of Heroes';
    data: any;

    constructor(
        private router: Router,
        private heroService: HeroService,
        public http: Http,
        private requestOptions: RequestOptionsServices) { }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();


        this.http.get('api/message', this.requestOptions.jwt)
            .map(res => res.json())
            .subscribe(
            data =>
                this.data = data,
            err =>
                console.log(err),
            () =>
                console.log('Request Complete')
            );
    }
    
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

