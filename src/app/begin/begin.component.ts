import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.css']
})
export class BeginComponent implements OnInit {

  constructor(private _router:Router) { }
  costumer()
{
this._router.navigate(['/costumerlogin'])
}
company(){
this._router.navigate(['/company'])
}
  ngOnInit(): void {
  }

}
