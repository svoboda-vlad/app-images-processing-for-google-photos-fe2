import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleLoginService {

  googleLoginUrl = "google-login";
  authorizationHeader = "Authorization";
  idTokenKey = "id_token";
  accessTokenKey = "access_token";

  constructor() { }

  logOut(): void {
    localStorage.removeItem(this.idTokenKey);
    localStorage.removeItem(this.accessTokenKey);    
  }

  getIdToken(): string | null {
    return localStorage.getItem(this.idTokenKey);
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }  

}
