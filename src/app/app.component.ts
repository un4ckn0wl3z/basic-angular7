


import { Component } from '@angular/core';

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
  form: FormData = new FormData();

  // get output value from com2
  onMessage(input: string){
    this.messages.push(input);
  }


  // recieve data
  onSubmit(){
    // console.log("Text =" , this.text);
    // console.log("Number =" , this.numb);
    // console.log("Date =" , this.date);
    // console.log("Select =" , this.select);
    // console.log("chbox1 =" , this.chbox1);
    // console.log("chbox2 =" , this.chbox2);
    // console.log("radbut =" , this.radbut);
    // console.log("textaread =" , this.textaread);
    // console.log("selects =" , this.selects);
    // console.log("file =" , this.file);
    console.log("file =" , this.form);


  }


}


class FormData{
  text: string = '';
  numb: number = 0;
  date: string = '';
  select: string = '4';
  chbox1: boolean = false;
  chbox2: boolean = false;
  radbut: string = 'rad2';
  textaread: string = '';
  selects: string[] = [];
  file: File = null;
}




