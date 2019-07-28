import { Com01Component } from './com01/com01.component';
import { Input, ElementRef, ViewChild, OnDestroy } from '@angular/core';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string = 'Basic input for component';


  constructor(){

    const score = 90;

    if(score >= 100){
      console.log('score >= 100');
    }else if (score >= 90){
      console.log('score >= 90');
    }else if (score >= 80){
      console.log('score >= 80');
    }else if (score >= 70){
      console.log('score >= 70');
    }else if (score >= 60){
      console.log('score >= 60');
    }else{
      console.log('fuck ');
    }


  }


  // get output value from com2
  onMessage(input: string){
    this.message = input;
  }


}







