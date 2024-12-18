import { Injectable } from '@angular/core';
import { Subject} from 'rxjs';
import { Categories, Products} from "../../models/product.model";
import {HttpClient} from '@angular/common/http';
import { Constant } from './constant/constant';


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
        return this.http.get<Products>(url);
    }

    getCategories()
    {
        return this.http.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
    } 
    saveProduct(obj:any)
    {
        return this.http.post(Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT,obj)
    }
    updateProduct(obj:any)
    {
        return this.http.post(Constant.API_END_POINT+ Constant.METHODS.UPDATE_PRODUCT,obj);
    }
    deleteProduct(id:any)
    {
        return this.http.delete(Constant.API_END_POINT+Constant.METHODS.DELETE_PRODUCT + id);
    }
    getCategoryProducts(category:any)
    {
        return this.http.get(category.url);
    }
    }
    

