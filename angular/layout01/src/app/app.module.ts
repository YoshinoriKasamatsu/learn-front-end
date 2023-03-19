import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page01Component } from './page/page01/page01.component';
import { Page02Component } from './page/page02/page02.component';
import { Page03Component } from './page/page03/page03.component';
import { Page04Component } from './page/page04/page04.component';

@NgModule({
  declarations: [
    AppComponent,
    Page01Component,
    Page02Component,
    Page03Component,
    Page04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
