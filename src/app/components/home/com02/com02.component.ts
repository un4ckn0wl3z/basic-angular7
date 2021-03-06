import { Service2Service } from './../../../services/service2.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-com02',
  templateUrl: './com02.component.html',
  styleUrls: ['./com02.component.css']
})
export class Com02Component {

  form:FormGroup;

  //@Output('onHideMainComponent') onHideMainComponent = new EventEmitter<Boolean>();
  /** loading... */
  loadingFlag: boolean = false;

  constructor(private formBuilder:FormBuilder, private service2:Service2Service){
    this.initForm();
  }

  /** Submit */
  async onSubmit(){
    this.form.get('gender').markAsDirty();
    this.form.get('firstname').markAsDirty();
    this.form.get('lastname').markAsDirty();
    this.getPhonesForm.controls.forEach(control => {
      control.markAsDirty();
    });
    if(this.form.invalid) return;
    this.loadingFlag = true;
    try {
      await this.service2.onPromiseSaveFormData(this.form.value);
      console.log("saved.");
    } catch (error) {
      alert(error.message);
    } finally {
      this.loadingFlag = false;
    }




    // this.loadingFlag = true;
    // this.service2.onPromiseSaveFormData(this.form.value).then(() =>{
    //   console.log("saved.");
    // }, error => {
    //   alert(error.message);
    //   console.log("error.");
    // }).finally(() =>{
    //   this.loadingFlag = false;
    // });


    

  }

  /** hide */
  onHide(){
    this.service2.setShowWorksop(false);
  }



  /** enumerate form array */
  get getPhonesForm(){
    const formArray = this.form.get('phones') as FormArray;
    return formArray;
  }

  onAddPhone(){
    const phoneArray = this.getPhonesForm;
    phoneArray.push(this.createPhoneControl());
  }

  onRemovePhone(){
    const phoneArray = this.getPhonesForm;
    if(phoneArray.length <= 1) return;
    phoneArray.removeAt(phoneArray.length - 1);
  }
  
  /** Init form */
  private initForm(){
    this.form =  this.formBuilder.group({
      gender: [null,[Validators.required]],
      firstname: [null,[Validators.required]],
      lastname: [null,[Validators.required]],
      phones: this.formBuilder.array([this.createPhoneControl()])
    });
  }

  /** create phone array */
  private createPhoneControl(){
    return this.formBuilder.control(null,[
      Validators.required,
      Validators.pattern(/^[0-9]{10}$/)
    ])
  }
}
