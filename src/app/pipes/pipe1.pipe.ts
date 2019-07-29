import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name: 'pipe1'
})
export class Pipe1Pipe implements PipeTransform {
    
    transform(value: any, ...args: any[]) {
        throw new Error("Method not implemented.");
    }

    
}