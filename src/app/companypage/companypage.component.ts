import { Component, OnInit } from '@angular/core';
import { Companyproduct } from 'src/models/classcompanyproduct';
import { CompanypageService } from './companypage.service';

@Component({
  selector: 'app-companypage',
  templateUrl: './companypage.component.html',
  styleUrls: ['./companypage.component.css']
})
export class CompanypageComponent implements OnInit {
  products:Companyproduct[] | undefined
  constructor(private companypageservice:CompanypageService) { }

  ngOnInit(): void {

alert("init companypage")
this.companypageservice.getcompanyproduct().subscribe(data=>{


this.products=data
this.companypageservice.products=data

})




  }

}
