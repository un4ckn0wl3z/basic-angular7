


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




  // get output value from com2
  onMessage(input: string){
    this.messages.push(input);
  }

  // func strip string
  onCutMessage(input: string){
    if(input.length <= 50){
      return input;
    }
    return input.substring(0,50).concat('[...]');
    
  }

}







