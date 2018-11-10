import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {IMyDpOptions} from 'angular4-datepicker/src/my-date-picker';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls:['app.component.css']
})

export class AppComponent {
  model: any = {};

  constructor( ) {}

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd/mm/yyyy',
};

// Initialized to specific date (09.10.2018).
public dateModel: any = { date: { year: 2018, month: 11, day: 8 } };


  onSubmit(form:NgForm) {
    console.log("form data", form);
    console.log(form.value);
    form.reset();
    alert("SignUp Successfully");
  }
}