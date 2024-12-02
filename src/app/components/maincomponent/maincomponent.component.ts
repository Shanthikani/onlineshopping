import { NgFor, NgIf } from '@angular/common';
import { Component,OnInit,Output,EventEmitter, ViewChild,HostListener, Input } from '@angular/core';
import {  Product } from '../../../models/product.model';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { ProductService } from '../../services/product.service';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { SimplePopupComponent } from '../simple-popup/simple-popup.component';
import {MatDialog} from '@angular/material/dialog';
import { ModelComponent } from '../model/model.component';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver } from '@angular/cdk/layout';
import { SidenavService } from '../../services/Sidenav.service';

@Component({
  selector: 'app-maincomponent',
  standalone: true,
  imports: [NgFor,
            MatTableModule,
            MatCardModule,
            MatDividerModule,
            MatGridListModule,
            MatPaginator,
            SimplePopupComponent,
            NgIf],
  templateUrl: './maincomponent.component.html',
  styleUrl: './maincomponent.component.css',
  
})
export class MaincomponentComponent implements OnInit{
  headers=["id","title","description","category","price","discountPercentage","rating","stock","tags","brand","sku","weight","dimensions","warrantyInformation","shippingInformation","availabilityStatus","reviews","returnPolicy","minimumOrderQuantity","meta","images"];
  productList:Product[]=[];
  public pageSlice:Product[]=[];
  productService:ProductService;
  selectedProduct!:Product;
  cols!:number;
  tileSize=315;
  startIndex:number=0;
  endIndex:number=9;
  isPopUpVisible:boolean=false;
  
  // @Output() sidenavClose=new EventEmitter<void>();
  // @Output() sidenavOpen=new EventEmitter<void>();
  

  @ViewChild (MatPaginator) paginator!:MatPaginator;
  dataSource!:MatTableDataSource<Product>;
  
  @ViewChild('theContainer') theContainer:any;

  constructor(productService:ProductService,public dialog:MatDialog)
 {
      this.productService=productService;
     
 }

 /* Initializing the API service using HTTP method - Get */
  ngOnInit():void{
    this.productService.getProducts("https://dummyjson.com/products").subscribe(
    {
      next:(value)=>{
        this.productList=value.products;
        this.pageSlice=this.productList.slice(0,10);
        console.log(this.productList);
        
    },
      error:(error) =>{

      }

  })
  }

/*Pop UP */ 
 showPopUp(product: Product,event:Event)
 {
    /* Setting the selected product */
    console.log(product.title);
    this.selectedProduct=product;
    this.isPopUpVisible=true;
    const dialogRef=this.dialog.open(ModelComponent,
      { 
        width:'auto',
        height:'auto',
        data:product
      });
   
 }
 hidePopUp()
 {
      this.isPopUpVisible=false;
 }

 /* Resize tile size according to the Window  size*/

 setColumnNum()
 {
      let width=this.theContainer.nativeElement.offsetWidth;
      this.cols=Math.trunc(width/this.tileSize);
  }
 ngAfterViewInit()
 {
      this.setColumnNum();
      
 }

 @HostListener('window:resize',['$event'])
 onResize(event: any)
{
      this.setColumnNum();
}

/* pagination */
 onPageChange(event:PageEvent):PageEvent
 {
      this.startIndex=event.pageIndex * event.pageSize;
      this.endIndex=this.startIndex+event.pageSize;
      if(this.endIndex >this.productList.length)
      {
        this.endIndex=this.productList.length;
      }
      this.pageSlice=this.productList.slice(this.startIndex,this.endIndex);
      return event;
}
}
