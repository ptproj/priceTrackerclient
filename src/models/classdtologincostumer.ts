export class DTOLoginCostumer{
    id?:number ;
    email?:string;
    password?:string;
    token?:string;
 
    constructor(e:string,p:string)
    {
      this.email=e;
      this.password=p;

    }
  }