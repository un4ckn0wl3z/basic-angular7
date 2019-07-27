import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements IAppComponent {
  items: string[] = [];
  title: string = 'basic-angular7';

  constructor() {
    // const myClass = new MyClass();
    // console.log(myClass.arrays);
    this.addItem("Hello");
    this.addItem("World");
    console.log(this.items);
  }

  addItem(item: string) {
    this.items.push(item);
  }
  removeItem(index: number) {
    this.items.splice(index, 1);
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
  items: Array<string>;
  addItem(item: string);
  removeItem(index: number);
}
