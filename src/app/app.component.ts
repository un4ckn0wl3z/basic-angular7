


import { Component, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

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

  formB:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.initFormGroup()
  }

  // constructor(){

  //   setTimeout(() => {
  //     this.form.controls['text'].setValue('hello');
  //   }, 2000)

  // }

  // get output value from com2
  onMessage(input: string){
    this.messages.push(input);
  }


  // recieve data
  onSubmit(){
    console.log(this.formB.value);
}

private initFormGroup(){
  this.formB = this.formBuilder.group({
    text: ['',[Validators.required,Validators.pattern(/^[A-z]{3}$/)]],
    numb: ['',Validators.required],
    date: ['',Validators.required],
    select: ['',Validators.required],
    checkens: this.formBuilder.group({
      chbox1: new FormControl(),
      chbox2: new FormControl(),
      rad: new FormControl()
    }),

    textaread: [],
    selects: [],
    file: []
  });
}


}
