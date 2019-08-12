import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberCrudRoutingModule } from './member-crud-routing.module';
import { ListMemberComponent } from './components/list-member/list-member.component';
import { SharesModule } from '../shares/shares.module';
import { FormMemberComponent } from './components/form-member/form-member.component';

@NgModule({
  declarations: [ListMemberComponent, FormMemberComponent],
  imports: [
    CommonModule,
    MemberCrudRoutingModule,
    SharesModule
  ]
})
export class MemberCrudModule { }
