import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import { ProductcomponentComponent } from './components/productcomponent/productcomponent.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'product',component:ProductcomponentComponent},
    {path:'home', component:MaincomponentComponent},
    {path:'**', redirectTo:'home',pathMatch:'full'}
];

