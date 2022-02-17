import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CostumerloginComponent } from './login/costumerlogin/costumerlogin.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginModule } from './login/login.module';
import { RouterModule,Routes } from '@angular/router';
import { CostumerpageModule } from './costumerpage/costumerpage.module';
import { CostumerpageComponent } from './costumerpage/costumerpage.component';
const ROUTES:Routes=[
 // { path:'costumerpage',component:CostumerpageComponent },
  
 { path:'login',loadChildren: ()=>import('./login/login.module').then(m=>m.LoginModule)//lazy load
},
// { path:'cos',loadChildren: ()=>import('./costumerpage/costumerpage.module').then(m=>m.CostumerpageModule)//lazy load
// },
{
  path: '**',
  redirectTo: 'login'
}    

]
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoginModule,
    CostumerpageModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
    
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { 
 
}
