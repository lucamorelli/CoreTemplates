import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';
import { NavBarComponent } from './nav-bar.component';

import { LoggedInGuard } from './logged-in.guard';

import { UserService } from './user.service';
import { HeroService } from './hero.service';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import { AuthConfig } from 'angular2-jwt/angular2-jwt';


export function getAuthHttp(http) {
    return new AuthHttp(new AuthConfig({
        noJwtError: true
    }), http);
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        LoginComponent,
        NavBarComponent
    ],
    providers: [
        HeroService,
        UserService,
        LoggedInGuard,
        {
            provide: AuthHttp,
            useFactory: getAuthHttp,
            deps: [Http]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }