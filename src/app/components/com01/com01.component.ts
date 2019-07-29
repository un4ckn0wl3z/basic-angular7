import { Component, Input, OnInit, OnChanges, OnDestroy } from "@angular/core";

@Component({
    selector: 'app-com01',
    templateUrl: './com01.component.html',
    styleUrls: ['./com01.component.css']
  })
export class Com01Component implements OnInit, OnChanges,OnDestroy {



  @Input('messages') messages:string[] = [];

  constructor(){
    this.messages.push('empty');
    console.log('constructor');
  }

    
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnChanges(value: any) {
    console.log(value);
  }
  ngOnDestroy(): void {
    console.log('component deleted');
  }
  // func strip string
  onCutMessage(input: string){
    if(input.length <= 50){
      return input;
    }
    return input.substring(0,50).concat('[...]');
    
  }


}