import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { CostumerloginComponent } from './costumerlogin/costumerlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CostumerpageComponent } from '../costumerpage/costumerpage.component';
const ROUTES:Routes=[
  { path:'costumerlogin',component:CostumerloginComponent 
},
{ path:'costumerpage',component:CostumerpageComponent 
},
  {
    path: '**',
    redirectTo: 'costumerlogin'
  }    
]
@NgModule({
  declarations: [CostumerloginComponent],
  providers: [LoginService], 
  imports: [  CommonModule,ReactiveFormsModule,HttpClientModule,RouterModule.forRoot(ROUTES)], 
  exports:[CostumerloginComponent]
  
})
export class LoginModule { }
