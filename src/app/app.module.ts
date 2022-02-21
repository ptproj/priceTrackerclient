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
import { StartComponent } from './start/start.component';

const ROUTES:Routes=[
 // { path:'costumerpage',component:CostumerpageComponent },
 { path: "", pathMatch: "full", redirectTo: "start" },
 { path:"start",component:StartComponent},
// { path:'login',loadChildren: ()=>import('./login/login.module').then(m=>m.LoginModule)//lazy load
// }

// { path:'cos',loadChildren: ()=>import('./costumerpage/costumerpage.module').then(m=>m.CostumerpageModule)//lazy load
// },
 
// {
//   path: '**',
//   redirectTo: "start"
// }    

];
@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    
    
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
  exports:[RouterModule,StartComponent],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { 
 
}
