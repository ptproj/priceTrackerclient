import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Costumer } from 'src/models/classcostumer';
import { DTOLoginCostumer } from 'src/models/classdtologincostumer';
import { Company } from 'src/models/classcompany';
import { DTOLoginCompany } from 'src/models/classdtologincompany';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

postcostumer(costumer:Costumer):Observable<DTOLoginCostumer>
{
return this.http.post<DTOLoginCostumer>("api/Customer/",costumer);
}
getcostumer(costumer:Costumer):Observable<DTOLoginCostumer>
{
return this.http.post<DTOLoginCostumer>("api/Customer/login/",costumer);
}

postcompany(company:Company):Observable<DTOLoginCompany>
{
return this.http.post<DTOLoginCompany>("api/Company/",company);
}
getcompany(company:Company):Observable<DTOLoginCompany>
{
return this.http.post<DTOLoginCompany>("api/Company/login",company);
}
getnewpassword(email:string):Observable<boolean>{
  return this.http.get<boolean>("api/Customer/"+email);
 
}

getnewcompanypassword(email:string):Observable<boolean>{
  return this.http.get<boolean>("api/Company/"+email);
 
}




}

