// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AwsComponent } from './aws/aws.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component ,pathMatch: 'full'},
  { path: 'page2', component: Page2Component ,pathMatch: 'full'},
  { path: 'aws', component: AwsComponent ,pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
