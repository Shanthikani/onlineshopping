import { Component,ChangeDetectorRef } from '@angular/core';
import { MatButtonModule, MatIconAnchor } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { ProductcomponentComponent } from '../productcomponent/productcomponent.component';
import { SidenavService } from '../../services/Sidenav.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf,RouterOutlet,RouterLink,RouterLinkActive,MatIconModule,MatToolbarModule,MatButtonModule,ProductcomponentComponent,MatIconAnchor,MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public sideNavClose:boolean=false;
  sideNavOpen:boolean=true;


  constructor(private router:Router,private cdef:ChangeDetectorRef, public sidenavService:SidenavService){
    
  }
  nav():void{
     
      this.router.navigate(['/product']).then(()=> this.cdef.detectChanges());
      
  }
  ngOnInit()
  {
    this.sidenavService.close();
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
  

    menuClose(){
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
  }

