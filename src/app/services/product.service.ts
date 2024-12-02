import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { Products} from "../../models/product.model";
import {HttpClient} from '@angular/common/http';


@Injectable({
    providedIn:'root'
})

export class ProductService{
    constructor(private http:HttpClient) {
        console.log("Inside the product service");
    }

    // getProducts(url:string):Observable<Product>
    // {
    //    return this.http.get<Product>(url).pipe(
    //     (response:any)=>
    //     {
    //         let product=new Product(response.productName,response.price,response.url);
    //         this.productsList.push(product);
    //         console.log(product);
    //         return response;
    //     }
    //     )

    getProducts(url:string)
    {
        debugger;
        return this.http.get<Products>(url);
    }
       
       

    }
    

