import { Component, OnInit } from '@angular/core';
import { ICanDeActivate } from 'src/app/guards/deactivate.guard';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, ICanDeActivate {
 

  constructor() { }

  ngOnInit() {
  }

  onExit(): boolean {
    if(confirm('Are you sure for exit from this page?')) return true;
    return false;
  }

}
