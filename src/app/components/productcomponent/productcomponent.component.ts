import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Product,Category } from '../../../models/product.model';
import { Constant } from '../../services/constant/constant';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-productcomponent',
  standalone: true,
  imports: [CommonModule,FormsModule,MatButtonModule,MatIconModule],
  templateUrl: './productcomponent.component.html',
  styleUrl: './productcomponent.component.css'
})
export class ProductcomponentComponent implements OnInit {
  isSidePanelVisible:boolean=false;
  categories:any=[];
  brands:any=[];
  stock:string[]=["In Stock","Low Stock","High Stock"];
  public productObj:Product={
    id: 0,
    title: "",
    description: "",
    category: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    sku: "",
    warrantyInformation: "",
    availabilityStatus: "",
    returnPolicy: "",
    minimumOrderQuantity: 0,
    images: [""],
    tags: [],
    weight: 0,
    dimensions: [],
    shippingInformation: '',
    reviews: [],
    meta: [],
    thumbnail: ''
  }
  productList:Product[]=[];
  constructor(private productService:ProductService)
  {
    
  }
  ngOnInit(): void {
    this.getAllCategories();
    this.getAllProducts();
    
  }
  openSidePanel(){
    this.isSidePanelVisible=true;

  }
  closeSidePanel()
  {
    this.isSidePanelVisible=false;
  }
  onEdit(item:any){
    this.productObj=item;
    this.openSidePanel();

  }
  onDelete(item:any)
  {
    const isDelete=confirm("Are you sure that you want to delete?");
    if(isDelete)
    {
      this.productService.deleteProduct(item.id).subscribe((res:any)=>
      {
        if(res)
        { 
          alert("Product Deleted");
        }
        else{
          alert(res.message);
        }
  
      } );

  }
}
  onReset()
  {
    this.productObj=
    {id: 0,
      title: "",
      description: "",
      category: "",
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: "",
      sku: "",
      warrantyInformation: "",
      availabilityStatus: "",
      returnPolicy: "",
      minimumOrderQuantity: 0,
      images: [""],
      tags: [],
      weight: 0,
      dimensions: [],
      shippingInformation: '',
      reviews: [],
      meta: [],
      thumbnail: ''}
  }


  getAllCategories()
  {
    this.productService.getCategories().subscribe((res:any)=>
    {    
      this.categories=res;
    });
  }
  getAllProducts()
  {
    this.productService.getProducts("https://dummyjson.com/products").subscribe(
    {
      next:(value)=>{
        this.productList=value.products;        
    },
      error:(error) =>{

      }

  })
  }
  onSave()
  {
    this.productService.saveProduct(this.productObj).subscribe((res:any)=>
    {
      if(res)
      { 
        alert("Product created");
      }
      else{
        alert(res.message);
      }

    } );

  }

  onUpdate()
  {
    this.productService.updateProduct(this.productObj).subscribe((res:any)=>
    {
      if(res)
      { 
        alert("Product Updated");
      }
      else{
        alert(res.message);
      }

    } );
  }
}
