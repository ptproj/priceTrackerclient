import { Component, Input, OnInit } from '@angular/core';
import { Package } from 'src/models/classpackage';
import { CompanypageService } from '../companypage/companypage.service';

@Component({
  selector: 'app-companypackage',
  templateUrl: './companypackage.component.html',
  styleUrls: ['./companypackage.component.css']
})
export class CompanypackageComponent implements OnInit {
  @Input()
  buypackage?:boolean
  paymentHandler: any = null;
  packages:Package[] | undefined
  constructor(private companypageservice:CompanypageService) {}
  ngOnInit() {
    this.invokeStripe();
    
    this.companypageservice.getpackage().subscribe((data: Package[] | undefined)=>{this.packages=data})


  }
  func(){
    this.companypageservice.getpackage().subscribe((data: Package[] | undefined)=>{this.packages=data
      if(this.packages){alert(this.packages[0].productsamount)}
    })
    }
  
    
  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'Positronx',
      description: '3 widgets',
      amount: amount * 100,
    });
  }
  invokeStripe() {
    
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }

}

 

  

  

