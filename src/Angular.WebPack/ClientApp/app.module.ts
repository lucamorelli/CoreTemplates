import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UniversalModule } from 'angular2-universal';

import { AppComponent } from './app.component';

@NgModule({
    imports: [
        UniversalModule // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }