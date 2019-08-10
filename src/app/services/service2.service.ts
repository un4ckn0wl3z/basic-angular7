import { Injectable } from '@angular/core';
import { ICom2formData } from '../interfaces/com2formdata.interface';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Service2Service {

  name: string = 'Data form service2';
  private formData: ICom2formData = new FormData();
  private isShowWorkshop : boolean = false;
  public isShowWorkshopSubject = new Subject<boolean>();

  constructor() { }

  /** */
  getShowWorksop(): boolean{
    return this.isShowWorkshop;
  }

  setShowWorksop(flag:boolean): void{
    this.isShowWorkshop = flag;
    this.isShowWorkshopSubject.next(this.isShowWorkshop);
  }

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

  /** get data via promise */
  getPromiseFormData(){
    return new Promise<ICom2formData>((resolve, reject) => {
      resolve(this.formData);
      //reject({message:'Server error...'});
    });
  }

  /** sagve data via promise */
  onPromiseSaveFormData(formData: ICom2formData){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(formData.firstname == 'Testing') return reject({message: 'Do not using "Testing" for your firstname.'});
        this.onSaveFormData(formData);
        resolve();
      },2000);
    });
  }


}

export class FormData implements ICom2formData{
  firstname: string = 'blank';  
  gender: string = 'blank';  
  lastname: string = 'blank';  
  phones: string[] = ['blank'];


}
