import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { CostumerloginComponent } from './costumerlogin/costumerlogin.component';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { CostumerpageComponent } from '../costumerpage/costumerpage.component';
import { CompanyloginComponent } from './companylogin/companylogin.component';
import { InputTextModule } from "primeng/inputtext";
import {DialogModule} from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
// const ROUTES1:Routes=[
//   { path: "", pathMatch: "full", redirectTo: "costumerlogin" },
//   { path:"costumerlogin",component:CostumerloginComponent },
// { path:'costumerpage',component:CostumerpageComponent },
//   {
//     path: '**',
//     redirectTo: 'costumerlogin'
//   }    
// ]
const LOGIN_ROUTE:Route[]=[
  {path:"costumerlogin",component:CostumerloginComponent},
  {path:"companylogin",component:CompanyloginComponent},
  {path:"costumerpage",component:CostumerpageComponent}
]


@NgModule({
  declarations: [CostumerloginComponent,CompanyloginComponent],
  providers: [LoginService], 
  imports: [  CommonModule,ReactiveFormsModule,HttpClientModule,FormsModule  , InputTextModule,DialogModule,ButtonModule,
    TableModule,RippleModule,
    RouterModule.forChild(LOGIN_ROUTE)
  ], 
  exports:[CostumerloginComponent,CompanyloginComponent]
  
})
export class LoginModule { }
