import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MaincomponentComponent } from './components/maincomponent/maincomponent.component';
import { ProductcomponentComponent } from './components/productcomponent/productcomponent.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NgIf,SideNavComponent, RouterOutlet,MaincomponentComponent,HeaderComponent,ProductcomponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Shopping';
  isLoggedIn:boolean=false;

  constructor()
  {
    
}
}
