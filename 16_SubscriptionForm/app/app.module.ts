import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { SubscriptionComponent } from './subscription.component';


@NgModule({
  imports:      [ BrowserModule, 
                  FormsModule ],
  declarations: [ AppComponent,
                  SubscriptionComponent
                  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
