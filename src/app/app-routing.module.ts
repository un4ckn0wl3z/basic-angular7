import { DataComponent } from './components/data/data.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ActivateGuard } from './guards/activate.guard';
import { DeactivateGuard } from './guards/deactivate.guard';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'register',component: RegisterComponent},
  {path:'login',component: LoginComponent},
  {path:'profile',component: ProfileComponent, canActivate: [ActivateGuard], canDeactivate: [DeactivateGuard]},
  {path:'data',component: DataComponent},

  {path:'**',redirectTo: '',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
