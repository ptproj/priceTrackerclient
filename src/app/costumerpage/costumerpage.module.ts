import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostumerpageComponent } from '../costumerpage/costumerpage.component';
import { CostumerpageService } from './costumerpage.service';
import { HttpClientModule } from '@angular/common/http';
//import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {OrderListModule} from 'primeng/orderlist';
import { ButtonModule } from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import { InputTextModule } from "primeng/inputtext";
import {ToastModule} from 'primeng/toast';
import {RippleModule} from 'primeng/ripple';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

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
  imports: [
    ReactiveFormsModule, 
    HttpClientModule,
    CommonModule,
    ToastModule,
    AccordionModule,
    OrderListModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    RippleModule,
    FormsModule,
    ConfirmDialogModule  
   
  ],
  exports:[CostumerpageComponent]
})
export class CostumerpageModule { }
