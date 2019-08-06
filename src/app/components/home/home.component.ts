import { Service1Service } from './../../services/service1.service';
import { Service2Service } from './../../services/service2.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ICom2formData } from 'src/app/interfaces/com2formdata.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Service1Service]
})
export class HomeComponent  {

  isShowWorkshop:boolean = false;
  com2FormData: ICom2formData;
 
  name1: string;
  name2: string;

  types = {name1:0, name2:1};

  constructor(private service1: Service1Service ,private service2: Service2Service){

    this.name1 = this.service1.name;
    this.name2 = this.service2.name;
  }

  onRandom(type: number){
    switch(type){
      case this.types.name1 :
        this.service1.name = Math.random().toString();
        break;
      case this.types.name2 :
            this.service2.name = Math.random().toString(;)
        break;
      default: break;
    }
    this.name1 = this.service1.name;
    this.name2 = this.service2.name;
  }
 

  
}
