import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-com02',
  templateUrl: './com02.component.html',
  styleUrls: ['./com02.component.css']
})
export class Com02Component implements OnInit {

  @Output('onMessage') onMessage: EventEmitter<String> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  // send data 
  onSendData(){
    const input = document.getElementById('input-data') as HTMLInputElement;
    //console.log(input.value);
    if(input.value.trim() != ''){
      this.onMessage.emit(input.value);
      input.value = '';
    }else{
      alert('pls type somtin.');
    }
  }

}
