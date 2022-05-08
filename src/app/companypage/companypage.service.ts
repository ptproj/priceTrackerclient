import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companyproduct } from 'src/models/classcompanyproduct';
import { Costumerproduct } from 'src/models/classcostumerproduct';
import { Package } from 'src/models/classpackage';


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
  addcompanyproduct(companyproduct:Companyproduct,file:any):Observable<Companyproduct>{
    let formData = new FormData();
 
   formData.append('file', file, file.name);
   let obj={companyproduct:companyproduct,file:formData}
   debugger;
    return this.http.post<Companyproduct>("api/Companyproduct/",formData)
  }
  updatecompanyproduct(companyproduct:Companyproduct):Observable<Companyproduct>{
   return this.http.put<Companyproduct>("api/Companyproduct/",companyproduct)
  }
  getpackage():Observable<Package[]>{
 
    return this.http.get<Package[]>("/api/Package/")


  }
  buyPackage(packageid:number):Observable<boolean>{
    const companyid=sessionStorage.getItem('companyid');
   return this.http.put<boolean>("/api/Company/"+packageid+"/"+companyid,null)
  }
 
}
