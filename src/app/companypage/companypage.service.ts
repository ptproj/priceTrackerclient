import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companyproduct } from 'src/models/classcompanyproduct';
import { Costumerproduct } from 'src/models/classcostumerproduct';

@Injectable({
  providedIn: 'root'
})
export class CompanypageService {
  products:Companyproduct[] | undefined
  constructor(private http:HttpClient) { }


  getcompanyproduct():Observable<Companyproduct[]>{
    const companyid=sessionStorage.getItem('companyid');
    const c=Number(companyid)
    return this.http.get<Companyproduct[]>("/api/CompanyProduct/"+c)
  }
  deletecompanyproduct(productid:number):Observable<boolean>{
    return this.http.delete<boolean>("api/Companyproduct/"+productid)


  }
  addcompanyproduct(companyproduct:Companyproduct):Observable<Companyproduct>{
    return this.http.post<Companyproduct>("api/Companyproduct/",companyproduct)
  }
  updatecompanyproduct(companyproduct:Companyproduct):Observable<Companyproduct>{
   return this.http.put<Companyproduct>("api/Companyproduct/",companyproduct)
  }
}
