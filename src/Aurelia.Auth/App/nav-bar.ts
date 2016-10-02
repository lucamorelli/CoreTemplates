import { bindable, autoinject, computedFrom } from 'aurelia-framework';
import { AuthService } from 'aurelia-authentication';
import { Router } from 'aurelia-router';
import { Subscription, EventAggregator } from 'aurelia-event-aggregator';
import { Config } from 'aurelia-api';
import { HttpClient } from 'aurelia-fetch-client';

@autoinject
export class NavBar {
    displayName: string = "";
    @bindable router: Router = null;
    subscription: Subscription;

    constructor(private auth: AuthService, private ea: EventAggregator, private config: Config) { 
        this.updateDisplayName();

        this.subscription = this.ea.subscribe('authChanged', this.authChangedListener);
    }

    authChangedListener = () => {
        this.updateDisplayName();
    }

    @computedFrom('auth.authenticated')
    get isAuthenticated(): boolean {
        return this.auth.authenticated;
    }

    private updateDisplayName() {
        if (this.auth.authenticated) {
            this.auth.getMe().then(response => {
                return this.displayName = response.preferred_username;
            });
        } else {
            this.displayName = "";
        };
    }
}