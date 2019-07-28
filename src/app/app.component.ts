import { Input } from '@angular/core';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message:string = 'Basic input for component';

  // get output value from com2
  onMessage(input: string){
    //console.log('th is output from com2');
    this.message = input;
  }

}







