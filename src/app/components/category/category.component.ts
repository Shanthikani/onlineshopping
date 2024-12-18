import { Component,OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import {map, Observable} from 'rxjs';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Category, Product } from '../../../models/product.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule,MatTableModule,MatButtonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent implements OnInit{

  categories$!:Observable<any>;
  displayColumns=["S.NO","slug","name"];
  constructor(private productService:ProductService)
  {
    

  }
  ngOnInit(): void {
    this.categories$=this.productService.getCategories();
  }
 
  
  

}
