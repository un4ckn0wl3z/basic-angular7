import { Service2Service } from './../../services/service2.service';
import { Component, OnInit } from '@angular/core';

import { IAlbum } from 'src/app/interfaces/http-client.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit  {

  
  isShowWorkshop:boolean = this.service2.getShowWorksop();
  albums: IAlbum[] = [];

  constructor(private service2: Service2Service){
    this.onInitData();
  }

  /** init data */
  private onInitData(){
    this.service2.isShowWorkshopSubject.subscribe(data => {
      //console.log(data);
      this.isShowWorkshop = data;
    });
  }

  ngOnInit(): void {
    this.service2.getAlbum().subscribe(res => {
      this.albums = res;
    });
  }
  
  
}
