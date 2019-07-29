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
  isShowWorkshop:boolean = false;




  // get output value from com2
  onMessage(input: string){
    this.messages.push(input);
  }


}







