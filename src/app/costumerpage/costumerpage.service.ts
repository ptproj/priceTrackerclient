import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Costumerproduct } from "src/models/classcostumerproduct";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
  })
  
  export class CostumerpageService {
    
    
    products:Costumerproduct[] | undefined
  
    
  constructor(private http:HttpClient) { 
     
  }
  
  getcostumerproduct():Observable<Costumerproduct[]>{
    const token:any=sessionStorage.getItem('token');
    const httpOptions={
  
         headers:new HttpHeaders({
             'Authorization':token.tostring()
         })
     }
    
   const costumerid=sessionStorage.getItem('costumerid');
   const c=Number(costumerid)
   return  this.http.get<Costumerproduct[]>("api/Customerproduct/"+c,httpOptions)
     
 }
deletecostumerproduct(productid:number){
  const token:any=sessionStorage.getItem('token');
    const httpOptions={
  
         headers:new HttpHeaders({
             'Authorization':token.tostring()
         })
     }
    
    this.http.get<Costumerproduct[]>("api/Customerproduct/"+productid,httpOptions)
}
addcostumerproduct(costumerproduct:Costumerproduct):Observable<Costumerproduct>{
  const token:any=sessionStorage.getItem('token');
    const httpOptions={
  
         headers:new HttpHeaders({
             'Authorization':token.tostring()
         })
     }
    return  this.http.post<Costumerproduct>("api/Customerproduct/",costumerproduct,httpOptions);
}
  }
  
  
