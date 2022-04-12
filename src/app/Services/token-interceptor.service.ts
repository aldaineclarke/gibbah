import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req:HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>>{
    const accessToken = localStorage.getItem('accessToken');
    const updatedReq = req.clone({
      setHeaders: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
    },
    });
    console.log(accessToken)
    return next.handle(updatedReq);
  }
}
