import { NgIf } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { LoginInterface } from '../../interfaces/login.interface';
import { Router } from '@angular/router';
import { UserInterface } from '../../interfaces/user.interface';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatError,MatLabel,MatCardModule,MatFormFieldModule,NgIf,ReactiveFormsModule,MatButtonModule,MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  
  public loginInvalid!:boolean;
  isLoggedIn:boolean=false;
  isLoginFailed:boolean=false;
  loginForm!:FormGroup;
  submitted=false;
  errorMessage='';


  constructor(private auth:AuthService,private router:Router)
  {

  }
  
  ngOnInit(): void 
  {
     this.loginForm=new FormGroup(
    {
      username:new FormControl('',[Validators.required]),
      email:new FormControl('',[Validators.email]),
      password:new FormControl('',[Validators.required])
    }
  );
  }
  get f()
  {
    return this.loginForm.controls;
  }


  onSubmit()
  {
    const username:string=this.f['username'].value;
    const password:string=this.f['password'].value;
    const email:string=this.f['email'].value;

    const loginRequest:LoginInterface= {
      username:username,
      password:password,
      email:email
    }
    
    this.submitted=true;

    this.auth.getLoginUser(loginRequest).subscribe(
      {
        next:(user:UserInterface)=>
        {
            this.isLoggedIn=true;
            this.router.navigate(['/home']);
        },
        error:(error) =>
        {
            this.isLoggedIn=false;
            this.isLoginFailed=true;
            this.errorMessage=error;
            console.log(error);
            
        }
      }
    );   
  }
}
