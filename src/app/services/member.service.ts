import { Injectable } from '@angular/core';
import { IMember, RegisterModel } from '../interfaces/member.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private memberItems: IMember[] = [];

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
}
