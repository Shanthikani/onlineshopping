import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  onCategorySelection:Subject<any>=new BehaviorSubject<any>("");
  constructor(private http:HttpClient) {

   }

   sendData(category:any)
   {
   // console.log(category);
    this.onCategorySelection.next(category);
  
    
   }
   getData()
   {
    return this.onCategorySelection.asObservable();
   }




getCategoryProducts(categoryUrl:any)
  {     
        
        return this.http.get(categoryUrl);
  }
}
