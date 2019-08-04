import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ActivateGuard implements CanActivate {


    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, 
    state: import("@angular/router").RouterStateSnapshot): boolean | import("rxjs").Observable<boolean> | Promise<boolean> {
       
        console.log(route.params);
        if(route.params['allow']) return true;
        return false;
       // console.log(state);
        // return false;
    }

}