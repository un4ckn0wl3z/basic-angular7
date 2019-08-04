import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  params: any;
  queryParams: any;
  data: any;

  constructor(private activvateRoute:ActivatedRoute) { 
    this.params = this.activvateRoute.snapshot.params;
    this.queryParams = this.activvateRoute.snapshot.queryParams;
    this.data = this.activvateRoute.snapshot.data;

    console.log(this.params);
    console.log(this.queryParams);
    console.log(this.data);


  }

  ngOnInit() {
  }

}
