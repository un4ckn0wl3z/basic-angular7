import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;

  constructor(private builder: FormBuilder) { this.createFormData(); }

  ngOnInit() {
  }

  /** register form data */
  private createFormData(){
    this.form = this.builder.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      username: ['',[Validators.required,Validators.pattern(/^[A-z0-9]{3,10}$/)]],
      password: ['',[Validators.required,Validators.pattern(/^[A-z0-9]{3,10}$/)]],
      confirm: [false]
    });
  }

  /** handle form data */
  private saveFormData(){
    this.form.get('firstname').markAsDirty();
    this.form.get('lastname').markAsDirty();
    this.form.get('username').markAsDirty();
    this.form.get('password').markAsDirty();
    
    if(this.form.invalid) return;

    console.log(this.form.value);
  }

}
