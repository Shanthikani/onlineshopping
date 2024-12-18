import { BreakpointObserver } from '@angular/cdk/layout';
import { outputAst } from '@angular/compiler';
import { Component,EventEmitter,Output,ViewChild } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SidenavService } from '../../services/Sidenav.service';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatDividerModule,
    MatIconModule,
    MatSidenavModule,
    RouterOutlet,RouterLink],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  @ViewChild(MatSidenav) sidenav!:MatSidenav;
  private observer:BreakpointObserver;
  openedSmallScreen:boolean=false;
  
  constructor(private sidenavService:SidenavService,observer:BreakpointObserver)
{
  this.observer=observer;

}
ngAfterViewInit()
{
  this.sidenavService.setSideNav(this.sidenav);
      this.observer.observe(['(max-width:800px)']).subscribe((res)=>
      {
      if(res.matches)
      {
        this.sidenav.mode="over";
        this.sidenav.close();       
      }
      else
      {
        debugger;
        this.sidenav.mode="side"; 
       
           

      }
    });

   
    
}
}
