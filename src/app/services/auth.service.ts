import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError,Subject } from 'rxjs';
import { LoginInterface } from '../interfaces/login.interface';
import { UserInterface } from '../interfaces/user.interface';

const headers=new HttpHeaders().set('Content-Type','application/json');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl='http://localhost:8080/auth/';
  onLoginUpdate:Subject<void>=new Subject<void>();

  constructor(private httpClient:HttpClient,private router:Router) { }

isLoggedIn()
{
  return sessionStorage.getItem("username")!==null;
}

logout()
{
  sessionStorage.clear();
  this.router.navigate(['/login']);
}

getLoginUser(loginData:LoginInterface):Observable<UserInterface>
{
  return this.httpClient.post<UserInterface>(this.baseUrl+'login',loginData,{headers})
  .pipe(catchError(this.handleError),
    map((e)=>
          {
              e.username=loginData.username;
              sessionStorage.setItem("username",e.username);
              sessionStorage.setItem("token","Bearer"+e.token);
              sessionStorage.setItem("roles",JSON.stringify(e.role));
              this.onLoginUpdate.next()
            return e;            
          } 
        )
      
        );
        
  }

  signUp(userDetails:LoginInterface):Observable<any>
  {
    return this.httpClient.post(this.baseUrl+'signup',userDetails,{headers,responseType:'text'}).pipe(catchError(this.handleError));
  }

  handleError(httpError:HttpErrorResponse)
  {
     let message:string='';
    if(httpError.error instanceof ProgressEvent)
    {
      console.log('In progress event');
      message="Network Error";
      
    }
    else
    {
      message=httpError.error.message;
      console.log(`Backend Returned code ${httpError.status}, Body was: ${httpError.error}`);
    }
    return throwError(message);
  }


}
