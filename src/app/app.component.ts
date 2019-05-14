import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authenticationService.init();
  }

  authenticated(): boolean {
    return this.authenticationService.isLoggedIn();
  }

  logout(): void {
    this.authenticationService.logout(() => {
      //this.router.navigate(["/"]);
      window.location.href = "/";
    });
  }
  
  title = 'Lightning Talk Exercise';
}
