import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomMaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { SubmissionComponent } from './submission/submission.component';

import { EnvironmentModule } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SubmissionComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    AppRoutingModule,
    HttpClientModule,
    EnvironmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
