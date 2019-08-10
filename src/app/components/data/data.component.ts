import { MemberService } from './../../services/member.service';
import { Service2Service } from './../../services/service2.service';
import { Service1Service } from './../../services/service1.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMember } from 'src/app/interfaces/member.interface';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers: [Service1Service]
})
export class DataComponent implements OnInit {

  memberItems: IMember[] = [];

 
  // name1: string;
  // name2: string;


  constructor(private service1: Service1Service ,private service2: Service2Service, private memberService: MemberService){

    // this.name1 = this.service1.name;
    // this.name2 = this.service2.name;
     this.memberService.getMembers().subscribe(memberData => {
       this.memberItems = memberData;
       //console.log(memberData);
     });
  }

  ngOnInit() {
  }

}
