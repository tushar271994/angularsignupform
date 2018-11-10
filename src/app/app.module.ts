import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyDatePickerModule } from 'angular4-datepicker/src/my-date-picker';




@NgModule({
  imports: [
    BrowserModule,
    MyDatePickerModule,
    FormsModule,
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }