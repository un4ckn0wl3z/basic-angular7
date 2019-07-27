export interface IAppComponent {
    items: Array<string>;
    addItem(item: string);
    removeItem(index: number);
  }