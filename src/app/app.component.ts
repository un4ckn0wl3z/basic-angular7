import { MySimpleClass } from './my-simple/my-simple.class';
import { Component } from '@angular/core';
import { IAppComponent } from './my-simple/app.interface';
import { MyDecorator } from './my-simple/my.decorator';
import { MyClass } from './my-simple/my.class';

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
    // const mySimpleClass = new MySimpleClass();

    // console.log(myClass);
    // console.log(myClass.squName);
    // console.log(mySimpleClass.title);

  }

  addItem(item: string) {
    this.items.push(item);
  }
  removeItem(index: number) {
    this.items.splice(index, 1);
  }

}







