import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  id:string;
  params: any;

  constructor(private activvateRoute:ActivatedRoute) { 
    this.params = this.activvateRoute.snapshot.params;
    console.log(this.params);
  }

  ngOnInit() {
  }

}
