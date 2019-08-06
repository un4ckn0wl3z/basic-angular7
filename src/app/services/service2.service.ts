import { Injectable } from '@angular/core';
import { ICom2formData } from '../interfaces/com2formdata.interface';

@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  name: string = 'Data form service2';
  formData: ICom2formData = new FormData();

  constructor() { }

  // save to object
  onSaveFormData(formData: ICom2formData){
    this.formData.firstname = formData.firstname;
    this.formData.lastname = formData.lastname;
    this.formData.phones = formData.phones;
    this.formData.gender = formData.gender;
  }

}

export class FormData implements ICom2formData{
  firstname: string = 'blank';  
  gender: string = 'blank';  
  lastname: string = 'blank';  
  phones: string[] = ['blank'];


}
