import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-member',
  templateUrl: './form-member.component.html',
  styleUrls: ['./form-member.component.css']
})
export class FormMemberComponent implements OnInit {

  form:FormGroup;

  constructor(private builder: FormBuilder) { 
    this.initFormData();
  }

  ngOnInit() {
  }

  /** save */
  onSubmit(){
    this.form.get('firstname').markAsDirty();
    this.form.get('lastname').markAsDirty();
    this.form.get('username').markAsDirty();
    this.form.get('password').markAsDirty();
    if(this.form.invalid) return alert('Somthing wrong.');
    //console.log(this.form.value);
  }

  private initFormData(){
    this.form = this.builder.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      username: ['',[Validators.required,Validators.pattern(/^[A-z0-9]{3,10}$/)]],
      password: ['',[Validators.required,Validators.pattern(/^[A-z0-9]{3,10}$/)]],
    });
  }

}
