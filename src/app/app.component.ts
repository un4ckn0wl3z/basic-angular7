
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
  content: string = `With <a target="_blank" href="https://getbootstrap.com/docs/4.0/components/card/">supporting</a> text below as a natural lead-in to additional content.`;

  constructor() {
    setTimeout(() => this.title = 'คอร์สพื้นฐาน Angular 7 ง่ายมาก', 1000);
  }


}







