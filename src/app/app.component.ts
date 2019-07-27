import { element } from 'protractor';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header: string = 'Basic Angular 7';
  title: string = 'Basic Angular 7 is ez.';
  button: string = "เนื้อหาเพิ่มเติม";
  content: string = `With <a target="_blank" href="https://getbootstrap.com/docs/4.0/components/card/">supporting</a> text below as a natural lead-in to additional content.`;
  linkAddress: string = 'https://getbootstrap.com/';
  un4cx: string = 'anuwat.rocks';
  styleColor:string = 'blue';
  boxId: string = `box-${Math.random()}`;
  alertClass: string = 'alert alert-primary';
  isSuccessClass:boolean = true;

  isShowHideAlert:boolean = false;

  constructor() {
    setTimeout(() => {
      this.styleColor = 'red';
      this.alertClass = 'alert alert-danger';
      this.isSuccessClass = false;
      this.title = 'คอร์สพื้นฐาน Angular 7 ง่ายมาก';
    }, 1000);
  }

  onClick(element: any){
    this.isShowHideAlert = !this.isShowHideAlert;
    console.log(element);
    console.log('Click by angular');
  }

  onTextChange(text: string){
    this.header = text;
  }

  onChangeTitle(input: HTMLInputElement){
    this.title = input.value || 'คอร์สพื้นฐาน Angular 7 ง่ายมาก';
  }

}







