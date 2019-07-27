export function MyDecorator(message: string, msg: string, cc: string) {
    return function (target: Function) {
      target.prototype.sayHello = message;
      target.prototype.ng7 = msg;
      target.prototype.squName = cc;
    }
  }