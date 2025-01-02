import { Component, OnInit } from '@angular/core';
import { Profile } from '../../interfaces/profile.interface';

import { UserServiceService } from '../../services/user.service';

import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatFormFieldModule,MatCardModule,NgIf,MatButtonModule,NgFor,MatLabel,MatInputModule,FormsModule],
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

      console.log(this.profile.roles[0]);
      
    });
    
  }
  onUpdatePassword()
  {

  }

}
