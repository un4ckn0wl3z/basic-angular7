import { Component } from '@angular/core';
import { ICom2formData } from './interfaces/com2formdata.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router){

  }

  /** redirect */
  onRedirect(url: string | any){
    if(typeof url == 'string'){
      this.router.navigateByUrl(url);
    }else{
      this.router.navigate(url);
    }
  }

}

