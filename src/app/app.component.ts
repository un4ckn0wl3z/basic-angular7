


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
  errorMessage = {
    required: 'This field is required',
    pattern: 'wrong pattern "{0}"'
  }
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
    this.formB.get('text').markAsDirty();
    this.formB.get('numb').markAsDirty();
    this.formB.get('date').markAsDirty();
    this.formB.get('select').markAsDirty();
    this.formB.get('checkens').get('chbox1').markAsDirty();
    this.formB.get('checkens').get('chbox2').markAsDirty();
    this.formB.get('textaread').markAsDirty();
    this.formB.get('selects').markAsDirty();


    if(this.formB.invalid){

      console.log('invalid form');
      return;
    }
    console.log(this.formB.value);
}

private initFormGroup(){
  this.formB = this.formBuilder.group({
    text: ['',[Validators.required,Validators.pattern(/^[A-z]{3}$/)]],
    numb: ['',Validators.required],
    date: ['',Validators.required],
    select: ['',Validators.required],
    checkens: this.formBuilder.group({
      chbox1: [false,Validators.requiredTrue],
      chbox2: [false,Validators.requiredTrue],
      rad: []
    }),

    textaread: ['',Validators.required],
    selects: [[],Validators.required],
    file: []
  });
}


// check validate message
private getErrorMessage(control: FormControl){
  if(control && control.invalid){
    const error = Object.keys(control.errors) ;
    console.log(this.errorMessage[error[0]]);
    if(error[0] == 'pattern'){
      return this.errorMessage[error[0]].replace("{0}",control.errors['pattern']['requiredPattern']);
    }
    return this.errorMessage[error[0]];
  }
}


}
