import { LoginModel } from './../interfaces/member.interface';
import { Injectable } from '@angular/core';
import { IMember, RegisterModel } from '../interfaces/member.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private memberItems: IMember[] = [];
  private memberLogin: IMember;

  constructor() { }

  /** register */
  onRegister(value: RegisterModel){
    return new Observable((observe) => {
      setTimeout(()=>{
        if( this.memberItems.find(m => m.username == value.username) ) return observe.error({message: 'this username already used.'});
        const model: IMember = {
          id: Math.random(),
          firstname: value.firstname,
          lastname: value.lastname,
          username: value.username,
          password: value.password
        }
        this.memberItems.push(model);
        observe.next(model);
        //console.log(value);
      },2000);
    });
  }

  /** show all memers */
  getMembers(){
    return new Observable<IMember[]>(observe => {
      observe.next(this.memberItems);
    });
  }

  /** login */
  onLogin(value: LoginModel){
    return new Observable(obseve => {
      setTimeout(()=>{
        const memberLogin = this.memberItems.find(member => {
          return member.username == value.username && member.password == value.password;
        });
        if(!memberLogin){
          return obseve.error({message: 'incorrect usename or password.'});
        }
        this.memberLogin = memberLogin;
        obseve.next(this.memberLogin);
        console.log(value);
      },1000);
    })
  }

  /** fetch user loggedin */
  getMemberLogin():Observable<IMember>{
    return new Observable<IMember>(observe => {
      setTimeout(() => {
        observe.next(this.memberLogin);
      }); 
    });
  }


  /** logout */
  onLogout(){
    return new Observable(observe => {
     setTimeout(() => {
       this.memberLogin = null;
      observe.next('Logout completed.');
     });
    });
  }

}
