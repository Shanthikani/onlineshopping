import { CommonModule, NgIf } from '@angular/common';
import {OnInit} from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgIf,HeaderComponent,CommonModule,MatGridListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  isLoggedIn!:boolean;
  categoryList:any=[];
  categories$!:Observable<any>;

  constructor(private auth:AuthService, private productService:ProductService)
  {
    this.isLoggedIn=auth.isLoggedIn();
  }
  ngOnInit(): void {
    this.categories$=this.productService.getCategories();
  }
  
  getAllCategories()
  {
    
  }


}

