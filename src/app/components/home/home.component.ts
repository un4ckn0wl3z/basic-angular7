import { Service1Service } from './../../services/service1.service';
import { Service2Service } from './../../services/service2.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ICom2formData } from 'src/app/interfaces/com2formdata.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent  {
  isShowWorkshop:boolean = this.service2.getShowWorksop();
  constructor(private service2: Service2Service){
    this.service2.isShowWorkshopSubject.subscribe(data => {
      //console.log(data);
      this.isShowWorkshop = data;
    });
  }

 
 
  
  
}
