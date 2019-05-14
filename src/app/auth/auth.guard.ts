import { Injectable, NgZone } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    console.log('AuthGuard#canActivate called');
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authenticationService.isLoggedIn()) { return true; }
  
    // Store the attempted URL for redirecting
    this.authenticationService.redirectUrl = url;
  
    // Navigate to the login page with extras
    this.authenticationService.login(() => {
      console.log("redirect to :" + url);
      
      this.ngZone.run(() => {this.router.navigate([url])});
    });
    return false;
  }

}
