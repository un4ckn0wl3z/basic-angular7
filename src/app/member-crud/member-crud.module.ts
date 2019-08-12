import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberCrudRoutingModule } from './member-crud-routing.module';
import { ListMemberComponent } from './components/list-member/list-member.component';

@NgModule({
  declarations: [ListMemberComponent],
  imports: [
    CommonModule,
    MemberCrudRoutingModule
  ]
})
export class MemberCrudModule { }
