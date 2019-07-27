
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header: string = 'Basic Angular 7';
  title: string = 'Basic Angular 7 is ez.';
  button: string = "เนื้อหาเพิ่มเติม";

  constructor() {
    setTimeout(() => this.title = 'คอร์สพื้นฐาน Angular 7 ง่ายมาก', 1000);
  }


}







