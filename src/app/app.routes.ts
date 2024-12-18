import { provideRouter } from '@angular/router';
import { Routes } from '@angular/router';
import { CategoryProductComponent } from './components/category-product/category-product.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginComponent } from './components/login/login.component';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import { ProductcomponentComponent } from './components/productcomponent/productcomponent.component';
import { RegisterComponent } from './components/register/register.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'product',component:ProductcomponentComponent},
    {path:'home', component:MaincomponentComponent},
    {path:'category', component:CategoryComponent},
    {path:'categoryProduct', component:CategoryProductComponent},
    {path:'**', redirectTo:'home',pathMatch:'full'}
];

