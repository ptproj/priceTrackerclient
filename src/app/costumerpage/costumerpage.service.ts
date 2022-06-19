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
   
   const costumerid=sessionStorage.getItem('costumerid');
   const c=Number(costumerid)
   return this.http.get<Costumerproduct[]>("api/Costumerproduct/"+c)
     
 }
deletecostumerproduct(productid:number):Observable<boolean>{
 
   return this.http.delete<boolean>("api/Costumerproduct/"+productid)
}
addcostumerproduct(costumerproduct:Costumerproduct):Observable<Costumerproduct>{
  
    return  this.http.post<Costumerproduct>("api/Costumerproduct/",costumerproduct);
}

  }
  
  
