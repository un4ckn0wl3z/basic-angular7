import { Com01Component } from './com01/com01.component';
import { Input, ElementRef, ViewChild, OnDestroy } from '@angular/core';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages:string[] = ['Basic input for component'];
  isShow:boolean = false;
  isShowComponent1:boolean = true;

  lang:string = 'tha';

  animals:string[] = ['Dog','Cat','Rat','Bird'];

  constructor(){

    // const lang:string = 'eng';

    // switch (lang) {
    //   case 'eng':
    //     console.log('English');
    //     break;
    //   case 'tha':
    //       console.log('Thai');
    //       break;
    //   default:
    //       console.log('Language not found.');
    //     break;
    // }


  }


  // get output value from com2
  onMessage(input: string){
    this.messages.push(input);
  }


}







