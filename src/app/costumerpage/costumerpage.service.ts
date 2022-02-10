import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Costumerproduct } from "src/models/classcostumerproduct";
import { HttpHeaders } from "@angular/common/http";
@Injectable({
    providedIn: 'root'
  })

  export class CostumerpageService {
    constructor(private http:HttpClient) { }
   
     
    token:any=sessionStorage.getItem('token');
    
    
    httpOptions={

       headers:new HttpHeaders({
           'Authorization':this.token.tostring()
       })
   }
    
   
   
   
  
 getcostumerproduct():Observable<Costumerproduct[]>{
   const costumerid=sessionStorage.getItem('costumerid');
   const c=Number(costumerid)
   return  this.http.get<Costumerproduct[]>("api/Customerproduct/"+c,this.httpOptions)
     
 }
deletecostumerproduct(productid:number){
    this.token.tostring();
    this.http.get<Costumerproduct[]>("api/Customerproduct/"+productid,this.httpOptions)
}
addcostumerproduct(costumerproduct:Costumerproduct):Observable<Costumerproduct>{
    return  this.http.post<Costumerproduct>("api/Customerproduct/",costumerproduct,this.httpOptions);
}
  }
  
  
