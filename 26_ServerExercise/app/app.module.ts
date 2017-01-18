import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GitHubService } from './github.service';
import {GitHubComponent } from './github-profile.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule
  ],
  declarations: [
    AppComponent,
    GitHubComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    GitHubService
  ]
})
export class AppModule { }
