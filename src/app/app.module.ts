import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent, OnlineResumeComponent } from './Components'
import { StoreModule } from '@ngrx/store';
import * as AppReducer from './State-Management/reducer'
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './State-Management/effects';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    OnlineResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({app: AppReducer.reducer}),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
