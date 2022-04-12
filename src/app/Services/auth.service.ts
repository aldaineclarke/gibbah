import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt"

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _jwtHelper: JwtHelperService) { }
  
  isAuthenticated(): boolean {
    const accessToken = localStorage.getItem('accessToken') as string;
    console.log(accessToken);
    return !this._jwtHelper.isTokenExpired(accessToken);
  }
}
