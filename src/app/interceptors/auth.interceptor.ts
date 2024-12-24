import { HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ɵafterNextNavigation } from '@angular/router';
import { Observable } from 'rxjs';


// export const authInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

@Injectable({
  providedIn:'root'
})
export class AuthInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
    let modifiedReq=req;
    let token=sessionStorage.getItem("token");
    if(!token)
    {
      console.error("Token is missing from the session storage!");
    }

    if(sessionStorage.getItem("username") && sessionStorage.getItem("token"))
    {
      modifiedReq=req.clone({
        setHeaders:{
          Authorization:token?`${token}`:""
        }
      });
    }
    console.log(modifiedReq);
    
    return next.handle(modifiedReq);
  }


}