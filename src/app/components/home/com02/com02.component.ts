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

  @Output('onHideMainComponent') onHideMainComponent = new EventEmitter<Boolean>();


  constructor(private formBuilder:FormBuilder, private service2:Service2Service){
    this.initForm();
  }

  /** Submit */
  onSubmit(){
    this.form.get('gender').markAsDirty();
    this.form.get('firstname').markAsDirty();
    this.form.get('lastname').markAsDirty();
    this.getPhonesForm.controls.forEach(control => {
      control.markAsDirty();
    });
    if(this.form.invalid) return;
    this.service2.onSaveFormData(this.form.value);

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
