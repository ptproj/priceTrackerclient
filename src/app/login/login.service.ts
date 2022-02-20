import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Costumer } from 'src/models/classcostumer';
import { DTOLoginCostumer } from 'src/models/classdtologincostumer';

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

}

