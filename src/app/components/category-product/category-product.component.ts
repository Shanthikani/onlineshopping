import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Observable } from 'rxjs';
import { Category, Product } from '../../../models/product.model';
import { CategoryService } from '../../services/category.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-category-product',
  standalone: true,
  imports: [MatCardModule,NgFor,MatCardModule,MatGridListModule,CommonModule,MatButtonModule],
  templateUrl: './category-product.component.html',
  styleUrl: './category-product.component.css'
})
export class CategoryProductComponent implements OnInit {
  category:any;
  categories$!:Observable<any>;
  cols=4;
  productList:Product[]=[]

  constructor(private productService:ProductService,private categoryService:CategoryService)
  {
    

  }
  ngOnInit(): void {
    console.log("Inside the Init CategoryProduct");
    this.categoryService.getData().subscribe((res:any)=>
    {
      console.log(res.url);
      this.category=res;
      this.getAllCategoryProducts();
     
    }
    );
  }
  getAllCategoryProducts()
  {
    this.categoryService.getCategoryProducts(this.category.url).subscribe((res:any)=>
    {
      this.productList=res.products;
      console.log("Inside the Category Comp getAllCategoryProducts");
      
    });
  }
}
