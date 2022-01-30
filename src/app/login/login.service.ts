import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Costumer } from 'src/models/classcostumer';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

postcostumer(costumer:Costumer):Observable<Costumer>
{
return this.http.post<Costumer>("api/Costumer/",costumer);
}
getcostumer(num:string):Observable<Costumer>{
  return this.http.get<Costumer>("api/Costumer/"+"num");
}

}
