import { MemberService } from './../../../services/member.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-member',
  templateUrl: './form-member.component.html',
  styleUrls: ['./form-member.component.css']
})
export class FormMemberComponent implements OnInit {

  form:FormGroup;
  loadingFlag: boolean = false;
  id:number;

  constructor(private builder: FormBuilder, private memberService: MemberService,private router: Router,
    private activateRoute:ActivatedRoute) { 
    this.initFormData();
    this.initUpdateMember();
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
    if(isNaN(this.id)){
      this.memberService.onRegister( this.form.value).subscribe(res => {
        console.log(res);
        this.loadingFlag = false;
        //alert('Success add new user.');
        this.router.navigate(['/','manage-member']);
      }, err => {
        this.loadingFlag = false;
        alert(err.message);
      });
    }else{
      this.memberService.onUpdateMember(this.id, this.form.value).subscribe(res => {
        this.loadingFlag = false;
        this.router.navigate(['/','manage-member']);
      }, err => {
        this.loadingFlag = false;
        alert(err.message);
      });
    }

  }

  private initFormData(){
    this.form = this.builder.group({
      firstname: ['',[Validators.required]],
      lastname: ['',[Validators.required]],
      username: ['',[Validators.required,Validators.pattern(/^[A-z0-9]{3,10}$/)]],
      password: ['',[Validators.required,Validators.pattern(/^[A-z0-9]{3,10}$/)]],
    });
  }

  private initUpdateMember(){
    this.id =  parseInt(this.activateRoute.snapshot.params['id']);
    if(isNaN(this.id )) return;
    this.memberService.getMemberById(this.id).subscribe(res => {
      this.form.controls['firstname'].setValue(res.firstname);
      this.form.controls['lastname'].setValue(res.lastname);
      this.form.controls['username'].setValue(res.username);
      this.form.controls['password'].setValue(res.password);
      //console.log(res);
    }, err => {
      this.router.navigate(['/','manage-member']);
    });
  }

}
