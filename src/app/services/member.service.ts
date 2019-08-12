import { HttpClient } from '@angular/common/http';
import { LoginModel } from './../interfaces/member.interface';
import { Injectable } from '@angular/core';
import { IMember, RegisterModel } from '../interfaces/member.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  //private memberItems: IMember[] = [];
  private memberLogin: IMember = JSON.parse(localStorage.getItem('memberLogin') || null);
  private address: string = 'http://localhost:3000/api/members';
  constructor(private httpClient:HttpClient) { }

  /** register */
  onRegister(value: RegisterModel){
    return new Observable((observe) => {

      this.httpClient.get<{count:number}>(`${this.address}/count?where[username]=${value.username}`).subscribe( res => {
        if(res.count != 0) return observe.error({message: 'this username already used.'});
        const model: IMember = {
          firstname: value.firstname,
          lastname: value.lastname,
          username: value.username,
          password: value.password
        }

        this.httpClient.post(this.address, model).subscribe(res => {
          observe.next(res);
        }, err => {
          observe.error(err);
        });
       

      });

    });
  }


  /** get member data by id */
  getMemberById(id){
    return this.httpClient.get<IMember>(`${this.address}/${id}`);
  }

/** uupdate member */
onUpdateMember(id:number, value:RegisterModel){
  //console.log(value);
  return this.httpClient.put<IMember>(`${this.address}/${id}`, value);

}

 /** delete user */
 onDelete(id:number){
  return  this.httpClient.delete<{count:number}>(`${this.address}/${id}`);
}


  /** show all memers */
  getMembers(){
    // return new Observable<IMember[]>(observe => {
    //   observe.next(this.memberItems);
    // });
    
    return this.httpClient.get<IMember[]>(this.address);
  }

  /** login */
  onLogin(value: LoginModel){
    return new Observable((observe) => {

      this.httpClient.get<IMember>(`${this.address}/findOne?filter[where][username]=${value.username}&filter[where][password]=${value.password}`).subscribe( res => {
        this.memberLogin = res;
        localStorage.setItem('memberLogin',JSON.stringify(this.memberLogin));
        observe.next(this.memberLogin);
      }, err => {
        observe.error({message:'incorrent username or password.'});
      });

    });
  }

  /** fetch user loggedin */
  getMemberLogin():Observable<IMember>{
    return new Observable<IMember>(observe => {
     
        observe.next(this.memberLogin);
     
    });
  }


  /** logout */
  onLogout(){
    return new Observable(observe => {
    
      this.memberLogin = null;
      localStorage.removeItem('memberLogin');
      observe.next('Logout completed.');
     
    });
  }

}
