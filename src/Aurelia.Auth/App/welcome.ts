import { computedFrom } from 'aurelia-framework';
import { AuthService, FetchConfig } from 'aurelia-authentication';
import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { Endpoint } from 'aurelia-api';


@autoinject
export class Welcome {
  public heading = 'Welcome to the Aurelia Navigation App!';
  public firstName = 'John';
  public lastName = 'Doe';
  private previousValue = this.fullName;

  constructor(private authService: AuthService, private httpClient: HttpClient, private fetchConfig: FetchConfig) {

      if (authService.authenticated) {
          var client: any = this.fetchConfig.configure(new HttpClient());

          client.fetch('/api/message', {
              method: 'get',
              //body: JSON.stringify(auth),
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
              }
          })
          .then((response: Response) => {
              if (response.ok) {
                  response.text().then(testo => {
                      alert(testo);
                  });
              }
          });
       }
      //if (authService.authenticated) {
      //    apiEndPoint.find('/message')
      //    .then((response: Response) =>{
      //        if (response.ok) {
      //            response.text().then(testo => {
      //                alert(testo);
      //            });
      //      }
      //        })
      //        .catch(console.error);

      //}
  };

  // Getters can't be directly observed, so they must be dirty checked.
  // However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  // To optimize by declaring the properties that this getter is computed from, uncomment the line below
  // as well as the corresponding import above.
  // @computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  public submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  public canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  public toView(value) {
    return value && value.toUpperCase();
  }
}
