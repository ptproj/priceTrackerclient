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



@NgModule({
  declarations: [CompanypageComponent],
  imports: [ReactiveFormsModule, HttpClientModule,  CommonModule,ToastModule, ToolbarModule ,FileUploadModule,TableModule,DialogModule,ConfirmDialogModule
],
  exports:[CompanypageComponent],

  
  // schemas: [CUSTOM_ELEMENTS_SCHEMA ]
})
export class CompanypageModule { }
