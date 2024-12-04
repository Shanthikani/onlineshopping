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

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,NgFor,RouterOutlet,RouterLink,RouterLinkActive,MatIconModule,MatToolbarModule,MatButtonModule,ProductcomponentComponent,MatIconAnchor,MatMenuModule,MatSelectModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public sideNavClose:boolean=false;
  public isMenuVisible:boolean=false;
  categories=["Beauty", "Fragrance", "Furniture", "Groceries"];
  sideNavOpen:boolean=true;
  public isLoggedIn!:boolean;


  constructor(private router:Router,private cdef:ChangeDetectorRef, public sidenavService:SidenavService,private auth:AuthService){
    
  }

  nav():void{
     
      this.router.navigate(['/product']).then(()=> this.cdef.detectChanges());
      
  }
  ngOnInit()
  {

    this.auth.onLoginUpdate.subscribe(()=>
    {
      this.isLoggedIn=this.auth.isLoggedIn();
    })
  }
  toogleSideNav()
  {
    this.sidenavService.toggle();
    // this.sideNavOpen=true;
    // console.log(this.sideNavOpen);
    
  }
  isSidenavClose():boolean
  {
    return this.sidenavService.close();
  }
  isSidenavOpen():boolean
    {
      return this.sidenavService.open();

    }
  

    menuClose()
    {
        this.sideNavClose=true
        this.sideNavOpen=false
        console.log(this.sideNavClose);
        this.sidenavService.open();
    }
    
    menuOpen(){
      this.sideNavOpen=true
      this.sideNavClose=false
     this.sidenavService.close()
    }

    toggleMenu()
    {
      this.isMenuVisible=!this.isMenuVisible;
    }

    logout()
    {
      this.auth.logout();
      this.isLoggedIn=this.auth.isLoggedIn();
    }
  }

