import { IMember } from './../../../interfaces/member.interface';
import { MemberService } from './../../../services/member.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {

  memberItems : IMember[] = [];

  constructor(private memberService: MemberService) { 
    this.initialLoadData();
  }

  ngOnInit() {
  }

  /** delete user */
  onDeleteUser(user:IMember){
    if(!confirm('Are u sure to delete this user?')) return;
    this.memberService.onDelete(user.id).subscribe(res =>{
      this.initialLoadData();
    }, err => {
      alert(err.message);
    });
    //console.log(user);
  }

  /** load members from api */
  private initialLoadData(){
    this.memberService.getMembers().subscribe(members => {
      this.memberItems = members;
    });
  }

}
