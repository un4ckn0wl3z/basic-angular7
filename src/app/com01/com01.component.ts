import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'app-com01',
    templateUrl: './com01.component.html',
    styleUrls: ['./com01.component.css']
  })
export class Com01Component implements OnInit {


  @Input('message') message:string;

  constructor(){
    this.message = 'empty';
    console.log('constructor');
  }

    
  ngOnInit(): void {
    console.log('ngOnInit');
  }


}