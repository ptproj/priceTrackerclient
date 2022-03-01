import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostumerloginComponent } from './login/costumerlogin/costumerlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { RouterModule,Route } from '@angular/router';
import { CostumerpageModule } from './costumerpage/costumerpage.module';
import { CostumerpageComponent } from './costumerpage/costumerpage.component';
import { BeginComponent } from './begin/begin.component';
import { CompanyloginComponent } from './login/companylogin/companylogin.component';
import { CompanypageComponent } from './companypage/companypage.component';
import { CompanypageModule } from './companypage/companypage.module';
import {AccordionModule} from 'primeng/accordion';  
import {OrderListModule} from 'primeng/orderlist';
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
//{path:'login',loadChildren: ()=>import('./login/login.module').then(m=>m.LoginModule)},
{path:"costumerlogin",component:CostumerloginComponent},
{path:"company",component:CompanyloginComponent},
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
    AccordionModule,
    OrderListModule
  
     
    //RouterModule.forRoot(ROUTES)
    
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { 
 
}
