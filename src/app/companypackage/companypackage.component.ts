import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Package } from 'src/models/classpackage';
import { CompanypageService } from '../companypage/companypage.service';

@Component({
  selector: 'app-companypackage',
  templateUrl: './companypackage.component.html',
  styleUrls: ['./companypackage.component.css']
})
export class CompanypackageComponent implements OnInit {
  @Output()
  onPaymentEvent = new EventEmitter<number>();
  @Input()
  buypackage?: boolean
  packageid?: number
  paymentHandler: any = null;
  packages: Package[] | undefined
  payment: boolean = false
  constructor(private companypageservice: CompanypageService) { }
  ngOnInit() {
    this.companypageservice.getpackage().subscribe((data: Package[] | undefined) => { this.packages = data })
  }



  makePayment(packageid: any) {
    this.payment = true
    this.packageid = packageid
  }
  canclePayment() {
    this.payment = false
  }
  buyPackage() {
    if (this.packageid)
      this.companypageservice.buyPackage(this.packageid).subscribe(data => {
        if (data) {
          this.onPaymentEvent.emit(this.packageid)
        }
      })
  }
}







