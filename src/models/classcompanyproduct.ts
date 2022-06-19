export class Companyproduct{
    id?:number;
    companyid?:number;
    image?:string;
    price?:number;
    name?:string;
    description?:string;
    active?:boolean;
    productlink?:string;
    imageContent?:string;
    constructor(companyid:number,price:number,name:string
        ,description:string,active:boolean,productlink:string)
    {
        this.companyid=companyid;
        this.price=price;
        this.name=name;
        this.description=description;
        this.active=active;
        this.productlink=productlink;
    }
    

}