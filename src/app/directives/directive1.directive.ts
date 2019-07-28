import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core'


@Directive({
    selector: '[directive1]'
})
export class Directive1Directive {

    constructor(private elementRef:ElementRef){
        //console.log(this.elementRef.nativeElement);
        const elem = this.elementRef.nativeElement as HTMLInputElement;
        // elem.onmouseover = function(){
        //     //console.log('onmouseover');
        //     elem.style.color = 'red';
        // }

        // elem.onmouseout = function(){
        //     //console.log('onmouseout');
        //     elem.style.color = 'black';
        // }
 

    }

    @HostBinding('style.color') color: string;

    @HostListener('mouseover')
    onmousemove(){
        this.color = 'red';
        //console.log('onmousemove');
    }

    @HostListener('mouseout')
    onmouseout(){
        this.color = 'black';
        //console.log('onmouseout');
    }
}