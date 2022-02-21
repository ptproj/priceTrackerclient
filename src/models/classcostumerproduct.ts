export class Costumerproduct{
    id?:number;
    costumerid?:number;
    productlink?:string;
    baseprice?:number;
    finalprice?:number;
    description?:string;
    constructor(costumerid:number, productlink:string)
    {
        this.costumerid=costumerid;
        this.productlink=productlink;
    }
}
