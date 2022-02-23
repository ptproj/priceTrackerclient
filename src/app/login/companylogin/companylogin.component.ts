import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/models/classcompany';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-companylogin',
  templateUrl: './companylogin.component.html',
  styleUrls: ['./companylogin.component.css']
})
export class CompanyloginComponent implements OnInit {
company?:Company
  constructor(private loginservice:LoginService, private _router:Router ) { }

  ngOnInit(): void {
  }

  loginForm:FormGroup=new FormGroup({
    "name":new FormControl("",[Validators.required]),
   "password":new FormControl("",[Validators.required,Validators.minLength(1),Validators.maxLength(20)]),
  })
  sighinForm:FormGroup=new FormGroup({
    "name":new FormControl("",[Validators.required]),
   "password":new FormControl("",[Validators.required,Validators.minLength(1),Validators.maxLength(20)]),
   "companylink":new FormControl("",[Validators.required])
  })

  login(){
    this.company=new Company(this.loginForm.get("name")?.value,"",this.loginForm.get("password")?.value);
    this.loginservice.getcompany(this.company).subscribe(data=>{
      alert("after get:)")
       sessionStorage.setItem('token', data.token|| '')
       sessionStorage.setItem('companyid', data.id?.toString()|| '')
       alert(data.id)
       this._router.navigate(["/companypage"])
      });
  }
get getformgroup(){
  return this.loginForm.controls;
}


  signin(){

this.company=new Company(this.sighinForm.get("name")?.value,this.sighinForm.get("companylink")?.value,this.sighinForm.get("password")?.value);
//alert(this.loginForm.get("name")?.value)
//alert(this.loginForm.get("password")?.value)
     this.loginservice.postcompany(this.company).subscribe(data=>{
       alert("after post:)")
        sessionStorage.setItem('token', data.token|| '')
        sessionStorage.setItem('companyid', data.id?.toString()|| '')
        alert(data.id)
       this._router.navigate(["/companypage"])
       

});

  
}
}