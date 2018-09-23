
import { Component, OnInit } from '@angular/core'; 
import { AuthService } from "angular4-social-login";
import {  GoogleLoginProvider } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { AuthService2 } from '../authservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements OnInit  {
  
  private user: SocialUser;
  private loggedIn: boolean;
  key;

  constructor(private authService: AuthService, private auth: AuthService2 ,private route: Router) { }
 
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.login()
  }

  ngOnInit() {
    
  }
login(){

  this.authService.authState.subscribe((user) => {
    this.user = user;
    console.log(this.user)
    this.loggedIn = (user != null);

    this.key = 'googleAuthToken';
    if( this.user){

      this.auth.sendToken(this.user.authToken);
      this.route.navigate(['dashboard']);
    }
   
  });
 } 
}