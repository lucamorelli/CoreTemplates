import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from './login.component';

import { LoggedInGuard } from './logged-in.guard';

import { UserService } from './user.service';
import { HeroService } from './hero.service';


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
        LoginComponent
    ],
    providers: [
        HeroService,
        UserService,
        LoggedInGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }