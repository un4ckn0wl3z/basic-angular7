import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberService } from '../services/member.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements CanActivate {

  constructor(private memberService:MemberService){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable(observe => {
      this.memberService.getMemberLogin().subscribe(memberLogin => {
        //console.log(memberLogin);
        if(memberLogin) return observe.next(true);
        observe.next(false);
      });
    });
  }
}
