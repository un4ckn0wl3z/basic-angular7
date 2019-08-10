import { MemberService } from './../../services/member.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;
  loadingFlag: boolean = false;

  constructor(private builder: FormBuilder, private memberService: MemberService, private router:Router) {
     this.createFormData(); 
  }

  ngOnInit() {
  }

  /** register form data */
  private createFormData(){
    this.form = this.builder.group({
      firstname: ['Anuwat',[Validators.required]],
      lastname: ['Khongchuai',[Validators.required]],
      username: ['un4ck',[Validators.required,Validators.pattern(/^[A-z0-9]{3,10}$/)]],
      password: ['1234',[Validators.required,Validators.pattern(/^[A-z0-9]{3,10}$/)]],
      confirm: [true]
    });
  }

  /** handle form data */
  private saveFormData(){
    this.form.get('firstname').markAsDirty();
    this.form.get('lastname').markAsDirty();
    this.form.get('username').markAsDirty();
    this.form.get('password').markAsDirty();
    
    if(this.form.invalid) return;
    this.loadingFlag = true;
    this.memberService.onRegister(this.form.value).subscribe(memberData => {
      console.log(memberData);
      this.form.reset();
      this.loadingFlag = false;
      alert('Register completed.');
      this.router.navigate(['/','login']);
    }, error => {
      alert(error.message);
      this.loadingFlag = false;
    });
    //console.log(this.form.value);
  }

}
