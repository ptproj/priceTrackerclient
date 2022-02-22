export class Company{
    id:number | undefined ;
    name:string | undefined;
    password:string | undefined;
    companylink:string | undefined;
    packageid?:number;
    startofsubsciption?:Date;
    constructor(n:string,link:string,pass:string)
    {
   this.companylink=link;
   this.name=n;
   this.password=pass;
   
    }
  //   constructor(n:String,pass:string)
  //   {
  //  this.name=n;
  //  this.password=pass;
   
  //   }
  }