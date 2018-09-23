import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthService2 } from './authservice';
import { AppComponent } from './app.component';
import { GoogleLoginComponent } from './google-login/google-login.component';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { AuthGuard } from './auth-guard.service';
import { ROUTING } from './routing';
import { DashboardComponent } from './dashboard/dashboard.component';
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('202252269213-4iu2od9qj3n4sat4ik35fa8umbf7u701.apps.googleusercontent.com')

  },
  ]);
  
  @NgModule({
  declarations: [
    AppComponent,
    GoogleLoginComponent,
    DashboardComponent
  ],
  imports: [ SocialLoginModule.initialize(config),
    BrowserModule,ROUTING
  ],
  providers: [AuthService2
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
