import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Companyproduct } from 'src/models/classcompanyproduct';

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
}
