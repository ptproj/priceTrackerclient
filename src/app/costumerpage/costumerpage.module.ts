import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostumerpageComponent } from '../costumerpage/costumerpage.component';
import { CostumerpageService } from './costumerpage.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CostumerpageComponent ],
  providers: [CostumerpageService], 
  imports: [ HttpClientModule,CommonModule],
  exports:[CostumerpageComponent]
})
export class CostumerpageModule { }
