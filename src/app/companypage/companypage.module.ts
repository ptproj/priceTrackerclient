import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanypageComponent } from './companypage.component';



@NgModule({
  declarations: [CompanypageComponent],
  imports: [ReactiveFormsModule, HttpClientModule,  CommonModule],
  exports:[CompanypageComponent],

  
  // schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompanypageModule { }
