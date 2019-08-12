import { FormMemberComponent } from './components/form-member/form-member.component';
import { ListMemberComponent } from './components/list-member/list-member.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component: ListMemberComponent}
  {path:'create',component: FormMemberComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberCrudRoutingModule { }
