import { MemberService } from './../../services/member.service';
import { Component, OnInit } from '@angular/core';
import { ICanDeActivate } from 'src/app/guards/deactivate.guard';
import { IMember } from 'src/app/interfaces/member.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent {


    member: IMember;

    constructor(private memberService: MemberService, private router: Router) { 
        this.loadMemberData();
    }

    /** load user data */
    private loadMemberData(){
        this.memberService.getMemberLogin().subscribe(data => {
            this.member = data;
        });
    }


    /** log out */
    onLogout(){
       this.memberService.onLogout().subscribe(data => {
           alert(data);
           this.router.navigate(['/']);
       });
    }

}
