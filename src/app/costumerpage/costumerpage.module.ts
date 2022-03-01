import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostumerpageComponent } from '../costumerpage/costumerpage.component';
import { CostumerpageService } from './costumerpage.service';
import { HttpClientModule } from '@angular/common/http';
import { CostumerloginComponent } from '../login/costumerlogin/costumerlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {OrderListModule} from 'primeng/orderlist';

// import {OrderListModule} from 'primeng/orderlist';
// import { AccordionModule } from 'primeng/accordion';

// const ROUTES:Routes=[
//   { path:'costomer',component:CostumerpageComponent },
//   {
//     path: '**',
//     redirectTo: 'costomer'
//   }    
// ]


@NgModule({
  declarations: [CostumerpageComponent ],
  providers: [CostumerpageService], 
  imports: [ReactiveFormsModule, HttpClientModule,CommonModule
    ,AccordionModule,OrderListModule
  
   
  ],
  exports:[CostumerpageComponent]
})
export class CostumerpageModule { }
