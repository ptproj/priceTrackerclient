import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanypageComponent } from './companypage.component';
import { CompanypackageComponent } from '..//companypackage/companypackage.component';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
//import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';

import { InputTextareaModule } from 'primeng/inputtextarea';
//import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  exports:[CompanypageComponent],
  declarations: [CompanypageComponent,CompanypackageComponent],
  imports: [ReactiveFormsModule,InputTextModule, HttpClientModule,  CommonModule,ToastModule, 
    ToolbarModule ,TableModule,DialogModule,
    InputTextareaModule,ConfirmDialogModule,InputNumberModule
],


  
  // schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompanypageModule { }
