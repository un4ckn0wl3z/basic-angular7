import { MemberService } from './../../services/member.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  loadingFlag: boolean = false;
  constructor(private builder:FormBuilder, private memberService:MemberService, private router: Router) { this.createFormData(); }

  ngOnInit() {

  }

  private onSubmit(){
    this.form.get('username').markAsDirty();
    this.form.get('password').markAsDirty();
    if(this.form.invalid) return;
    this.loadingFlag = true;
    this.memberService.onLogin(this.form.value).subscribe((data) => {
      console.log(data);
      this.loadingFlag = false;
      this.router.navigate(['/','profile']);
    },error => {
      this.loadingFlag = false;
      alert(error.message);
    });
    //console.log(this.form.value)
  }

    /** register form data */
    private createFormData(){
      this.form = this.builder.group({
        username: ['',Validators.required],
        password: ['',Validators.required]
      });
    }
  

}
