import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatError, MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatError,MatLabel,MatCardModule,MatFormFieldModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginInvalid:boolean=true;
  
  loginForm=new FormGroup(
    {
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required])

    }
  );

onSubmit()
{
  console.log(this.loginForm.value.email);
  if(this.loginForm.value.email==="abc@gmail.com" || this.loginForm.value.email==="abc" && this.loginForm.value.password==="abc")
  {
    
  this.loginInvalid=false;
  }
  else
  {
    this.loginInvalid=true;
  }
}
}
