import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Costumer} from '../../../models/classcostumer'
import { LoginService } from '../login.service';

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
  signin()
  {
}
 loginForm:FormGroup=new FormGroup({
    "email":new FormControl("",[Validators.required,Validators.email]),
   "password":new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(20)]),
  })
  saveuser(){
   // this.costumer=new Costumer("323777862@mby.co.il","thisisit")
  //  this.costumer=new Costumer(this.loginForm.controls.['email'].value,this.loginForm.controls.password.value)
    this.costumer=new Costumer( this. loginForm.get("email")?.value, this. loginForm.get("password")?.value)  
    var x=this.loginForm.value[0]
    //alert(x)
    alert( this. loginForm.get("email")?.value)
    
   // alert( this.loginForm.value)
    
   // this.loginservice.postcostumer(this.costumer).subscribe(data=>alert(data));

  }
}
