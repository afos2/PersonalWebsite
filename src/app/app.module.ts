import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './Routing/app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent, OnlineResumeComponent, HeaderComponent, AboutContentComponent } from './Components'
import { StoreModule } from '@ngrx/store';
import * as AppReducer from './State-Management/reducer'
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './State-Management/effects';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    OnlineResumeComponent,
    HeaderComponent,
    AboutContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    StoreModule.forRoot({app: AppReducer.reducer}),
    EffectsModule.forRoot([AppEffects]),
    BrowserAnimationsModule,
    MaterialModule,
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
