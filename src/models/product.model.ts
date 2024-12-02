import { NumberValueAccessor } from "@angular/forms";
import { Timestamp } from "rxjs";

export interface Product
{
    id:number;
    title:string;
    description:string;
    category:string;
    price:number;
    discountPercentage:number;
    rating:number;
    stock:number;
    tags:string[];
    brand:string;
    sku:string;
    weight:number;
    dimensions:Dimension[];
    warrantyInformation:string;
    shippingInformation:string;
    availabilityStatus:string;
    reviews:Review[];
    returnPolicy:string;
    minimumOrderQuantity:number;
    meta:Information[];
    images:string[];
    thumbnail:string;
}
export interface Information{
    createdAt:Timestamp<any>;
    updatedAt:Timestamp<any>;
    barcode:number;
    qrCode:number;

}
export interface Dimension{
    width:number;
    height:number;
    depth:number;
}
export interface Review{
    rating:number;
    comment:string;
    date:Timestamp<any>;
    reviewerName:string;
    reviewerEmail:string;
}
export interface Products
{
    products:Product[];
}