export class Product_Ex{
    constructor(private _productName:string,
        private _price:number,
        private _url:string)
        {

        }

    public get productName():string
    {
        return this.productName;
    }
    public get price():number
    {
        return this.price;
    }
    public get url():string
    {
        return this.url;
    }
}