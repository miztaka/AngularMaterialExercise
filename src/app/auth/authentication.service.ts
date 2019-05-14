import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// FIXME another way ?
declare const gapi: any;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private auth;
  private currentUser = null;
  private onSuccess: Function = function() {};

  redirectUrl: string = null;

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }

  constructor() { }

  init(): void {
    gapi.load('auth2', () => {
      this.auth = gapi.auth2.init({
        client_id: environment.clientId
      });
      this.auth.then(() => {
        // after init
        if (this.auth.isSignedIn.get() == true) {
          console.debug("Signed in silently.");
          this.currentUser = this.auth.currentUser.get();
        } else {
          console.debug("Not signed in.");
          this.auth.isSignedIn.listen((bool) => {
            if (bool) {
              console.log("changed to signed in.");
              this.currentUser = this.auth.currentUser.get();
              this.onSuccess();
            }
          });
        }
      });
    });
  }

  login(onSuccess: Function): void {
    this.onSuccess = onSuccess;
    this.auth.signIn({
      prompt: 'select_account'
    });
  }

  logout(callback: Function): void {
    console.log("logout called.");
    this.currentUser = null;
    this.auth.signOut().then(() => {
      console.log("logged out");
      callback();
    })
  }

  getEmail(): string {
    if (this.currentUser) {
      return this.currentUser.getBasicProfile().getEmail();
    }
    return null;
  }

  getIdToken(): string {
    return this.currentUser.getAuthResponse().id_token;
  }

}
