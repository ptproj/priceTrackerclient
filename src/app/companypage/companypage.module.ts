import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanypageComponent } from './companypage.component';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';


@NgModule({
  declarations: [CompanypageComponent],
  imports: [ReactiveFormsModule,InputTextModule,CheckboxModule, HttpClientModule,  CommonModule,ToastModule, 
    ToolbarModule ,FileUploadModule,TableModule,DialogModule,
    InputTextareaModule,ConfirmDialogModule,InputNumberModule
],
  exports:[CompanypageComponent],

  
  // schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompanypageModule { }
