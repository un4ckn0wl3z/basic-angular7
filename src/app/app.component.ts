


import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages:string[] = [
    'Basic input for component',
    'is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    'it to make a type specimen book. It has survived not only'];

  isShowWorkshop:boolean = false;

  // form model
  //form: FormData = new FormData();

@ViewChild('form') form:NgForm;

  // get output value from com2
  onMessage(input: string){
    this.messages.push(input);
  }


  // recieve data
  onSubmit(){
    if(this.form.invalid){
      return;
    }
    console.log(this.form.valid);
    console.log(this.form.value);
    this.form.reset();
  }


}





