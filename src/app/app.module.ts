import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent, OnlineResumeComponent } from './Components'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    OnlineResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
