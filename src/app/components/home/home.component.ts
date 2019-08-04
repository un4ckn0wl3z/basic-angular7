import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ICom2formData } from 'src/app/interfaces/com2formdata.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

 
  constructor(private router:Router){

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
