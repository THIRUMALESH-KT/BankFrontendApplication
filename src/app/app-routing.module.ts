import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { EmployeCreateComponent } from './employe-create/employe-create.component';
import { EmployeLoginComponent } from './employe-login/employe-login.component';

const routes: Routes = [
  {path:'create',component:CreateAccountComponent},
  {path:'custlogin',component:CustomerLoginComponent},
  {path:'empcreate',component:EmployeCreateComponent},
  {path:'emplogin',component:EmployeLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
