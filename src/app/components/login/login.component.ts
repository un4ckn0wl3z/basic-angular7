import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;

  constructor(private builder:FormBuilder) { this.createFormData(); }

  ngOnInit() {

  }

  private onSubmit(){
    this.form.get('username').markAsDirty();
    this.form.get('password').markAsDirty();
    if(this.form.invalid) return;

    console.log(this.form.value)
  }

    /** register form data */
    private createFormData(){
      this.form = this.builder.group({
        username: ['',Validators.required],
        password: ['',Validators.required]
      });
    }
  

}
