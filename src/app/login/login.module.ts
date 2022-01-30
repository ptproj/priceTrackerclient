import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { CostumerloginComponent } from './costumerlogin/costumerlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CostumerloginComponent],
  providers: [LoginService],
  imports: [  CommonModule,ReactiveFormsModule,HttpClientModule],
  exports:[CostumerloginComponent]
  
})
export class LoginModule { }
