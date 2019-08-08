import { Injectable } from '@angular/core';
import { ICom2formData } from '../interfaces/com2formdata.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  name: string = 'Data form service2';
  private formData: ICom2formData = new FormData();

  constructor() { }

  // save to object
  private onSaveFormData(formData: ICom2formData){
    this.formData.firstname = formData.firstname;
    this.formData.lastname = formData.lastname;
    this.formData.phones = formData.phones;
    this.formData.gender = formData.gender;
  }

  // save data from observe
  onObserveSaveData(formData: ICom2formData){
    return new Observable(observe => {
      setTimeout(() => {
        if(formData.firstname == 'Testing') return observe.error({message: 'Do not using "Testing" for your firstname.'});
        this.onSaveFormData(formData);
        observe.next();
      }, 1000);
    });
  }

  // fetch data via observable

  getObservFormData(){
    return new Observable<ICom2formData>(observ => {
      setTimeout(() => {
        observ.next(this.formData);
        //observ.error({message: 'server error'});
      }, 500);

    });
  }

}

export class FormData implements ICom2formData{
  firstname: string = 'blank';  
  gender: string = 'blank';  
  lastname: string = 'blank';  
  phones: string[] = ['blank'];


}
