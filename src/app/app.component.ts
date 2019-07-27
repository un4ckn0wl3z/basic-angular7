import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'basic-angular7';
  arrays: number[] = [200, 300, 400, 500];
  objects = { firstname: 'My Firstname', lastname: 'My Lastname' };


  onFunction(param: string): string {
    return `onFunction ${param}`;
  }

  get onGetFunction(): string {
    const sum = 2 + 2 + 2 * 2;
    return `onGetFunction ${sum}`;
  }

  constructor() {
    console.log(this);
    console.log(this.title);
    console.log(this.arrays);
    console.log(this.objects);
    console.log(this.onFunction("param"));
    console.log(this.onGetFunction);
  }
}
