import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Costumer} from '../../../models/classcostumer'
import { LoginService } from '../login.service';
import { DTOLoginCostumer } from 'src/models/classdtologincostumer';
import { Router } from '@angular/router';
//import { Router } from '@angular/router';

 


@Component({
  selector: 'app-costumerlogin',
  templateUrl: './costumerlogin.component.html',
  styleUrls: ['./costumerlogin.component.css']
})
export class CostumerloginComponent implements OnInit {

  constructor(private loginservice:LoginService, private _router:Router ) { }
 // constructor() { }
   costumer?:Costumer
   st?:string
   forgotpass:boolean=false
  ngOnInit(): void {


  }
  
 
 loginForm:FormGroup=new FormGroup({
    "email":new FormControl("",[Validators.required,Validators.email]),
   "password":new FormControl("",[Validators.required,Validators.minLength(1),Validators.maxLength(14)]),
  })


  signin(){
   this.costumer=new Costumer( this. loginForm.get("email")?.value, this. loginForm.get("password")?.value)  

   this.loginservice.postcostumer(this.costumer).subscribe(data=>{
    
     sessionStorage.setItem('token', data.token|| '')
     sessionStorage.setItem('costumerid', data.id?.toString()|| '')
   alert(sessionStorage.getItem('token'))
   alert(data.email)
   this._router.navigate(["/costumerpage"]);
  
  }
);
  
 
;
 }
 
  

  login()
  {
    this.costumer=new Costumer( this.loginForm.get("email")?.value, this.loginForm.get("password")?.value)  
alert(this.loginForm.get("email")?.value)
    this.loginservice.getcostumer(this.costumer).subscribe(data=>{
      sessionStorage.setItem('token', data.token|| '')
      sessionStorage.setItem('costumerid', data.id?.toString()|| '')
      this._router.navigate(["/costumerpage"])
     // alert(sessionStorage.getItem('token'))
      
  },err=>{alert("password is incorrect")});
  
  }
  getnewpassword(){
   
   this.loginservice.getnewpassword(this.loginForm.get("email")?.value).subscribe(data=>alert(data))
  }
  showbutton()
  {
    this.forgotpass=true
  }
}
