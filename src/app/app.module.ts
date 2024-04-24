// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AwsComponent } from './aws/aws.component';
import { RouterModule } from '@angular/router';
import { ReversePipe } from './reverse.pipe'; 
import {MyCustomDirectiveDirective} from './my-custom-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe,
    MyCustomDirectiveDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    Page1Component,
    Page2Component,
    AwsComponent,
    MyCustomDirectiveDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
