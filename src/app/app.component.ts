


import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl } from '@angular/forms';

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
  form:FormGroup = new FormGroup({
    text: new FormControl(),
    numb: new FormControl(),
    date: new FormControl(),
    select: new FormControl(),
    chbox1: new FormControl(),
    chbox2: new FormControl(),
    rad: new FormControl(),
    textaread: new FormControl(),
    selects: new FormControl(),
    file: new FormControl(),
  });



  // get output value from com2
  onMessage(input: string){
    this.messages.push(input);
  }


  // recieve data
  onSubmit(){
    console.log(this.form.value);
}





