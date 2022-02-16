import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Costumer} from '../../../models/classcostumer'
import { LoginService } from '../login.service';
import { DTOLoginCostumer } from 'src/models/classdtologincostumer';

 


@Component({
  selector: 'app-costumerlogin',
  templateUrl: './costumerlogin.component.html',
  styleUrls: ['./costumerlogin.component.css']
})
export class CostumerloginComponent implements OnInit {

  constructor(private loginservice:LoginService) { }
 // constructor() { }
   costumer?:Costumer
  ngOnInit(): void {


  }
  
 
 loginForm:FormGroup=new FormGroup({
    "email":new FormControl("",[Validators.required,Validators.email]),
   "password":new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
  })
  signin(){
  this.costumer=new Costumer( this. loginForm.get("email")?.value, this. loginForm.get("password")?.value)  
  this.loginservice.postcostumer(this.costumer).subscribe(data=>alert(data.email));
  }
  login()
  {
    this.costumer=new Costumer( this.loginForm.get("email")?.value, this.loginForm.get("password")?.value)  

    this.loginservice.getcostumer(this.costumer).subscribe(data=>{
      sessionStorage.setItem('token', data.token|| '')
      sessionStorage.setItem('costumerid', data.id?.toString()|| '')
      alert(sessionStorage.getItem('token'))
  });
  }
}
