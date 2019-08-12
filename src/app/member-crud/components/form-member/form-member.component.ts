import { MemberService } from './../../../services/member.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-member',
  templateUrl: './form-member.component.html',
  styleUrls: ['./form-member.component.css']
})
export class FormMemberComponent implements OnInit {

  form:FormGroup;
  loadingFlag: boolean = false;


  constructor(private builder: FormBuilder, private memberService: MemberService,private router: Router) { 
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
    this.loadingFlag = true;
    //console.log(this.form.value);
    this.memberService.onRegister( this.form.value).subscribe(res => {
      console.log(res);
      this.loadingFlag = false;
      alert('Success add new user.');
      this.router.navigate(['/','manage-member']);
    }, err => {
      this.loadingFlag = false;
      alert(err.message);
    });
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
