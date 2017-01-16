import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, UaHeaderComponent, UaQuestionComponent, UaAnswerComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, UaHeaderComponent, UaQuestionComponent, UaAnswerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
