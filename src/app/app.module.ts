import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { RouterModule,Route } from '@angular/router';
import { CostumerpageModule } from './costumerpage/costumerpage.module';
import { CostumerpageComponent } from './costumerpage/costumerpage.component';
import { BeginComponent } from './begin/begin.component';
import { CompanypageComponent } from './companypage/companypage.component';
import { CompanypageModule } from './companypage/companypage.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
  
import { ButtonModule } from "primeng/button";
 import {ToastModule} from 'primeng/toast';
 import { ToolbarModule } from 'primeng/toolbar';
 import { FileUploadModule } from 'primeng/fileupload';
 import { TableModule } from 'primeng/table';
 import {DialogModule} from 'primeng/dialog';
 import { ConfirmDialogModule } from 'primeng/confirmdialog';
 import { InputTextareaModule } from 'primeng/inputtextarea';

 import {CheckboxModule} from 'primeng/checkbox';
// import {CalendarModule} from 'primeng/calendar';
// import {SliderModule} from 'primeng/slider';
// import {MultiSelectModule} from 'primeng/multiselect';
// import {ContextMenuModule} from 'primeng/contextmenu';
// import {ButtonModule} from 'primeng/button';
// import {DropdownModule} from 'primeng/dropdown';
// import {ProgressBarModule} from 'primeng/progressbar';
 import {InputTextModule} from 'primeng/inputtext';
// import {FileUploadModule} from 'primeng/fileupload';
// import {RatingModule} from 'primeng/rating';
// import {RadioButtonModule} from 'primeng/radiobutton';
 import {InputNumberModule} from 'primeng/inputnumber';

// import { ConfirmationService } from 'primeng/api';
// import { MessageService } from 'primeng/api';



// import {AccordionModule} from 'primeng/accordion';  
// import {OrderListModule} from 'primeng/orderlist';
//const ROUTES:Routes=[
 // { path:'costumerpage',component:CostumerpageComponent },
//  { path: "", pathMatch: "full", redirectTo: "start" },
//  { path:"start",component:StartComponent},
// { path:'login',loadChildren: ()=>import('./login/login.module').then(m=>m.LoginModule)//lazy load
// }
// { path:'cos',loadChildren: ()=>import('./costumerpage/costumerpage.module').then(m=>m.CostumerpageModule)//lazy load
// },
// {
//   path: '**',
//   redirectTo: "start"
// }    

//];
const APP_ROUTES:Route[]=[
{path:"", pathMatch:"full" ,redirectTo:"begin"},
{path:"begin",component:BeginComponent},
{path:'login',loadChildren: ()=>import('./login/login.module').then(m=>m.LoginModule)},

{path:"costumerpage",component:CostumerpageComponent},
{path:"companypage",component:CompanypageComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    BeginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoginModule,
    CostumerpageModule,
    CompanypageModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FormsModule ,
    ToastModule,
    CheckboxModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    DialogModule,
    InputTextModule,
    ConfirmDialogModule,
    ButtonModule,
    InputTextareaModule,
    BrowserAnimationsModule,
    InputNumberModule
    
//     TableModule,
//     ,
//     CalendarModule,
//     SliderModule ,MultiSelectModule, ContextMenuModule ,DialogModule, 
//     ButtonModule, DropdownModule, ProgressBarModule ,InputTextModule
//   ,FileUploadModule, ToolbarModule, RatingModule,RadioButtonModule,,ConfirmDialogModule
//  ,ConfirmationService, MessageService , 

    // AccordionModule,
    // OrderListModule
  
     
    //RouterModule.forRoot(ROUTES)
    
  ],
  exports:[RouterModule,ToastModule],
  providers: [],
  bootstrap: [AppComponent]


  // schemas: [CUSTOM_ELEMENTS_SCHEMA ]
 
})
export class AppModule { 
 
}
