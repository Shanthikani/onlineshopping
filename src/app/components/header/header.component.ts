import { Component,ChangeDetectorRef, NgModule } from '@angular/core';
import { MatButtonModule, MatIconAnchor } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { ProductcomponentComponent } from '../productcomponent/productcomponent.component';
import { SidenavService } from '../../services/Sidenav.service';
import { NgFor, NgIf } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Category } from '../../../models/product.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,NgFor,MatSidenavModule,RouterOutlet,RouterLink,RouterLinkActive,MatIconModule,MatToolbarModule,MatButtonModule,ProductcomponentComponent,MatIconAnchor,MatMenuModule,MatSelectModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public sideNavClose:boolean=false;
  public isMenuVisible:boolean=false;
  public isSidenavVisible:boolean=false;
  categories:any=[];
  sideNavOpen:boolean=true;
  public isLoggedIn!:boolean;
  public category!:Category;
  public username:any;
  



  constructor(private router:Router,private cdef:ChangeDetectorRef, public sidenavService:SidenavService,private auth:AuthService,private productService:ProductService,private categoryService:CategoryService){
    
  }

  nav():void{
     
      this.router.navigate(['/product']).then(()=> this.cdef.detectChanges());
      
  }
 
  ngOnInit()
  {
      this.loginUpdate();
      this.getAllCategories();   
  }

  loginUpdate()
  {
    this.auth.onLoginUpdate.subscribe(()=>
    {
      this.isLoggedIn=this.auth.isLoggedIn();
      this.username="Welcome "+ sessionStorage.getItem("username")+"!";

    });
  }
  toogleSideNav()
  {
    this.sidenavService.toggle();
    if(this.sidenavService.open())
    {
      this.sidenavService.open();
    }
    else
    {
      this.sidenavService.close();
    }
    
  } 

  toggleMenu()
  {
    this.isMenuVisible=!this.isMenuVisible;
  }
  toggleSidenav()
  {
    	this.isSidenavVisible=!this.isSidenavVisible;

      if(this.isSidenavVisible)
      {
        this.sidenavService.open()
      }
      else{
        this.sidenavService.close();
      }
   
  }

  logout()
  {
    this.auth.logout();
    this.isLoggedIn=this.auth.isLoggedIn();
  }
  getAllCategories()
  {
    this.productService.getCategories().subscribe((res:any)=>
    {
      this.categories=res;
    });
  }
  setCategoryProduct(category:any)
  {
    this.categoryService.sendData(category);
    
  }
  

  }

