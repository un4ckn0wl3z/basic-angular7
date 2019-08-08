import { AbstractControl, FormControl } from '@angular/forms';
import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appValidate]'
})
export class ValidateDirective implements OnChanges {

  constructor() { 
   
  }

  errorMessage = {
    required: 'This field is required',
    pattern: 'wrong pattern "{0}"',
    error: 'My test custom validate'

  }

  @Input('appValidate') control:AbstractControl;

  @HostBinding('class') class:string = 'invalid-feedback';
  @HostBinding('innerText') text:string;


  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
   // console.log("ngOnChanges>> "+this.control.value);
    if(!this.control) return;
     // console.log("ngOnChanges 2>> "+this.control.value);
      this.text = this.getErrorMessage();
      this.control.valueChanges.subscribe(() => {
        this.text = this.getErrorMessage();
      });
    



  }  // check validate message
private getErrorMessage(){
  const control = this.control;
  //console.log("AAA")
  if(control && control.invalid){
    const error = Object.keys(control.errors) ;
    //console.log(this.errorMessage[error[0]]);
    if(error[0] == 'pattern'){
      return this.errorMessage[error[0]].replace("{0}",control.errors['pattern']['requiredPattern']);
    }else if(error[0] == 'msg'){
      return control.errors['msg'];
    }
    return this.errorMessage[error[0]];
  }
}

}
