import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from "primeng/api";

@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.css']
})
export class BeginComponent implements OnInit {

  constructor(private _router:Router) { }
  costumer()
{
this._router.navigate(['/login/costumerlogin'])
}
company(){
this._router.navigate(['/login/companylogin'])
}
  ngOnInit(): void { 
  }
  
    geeks?: boolean;
  
    gfg() {
      this.geeks = true;
    }

}
 
