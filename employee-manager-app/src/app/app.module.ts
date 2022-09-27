import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeService } from './admin-dashboard/containers/admin-dashboard/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './admin-dashboard/containers/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/containers/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/containers/home/home.component';
import { AboutUsComponent } from './about-us/containers/about-us/about-us.component';
import { EmpProfileComponent } from './emp-profile/containers/emp-profile/emp-profile.component';
import { CareerComponent } from './career/containers/career/career.component';


const appRoute: Routes = [
  { path: '', component:  LoginComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'home', component:  HomeComponent},
  { path: 'about-us', component:  AboutUsComponent},
  { path: 'admin-dashboard', component:  AdminDashboardComponent},
  { path: 'emp-profile', component:  EmpProfileComponent},
  { path: 'careers', component:  CareerComponent},
 
  
];

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    EmpProfileComponent,
    CareerComponent,

  
  ],
  imports: [
    CommonModule,
    BrowserModule,  
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  exports: [RouterModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
