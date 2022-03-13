import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-companypackage',
  templateUrl: './companypackage.component.html',
  styleUrls: ['./companypackage.component.css']
})
export class CompanypackageComponent implements OnInit {

  @Input()
  buypackage?:boolean

  constructor() { }

  ngOnInit(): void {
  }

}
