import { Component, OnInit } from '@angular/core';
import { Profile } from '../../interfaces/profile.interface';

import { UserServiceService } from '../../services/user.service';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatFormFieldModule,MatCardModule,NgIf,MatButtonModule,NgFor],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  isLoggedIn:boolean=false;
  username:any=sessionStorage.getItem("username");
  profile!:Profile;
  roles:any;
  constructor(private userService:UserServiceService)
  {

  }

  ngOnInit()
  {
    if(this.username!==null)
    {
      this.isLoggedIn=true;
    }
   this.displayUser();

  }

  displayUser()
  {
    this.userService.getUser().subscribe((res:any)=>
    {
      
      this.profile=res;
      this.roles=JSON.stringify(this.profile.roles);

      console.log(this.profile.username);
      
    });
    
  }
  onUpdatePassword()
  {

  }

}
