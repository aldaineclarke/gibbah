import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('accessToken'),
  });

  private readonly endpoint = "http://localhost:3000";

  constructor(private readonly _http: HttpClient) { }

  signupUser(data:UserInterface):Observable<any>{
    console.log(data)
      return this._http.post<any>(this.endpoint+"/signUp", data,{withCredentials:false});
  }

  loginUser(data:UserInterface):Observable<{access_token:string, id:string}>{
    return this._http.post<{access_token:string, id:string}>(this.endpoint+"/login", data,{withCredentials:false} )
  }
  getUserInfo(userId:string | null):Observable<UserInterface>{
    return this._http.get<UserInterface>(this.endpoint+"/user/"+ userId,{
      withCredentials:false, 
    })
  }
}

export interface UserInterface{
  _id:string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  profileImg?:string;
}
