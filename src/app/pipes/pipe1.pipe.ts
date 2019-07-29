import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {

    transform(item: string, limit: number = 50) {
       return this.onCutMessage(item,limit);
    }

  // func strip string
  private onCutMessage(input: string,limit: number){
    if(input.length <= limit){
      return input;
    }
    return input.substring(0,limit).concat('[...]');
    
  }

    
}