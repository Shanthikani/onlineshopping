
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../interfaces/profile.interface';
import { UserInterface } from '../interfaces/user.interface';
import { Constant } from './constant/constant';



@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  constructor(private httpClient:HttpClient)
  {

  }
  getUser()
  {
    return this.httpClient.get<Profile>("http://localhost:8080/user/info")
  }
 
}
