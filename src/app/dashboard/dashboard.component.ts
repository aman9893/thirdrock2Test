import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular4-social-login";
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user;
key;
  constructor(private authService: AuthService,private route: Router) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(this.user)
   
    });
  }

  signOut(): void {

  this.key = 'googleAuthToken';
    this.authService.signOut();
    localStorage.removeItem(this.key);
    this.route.navigate(['login']);
  }

}
