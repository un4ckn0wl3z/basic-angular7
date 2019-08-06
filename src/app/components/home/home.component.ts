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

  isShowWorkshop:boolean = true;
 
  
  
}
