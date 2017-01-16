import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown.component';
import { ContactFormComponent } from './contact-form.component';
import { KingComponent } from './king.component';
import { ColonelComponent } from './colonel.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule],
  declarations: [
    AppComponent,
    ContactFormComponent,
    DropdownComponent,
    KingComponent,
    ColonelComponent],
  bootstrap: [
    AppComponent]
  
})
export class AppModule { }
