import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements IAppComponent {
  item: string[] = [];
  title: string = 'basic-angular7';

  constructor() {
    const myClass = new MyClass();
    console.log(myClass.arrays);
  }

  addItem(item: string) {
    this.item.push(item);
  }
  removeItem(index: number) {
    this.item.splice(index, 1);
  }

}

class MyClass {
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
    this.arrays.push(600);
    this.arrays.push(700);
  }

}


interface IAppComponent {
  item: Array<string>;
  addItem(item: string);
  removeItem(index: number);
}
