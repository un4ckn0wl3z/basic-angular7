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

 
  name1: string;
  name2: string;


  constructor(private router:Router, private service1: Service1Service ,private service2: Service2Service){
    console.log(this.service1);
    console.log(this.service1.name);

    console.log(this.service2);
    console.log(this.service2.name);

    this.name1 = this.service1.name;
    this.name2 = this.service2.name;
  }

  isShowWorkshop:boolean = false;
  com2FormData: ICom2formData;

  // redirect
  onRedirect(){
    this.router.navigate(['/','data',420], {queryParams:{
      item1:156,
      item2:561,
      item3:'p'
    }});
  }
  

}
