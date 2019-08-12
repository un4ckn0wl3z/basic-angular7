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

  /** load members from api */
  private initialLoadData(){
    this.memberService.getMembers().subscribe(members => {
      this.memberItems = members;
    });
  }

}
